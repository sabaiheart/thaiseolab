import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Webhook signature failed' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const user_id = session.metadata?.user_id
    const credits = parseInt(session.metadata?.credits || '0')

    if (!user_id || !credits) {
      return NextResponse.json({ error: 'Missing metadata' }, { status: 400 })
    }

    const { data: current } = await supabase
      .from('credits').select('balance').eq('user_id', user_id).single()

    const newBalance = (current?.balance || 0) + credits

    await supabase.from('credits')
      .update({ balance: newBalance, updated_at: new Date().toISOString() })
      .eq('user_id', user_id)

    await supabase.from('transactions').insert({
      user_id,
      type: 'topup',
      amount: credits,
      description: `Top-up ${credits} credits`,
      stripe_payment_id: session.payment_intent as string,
    })
  }

  return NextResponse.json({ received: true })
}