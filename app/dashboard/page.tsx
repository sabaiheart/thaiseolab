'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'

export default function Dashboard() {
  const [balance, setBalance] = useState<number | null>(null)
  const [transactions, setTransactions] = useState<any[]>([])
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { window.location.href = '/login'; return }
      setUser(user)
      const { data: credits } = await supabase
        .from('credits').select('balance').eq('user_id', user.id).single()
      setBalance(credits?.balance ?? 0)
      const { data: txns } = await supabase
        .from('transactions').select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(10)
      setTransactions(txns || [])
      setLoading(false)
    }
    load()
  }, [])

  async function topup(pack: string) {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pack })
    })
    const { url } = await res.json()
    window.location.href = url
  }

  async function logout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  if (loading) return (
    <div style={{ background: '#090909', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#666', fontFamily: 'monospace' }}>loading...</p>
    </div>
  )

  return (
    <div style={{ background: '#090909', minHeight: '100vh', color: '#F0EFE8', fontFamily: 'sans-serif', padding: '40px 44px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
        <p style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700 }}>
          thaise<span style={{ color: '#E8190C' }}>&lt;&gt;</span>lab
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <p style={{ fontSize: 13, color: '#666' }}>{user?.email}</p>
          <button onClick={logout} style={{ background: 'none', border: '1px solid #333', borderRadius: 4, color: '#666', fontSize: 12, padding: '6px 12px', cursor: 'pointer' }}>
            ออกจากระบบ
          </button>
        </div>
      </div>

      <div style={{ background: '#111', border: '1px solid #222', borderRadius: 10, padding: 28, marginBottom: 24, maxWidth: 420 }}>
        <p style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, color: '#666', marginBottom: 12 }}>CREDIT BALANCE</p>
        <p style={{ fontFamily: 'monospace', fontSize: 52, fontWeight: 700, color: '#E8190C', lineHeight: 1, marginBottom: 6 }}>
          {balance?.toLocaleString()}
        </p>
        <p style={{ fontSize: 13, color: '#666' }}>credits คงเหลือ</p>
      </div>

      <p style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, color: '#666', marginBottom: 16 }}>TOP-UP CREDITS</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, maxWidth: 680, marginBottom: 48 }}>
        {[
          { pack: 'starter', name: 'Starter', price: '฿199', credits: '500 credits', rate: '฿0.40/credit' },
          { pack: 'growth', name: 'Growth', price: '฿590', credits: '2,000 credits', rate: '฿0.30/credit' },
          { pack: 'agency', name: 'Agency', price: '฿1,490', credits: '6,000 credits', rate: '฿0.25/credit' },
        ].map(p => (
          <div key={p.pack} style={{ background: '#111', border: p.pack === 'growth' ? '1px solid #E8190C' : '1px solid #222', borderRadius: 8, padding: 20 }}>
            <p style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, color: '#666', marginBottom: 8 }}>{p.name.toUpperCase()}</p>
            <p style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>{p.price}</p>
            <p style={{ fontSize: 13, color: '#888', marginBottom: 4 }}>{p.credits}</p>
            <p style={{ fontFamily: 'monospace', fontSize: 10, color: '#E8190C', marginBottom: 16 }}>{p.rate}</p>
            <button onClick={() => topup(p.pack)} style={{
              width: '100%', padding: '10px', borderRadius: 4,
              background: p.pack === 'growth' ? '#E8190C' : 'transparent',
              border: p.pack === 'growth' ? 'none' : '1px solid #333',
              color: '#fff', fontSize: 13, fontWeight: 500, cursor: 'pointer',
            }}>
              เติม credits
            </button>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, color: '#666', marginBottom: 16 }}>RECENT ACTIVITY</p>
      <div style={{ background: '#111', border: '1px solid #222', borderRadius: 8, overflow: 'hidden', maxWidth: 680 }}>
        {transactions.length === 0 ? (
          <p style={{ padding: 20, color: '#444', fontSize: 13, fontFamily: 'monospace' }}>ยังไม่มี activity</p>
        ) : transactions.map(t => (
          <div key={t.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #1a1a1a' }}>
            <div>
              <p style={{ fontSize: 13, color: '#ccc' }}>{t.description}</p>
              <p style={{ fontSize: 11, color: '#444', fontFamily: 'monospace', marginTop: 2 }}>
                {new Date(t.created_at).toLocaleDateString('th-TH')}
              </p>
            </div>
            <p style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: t.type === 'topup' ? '#22C55E' : '#E8190C' }}>
              {t.type === 'topup' ? '+' : ''}{t.amount.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}