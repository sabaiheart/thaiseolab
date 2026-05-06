'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'

interface AuditResult {
  performance: number
  seo: number
  accessibility: number
  bestPractices: number
  lcp: number
  cls: number
  fid: number
  issues: { type: 'error' | 'warning' | 'passed'; title: string; description: string }[]
  aiAnalysis?: string
}

export default function SiteAudit() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AuditResult | null>(null)
  const [error, setError] = useState('')
  const [credits, setCredits] = useState<number | null>(null)

  useEffect(() => {
    const supabase = createClient()
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { window.location.href = '/login'; return }
      const { data } = await supabase.from('credits').select('balance').eq('user_id', user.id).single()
      setCredits(data?.balance ?? 0)
    }
    load()
  }, [])

  async function runAudit() {
    if (!url) return
    if ((credits ?? 0) < 10) { setError('credits ไม่พอ — ต้องการ 10 credits'); return }
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch('/api/site-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'เกิดข้อผิดพลาด')
      setResult(data)
      setCredits(c => (c ?? 0) - 10)
    } catch (e: any) {
      setError(e.message)
    }
    setLoading(false)
  }

  const scoreColor = (s: number) => s >= 90 ? '#22C55E' : s >= 50 ? '#F59E0B' : '#E8190C'

  return (
    <div style={{ background: '#090909', minHeight: '100vh', color: '#F0EFE8', fontFamily: 'sans-serif', padding: '40px 44px' }}>
      
      {/* NAV */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
        <a href="/dashboard" style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700, textDecoration: 'none', color: '#F0EFE8' }}>
          thaise<span style={{ color: '#E8190C' }}>&lt;&gt;</span>lab
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#E8190C' }}>{credits?.toLocaleString()} credits</span>
          <a href="/dashboard" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>← dashboard</a>
        </div>
      </div>

      {/* HEADER */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 3, color: '#E8190C', marginBottom: 8 }}>TOOL — SITE AUDIT</div>
        <h1 style={{ fontFamily: 'monospace', fontSize: 40, fontWeight: 700, marginBottom: 8 }}>Site Audit</h1>
        <p style={{ color: '#666', fontSize: 14 }}>วิเคราะห์ performance, SEO, accessibility — ใช้ 10 credits / 1 domain</p>
      </div>

      {/* INPUT */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 48, maxWidth: 680 }}>
        <input
          value={url}
          onChange={e => setUrl(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && runAudit()}
          placeholder="https://example.com"
          style={{
            flex: 1, background: '#111', border: '1px solid #333', borderRadius: 6,
            color: '#F0EFE8', fontSize: 14, padding: '12px 16px', fontFamily: 'monospace',
            outline: 'none'
          }}
        />
        <button
          onClick={runAudit}
          disabled={loading || !url}
          style={{
            background: loading ? '#333' : '#E8190C', color: '#fff',
            border: 'none', borderRadius: 6, padding: '12px 24px',
            fontSize: 14, fontWeight: 500, cursor: loading ? 'not-allowed' : 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          {loading ? 'กำลังวิเคราะห์...' : 'Audit — 10 credits'}
        </button>
      </div>

      {error && (
        <div style={{ background: 'rgba(232,25,12,0.1)', border: '1px solid rgba(232,25,12,0.3)', borderRadius: 6, padding: '12px 16px', marginBottom: 24, color: '#E8190C', fontSize: 13, maxWidth: 680 }}>
          {error}
        </div>
      )}

      {loading && (
        <div style={{ maxWidth: 680 }}>
          {['กำลัง crawl เว็บไซต์...', 'วิเคราะห์ Core Web Vitals...', 'ตรวจสอบ SEO issues...'].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8190C', animation: 'pulse 1s infinite' }} />
              <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#666' }}>{t}</span>
            </div>
          ))}
        </div>
      )}

      {result && (
        <div style={{ maxWidth: 680 }}>
          {/* SCORES */}
          <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 3, color: '#666', marginBottom: 16 }}>SCORES</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
            {[
              { label: 'Performance', value: result.performance },
              { label: 'SEO', value: result.seo },
              { label: 'Accessibility', value: result.accessibility },
              { label: 'Best Practices', value: result.bestPractices },
            ].map(s => (
              <div key={s.label} style={{ background: '#111', border: '1px solid #222', borderRadius: 8, padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'monospace', fontSize: 36, fontWeight: 700, color: scoreColor(s.value), marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: '#666' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CORE WEB VITALS */}
          <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 3, color: '#666', marginBottom: 16 }}>CORE WEB VITALS</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 32 }}>
            {[
              { label: 'LCP', value: `${result.lcp}s`, good: result.lcp <= 2.5 },
              { label: 'CLS', value: result.cls.toFixed(3), good: result.cls <= 0.1 },
              { label: 'FID', value: `${result.fid}ms`, good: result.fid <= 100 },
            ].map(v => (
              <div key={v.label} style={{ background: '#111', border: `1px solid ${v.good ? 'rgba(34,197,94,0.3)' : 'rgba(232,25,12,0.3)'}`, borderRadius: 8, padding: '16px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, color: '#666', marginBottom: 8 }}>{v.label}</div>
                <div style={{ fontFamily: 'monospace', fontSize: 24, fontWeight: 700, color: v.good ? '#22C55E' : '#E8190C' }}>{v.value}</div>
                <div style={{ fontSize: 11, color: v.good ? '#22C55E' : '#E8190C', marginTop: 4 }}>{v.good ? '✓ ผ่าน' : '✗ ต้องแก้ไข'}</div>
              </div>
            ))}
          </div>

          {/* ISSUES */}
          <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 3, color: '#666', marginBottom: 16 }}>ISSUES FOUND</div>
          <div style={{ background: '#111', border: '1px solid #222', borderRadius: 8, overflow: 'hidden' }}>
            {result.issues.map((issue, i) => (
              <div key={i} style={{ padding: '14px 16px', borderBottom: '1px solid #1a1a1a', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 12, marginTop: 1 }}>
                  {issue.type === 'error' ? '🔴' : issue.type === 'warning' ? '🟡' : '🟢'}
                </span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>{issue.title}</div>
                  <div style={{ fontSize: 12, color: '#666' }}>{issue.description}</div>
                </div>
              </div>
            ))}
          </div>{result.aiAnalysis && (
            <div style={{ marginTop: 32 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 3, color: '#666', marginBottom: 16 }}>AI ANALYSIS — ภาษาไทย</div>
              <div style={{ background: '#111', border: '1px solid rgba(232,25,12,0.2)', borderRadius: 8, padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#E8190C' }} />
                  <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#E8190C' }}>Claude AI · SEO Expert</span>
                </div>
                <div style={{ fontSize: 14, color: '#ccc', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
                  {result.aiAnalysis}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}