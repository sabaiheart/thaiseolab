import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

export async function POST(request: Request) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // เช็ค credits
  const { data: creditRow } = await supabase
    .from('credits').select('balance').eq('user_id', user.id).single()
  if (!creditRow || creditRow.balance < 10)
    return NextResponse.json({ error: 'credits ไม่พอ' }, { status: 402 })

  const { url } = await request.json()
  if (!url) return NextResponse.json({ error: 'ไม่มี URL' }, { status: 400 })

  const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&strategy=mobile&category=performance&category=seo&category=accessibility&category=best-practices`

  const res = await fetch(apiUrl)
  if (!res.ok) return NextResponse.json({ error: 'PageSpeed API error' }, { status: 500 })
  const psi = await res.json()

  const cats = psi.lighthouseResult.categories
  const audits = psi.lighthouseResult.audits

  const score = (key: string) => Math.round((cats[key]?.score ?? 0) * 100)

  // Core Web Vitals
  const lcp = audits['largest-contentful-paint']?.numericValue
    ? Math.round(audits['largest-contentful-paint'].numericValue) / 1000
    : 0
  const cls = audits['cumulative-layout-shift']?.numericValue ?? 0
  const fid = audits['total-blocking-time']?.numericValue
    ? Math.round(audits['total-blocking-time'].numericValue)
    : 0

  // Issues
  const issues: { type: 'error' | 'warning' | 'passed'; title: string; description: string }[] = []
  const checkAudits = [
    'meta-description', 'document-title', 'link-text', 'crawlable-anchors',
    'robots-txt', 'image-alt', 'uses-optimized-images', 'render-blocking-resources',
    'unused-css-rules', 'uses-responsive-images', 'offscreen-images',
  ]
  for (const key of checkAudits) {
    const a = audits[key]
    if (!a) continue
    const s = a.score ?? 1
    issues.push({
      type: s === 1 ? 'passed' : s >= 0.5 ? 'warning' : 'error',
      title: a.title,
      description: a.displayValue || a.description?.slice(0, 100) || '',
    })
  }

  // หัก credits
  await supabase.from('credits')
    .update({ balance: creditRow.balance - 10 })
    .eq('user_id', user.id)

  await supabase.from('transactions').insert({
    user_id: user.id,
    type: 'usage',
    amount: -10,
    description: `Site Audit — ${url}`,
  })

  return NextResponse.json({
    performance: score('performance'),
    seo: score('seo'),
    accessibility: score('accessibility'),
    bestPractices: score('best-practices'),
    lcp, cls, fid,
    issues,
  })
}