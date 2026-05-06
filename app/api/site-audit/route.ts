import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import Anthropic from '@anthropic-ai/sdk'

export async function POST(request: Request) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

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

  const lcp = audits['largest-contentful-paint']?.numericValue
    ? Math.round(audits['largest-contentful-paint'].numericValue) / 1000 : 0
  const cls = audits['cumulative-layout-shift']?.numericValue ?? 0
  const fid = audits['total-blocking-time']?.numericValue
    ? Math.round(audits['total-blocking-time'].numericValue) : 0

  const checkAudits = [
    'meta-description', 'document-title', 'link-text', 'crawlable-anchors',
    'robots-txt', 'image-alt', 'uses-optimized-images', 'render-blocking-resources',
    'unused-css-rules', 'uses-responsive-images', 'offscreen-images',
  ]
  const issues: { type: 'error' | 'warning' | 'passed'; title: string; description: string }[] = []
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

  // AI Analysis ภาษาไทย
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const errorIssues = issues.filter(i => i.type === 'error').map(i => i.title).join(', ')
  const warningIssues = issues.filter(i => i.type === 'warning').map(i => i.title).join(', ')

  const aiRes = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1000,
    messages: [{
      role: 'user',
      content: `คุณเป็น SEO expert ภาษาไทย วิเคราะห์ผล Site Audit นี้และให้คำแนะนำเป็นภาษาไทยที่เข้าใจง่าย:

เว็บไซต์: ${url}
Performance: ${score('performance')}/100
SEO: ${score('seo')}/100  
Accessibility: ${score('accessibility')}/100
Best Practices: ${score('best-practices')}/100
LCP: ${lcp}s | CLS: ${cls.toFixed(3)} | FID: ${fid}ms

ปัญหาหลัก: ${errorIssues || 'ไม่มี'}
ปัญหารอง: ${warningIssues || 'ไม่มี'}

กรุณา:
1. สรุปภาพรวมของเว็บไซต์ (2-3 ประโยค)
2. ปัญหาที่ต้องแก้ด่วนที่สุด (top 3) พร้อมวิธีแก้ไขง่ายๆ
3. สิ่งที่ทำได้ดีแล้ว

ตอบเป็นภาษาไทยที่เข้าใจง่าย ไม่ต้องใช้ศัพท์เทคนิคมาก`
    }]
  })

  const aiAnalysis = aiRes.content[0].type === 'text' ? aiRes.content[0].text : ''

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
    aiAnalysis,
  })
}