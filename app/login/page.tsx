'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit() {
    setLoading(true)
    setError('')
    setMessage('')
    const supabase = createClient()

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) setError(error.message)
      else setMessage('สมัครสำเร็จ! เช็ค email เพื่อยืนยัน')
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) setError('email หรือ password ไม่ถูกต้อง')
      else window.location.href = '/dashboard'
    }
    setLoading(false)
  }

  const input: React.CSSProperties = {
    width: '100%', padding: '10px 14px',
    background: '#1a1a1a', border: '1px solid #2e2e2e',
    borderRadius: 6, color: '#F0EFE8', fontSize: 14,
    fontFamily: 'sans-serif', outline: 'none', marginBottom: 12,
  }

  return (
    <div style={{ background: '#090909', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 400, padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontFamily: 'monospace', fontSize: 18, fontWeight: 700, color: '#F0EFE8' }}>
            thaise<span style={{ color: '#E8190C' }}>&lt;&gt;</span>lab
          </p>
          <p style={{ fontSize: 13, color: '#666', marginTop: 6 }}>SEO Tools · Pay As You Go</p>
        </div>
        <div style={{ background: '#111', border: '1px solid #222', borderRadius: 10, padding: 32 }}>
          <p style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, color: '#E8190C', marginBottom: 20 }}>
            {isSignUp ? 'SIGN UP' : 'SIGN IN'}
          </p>
          <input style={input} type="email" placeholder="อีเมล" value={email} onChange={e => setEmail(e.target.value)} />
          <input style={input} type="password" placeholder="รหัสผ่าน" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
          {error && <p style={{ fontSize: 13, color: '#E8190C', marginBottom: 12 }}>{error}</p>}
          {message && <p style={{ fontSize: 13, color: '#22C55E', marginBottom: 12 }}>{message}</p>}
          <button onClick={handleSubmit} disabled={loading} style={{
            width: '100%', padding: '12px', background: loading ? '#444' : '#E8190C',
            border: 'none', borderRadius: 4, color: '#fff', fontSize: 14, fontWeight: 600,
            cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'sans-serif', marginBottom: 16,
          }}>
            {loading ? 'กำลังโหลด...' : isSignUp ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ'}
          </button>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#666' }}>
            {isSignUp ? 'มีบัญชีแล้ว? ' : 'ยังไม่มีบัญชี? '}
            <span onClick={() => setIsSignUp(!isSignUp)} style={{ color: '#E8190C', cursor: 'pointer' }}>
              {isSignUp ? 'เข้าสู่ระบบ' : 'สมัครฟรี'}
            </span>
          </p>
        </div>
        <p style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: 11, color: '#444', marginTop: 20 }}>
          สมัครฟรี รับ 50 credits ทันที · ไม่ต้องใส่บัตรเครดิต
        </p>
      </div>
    </div>
  )
}