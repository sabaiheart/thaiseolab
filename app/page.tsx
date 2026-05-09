'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setTick(p => p + 1), 2500)
    return () => clearInterval(t)
  }, [])

  const keywords = [
    { kw: 'ร้าน SEO', pos: [1,1,1], change: 12 },
    { kw: 'เครื่องมือ SEO', pos: [2,2,2], change: 8 },
    { kw: 'SEO Tools', pos: [4,3,4], change: 3 },
    { kw: 'Local SEO', pos: [7,6,7], change: -2 },
    { kw: 'ตรวจสอบ SEO', pos: [12,11,12], change: -5 },
  ]
  const posColor = (p: number) => p <= 3 ? '#22C55E' : p <= 7 ? '#F59E0B' : '#EF4444'

  return (
    <main style={{ background: '#090909', minHeight: '100vh', color: '#F0EFE8', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 20px rgba(232,25,12,0.1)} 50%{box-shadow:0 0 40px rgba(232,25,12,0.2)} }
        .f1{animation:float 4s ease-in-out infinite}
        .f2{animation:float2 4s 1.5s ease-in-out infinite}
        .fu{animation:fadeUp 0.7s ease forwards}
        .fu2{animation:fadeUp 0.7s 0.15s ease forwards;opacity:0}
        .fu3{animation:fadeUp 0.7s 0.3s ease forwards;opacity:0}
        .glow{animation:glowPulse 3s ease-in-out infinite}
        .tool-card:hover{border-color:rgba(232,25,12,0.3)!important;transform:translateY(-2px)}
        .tool-card{transition:all 0.2s}
        .nav-link:hover{color:#F0EFE8!important}
        .faq-row:hover{background:rgba(255,255,255,0.03)!important}

        @media(max-width:900px){
          .nav-links{display:none!important}
          .hamburger{display:flex!important}
          .hero-inner{flex-direction:column!important;gap:40px!important}
          .hero-cards{display:none!important}
          .hero-left{max-width:100%!important}
          .stats-row{gap:0!important}
          .how-grid{grid-template-columns:1fr!important}
          .tools-grid{grid-template-columns:1fr 1fr!important}
          .compare-wrap{overflow-x:auto!important}
          .testimonials-grid{grid-template-columns:1fr!important}
          .pricing-grid{grid-template-columns:1fr!important;max-width:400px!important}
          .footer-grid{grid-template-columns:1fr 1fr!important;gap:28px!important}
          .cta-inner{padding:48px 24px!important}
          .section-pad{padding-left:20px!important;padding-right:20px!important}
        }
        @media(max-width:480px){
          .tools-grid{grid-template-columns:1fr!important}
          .stats-row{flex-direction:column!important;gap:20px!important}
          .stats-row>div{border-right:none!important;border-bottom:1px solid #111!important;padding:0 0 20px!important}
          .stats-row>div:last-child{border-bottom:none!important;padding-bottom:0!important}
          .footer-grid{grid-template-columns:1fr!important}
          .hero-badge{font-size:9px!important;letter-spacing:1px!important}
        }
      `}</style>

      {/* GRID BG */}
      <div style={{ position:'fixed', inset:0, zIndex:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)', backgroundSize:'60px 60px', pointerEvents:'none' }} />
      <div style={{ position:'fixed', top:'-15%', right:'-5%', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(232,25,12,0.05) 0%,transparent 65%)', pointerEvents:'none', zIndex:0 }} />

      {/* NAV */}
      <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:100, background:'rgba(9,9,9,0.9)', backdropFilter:'blur(24px)', borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ height:60, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 48px', maxWidth:1440, margin:'0 auto' }}>
          <div style={{ fontFamily:'monospace', fontSize:15, fontWeight:700 }}>ThaiSEO<span style={{ color:'#E8190C' }}>Lab</span></div>
          <div className="nav-links" style={{ display:'flex', alignItems:'center', gap:28 }}>
            {['เครื่องมือ','ราคา','วิธีการใช้งาน','รีวิว','บล็อก'].map(t => (
              <a key={t} className="nav-link" href="#" style={{ fontSize:13, color:'#555', textDecoration:'none', transition:'color 0.2s' }}>{t}</a>
            ))}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <Link href="/login" style={{ background:'#E8190C', color:'#fff', padding:'8px 18px', borderRadius:5, fontSize:13, fontWeight:600, textDecoration:'none', whiteSpace:'nowrap' }}>สมัครฟรี →</Link>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ display:'none', flexDirection:'column', gap:5, background:'none', border:'none', cursor:'pointer', padding:4 }}>
              <span style={{ width:22, height:2, background:'#F0EFE8', display:'block', transition:'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
              <span style={{ width:22, height:2, background:'#F0EFE8', display:'block', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ width:22, height:2, background:'#F0EFE8', display:'block', transition:'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
            </button>
          </div>
        </div>
        {/* MOBILE MENU */}
        {menuOpen && (
          <div style={{ background:'#0d0d0d', borderTop:'1px solid #111', padding:'20px 24px', display:'flex', flexDirection:'column', gap:16 }}>
            {['เครื่องมือ','ราคา','วิธีการใช้งาน','รีวิว','บล็อก'].map(t => (
              <a key={t} href="#" onClick={() => setMenuOpen(false)} style={{ fontSize:15, color:'#888', textDecoration:'none' }}>{t}</a>
            ))}
            <Link href="/login" onClick={() => setMenuOpen(false)} style={{ background:'#E8190C', color:'#fff', padding:'11px 20px', borderRadius:5, fontSize:14, fontWeight:600, textDecoration:'none', textAlign:'center', marginTop:8 }}>สมัครฟรี 50 เครดิต →</Link>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="section-pad" style={{ minHeight:'100vh', display:'flex', alignItems:'center', padding:'110px 48px 80px', position:'relative', zIndex:1 }}>
        <div className="hero-inner" style={{ display:'flex', alignItems:'center', gap:60, width:'100%', maxWidth:1440, margin:'0 auto' }}>
          <div className="hero-left" style={{ flex:'0 0 auto', maxWidth:520 }}>
            <div className="fu hero-badge" style={{ display:'inline-flex', alignItems:'center', gap:8, border:'1px solid rgba(232,25,12,0.25)', background:'rgba(232,25,12,0.05)', padding:'5px 14px', borderRadius:100, fontFamily:'monospace', fontSize:10, letterSpacing:2, color:'#E8190C', marginBottom:28 }}>
              <span style={{ width:5, height:5, borderRadius:'50%', background:'#E8190C', display:'inline-block' }} />
              PAY-PER-USE SEO TOOLS FOR THAI BUSINESSES
            </div>
            <h1 className="fu2" style={{ fontFamily:'monospace', fontSize:'clamp(48px,7vw,84px)', lineHeight:0.92, fontWeight:800, letterSpacing:-2, marginBottom:24 }}>
              TOOLS<br />NOT<br /><span style={{ color:'#E8190C' }}>BILLS.</span>
            </h1>
            <p className="fu2" style={{ fontSize:15, color:'#555', lineHeight:1.9, marginBottom:36, maxWidth:420 }}>
              แพลตฟอร์มรวมเครื่องมือ SEO ที่ดีที่สุด<br />
              จ่ายเฉพาะสิ่งที่ใช้ <strong style={{ color:'#888' }}>ไม่มีรายเดือน ไม่มีผูกมัด</strong>
            </p>
            <div className="fu3" style={{ display:'flex', gap:12, marginBottom:48, flexWrap:'wrap' }}>
              <Link href="/login" style={{ background:'#E8190C', color:'#fff', padding:'12px 24px', borderRadius:6, fontSize:14, fontWeight:600, textDecoration:'none', boxShadow:'0 0 30px rgba(232,25,12,0.25)', whiteSpace:'nowrap' }}>สมัครฟรี 50 เครดิต →</Link>
              <a href="#tools" style={{ background:'rgba(255,255,255,0.03)', color:'#777', padding:'12px 22px', borderRadius:6, fontSize:14, border:'1px solid rgba(255,255,255,0.06)', textDecoration:'none', whiteSpace:'nowrap' }}>ดูเครื่องมือทั้งหมด</a>
            </div>
            <div className="fu3 stats-row" style={{ display:'flex', borderTop:'1px solid #111', paddingTop:28 }}>
              {[
                { n:'฿0', sub:'Subscription', desc:'No monthly fees' },
                { n:'15+', sub:'Powerful Tools', desc:'For every SEO need' },
                { n:'฿0.25', sub:'Per Credit', desc:'Pay only for what you use' },
              ].map((s, i) => (
                <div key={s.sub} style={{ flex:1, paddingRight: i < 2 ? 24 : 0, paddingLeft: i > 0 ? 24 : 0, borderRight: i < 2 ? '1px solid #111' : 'none' }}>
                  <div style={{ fontFamily:'monospace', fontSize:22, fontWeight:700, color: i === 1 ? '#F0EFE8' : '#E8190C', marginBottom:4 }}>{s.n}</div>
                  <div style={{ fontSize:12, fontWeight:600, color:'#888', marginBottom:2 }}>{s.sub}</div>
                  <div style={{ fontSize:11, color:'#444' }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FLOATING CARDS — desktop only */}
          <div className="hero-cards" style={{ flex:1, display:'flex', flexDirection:'column', gap:14, alignItems:'flex-end' }}>
            <div className="f1 glow" style={{ background:'rgba(17,17,17,0.9)', border:'1px solid rgba(232,25,12,0.15)', borderRadius:14, padding:22, width:340, backdropFilter:'blur(20px)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
                <span style={{ fontFamily:'monospace', fontSize:12, fontWeight:700 }}>Keyword Rankings</span>
                <span style={{ fontSize:10, color:'#444', fontFamily:'monospace' }}>อัปเดตล่าสุด: วันนี้</span>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 80px 70px', paddingBottom:8, borderBottom:'1px solid #1a1a1a', marginBottom:4 }}>
                <span style={{ fontSize:10, color:'#444' }}>Keyword</span>
                <span style={{ fontSize:10, color:'#444', textAlign:'center' }}>Position</span>
                <span style={{ fontSize:10, color:'#444', textAlign:'center' }}>Change</span>
              </div>
              {keywords.map(k => (
                <div key={k.kw} style={{ display:'grid', gridTemplateColumns:'1fr 80px 70px', padding:'8px 0', borderBottom:'1px solid #111', alignItems:'center' }}>
                  <span style={{ fontSize:12, color:'#777' }}>{k.kw}</span>
                  <span style={{ fontFamily:'monospace', fontSize:14, fontWeight:700, color:posColor(k.pos[tick%3]), textAlign:'center' }}>#{k.pos[tick%3]}</span>
                  <span style={{ fontSize:11, color: k.change > 0 ? '#22C55E' : '#EF4444', textAlign:'center', fontFamily:'monospace' }}>{k.change > 0 ? '↑' : '↓'}{Math.abs(k.change)}</span>
                </div>
              ))}
            </div>
            <div className="f2" style={{ background:'rgba(17,17,17,0.9)', border:'1px solid rgba(232,25,12,0.1)', borderRadius:12, padding:20, width:220, backdropFilter:'blur(20px)' }}>
              <div style={{ fontSize:10, color:'#444', fontFamily:'monospace', marginBottom:8, letterSpacing:1 }}>ORGANIC GROWTH</div>
              <div style={{ fontFamily:'monospace', fontSize:36, fontWeight:700, color:'#22C55E', lineHeight:1, marginBottom:4 }}>+247%</div>
              <div style={{ fontSize:11, color:'#555', marginBottom:16 }}>vs 6 เดือนที่ผ่านมา</div>
              <div style={{ display:'flex', alignItems:'flex-end', gap:4, height:50 }}>
                {[['ม.ค.',12],['ก.พ.',20],['มี.ค.',16],['เม.ย.',32],['พ.ค.',52],['มิ.ย.',100]].map(([l,h]) => (
                  <div key={l as string} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
                    <div style={{ width:'100%', height:`${h}%`, background: l==='มิ.ย.' ? '#E8190C' : 'rgba(232,25,12,0.15)', borderRadius:2 }} />
                    <span style={{ fontSize:8, color:'#333', fontFamily:'monospace' }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad" style={{ padding:'80px 48px', borderTop:'1px solid rgba(255,255,255,0.03)', position:'relative', zIndex:1 }}>
        <div style={{ textAlign:'center', marginBottom:48 }}>
          <div style={{ fontFamily:'monospace', fontSize:10, letterSpacing:3, color:'#E8190C', marginBottom:12 }}>HOW IT WORKS</div>
          <h2 style={{ fontFamily:'monospace', fontSize:'clamp(22px,3.5vw,38px)', fontWeight:700 }}>ทำงานยังไง?</h2>
        </div>
        <div className="how-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:1, maxWidth:960, margin:'0 auto', background:'rgba(255,255,255,0.03)', borderRadius:12, overflow:'hidden', border:'1px solid rgba(255,255,255,0.04)' }}>
          {[
            { n:'1', title:'สมัครฟรี', desc:'สมัครด้วย email รับ 50 เครดิตฟรีทันที ไม่ต้องใช้บัตรเครดิต' },
            { n:'2', title:'เลือก Tool', desc:'เลือกเครื่องมือที่ต้องการ และชำระด้วยเครดิต ราคาโปร่งใส' },
            { n:'3', title:'รับผลลัพธ์', desc:'ได้ข้อมูล SEO แบบเรียลไทม์ พร้อม AI วิเคราะห์ภาษาไทย' },
          ].map((s, i) => (
            <div key={s.n} style={{ background:'rgba(17,17,17,0.8)', padding:'32px 24px', backdropFilter:'blur(12px)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
                <div style={{ width:30, height:30, borderRadius:'50%', background:'#E8190C', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'monospace', fontSize:13, fontWeight:700, color:'#fff', flexShrink:0, boxShadow:'0 0 16px rgba(232,25,12,0.4)' }}>{s.n}</div>
                <span style={{ fontSize:15, fontWeight:600 }}>{s.title}</span>
              </div>
              <p style={{ fontSize:13, color:'#555', lineHeight:1.8 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="section-pad" style={{ padding:'80px 48px', position:'relative', zIndex:1 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:36, flexWrap:'wrap', gap:12 }}>
          <div>
            <div style={{ fontFamily:'monospace', fontSize:10, letterSpacing:3, color:'#E8190C', marginBottom:10 }}>TOOLS AVAILABLE</div>
            <h2 style={{ fontFamily:'monospace', fontSize:'clamp(22px,3.5vw,38px)', fontWeight:700 }}>เครื่องมือทั้งหมด</h2>
          </div>
          <a href="#" style={{ fontSize:13, color:'#E8190C', textDecoration:'none' }}>ดูทั้งหมด →</a>
        </div>
        <div className="tools-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10 }}>
          {[
            { icon:'🔍', name:'Keyword Research', desc:'ค้นหาคีย์เวิร์ด วิเคราะห์แนวโน้ม และความยากของคีย์เวิร์ด', credits:'5 เครดิต' },
            { icon:'📍', name:'Local SEO Report', desc:'วิเคราะห์ SEO ท้องถิ่น เช็ค NAP และอันดับบน Google Maps', credits:'10 เครดิต' },
            { icon:'🛡️', name:'Site Audit', desc:'ตรวจสอบสุขภาพเว็บไซต์ ครอบคลุม Technical, On-page และ UX', credits:'15 เครดิต' },
            { icon:'🔗', name:'Backlink Checker', desc:'วิเคราะห์ Backlink ตรวจสอบคะแนนและคุณภาพของลิงก์', credits:'10 เครดิต' },
            { icon:'✍️', name:'Content Brief AI', desc:'สร้าง Content Brief อัตโนมัติด้วย AI ที่เข้าใจ SEO', credits:'8 เครดิต' },
            { icon:'📈', name:'Rank Tracker', desc:'ติดตามอันดับคีย์เวิร์ดแบบเรียลไทม์ บน Google ประเทศไทย', credits:'10 เครดิต' },
          ].map(t => (
            <div key={t.name} className="tool-card" style={{ background:'rgba(17,17,17,0.7)', border:'1px solid rgba(255,255,255,0.04)', borderRadius:12, padding:'22px 20px', backdropFilter:'blur(12px)', cursor:'pointer' }}>
              <div style={{ fontSize:28, marginBottom:12 }}>{t.icon}</div>
              <div style={{ fontSize:14, fontWeight:600, marginBottom:8 }}>{t.name}</div>
              <div style={{ fontSize:12, color:'#555', lineHeight:1.7, marginBottom:14 }}>{t.desc}</div>
              <div style={{ display:'inline-block', background:'rgba(232,25,12,0.06)', border:'1px solid rgba(232,25,12,0.15)', color:'#E8190C', fontSize:11, fontFamily:'monospace', padding:'3px 10px', borderRadius:4 }}>{t.credits}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE */}
      <section className="section-pad" style={{ padding:'80px 48px', position:'relative', zIndex:1 }}>
        <div style={{ fontFamily:'monospace', fontSize:10, letterSpacing:3, color:'#E8190C', marginBottom:12 }}>COMPARISON</div>
        <h2 style={{ fontFamily:'monospace', fontSize:'clamp(22px,3.5vw,38px)', fontWeight:700, marginBottom:36 }}>เปรียบเทียบ</h2>
        <div className="compare-wrap" style={{ overflowX:'auto', borderRadius:14, border:'1px solid rgba(255,255,255,0.04)' }}>
          <table style={{ width:'100%', minWidth:560, borderCollapse:'collapse', fontSize:13, background:'rgba(17,17,17,0.7)', backdropFilter:'blur(12px)' }}>
            <thead>
              <tr style={{ borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
                <th style={{ padding:'16px 20px', textAlign:'left', color:'#444', fontWeight:400, width:'30%' }}></th>
                <th style={{ padding:'16px 20px', textAlign:'center', color:'#E8190C', fontWeight:600, background:'rgba(232,25,12,0.05)', borderLeft:'1px solid rgba(232,25,12,0.15)', borderRight:'1px solid rgba(232,25,12,0.15)' }}>ThaiSEOLab</th>
                <th style={{ padding:'16px 20px', textAlign:'center', color:'#555', fontWeight:400 }}>Ahrefs</th>
                <th style={{ padding:'16px 20px', textAlign:'center', color:'#555', fontWeight:400 }}>SEMrush</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['รูปแบบการคิดเงิน','Pay-per-use','รายเดือน','รายเดือน'],
                ['ราคาเริ่มต้น','฿0.25 / เครดิต','87,990 / เดือน','86,990 / เดือน'],
                ['ไม่มีขั้นต่ำ','✓','✗','✗'],
                ['ไม่ต้องใช้บัตรเครดิต','✓','✗','✗'],
                ['ยกเลิกได้ทันที','✓','✗','✗'],
                ['เหมาะสำหรับ','ทุกธุรกิจในไทย','องค์กรขนาดใหญ่','องค์กรขนาดใหญ่'],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.03)' : 'none' }}>
                  <td style={{ padding:'13px 20px', color:'#777' }}>{row[0]}</td>
                  <td style={{ padding:'13px 20px', textAlign:'center', background:'rgba(232,25,12,0.03)', borderLeft:'1px solid rgba(232,25,12,0.1)', borderRight:'1px solid rgba(232,25,12,0.1)', color: row[1]==='✓' ? '#22C55E' : row[1]==='✗' ? '#2a2a2a' : '#F0EFE8', fontWeight: row[1]==='✓'||row[1]==='✗' ? 700 : 500, fontSize: row[1]==='✓'||row[1]==='✗' ? 16 : 13 }}>{row[1]}</td>
                  <td style={{ padding:'13px 20px', textAlign:'center', color: row[2]==='✓' ? '#22C55E' : row[2]==='✗' ? '#2a2a2a' : '#555', fontWeight: row[2]==='✓'||row[2]==='✗' ? 700 : 400, fontSize: row[2]==='✓'||row[2]==='✗' ? 16 : 13 }}>{row[2]}</td>
                  <td style={{ padding:'13px 20px', textAlign:'center', color: row[3]==='✓' ? '#22C55E' : row[3]==='✗' ? '#2a2a2a' : '#555', fontWeight: row[3]==='✓'||row[3]==='✗' ? 700 : 400, fontSize: row[3]==='✓'||row[3]==='✗' ? 16 : 13 }}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad" style={{ padding:'80px 48px', position:'relative', zIndex:1 }}>
        <div style={{ fontFamily:'monospace', fontSize:10, letterSpacing:3, color:'#E8190C', marginBottom:12 }}>TESTIMONIALS</div>
        <h2 style={{ fontFamily:'monospace', fontSize:'clamp(22px,3.5vw,38px)', fontWeight:700, marginBottom:36 }}>ลูกค้าของเรา</h2>
        <div className="testimonials-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
          {[
            { text:'"เครื่องมือครบ ใช้งานง่าย และถูกมากๆ เหมาะกับธุรกิจไทยที่อยากทำ SEO เอง"', name:'คุณนิล', role:'เจ้าของร้านค้าออนไลน์' },
            { text:'"Site Audit ช่วยให้เราแก้ปัญหาได้ตรงจุด อันดับดีขึ้นเร็วมาก ภายใน 1 เดือน"', name:'คุณอร', role:'Digital Marketer' },
            { text:'"จ่ายเท่าที่ใช้ ไม่ต้องเสียรายเดือน คุ้มที่สุดสำหรับเอเจนซี่ขนาดเล็ก"', name:'คุณปอม', role:'Agency Owner' },
          ].map(t => (
            <div key={t.name} style={{ background:'rgba(17,17,17,0.7)', border:'1px solid rgba(255,255,255,0.04)', borderRadius:12, padding:24, backdropFilter:'blur(12px)' }}>
              <div style={{ fontSize:32, color:'#E8190C', marginBottom:14, opacity:0.5 }}>"</div>
              <p style={{ fontSize:13, color:'#666', lineHeight:1.9, marginBottom:22 }}>{t.text}</p>
              <div style={{ display:'flex', alignItems:'center', gap:10, paddingTop:14, borderTop:'1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ width:32, height:32, borderRadius:'50%', background:'rgba(232,25,12,0.1)', border:'1px solid rgba(232,25,12,0.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, flexShrink:0 }}>👤</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:600 }}>{t.name}</div>
                  <div style={{ fontSize:11, color:'#444', marginTop:2 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="section-pad" style={{ padding:'80px 48px', position:'relative', zIndex:1 }}>
        <div style={{ textAlign:'center', marginBottom:48 }}>
          <div style={{ fontFamily:'monospace', fontSize:10, letterSpacing:3, color:'#E8190C', marginBottom:12 }}>PRICING</div>
          <h2 style={{ fontFamily:'monospace', fontSize:'clamp(22px,3.5vw,38px)', fontWeight:700, marginBottom:8 }}>แพ็กเกจยอดนิยม</h2>
          <p style={{ fontSize:13, color:'#444' }}>* เครดิตที่ไม่ได้ใช้จะถูกโอนไปในเดือนถัดไป</p>
        </div>
        <div className="pricing-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, maxWidth:960, margin:'0 auto' }}>
          {[
            { name:'Starter', sub:'สำหรับผู้เริ่มต้น', price:'฿199', unit:'/เดือน', credits:'ได้รับ 800 เครดิต / เดือน', features:['ใช้งานเครื่องมือพื้นฐาน','รายงานมาตรฐาน','ส่งออกข้อมูลได้'], featured:false },
            { name:'Growth', sub:'สำหรับธุรกิจที่กำลังโต', price:'฿590', unit:'/เดือน', credits:'ได้รับ 2,500 เครดิต / เดือน', features:['ใช้งานเครื่องมือทั้งหมด','ข้อมูลเชิงลึกมากขึ้น','Priority Support'], featured:true },
            { name:'Agency', sub:'สำหรับเอเจนซี่', price:'฿1,490', unit:'/เดือน', credits:'ได้รับ 7,000 เครดิต / เดือน', features:['ใช้งานไม่จำกัด','สิทธิ์พิเศษสำหรับเอเจนซี่','API Access'], featured:false },
          ].map(p => (
            <div key={p.name} style={{ background: p.featured ? 'rgba(232,25,12,0.05)' : 'rgba(17,17,17,0.7)', border: p.featured ? '1px solid rgba(232,25,12,0.3)' : '1px solid rgba(255,255,255,0.04)', borderRadius:14, padding:28, position:'relative', backdropFilter:'blur(12px)', boxShadow: p.featured ? '0 0 40px rgba(232,25,12,0.1)' : 'none' }}>
              {p.featured && <div style={{ position:'absolute', top:-1, left:'50%', transform:'translateX(-50%)', background:'#E8190C', color:'#fff', fontSize:9, fontFamily:'monospace', letterSpacing:2, padding:'4px 14px', borderRadius:'0 0 6px 6px' }}>ยอดนิยม</div>}
              <div style={{ fontSize:17, fontWeight:700, marginBottom:4 }}>{p.name}</div>
              <div style={{ fontSize:12, color:'#555', marginBottom:18 }}>{p.sub}</div>
              <div style={{ display:'flex', alignItems:'baseline', gap:4, marginBottom:6 }}>
                <span style={{ fontFamily:'monospace', fontSize:38, fontWeight:700, letterSpacing:-1 }}>{p.price}</span>
                <span style={{ fontSize:13, color:'#555' }}>{p.unit}</span>
              </div>
              <div style={{ fontSize:12, color:'#555', marginBottom:22, paddingBottom:18, borderBottom:'1px solid rgba(255,255,255,0.04)' }}>{p.credits}</div>
              {p.features.map(f => (
                <div key={f} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10 }}>
                  <span style={{ color:'#22C55E', fontSize:13, fontWeight:700, flexShrink:0 }}>✓</span>
                  <span style={{ fontSize:12, color:'#666' }}>{f}</span>
                </div>
              ))}
              <Link href="/login" style={{ display:'block', textAlign:'center', padding:'11px', borderRadius:6, fontSize:13, fontWeight:600, textDecoration:'none', marginTop:22, background: p.featured ? '#E8190C' : 'transparent', border: p.featured ? 'none' : '1px solid rgba(255,255,255,0.08)', color:'#fff' }}>เลือกแพ็กเกจ</Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ padding:'80px 48px', position:'relative', zIndex:1 }}>
        <div style={{ fontFamily:'monospace', fontSize:10, letterSpacing:3, color:'#E8190C', marginBottom:12 }}>FAQ</div>
        <h2 style={{ fontFamily:'monospace', fontSize:'clamp(22px,3.5vw,38px)', fontWeight:700, marginBottom:36 }}>คำถามที่พบบ่อย</h2>
        <div style={{ maxWidth:760, display:'flex', flexDirection:'column', gap:2 }}>
          {[
            { q:'01  เครดิตคืออะไร?', a:'เครดิตคือหน่วยที่ใช้เข้าถึงเครื่องมือ SEO แต่ละ tool ใช้เครดิตต่างกัน เช่น Site Audit ใช้ 10 เครดิต' },
            { q:'02  เครดิตหมดอายุไหม?', a:'เครดิตมีอายุ 12 เดือนนับจากวันที่ซื้อ ไม่มีวันหมดอายุรายเดือน' },
            { q:'03  สามารถขอเงินคืนได้หรือไม่?', a:'เครดิตที่ยังไม่ได้ใช้สามารถขอคืนได้ภายใน 7 วัน' },
            { q:'04  สามารถใช้งานเครื่องมือพร้อมกันได้ไหม?', a:'ได้เลย ไม่มีการจำกัดจำนวนการใช้งานพร้อมกัน' },
            { q:'05  มี API ให้ใช้งานหรือไม่?', a:'มี API สำหรับ Agency plan ติดต่อทีมเราเพื่อขอ documentation' },
          ].map((item, i) => (
            <div key={i} className="faq-row" onClick={() => setFaqOpen(faqOpen===i ? null : i)} style={{ background:'rgba(17,17,17,0.7)', border:'1px solid rgba(255,255,255,0.04)', borderRadius:6, overflow:'hidden', cursor:'pointer', backdropFilter:'blur(12px)', transition:'background 0.2s' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 22px' }}>
                <span style={{ fontSize:13, fontWeight:500, fontFamily:'monospace', color:'#D0CFC8' }}>{item.q}</span>
                <span style={{ fontSize:20, color:'#444', transform: faqOpen===i ? 'rotate(45deg)' : 'none', transition:'transform 0.2s', display:'block', lineHeight:1, flexShrink:0, marginLeft:12 }}>+</span>
              </div>
              {faqOpen===i && <div style={{ padding:'0 22px 16px', fontSize:13, color:'#555', lineHeight:1.8, borderTop:'1px solid rgba(255,255,255,0.03)' }}>{item.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ padding:'0 48px 80px', position:'relative', zIndex:1 }}>
        <div className="cta-inner" style={{ background:'#E8190C', borderRadius:14, padding:'72px 60px', textAlign:'center', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize:'40px 40px' }} />
          <div style={{ position:'relative', zIndex:1 }}>
            <h2 style={{ fontFamily:'monospace', fontSize:'clamp(24px,4vw,52px)', color:'#fff', fontWeight:800, lineHeight:1.15, marginBottom:16 }}>
              เริ่มต้นทำ SEO อย่างชาญฉลาด<br />ด้วย TOOLS NOT BILLS.
            </h2>
            <p style={{ fontSize:15, color:'rgba(255,255,255,0.7)', marginBottom:32 }}>สมัครฟรีวันนี้ รับทันที 50 เครดิต ไม่มีค่าใช้จ่าย</p>
            <Link href="/login" style={{ background:'#fff', color:'#E8190C', padding:'13px 32px', borderRadius:6, fontSize:14, fontWeight:700, textDecoration:'none', display:'inline-block' }}>สมัครฟรี 50 เครดิต →</Link>
            <div style={{ fontFamily:'monospace', fontSize:10, color:'rgba(255,255,255,0.35)', marginTop:20 }}>// NO_CARD · NO_SUBSCRIPTION · CANCEL_ANYTIME</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section-pad" style={{ background:'#050505', borderTop:'1px solid rgba(255,255,255,0.03)', padding:'52px 48px 28px', position:'relative', zIndex:1 }}>
        <div className="footer-grid" style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr 1.5fr', gap:40, marginBottom:48 }}>
          <div>
            <div style={{ fontFamily:'monospace', fontSize:15, fontWeight:700, marginBottom:14 }}>ThaiSEO<span style={{ color:'#E8190C' }}>Lab</span></div>
            <p style={{ fontSize:12, color:'#444', lineHeight:1.8, maxWidth:220, marginBottom:20 }}>แพลตฟอร์มรวมเครื่องมือ SEO สำหรับธุรกิจไทย</p>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
              {['f','▶','in','𝕏'].map(s => (
                <div key={s} style={{ width:30, height:30, borderRadius:'50%', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, color:'#555', cursor:'pointer' }}>{s}</div>
              ))}
            </div>
          </div>
          {[
            { title:'สินค้า', links:['เครื่องมือทั้งหมด','ราคา','บล็อก','อัปเดต'] },
            { title:'บริษัท', links:['เกี่ยวกับเรา','ทีมงาน','บล็อก','ติดต่อ'] },
            { title:'ช่วยเหลือ', links:['วิธีการใช้งาน','FAQ','Support'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontSize:12, fontWeight:600, marginBottom:16, color:'#888' }}>{col.title}</div>
              {col.links.map(l => <a key={l} href="#" style={{ display:'block', fontSize:12, color:'#444', textDecoration:'none', marginBottom:10 }}>{l}</a>)}
            </div>
          ))}
          <div>
            <div style={{ fontSize:12, fontWeight:600, marginBottom:16, color:'#888' }}>ติดตามข่าวสาร</div>
            <p style={{ fontSize:12, color:'#444', lineHeight:1.7, marginBottom:14 }}>รับข่าวสารและอัปเดตก่อนใคร</p>
            <div style={{ display:'flex' }}>
              <input placeholder="อีเมลของคุณ" style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRight:'none', borderRadius:'5px 0 0 5px', padding:'9px 12px', fontSize:12, color:'#F0EFE8', outline:'none', flex:1, minWidth:0 }} />
              <button style={{ background:'#E8190C', border:'none', borderRadius:'0 5px 5px 0', padding:'9px 14px', fontSize:12, color:'#fff', cursor:'pointer', fontWeight:600, whiteSpace:'nowrap' }}>ติดตาม</button>
            </div>
          </div>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:8, paddingTop:20, borderTop:'1px solid rgba(255,255,255,0.03)', fontSize:11, color:'#333', fontFamily:'monospace' }}>
          <span>© 2024 ThaiSEOLab Co., Ltd. All rights reserved.</span>
          <span>นโยบายความเป็นส่วนตัว · เงื่อนไขการให้บริการ</span>
        </div>
      </footer>
    </main>
  )
}