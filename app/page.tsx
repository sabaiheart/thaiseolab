import Link from 'next/link'

export default function Home() {
  return (
    <main style={{
      background: '#090909', minHeight: '100vh',
      color: '#F0EFE8', fontFamily: 'sans-serif',
      overflowX: 'hidden'
    }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 58, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 44px',
        background: 'rgba(9,9,9,0.9)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #222'
      }}>
        <div style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 700 }}>
          thaise<span style={{ color: '#E8190C' }}>&lt;&gt;</span>lab
          <span style={{ color: '#555', fontSize: 11 }}>.com</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {['เครื่องมือ', 'ราคา', 'เปรียบเทียบ'].map(t => (
            <a key={t} href={`#${t}`} style={{ fontSize: 13, color: '#777', textDecoration: 'none' }}>{t}</a>
          ))}
          <Link href="/login" style={{
            background: '#E8190C', color: '#fff', padding: '7px 18px',
            borderRadius: 4, fontSize: 13, fontWeight: 500, textDecoration: 'none'
          }}>ทดลองฟรี</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '100px 44px 80px', position: 'relative'
      }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(232,25,12,0.08) 0%,transparent 65%)',
          pointerEvents: 'none'
        }}/>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 600 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'monospace', fontSize: 10, letterSpacing: 2,
            color: '#E8190C', border: '1px solid rgba(232,25,12,0.3)',
            padding: '5px 12px', borderRadius: 2, marginBottom: 24
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8190C', display: 'inline-block' }}/>
            SEO TOOLS PLATFORM · TH
          </div>
          <h1 style={{
            fontFamily: 'monospace', fontSize: 'clamp(64px,9vw,110px)',
            lineHeight: 0.9, letterSpacing: 1, marginBottom: 28, fontWeight: 700
          }}>
            TOOLS<br/>NOT<br/><span style={{ color: '#E8190C' }}>BILLS.</span>
          </h1>
          <p style={{ fontSize: 16, color: '#888', fontWeight: 300, maxWidth: 440, lineHeight: 1.8, marginBottom: 36 }}>
            เครื่องมือ SEO ระดับ Pro ในภาษาไทย<br/>
            <strong style={{ color: '#F0EFE8', fontWeight: 500 }}>จ่ายเท่าที่ใช้จริง</strong> — ไม่มี subscription ไม่มี lock-in
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 56 }}>
            <Link href="/login" style={{
              background: '#E8190C', color: '#fff', padding: '11px 26px',
              borderRadius: 4, fontSize: 14, fontWeight: 500, textDecoration: 'none'
            }}>เริ่มฟรี 50 credits →</Link>
            <a href="#tools" style={{
              background: 'transparent', color: '#888', padding: '11px 26px',
              borderRadius: 4, fontSize: 14, border: '1px solid #333', textDecoration: 'none'
            }}>ดูเครื่องมือ</a>
          </div>
          <div style={{ display: 'flex', gap: 40 }}>
            {[
              { n: '฿0', l: 'ค่า subscription' },
              { n: '15+', l: 'เครื่องมือ SEO' },
              { n: '฿.25', l: 'ราคา/credit' },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: 'monospace', fontSize: 26, fontWeight: 700, color: '#F0EFE8' }}>
                  {s.n.includes('฿') ? <><span style={{ color: '#E8190C' }}>{s.n}</span></> : s.n}
                </div>
                <div style={{ fontSize: 11, color: '#555', marginTop: 3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" style={{ padding: '80px 44px' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 3, color: '#E8190C', marginBottom: 12 }}>TOOLS AVAILABLE</div>
        <h2 style={{ fontFamily: 'monospace', fontSize: 'clamp(36px,5vw,56px)', marginBottom: 12, fontWeight: 700 }}>เครื่องมือครบ<br/>จ่ายเฉพาะที่ใช้</h2>
        <p style={{ color: '#555', fontSize: 15, marginBottom: 48, fontWeight: 300 }}>ทุก tool แสดงราคา credit ก่อนใช้งาน — ไม่มีค่าซ่อน</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: '#222', border: '1px solid #222', borderRadius: 10, overflow: 'hidden' }}>
          {[
            { icon: '</>', name: 'Keyword Research', desc: 'ค้นหา keyword + volume + difficulty + CPC ตลาดไทย', price: '5 credits / 100 kw' },
            { icon: '📍', name: 'Local SEO Report', desc: 'วิเคราะห์อันดับ Google Maps 49 จุด + AI analysis + PDF', price: '30 credits / report' },
            { icon: '⌖', name: 'Site Audit', desc: 'ตรวจ broken links, meta tags, page speed ครบทั้งเว็บ', price: '10 credits / 100 pages' },
            { icon: '↗', name: 'Backlink Checker', desc: 'ดู backlinks ทั้งหมดของคุณและคู่แข่ง พร้อม toxic score', price: '15 credits / domain' },
            { icon: 'AI', name: 'Content Brief AI', desc: 'AI สร้าง outline + H2/H3 + related keywords', price: '8 credits / brief' },
            { icon: '◎', name: 'Rank Tracker', desc: 'ติดตาม keyword ranking อัตโนมัติทุกสัปดาห์', price: '15 credits / 10 kw / mo' },
          ].map(t => (
            <div key={t.name} style={{ background: '#111', padding: '28px 26px 24px', borderBottom: 'none' }}>
              <div style={{
                width: 38, height: 38, borderRadius: 7, background: '#1a1a1a',
                border: '1px solid #2a2a2a', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontFamily: 'monospace', fontSize: 12,
                color: '#E8190C', marginBottom: 16
              }}>{t.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{t.name}</div>
              <div style={{ fontSize: 12, color: '#555', lineHeight: 1.6, marginBottom: 14 }}>{t.desc}</div>
              <div style={{
                fontFamily: 'monospace', fontSize: 10, color: '#E8190C',
                background: 'rgba(232,25,12,0.08)', border: '1px solid rgba(232,25,12,0.15)',
                display: 'inline-block', padding: '3px 9px', borderRadius: 2
              }}>{t.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="ราคา" style={{ padding: '0 44px 80px' }}>
        <div style={{ background: '#111', borderRadius: 16, padding: '64px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 3, color: '#E8190C', marginBottom: 12 }}>PRICING MODEL</div>
          <h2 style={{ fontFamily: 'monospace', fontSize: 'clamp(36px,5vw,56px)', marginBottom: 12, fontWeight: 700 }}>ซื้อ credits<br/>ใช้ได้เลย</h2>
          <p style={{ color: '#555', fontSize: 15, marginBottom: 48, fontWeight: 300 }}>ไม่หมดอายุ 12 เดือน — ยิ่งซื้อเยอะ ยิ่งถูก</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
            {[
              { name: 'STARTER', price: '฿199', credits: '500 credits', rate: '฿0.40/credit', featured: false },
              { name: 'GROWTH', price: '฿590', credits: '2,000 credits', rate: '฿0.30/credit — ประหยัด 25%', featured: true },
              { name: 'AGENCY', price: '฿1,490', credits: '6,000 credits', rate: '฿0.25/credit — ประหยัด 38%', featured: false },
            ].map(p => (
              <div key={p.name} style={{
                background: '#0a0a0a', border: p.featured ? '1px solid #E8190C' : '1px solid #222',
                borderRadius: 10, padding: 28, position: 'relative'
              }}>
                {p.featured && <div style={{
                  position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
                  background: '#E8190C', color: '#fff', fontFamily: 'monospace',
                  fontSize: 9, letterSpacing: 1, padding: '3px 12px', borderRadius: '0 0 5px 5px'
                }}>POPULAR</div>}
                <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 2, color: '#555', marginBottom: 10 }}>{p.name}</div>
                <div style={{ fontFamily: 'monospace', fontSize: 48, color: '#F0EFE8', lineHeight: 1, marginBottom: 4 }}>{p.price}</div>
                <div style={{ fontSize: 13, color: '#555', marginBottom: 4 }}>{p.credits}</div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(232,25,12,0.7)', marginBottom: 24 }}>{p.rate}</div>
                <Link href="/login" style={{
                  display: 'block', textAlign: 'center', padding: '11px',
                  borderRadius: 4, fontSize: 13, fontWeight: 500, textDecoration: 'none',
                  background: p.featured ? '#E8190C' : 'transparent',
                  border: p.featured ? 'none' : '1px solid #333',
                  color: '#fff'
                }}>เริ่มต้นใช้งาน</Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: 10, color: '#444', marginTop: 22 }}>
            // ทดลองฟรี 50 credits — ไม่ต้องใส่บัตรเครดิต — ไม่มีค่าซ่อน
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 44px 80px' }}>
        <div style={{
          background: '#E8190C', borderRadius: 12, padding: '80px 60px',
          textAlign: 'center', position: 'relative', overflow: 'hidden'
        }}>
          <h2 style={{ fontFamily: 'monospace', fontSize: 'clamp(48px,7vw,80px)', color: '#fff', lineHeight: 0.9, marginBottom: 18, fontWeight: 700 }}>
            พร้อมเริ่ม<br/>แล้วหรือยัง?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', marginBottom: 32, fontWeight: 300 }}>
            ทดลองฟรี 50 credits — ไม่ต้องใส่บัตรเครดิต — ไม่มี lock-in
          </p>
          <Link href="/login" style={{
            background: '#fff', color: '#E8190C', padding: '13px 32px',
            borderRadius: 4, fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'inline-block'
          }}>เริ่มใช้งานฟรี →</Link>
          <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>
            // NO_CARD · NO_SUBSCRIPTION · CANCEL_ANYTIME
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#111', borderTop: '1px solid #1a1a1a', padding: '48px 44px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: 14, color: '#F0EFE8', marginBottom: 12 }}>
              thaise<span style={{ color: '#E8190C' }}>&lt;&gt;</span>lab<span style={{ color: '#444', fontSize: 11 }}>.com</span>
            </div>
            <p style={{ fontSize: 13, color: '#444', lineHeight: 1.7, maxWidth: 240, fontWeight: 300 }}>
              SEO tools สำหรับคนไทย จ่ายเท่าที่ใช้จริง ไม่มี subscription
            </p>
          </div>
          {[
            { title: 'เครื่องมือ', links: ['Keyword Research', 'Local SEO', 'Site Audit', 'Backlink Check'] },
            { title: 'ลิงก์ด่วน', links: ['หน้าแรก', 'ราคา', 'ติดต่อ'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: 2, color: '#444', marginBottom: 16 }}>{col.title}</div>
              {col.links.map(l => (
                <a key={l} href="#" style={{ display: 'block', fontSize: 13, color: '#444', textDecoration: 'none', marginBottom: 9 }}>{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 22, borderTop: '1px solid #1a1a1a', fontFamily: 'monospace', fontSize: 10, color: '#333' }}>
          <span>© 2025 thaiseolab.com — All Rights Reserved</span>
          <span>นโยบายความเป็นส่วนตัว · ข้อกำหนดการใช้งาน</span>
        </div>
      </footer>

    </main>
  )
}