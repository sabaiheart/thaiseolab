"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, Shield, Link2, FileText, LineChart, Menu, X, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import DashboardHero from "./components/DashboardHero";

const tools = [
  { icon: Search, title: "Keyword Research", desc: "ค้นหาคีย์เวิร์ด วิเคราะห์แนวโน้ม และความยากของคีย์เวิร์ด", credits: "5 เครดิต" },
  { icon: BarChart3, title: "Local SEO Report", desc: "วิเคราะห์ SEO ท้องถิ่น เช็ค NAP และอันดับบน Google Maps", credits: "10 เครดิต" },
  { icon: Shield, title: "Site Audit", desc: "ตรวจสอบสุขภาพเว็บไซต์ ครอบคลุม Technical, On-page และ UX", credits: "15 เครดิต" },
  { icon: Link2, title: "Backlink Checker", desc: "วิเคราะห์ Backlink ตรวจสอบคะแนนและคุณภาพของลิงก์", credits: "10 เครดิต" },
  { icon: FileText, title: "Content Brief AI", desc: "สร้าง Content Brief อัตโนมัติด้วย AI ที่เข้าใจ SEO", credits: "8 เครดิต" },
  { icon: LineChart, title: "Rank Tracker", desc: "ติดตามอันดับคีย์เวิร์ดแบบเรียลไทม์ บน Google ประเทศไทย", credits: "10 เครดิต" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <main className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <style>{`
        .grid-bg { background-image: linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px); background-size: 48px 48px; }
        .tool-card:hover { border-color: rgba(232,25,12,0.25) !important; transform: translateY(-2px); }
        .tool-card { transition: all 0.2s; }
      `}</style>

      {/* GRID BG */}
      <div className="fixed inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="fixed top-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(232,25,12,0.04) 0%,transparent 65%)" }} />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono text-[15px] font-bold text-gray-900">ThaiSEO<span className="text-[#E8190C]">Lab</span></div>
          <div className="hidden md:flex items-center gap-8 text-[13px] text-gray-500">
            {["เครื่องมือ","ราคา","วิธีใช้งาน","รีวิว","บล็อก"].map(t => (
              <a key={t} href="#" className="hover:text-gray-900 transition-colors">{t}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden sm:block bg-[#E8190C] hover:bg-red-700 transition text-white px-5 py-2 rounded-lg text-[13px] font-semibold shadow-sm">
              สมัครฟรี →
            </Link>
            <button className="md:hidden p-1 text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4 shadow-lg">
            {["เครื่องมือ","ราคา","วิธีใช้งาน","รีวิว","บล็อก"].map(t => (
              <a key={t} href="#" className="text-[15px] text-gray-600" onClick={() => setMenuOpen(false)}>{t}</a>
            ))}
            <Link href="/login" className="bg-[#E8190C] text-white text-center py-3 rounded-lg font-semibold mt-2" onClick={() => setMenuOpen(false)}>
              สมัครฟรี 50 เครดิต →
            </Link>
          </motion.div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6">
        <div className="max-w-[1440px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full text-[10px] font-mono tracking-[2px] text-[#E8190C] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8190C] animate-pulse inline-block" />
              PAY-PER-USE SEO TOOLS FOR THAI BUSINESSES
            </div>
            <h1 className="font-mono font-black leading-[0.92] tracking-[-3px] text-[clamp(52px,7vw,96px)] text-gray-900 mb-6">
              TOOLS<br />NOT<br /><span className="text-[#E8190C]">BILLS.</span>
            </h1>
            <p className="text-gray-500 text-[15px] leading-[1.9] mb-10 max-w-md">
              แพลตฟอร์มรวมเครื่องมือ SEO ที่ดีที่สุด<br />
              จ่ายเฉพาะสิ่งที่ใช้ <strong className="text-gray-700">ไม่มีรายเดือน ไม่มีผูกมัด</strong>
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <Link href="/login" className="bg-[#E8190C] hover:bg-red-700 transition text-white px-6 py-3 rounded-lg font-semibold text-[14px] shadow-sm">
                สมัครฟรี 50 เครดิต →
              </Link>
              <a href="#tools" className="bg-gray-50 hover:bg-gray-100 transition text-gray-600 px-6 py-3 rounded-lg text-[14px] border border-gray-200">
                ดูเครื่องมือทั้งหมด
              </a>
            </div>
            <div className="flex gap-0 border-t border-gray-100 pt-8">
              {[
                { n: "฿0", sub: "Subscription", desc: "No monthly fees" },
                { n: "15+", sub: "Powerful Tools", desc: "For every SEO need" },
                { n: "฿0.25", sub: "Per Credit", desc: "Pay only for what you use" },
              ].map((s, i) => (
                <div key={s.sub} className={`flex-1 ${i > 0 ? "pl-6" : ""} ${i < 2 ? "pr-6 border-r border-gray-100" : ""}`}>
                  <div className={`font-mono text-[22px] font-bold mb-1 ${i === 1 ? "text-gray-900" : "text-[#E8190C]"}`}>{s.n}</div>
                  <div className="text-[12px] font-semibold text-gray-700 mb-1">{s.sub}</div>
                  <div className="text-[11px] text-gray-400">{s.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="hidden lg:block">
            <DashboardHero />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#E8190C] font-mono text-[10px] tracking-[3px] mb-3">HOW IT WORKS</div>
            <h2 className="font-mono text-[clamp(22px,3.5vw,38px)] font-bold text-gray-900">ใช้งานง่ายใน 3 ขั้นตอน</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
            {[
              { n: "01", title: "สมัครฟรี", desc: "สมัครด้วย email รับ 50 เครดิตฟรีทันที ไม่ต้องใช้บัตรเครดิต" },
              { n: "02", title: "เลือก Tool", desc: "เลือกเครื่องมือที่ต้องการ และชำระด้วยเครดิต ราคาโปร่งใส" },
              { n: "03", title: "รับผลลัพธ์", desc: "ได้ข้อมูล SEO แบบเรียลไทม์ พร้อม AI วิเคราะห์ภาษาไทย" },
            ].map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                <div className="font-mono text-[#E8190C] text-[11px] tracking-[2px] mb-4">{s.n}</div>
                <div className="text-[16px] font-semibold text-gray-900 mb-3">{s.title}</div>
                <p className="text-[13px] text-gray-500 leading-[1.8]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
            <div>
              <div className="text-[#E8190C] font-mono text-[10px] tracking-[3px] mb-3">TOOLS AVAILABLE</div>
              <h2 className="font-mono text-[clamp(22px,3.5vw,38px)] font-bold text-gray-900">เครื่องมือ SEO ที่ทรงพลัง</h2>
            </div>
            <a href="#" className="text-[13px] text-[#E8190C]">ดูทั้งหมด →</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <motion.div key={tool.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="tool-card bg-white border border-gray-100 rounded-xl p-6 shadow-sm cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#E8190C]" />
                  </div>
                  <h3 className="text-[14px] font-semibold text-gray-900 mb-2">{tool.title}</h3>
                  <p className="text-[12px] text-gray-500 leading-[1.7] mb-4">{tool.desc}</p>
                  <div className="inline-flex bg-red-50 border border-red-100 text-[#E8190C] text-[11px] px-3 py-1.5 rounded font-mono">{tool.credits}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-[#E8190C] font-mono text-[10px] tracking-[3px] mb-3">COMPARISON</div>
          <h2 className="font-mono text-[clamp(22px,3.5vw,38px)] font-bold text-gray-900 mb-10">เปรียบเทียบทำไมต้อง ThaiSEOLab?</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[520px] text-[13px] bg-white">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="p-4 text-left text-gray-400 font-normal w-[30%]"></th>
                  <th className="p-4 text-center text-[#E8190C] font-semibold bg-red-50 border-x border-red-100">ThaiSEOLab</th>
                  <th className="p-4 text-center text-gray-400 font-normal">Ahrefs</th>
                  <th className="p-4 text-center text-gray-400 font-normal">SEMrush</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["รูปแบบการคิดเงิน","Pay-per-use","รายเดือน","รายเดือน"],
                  ["ราคาเริ่มต้น","฿0.25 / เครดิต","87,990 / เดือน","86,990 / เดือน"],
                  ["ไม่มีขั้นต่ำ","✓","✗","✗"],
                  ["ไม่ต้องใช้บัตรเครดิต","✓","✗","✗"],
                  ["ยกเลิกได้ทันที","✓","✗","✗"],
                  ["เหมาะสำหรับ","ทุกธุรกิจในไทย","องค์กรขนาดใหญ่","องค์กรขนาดใหญ่"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-600">{row[0]}</td>
                    <td className={`p-4 text-center bg-red-50/50 border-x border-red-50 font-medium ${row[1]==="✓" ? "text-green-600 text-[16px] font-bold" : row[1]==="✗" ? "text-gray-200 text-[16px]" : "text-gray-900"}`}>{row[1]}</td>
                    <td className={`p-4 text-center ${row[2]==="✓" ? "text-green-600 text-[16px] font-bold" : row[2]==="✗" ? "text-gray-200 text-[16px]" : "text-gray-400"}`}>{row[2]}</td>
                    <td className={`p-4 text-center ${row[3]==="✓" ? "text-green-600 text-[16px] font-bold" : row[3]==="✗" ? "text-gray-200 text-[16px]" : "text-gray-400"}`}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-[#E8190C] font-mono text-[10px] tracking-[3px] mb-3">TESTIMONIALS</div>
          <h2 className="font-mono text-[clamp(22px,3.5vw,38px)] font-bold text-gray-900 mb-10">ลูกค้าของเราพูดถึงเรา</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { text: '"เครื่องมือครบ ใช้งานง่าย และถูกมากๆ เหมาะกับธุรกิจไทยที่อยากทำ SEO เอง"', name: "คุณนิล", role: "เจ้าของร้านค้าออนไลน์" },
              { text: '"Site Audit ช่วยให้เราแก้ปัญหาได้ตรงจุด อันดับดีขึ้นเร็วมาก ภายใน 1 เดือน"', name: "คุณอร", role: "Digital Marketer" },
              { text: '"จ่ายเท่าที่ใช้ ไม่ต้องเสียรายเดือน คุ้มที่สุดสำหรับเอเจนซี่ขนาดเล็ก"', name: "คุณปอม", role: "Agency Owner" },
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="text-[32px] text-[#E8190C] opacity-30 mb-3 font-mono">"</div>
                <p className="text-[13px] text-gray-600 leading-[1.9] mb-6">{t.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                  <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[13px] shrink-0">👤</div>
                  <div>
                    <div className="text-[13px] font-semibold text-gray-900">{t.name}</div>
                    <div className="text-[11px] text-gray-400 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#E8190C] font-mono text-[10px] tracking-[3px] mb-3">PRICING</div>
            <h2 className="font-mono text-[clamp(22px,3.5vw,38px)] font-bold text-gray-900 mb-2">แพ็กเกจยอดนิยม</h2>
            <p className="text-[13px] text-gray-400">* เครดิตที่ไม่ได้ใช้จะถูกโอนไปในเดือนถัดไป</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-[960px] mx-auto">
            {[
              { name: "Starter", sub: "สำหรับผู้เริ่มต้น", price: "฿199", unit: "/เดือน", credits: "ได้รับ 800 เครดิต / เดือน", features: ["ใช้งานเครื่องมือพื้นฐาน","รายงานมาตรฐาน","ส่งออกข้อมูลได้"], featured: false },
              { name: "Growth", sub: "สำหรับธุรกิจที่กำลังโต", price: "฿590", unit: "/เดือน", credits: "ได้รับ 2,500 เครดิต / เดือน", features: ["ใช้งานเครื่องมือทั้งหมด","ข้อมูลเชิงลึกมากขึ้น","Priority Support"], featured: true },
              { name: "Agency", sub: "สำหรับเอเจนซี่", price: "฿1,490", unit: "/เดือน", credits: "ได้รับ 7,000 เครดิต / เดือน", features: ["ใช้งานไม่จำกัด","สิทธิ์พิเศษสำหรับเอเจนซี่","API Access"], featured: false },
            ].map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`rounded-2xl p-7 relative ${p.featured ? "border-2 border-[#E8190C] bg-white shadow-lg" : "bg-white border border-gray-100 shadow-sm"}`}>
                {p.featured && <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-[#E8190C] text-white text-[9px] font-mono tracking-[2px] px-4 py-1 rounded-b-md">POPULAR</div>}
                <div className="text-[16px] font-bold text-gray-900 mb-1">{p.name}</div>
                <div className="text-[12px] text-gray-400 mb-5">{p.sub}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-mono text-[38px] font-bold tracking-tight text-gray-900">{p.price}</span>
                  <span className="text-[13px] text-gray-400">{p.unit}</span>
                </div>
                <div className="text-[12px] text-gray-400 mb-6 pb-5 border-b border-gray-100">{p.credits}</div>
                {p.features.map(f => (
                  <div key={f} className="flex items-center gap-2 mb-3">
                    <Check size={14} className="text-green-500 shrink-0" />
                    <span className="text-[12px] text-gray-600">{f}</span>
                  </div>
                ))}
                <Link href="/login" className={`block text-center py-3 rounded-lg text-[13px] font-semibold mt-6 transition ${p.featured ? "bg-[#E8190C] text-white hover:bg-red-700" : "border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"}`}>
                  เลือกแพ็กเกจ
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-[#E8190C] font-mono text-[10px] tracking-[3px] mb-3">FAQ</div>
          <h2 className="font-mono text-[clamp(22px,3.5vw,38px)] font-bold text-gray-900 mb-10">คำถามที่พบบ่อย</h2>
          <div className="max-w-[760px] flex flex-col gap-2">
            {[
              { q: "01  เครดิตคืออะไร?", a: "เครดิตคือหน่วยที่ใช้เข้าถึงเครื่องมือ SEO แต่ละ tool ใช้เครดิตต่างกัน เช่น Site Audit ใช้ 10 เครดิต" },
              { q: "02  เครดิตหมดอายุไหม?", a: "เครดิตมีอายุ 12 เดือนนับจากวันที่ซื้อ ไม่มีวันหมดอายุรายเดือน" },
              { q: "03  สามารถขอเงินคืนได้หรือไม่?", a: "เครดิตที่ยังไม่ได้ใช้สามารถขอคืนได้ภายใน 7 วัน" },
              { q: "04  ใช้งานพร้อมกันได้ไหม?", a: "ได้เลย ไม่มีการจำกัดจำนวนการใช้งานพร้อมกัน" },
              { q: "05  มี API ให้ใช้งานไหม?", a: "มี API สำหรับ Agency plan ติดต่อทีมเราเพื่อขอ documentation" },
            ].map((item, i) => (
              <div key={i} onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="bg-white border border-gray-100 rounded-xl overflow-hidden cursor-pointer hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="flex justify-between items-center px-5 py-4">
                  <span className="text-[13px] font-mono font-medium text-gray-700">{item.q}</span>
                  <span className="text-[20px] text-gray-300 shrink-0 ml-3 transition-transform" style={{ transform: faqOpen === i ? "rotate(45deg)" : "none" }}>+</span>
                </div>
                {faqOpen === i && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-5 pb-4 text-[13px] text-gray-500 leading-[1.8] border-t border-gray-50">
                    {item.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-[#E8190C] rounded-2xl px-10 py-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="relative z-10">
              <h2 className="font-mono text-[clamp(24px,4.5vw,52px)] font-black text-white leading-[1.1] mb-4">
                เริ่มต้นทำ SEO อย่างชาญฉลาด<br />ด้วย TOOLS NOT BILLS.
              </h2>
              <p className="text-white/70 text-[15px] mb-8">สมัครฟรีวันนี้ รับทันที 50 เครดิต ไม่มีค่าใช้จ่าย</p>
              <Link href="/login" className="bg-white text-[#E8190C] px-8 py-3.5 rounded-lg text-[14px] font-bold inline-block hover:scale-105 transition shadow-sm">
                สมัครฟรี 50 เครดิต →
              </Link>
              <div className="font-mono text-[10px] text-white/30 mt-5">// NO_CARD · NO_SUBSCRIPTION · CANCEL_ANYTIME</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 px-6 pt-14 pb-7">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1.5fr] gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="font-mono text-[15px] font-bold text-gray-900 mb-4">ThaiSEO<span className="text-[#E8190C]">Lab</span></div>
              <p className="text-[12px] text-gray-400 leading-[1.8] max-w-[220px] mb-5">แพลตฟอร์มรวมเครื่องมือ SEO สำหรับธุรกิจไทย</p>
              <div className="flex gap-2">
                {["f","▶","in","𝕏"].map(s => (
                  <div key={s} className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[11px] text-gray-400 cursor-pointer hover:border-gray-300 transition">{s}</div>
                ))}
              </div>
            </div>
            {[
              { title: "สินค้า", links: ["เครื่องมือทั้งหมด","ราคา","บล็อก","อัปเดต"] },
              { title: "บริษัท", links: ["เกี่ยวกับเรา","ทีมงาน","ติดต่อ"] },
              { title: "ช่วยเหลือ", links: ["วิธีการใช้งาน","FAQ","Support"] },
            ].map(col => (
              <div key={col.title}>
                <div className="text-[12px] font-semibold text-gray-700 mb-4">{col.title}</div>
                {col.links.map(l => <a key={l} href="#" className="block text-[12px] text-gray-400 mb-3 hover:text-gray-700 transition">{l}</a>)}
              </div>
            ))}
            <div>
              <div className="text-[12px] font-semibold text-gray-700 mb-4">ติดตามข่าวสาร</div>
              <p className="text-[12px] text-gray-400 leading-[1.7] mb-4">รับข่าวสารและอัปเดตก่อนใคร</p>
              <div className="flex">
                <input placeholder="อีเมลของคุณ" className="bg-gray-50 border border-gray-200 border-r-0 rounded-l-md px-3 py-2.5 text-[12px] text-gray-700 outline-none flex-1 min-w-0 placeholder:text-gray-300 focus:border-gray-300" />
                <button className="bg-[#E8190C] rounded-r-md px-4 py-2.5 text-[12px] text-white font-semibold whitespace-nowrap hover:bg-red-700 transition">ติดตาม</button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-2 pt-5 border-t border-gray-100 text-[11px] text-gray-300 font-mono">
            <span>© 2024 ThaiSEOLab Co., Ltd. All rights reserved.</span>
            <span>นโยบายความเป็นส่วนตัว · เงื่อนไขการให้บริการ</span>
          </div>
        </div>
      </footer>
    </main>
  );
}