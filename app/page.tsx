'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [rankPos, setRankPos] = useState([1, 2, 4, 7, 12])

  useEffect(() => {
    const interval = setInterval(() => {
      setRankPos(prev => prev.map(p => Math.max(1, p + (Math.random() > 0.6 ? -1 : 0))))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const keywords = ['รับทำ SEO ราคาถูก', 'SEO tool ภาษาไทย', 'keyword research ไทย', 'local SEO กรุงเทพ', 'site audit ฟรี']
  const rankColor = (p: number) => p <= 3 ? '#22C55E' : p <= 7 ? '#F59E0B' : '#E8190C'

  return (
    <main style={{ background: '#090909', minHeight: '100vh', color: '#F0EFE8', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes gridMove { from{background-position:0 0} to{background-position:60px 60px} }
        @keyframes rankUp { from{color:#E8190C} to{color:#22C55E} }
        .float1 { animation: float 4s ease-in-out infinite; }
        .float2 { animation: float2 4s 1.5s ease-in-out infinite; }
        .fade1 { animation: fadeUp 0.7s ease forwards; }
        .fade2 { animation: fadeUp 0.7s 0.15s ease forwards; opacity:0; }
        .fade3 { animation: fadeUp 0.7s 0.3s ease forwards; opacity:0; }
        a:hover { opacity:0.8; }
      `}</style>

      {/* GRID BG */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', top: '-10%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(232,25,12,0.06) 0%,transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', background: 'rgba(9,9,9,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 700 }}>thaise<span style={{ color: '#E8190C' }}>&lt;&gt;</span>lab<span style={{ color: '#444', fontSize: 11 }}>.com</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {[['เครื่องมือ', '#tools'], ['ราคา', '#pricing'], ['เปรียบเทียบ', '#compare'], ['FAQ', '#faq']].map(([t, h]) => (
            <a key={t} href={h} style={{ fontSize: 13, color: '#666', textDecoration: 'none' }}>{t}</a>
          ))}
          <Link href="/login" style={{ background: '#E8190C', color: '#fff', padding: '7px 18px', borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>ทดลองฟรี</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 48px 80px', position: 'relative', zIndex: 1 }}>
        <div style={{ flex: 1, maxWidth: 560 }}>
          <div className="fade1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(232,25,12,0.3)', padding: '5px 12px', borderRadius: 2, marginBottom: 24, fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, color: '#E8190C' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8190C', display: 'inline-block' }} />SEO TOOLS PLATFORM · TH
          </div>
          <h1 className="fade2" style={{ fontFamily: 'monospace', fontSize: 'clamp(52px,7vw,88px)', lineHeight: 0.92, fontWeight: 800, letterSpacing: -1, marginBottom: 24 }}>
            TOOLS<br />NOT<br /><span style={{ color: '#E8190C' }}>BILLS.</span>
          </h1>
          <p className="fade3" style={{ fontSize: 15, color: '#666', lineHeight: 1.8, maxWidth: 400, marginBottom: 32 }}>
            เครื่องมือ SEO ระดับ Pro ในภาษาไทย<br />
            <strong style={{ color: '#F0EFE8' }}>จ่ายเท่าที่ใช้จริง</strong> — ไม่มี subscription ไม่มี lock-in
          </p>
          <div className="fade3" style={{ display: 'flex', gap: 12, marginBottom: 48 }}>
            <Link href="/login" style={{ background: '#E8190C', color: '#fff', padding: '11px 24px', borderRadius: 4, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>เริ่มฟรี 50 credits →</Link>
            <a href="#tools" style={{ background: 'transparent', color: '#777', padding: '11px 20px', borderRadius: 4, fontSize: 14, border: '1px solid #2a2a2a', textDecoration: 'none' }}>ดูเครื่องมือ</a>
          </div>
          <div className="fade3" style={{ display: 'flex', gap: 40 }}>
            {[{ n: '฿0', l: 'ค่า subscription' }, { n: '15+', l: 'เครื่องมือ SEO' }, { n: '฿.25', l: 'ราคา/credit' }].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: 'monospace', fontSize: 24, fontWeight: 700, color: s.n.includes('฿') ? '#E8190C' : '#F0EFE8' }}>{s.n}</div>
                <div style={{ fontSize: 11, color: '#555', marginTop: 3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FLOATING CARDS */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12, paddingLeft: 40 }}>
          <div className="float1" style={{ background: '#111', border: '1px solid #222', borderRadius: 12, padding: '20px', width: 280, boxShadow: '0 0 40px rgba(0,0,0,0.5)' }}>
            <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 2, color: '#555', marginBottom: 14 }}>KEYWORD RANKINGS</div>
            {keywords.map((kw, i) => (
              <div key={kw} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', background: '#0d0d0d', borderRadius: 5, border: '1px solid #1a1a1a', marginBottom: i < keywords.length - 1 ? 6 : 0 }}>
                <span style={{ fontSize: 11, color: '#777' }}>{kw}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 12, fontWeight: 700, color: rankColor(rankPos[i]) }}>#{rankPos[i]}</span>
                  <span style={{ fontSize: 10, color: '#22C55E' }}>↑</span>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 10, color: '#444', fontFamily: 'monospace' }}>อัพเดทล่าสุด 2 ชม.</span>
              <span style={{ fontSize: 10, color: '#22C55E', fontFamily: 'monospace' }}>avg ↑4.4 pos</span>
            </div>
          </div>

          <div className="float2" style={{ background: '#111', border: '1px solid #222', borderRadius: 10, padding: '16px 18px', width: 200, boxShadow: '0 0 30px rgba(0,0,0,0.4)' }}>
            <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 2, color: '#555', marginBottom: 8 }}>ORGANIC GROWTH</div>
            <div style={{ fontFamily: 'monospace', fontSize: 28, fontWeight: 700, color: '#F0EFE8' }}>+247%</div>
            <div style={{ fontSize: 11, color: '#22C55E', marginTop: 2, marginBottom: 12 }}>↑ vs เดือนที่แล้ว</div>
            <div style={{ height: 36, display: 'flex', alignItems: 'flex-end', gap: 3 }}>
              {[15, 25, 20, 40, 35, 60, 100].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 6 ? '#E8190C' : '#1e1e1e', borderRadius: 2, transition: 'height 0.5s' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '80px 48px', position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 3, color: '#E8190C', marginBottom: 12 }}>HOW IT WORKS</div>
        <h2 style={{ fontFamily: 'monospace', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, marginBottom: 48 }}>ใช้งานง่าย 3 ขั้นตอน</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, maxWidth: 900 }}>
          {[
            { n: '01', title: 'สมัครฟรี', desc: 'สมัครด้วย email รับ 50 credits ฟรีทันที ไม่ต้องใส่บัตรเครดิต' },
            { n: '02', title: 'เลือก Tool', desc: 'เลือกเครื่องมือที่ต้องการ ระบบแสดงราคา credit ก่อนเสมอ ไม่มีค่าซ่อน' },
            { n: '03', title: 'รับผลลัพธ์', desc: 'ได้รายงานภาษาไทย พร้อม AI วิเคราะห์และแนะนำวิธีแก้ไข' },
          ].map((s, i) => (
            <div key={s.n} style={{ background: '#111', border: '1px solid #1a1a1a', padding: '32px 24px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 16, right: 20, fontFamily: 'monospace', fontSize: 40, fontWeight: 700, color: '#1a1a1a' }}>{s.n}</div>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#E8190C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontSize: 11, color: '#fff', fontWeight: 700, marginBottom: 16 }}>{i + 1}</div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" style={{ padding: '80px 48px', position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 3, color: '#E8190C', marginBottom: 12 }}>TOOLS AVAILABLE</div>
        <h2 style={{ fontFamily: 'monospace', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, marginBottom: 12 }}>เครื่องมือครบ จ่ายเฉพาะที่ใช้</h2>
        <p style={{ color: '#555', fontSize: 14, marginBottom: 40 }}>ทุก tool แสดงราคา credit ก่อนใช้งาน — ไม่มีค่าซ่อน</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: '#1a1a1a', border: '1px solid #1a1a1a', borderRadius: 10, overflow: 'hidden' }}>
          {[
            { icon: '</>', name: 'Keyword Research', desc: 'ค้นหา keyword + volume + difficulty + CPC ตลาดไทย', price: '5 credits / 100 kw' },
            { icon: '📍', name: 'Local SEO Report', desc: 'วิเคราะห์อันดับ Google Maps 49 จุด + AI analysis + PDF', price: '30 credits / report' },
            { icon: '⌖', name: 'Site Audit', desc: 'ตรวจ performance, SEO, accessibility พร้อม AI แนะนำภาษาไทย', price: '10 credits / domain' },
            { icon: '↗', name: 'Backlink Checker', desc: 'ดู backlinks ทั้งหมดของคุณและคู่แข่ง พร้อม toxic score', price: '15 credits / domain' },
            { icon: 'AI', name: 'Content Brief AI', desc: 'AI สร้าง outline + H2/H3 + related keywords', price: '8 credits / brief' },
            { icon: '◎', name: 'Rank Tracker', desc: 'ติดตาม keyword ranking อัตโนมัติทุกสัปดาห์', price: '15 credits / 10 kw / mo' },
          ].map(t => (
            <div key={t.name} style={{ background: '#0d0d0d', padding: '24px 22px' }}>
              <div style={{ width: 36, height: 36, borderRadius: 7, background: '#151515', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontSize: 12, color: '#E8190C', marginBottom: 14 }}>{t.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{t.name}</div>
              <div style={{ fontSize: 12, color: '#555', lineHeight: 1.6, marginBottom: 12 }}>{t.desc}</div>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#E8190C', background: 'rgba(232,25,12,0.06)', border: '1px solid rgba(232,25,12,0.12)', display: 'inline-block', padding: '3px 9px', borderRadius: 2 }}>{t.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" style={{ padding: '80px 48px', position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 3, color: '#E8190C', marginBottom: 12 }}>COMPARISON</div>
        <h2 style={{ fontFamily: 'monospace', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, marginBottom: 48 }}>ทำไมต้อง ThaiSEOLab?</h2>
        <div style={{ maxWidth: 800, background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 10, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #1a1a1a' }}>
                {['ฟีเจอร์', 'ThaiSEOLab', 'Ahrefs', 'SEMrush'].map((h, i) => (
                  <th key={h} style={{ padding: '14px 20px', textAlign: i === 0 ? 'left' : 'center', fontFamily: 'monospace', fontSize: 10, letterSpacing: 1, color: i === 1 ? '#E8190C' : '#444', background: i === 1 ? 'rgba(232,25,12,0.04)' : 'transparent' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['ภาษาไทย 100%', '✓', '✗', '✗'],
                ['จ่ายเท่าที่ใช้', '✓', '✗', '✗'],
                ['ไม่มี subscription', '✓', '✗', '✗'],
                ['Local SEO ไทย', '✓', 'บางส่วน', 'บางส่วน'],
                ['AI วิเคราะห์ไทย', '✓', '✗', '✗'],
                ['ราคาเริ่มต้น', '฿199', '~฿3,500/เดือน', '~฿4,200/เดือน'],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: i < 5 ? '1px solid #111' : 'none' }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: '13px 20px', textAlign: j === 0 ? 'left' : 'center', color: j === 1 ? (cell === '✓' ? '#22C55E' : '#F0EFE8') : j === 0 ? '#888' : cell === '✗' ? '#2a2a2a' : '#555', background: j === 1 ? 'rgba(232,25,12,0.02)' : 'transparent', fontWeight: j === 1 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '80px 48px', position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 3, color: '#E8190C', marginBottom: 12 }}>TESTIMONIALS</div>
        <h2 style={{ fontFamily: 'monospace', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, marginBottom: 48 }}>เสียงจากผู้ใช้จริง</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
          {[
            { name: 'คุณนภา', role: 'เจ้าของร้านออนไลน์', text: 'ใช้ Site Audit แล้วรู้เลยว่าเว็บช้าเพราะอะไร AI อธิบายภาษาไทยเข้าใจง่ายมาก แก้แล้ว Google rank ขึ้นใน 2 สัปดาห์' },
            { name: 'คุณธนา', role: 'นักการตลาดดิจิทัล', text: 'เปรียบกับ Ahrefs ที่ต้องจ่ายเดือนละ 3,500 ThaiSEOLab ให้ผลลัพธ์เดียวกันแต่ถูกกว่ามาก เหมาะกับ SME ไทยมาก' },
            { name: 'คุณมินตรา', role: 'Agency SEO', text: 'Local SEO Report เป็น tool ที่หาไม่ได้จากที่ไหนเลยในไทย ลูกค้าเห็น report แล้วประทับใจมาก ช่วย upsell ได้ดีมาก' },
          ].map(t => (
            <div key={t.name} style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 10, padding: 24 }}>
              <div style={{ fontSize: 28, color: '#E8190C', marginBottom: 14, fontFamily: 'monospace', opacity: 0.6 }}>"</div>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8, marginBottom: 20 }}>{t.text}</p>
              <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: 14 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontSize: 11, color: '#444', marginTop: 3 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '0 48px 80px', position: 'relative', zIndex: 1 }}>
        <div style={{ background: '#0d0d0d', borderRadius: 14, padding: '56px 48px' }}>
          <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 3, color: '#E8190C', marginBottom: 12 }}>PRICING MODEL</div>
          <h2 style={{ fontFamily: 'monospace', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, marginBottom: 10 }}>ซื้อ credits ใช้ได้เลย</h2>
          <p style={{ color: '#555', fontSize: 14, marginBottom: 40 }}>ไม่หมดอายุ 12 เดือน — ยิ่งซื้อเยอะ ยิ่งถูก</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {[
              { name: 'STARTER', price: '฿199', credits: '500 credits', rate: '฿0.40/credit', featured: false },
              { name: 'GROWTH', price: '฿590', credits: '2,000 credits', rate: '฿0.30/credit — ประหยัด 25%', featured: true },
              { name: 'AGENCY', price: '฿1,490', credits: '6,000 credits', rate: '฿0.25/credit — ประหยัด 38%', featured: false },
            ].map(p => (
              <div key={p.name} style={{ background: '#090909', border: p.featured ? '1px solid #E8190C' : '1px solid #1a1a1a', borderRadius: 8, padding: 24, position: 'relative' }}>
                {p.featured && <div style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', background: '#E8190C', color: '#fff', fontFamily: 'monospace', fontSize: 9, letterSpacing: 1, padding: '3px 12px', borderRadius: '0 0 5px 5px' }}>POPULAR</div>}
                <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 2, color: '#444', marginBottom: 10 }}>{p.name}</div>
                <div style={{ fontFamily: 'monospace', fontSize: 42, fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>{p.price}</div>
                <div style={{ fontSize: 13, color: '#555', marginBottom: 4 }}>{p.credits}</div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(232,25,12,0.7)', marginBottom: 22 }}>{p.rate}</div>
                <Link href="/login" style={{ display: 'block', textAlign: 'center', padding: '10px', borderRadius: 4, fontSize: 13, fontWeight: 500, textDecoration: 'none', background: p.featured ? '#E8190C' : 'transparent', border: p.featured ? 'none' : '1px solid #2a2a2a', color: '#fff' }}>เริ่มต้นใช้งาน</Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: 10, color: '#333', marginTop: 20 }}>// ทดลองฟรี 50 credits — ไม่ต้องใส่บัตรเครดิต — ไม่มีค่าซ่อน</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '80px 48px', position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 3, color: '#E8190C', marginBottom: 12 }}>FAQ</div>
        <h2 style={{ fontFamily: 'monospace', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, marginBottom: 40 }}>คำถามที่พบบ่อย</h2>
        <div style={{ maxWidth: 720, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            { q: 'Credits หมดอายุไหม?', a: 'Credits มีอายุ 12 เดือนนับจากวันที่ซื้อ ไม่มีวันหมดอายุรายเดือน' },
            { q: 'ทดลองใช้ฟรีได้ไหม?', a: 'ได้เลย สมัครฟรีรับ 50 credits ทันที ไม่ต้องใส่บัตรเครดิต ใช้ทดลอง Site Audit ได้ 5 ครั้ง' },
            { q: 'รองรับเว็บไซต์ภาษาไทยไหม?', a: 'รองรับ 100% ทุก tool ออกแบบมาสำหรับตลาดไทยโดยเฉพาะ ผลลัพธ์เป็นภาษาไทย AI วิเคราะห์ภาษาไทย' },
            { q: 'ชำระเงินด้วยวิธีไหนได้บ้าง?', a: 'รองรับบัตรเครดิต/เดบิต และ PromptPay สะดวกสำหรับคนไทย' },
            { q: 'ข้อมูลของฉันปลอดภัยไหม?', a: 'ปลอดภัย 100% ข้อมูลเก็บในระบบ Supabase ที่เข้ารหัส ไม่มีการแชร์ข้อมูลกับบุคคลที่สาม' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 6, padding: '18px 22px' }}>
              <div style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Q: {item.q}</div>
              <div style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 48px 80px', position: 'relative', zIndex: 1 }}>
        <div style={{ background: '#E8190C', borderRadius: 12, padding: '72px 60px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'monospace', fontSize: 'clamp(40px,6vw,72px)', color: '#fff', lineHeight: 0.95, marginBottom: 16, fontWeight: 800 }}>พร้อมเริ่ม<br />แล้วหรือยัง?</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>ทดลองฟรี 50 credits — ไม่ต้องใส่บัตรเครดิต — ไม่มี lock-in</p>
          <Link href="/login" style={{ background: '#fff', color: '#E8190C', padding: '12px 30px', borderRadius: 4, fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>เริ่มใช้งานฟรี →</Link>
          <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 16 }}>// NO_CARD · NO_SUBSCRIPTION · CANCEL_ANYTIME</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #111', padding: '44px 48px 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 700, marginBottom: 10 }}>thaise<span style={{ color: '#E8190C' }}>&lt;&gt;</span>lab<span style={{ color: '#333', fontSize: 11 }}>.com</span></div>
            <p style={{ fontSize: 13, color: '#444', lineHeight: 1.7, maxWidth: 240 }}>SEO tools สำหรับคนไทย จ่ายเท่าที่ใช้จริง ไม่มี subscription</p>
          </div>
          {[
            { title: 'เครื่องมือ', links: ['Keyword Research', 'Local SEO', 'Site Audit', 'Backlink Check'] },
            { title: 'ลิงก์ด่วน', links: ['หน้าแรก', 'ราคา', 'FAQ', 'ติดต่อ'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 2, color: '#333', marginBottom: 14 }}>{col.title}</div>
              {col.links.map(l => <a key={l} href="#" style={{ display: 'block', fontSize: 13, color: '#444', textDecoration: 'none', marginBottom: 8 }}>{l}</a>)}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 20, borderTop: '1px solid #111', fontFamily: 'monospace', fontSize: 10, color: '#2a2a2a' }}>
          <span>© 2025 thaiseolab.com — All Rights Reserved</span>
          <span>นโยบายความเป็นส่วนตัว · ข้อกำหนดการใช้งาน</span>
        </div>
      </footer>
    </main>
  )
}