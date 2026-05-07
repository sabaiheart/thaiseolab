
import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

export const maxDuration = 60

export async function POST(request: Request) {
  const { url, performance, seo, accessibility, bestPractices, lcp, cls, fid, issues } = await request.json()

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const errorIssues = issues.filter((i: any) => i.type === 'error').map((i: any) => i.title).join(', ')
  const warningIssues = issues.filter((i: any) => i.type === 'warning').map((i: any) => i.title).join(', ')

  const aiRes = await anthropic.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 2000,
    messages: [{
      role: 'user',
      content: `คุณเป็น SEO expert ภาษาไทย วิเคราะห์ผล Site Audit นี้และให้คำแนะนำเป็นภาษาไทยที่เข้าใจง่าย:

เว็บไซต์: ${url}
Performance: ${performance}/100
SEO: ${seo}/100
Accessibility: ${accessibility}/100
Best Practices: ${bestPractices}/100
LCP: ${lcp}s | CLS: ${cls} | FID: ${fid}ms
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
  return NextResponse.json({ aiAnalysis })
}