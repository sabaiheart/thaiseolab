import { createServerSupabaseClient } from '@/lib/supabase-server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await supabase
    .from('credits').select('balance').eq('user_id', user.id).single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ balance: data.balance })
}

export async function POST(request: Request) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { amount, tool_name, description } = await request.json()

  const { data: credits } = await supabase
    .from('credits').select('balance').eq('user_id', user.id).single()

  if (!credits || credits.balance < amount) {
    return NextResponse.json({ error: 'Insufficient credits' }, { status: 402 })
  }

  await supabase.from('credits')
    .update({ balance: credits.balance - amount, updated_at: new Date().toISOString() })
    .eq('user_id', user.id)

  await supabase.from('transactions').insert({
    user_id: user.id, type: 'deduct', amount: -amount,
    description: description || tool_name,
  })

  await supabase.from('tool_usage').insert({
    user_id: user.id, tool_name, credits_used: amount,
  })

  return NextResponse.json({ success: true, balance: credits.balance - amount })
}