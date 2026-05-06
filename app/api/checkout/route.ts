import Stripe from 'stripe'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import { NextResponse } from 'next/server'

const PACKS = {
  starter: { price: 19900, credits: 500, name: 'Starter Pack — 500 credits' },
  growth:  { price: 59000, credits: 2000, name: 'Growth Pack — 2,000 credits' },
  agency:  { price: 149000, credits: 6000, name: 'Agency Pack — 6,000 credits' },
}

export async function POST(request: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { pack } = await request.json()
  const selected = PACKS[pack as keyof typeof PACKS]
  if (!selected) return NextResponse.json({ error: 'Invalid pack' }, { status: 400 })
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'promptpay'],
    line_items: [{
      price_data: {
        currency: 'thb',
        product_data: { name: selected.name },
        unit_amount: selected.price,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    metadata: {
      user_id: user.id,
      credits: selected.credits.toString(),
      pack,
    },
  })
  return NextResponse.json({ url: session.url })
}
