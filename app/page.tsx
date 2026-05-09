npx create-next-app@latest thaiseolab
cd thaiseolab

npm install framer-motion lucide-react clsx tailwind-merge

==================================================
tailwind.config.ts
==================

import type { Config } from "tailwindcss";

const config: Config = {
content: [
"./pages/**/*.{js,ts,jsx,tsx,mdx}",
"./components/**/*.{js,ts,jsx,tsx,mdx}",
"./app/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
extend: {
colors: {
background: "#090909",
card: "#111111",
primary: "#E8190C",
text: "#F0EFE8",
muted: "#555555",
success: "#22C55E",
},
fontFamily: {
mono: ["IBM Plex Mono", "monospace"],
},
boxShadow: {
glow: "0 0 40px rgba(232,25,12,0.25)",
},
},
},
plugins: [],
};

export default config;

==================================================
app/globals.css
===============

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
scroll-behavior: smooth;
}

body {
background: #090909;
color: #F0EFE8;
}

.grid-bg {
background-image:
linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
background-size: 50px 50px;
}

.glass {
background: rgba(17,17,17,0.7);
backdrop-filter: blur(20px);
border: 1px solid rgba(255,255,255,0.06);
}

.red-glow {
box-shadow: 0 0 40px rgba(232,25,12,0.18);
}

==================================================
app/page.tsx
============

"use client";

import { motion } from "framer-motion";
import {
Search,
BarChart3,
Shield,
Link2,
FileText,
LineChart,
} from "lucide-react";

const tools = [
{
icon: Search,
title: "Keyword Research",
desc: "ค้นหาคีย์เวิร์ด วิเคราะห์แนวโน้ม และความยาก",
credits: "5 เครดิต",
},
{
icon: BarChart3,
title: "Local SEO Report",
desc: "วิเคราะห์ SEO ท้องถิ่น และ Google Maps",
credits: "10 เครดิต",
},
{
icon: Shield,
title: "Site Audit",
desc: "ตรวจสอบ Technical SEO และ UX",
credits: "15 เครดิต",
},
{
icon: Link2,
title: "Backlink Checker",
desc: "วิเคราะห์ Backlink และคุณภาพลิงก์",
credits: "10 เครดิต",
},
{
icon: FileText,
title: "Content Brief AI",
desc: "สร้าง SEO Content Brief ด้วย AI",
credits: "8 เครดิต",
},
{
icon: LineChart,
title: "Rank Tracker",
desc: "ติดตามอันดับ Google ประเทศไทย",
credits: "10 เครดิต",
},
];

export default function Home() {
return ( <main className="bg-background text-text min-h-screen overflow-hidden"> <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />

```
  <div className="fixed top-[-200px] right-[-200px] w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full pointer-events-none" />

  {/* NAVBAR */}
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-black/30">
    <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
      <div className="font-mono text-xl font-bold">
        ThaiSEO<span className="text-primary">Lab</span>
      </div>

      <div className="hidden md:flex gap-8 text-sm text-muted">
        <a href="#">เครื่องมือ</a>
        <a href="#">ราคา</a>
        <a href="#">วิธีใช้งาน</a>
        <a href="#">รีวิว</a>
        <a href="#">บล็อก</a>
      </div>

      <button className="bg-primary hover:bg-red-700 transition px-5 py-2 rounded-md text-sm font-semibold shadow-glow">
        สมัครฟรี 50 เครดิต
      </button>
    </div>
  </nav>

  {/* HERO */}
  <section className="relative min-h-screen flex items-center pt-20">
    <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 px-4 py-2 rounded-full text-[11px] font-mono tracking-[2px] text-primary mb-8">
          PAY-PER-USE SEO TOOLS FOR THAI BUSINESSES
        </div>

        <h1 className="font-mono font-black leading-[0.9] tracking-[-4px] text-[80px] md:text-[120px]">
          TOOLS
          <br />
          <span className="text-primary">NOT</span>
          <br />
          BILLS.
        </h1>

        <p className="mt-8 text-muted text-lg leading-8 max-w-xl">
          แพลตฟอร์มรวมเครื่องมือ SEO ที่ดีที่สุด
          จ่ายเฉพาะสิ่งที่ใช้ ไม่มีรายเดือน ไม่มีผูกมัด
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-primary px-6 py-4 rounded-lg font-semibold shadow-glow hover:scale-105 transition">
            สมัครฟรี 50 เครดิต
          </button>

          <button className="glass px-6 py-4 rounded-lg hover:border-primary/30 transition">
            ดูเครื่องมือทั้งหมด
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 border-t border-white/5 pt-8">
          <div>
            <div className="font-mono text-3xl font-bold text-primary">
              ฿0
            </div>
            <div className="text-sm text-muted mt-2">
              No monthly fees
            </div>
          </div>

          <div>
            <div className="font-mono text-3xl font-bold">
              15+
            </div>
            <div className="text-sm text-muted mt-2">
              Powerful tools
            </div>
          </div>

          <div>
            <div className="font-mono text-3xl font-bold text-primary">
              ฿0.25
            </div>
            <div className="text-sm text-muted mt-2">
              Per credit
            </div>
          </div>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        <div className="glass red-glow rounded-3xl p-8 border-primary/20">

          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              ["Organic Traffic", "25.6K"],
              ["Keywords", "1,248"],
              ["Clicks", "18.3K"],
              ["AI Visibility", "68%"],
            ].map((item) => (
              <div
                key={item[0]}
                className="bg-black/40 border border-white/5 rounded-xl p-4"
              >
                <div className="text-xs text-muted">
                  {item[0]}
                </div>
                <div className="font-mono text-2xl font-bold mt-2">
                  {item[1]}
                </div>
              </div>
            ))}
          </div>

          <div className="h-[240px] rounded-2xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/10 flex items-end p-6">
            <div className="w-full flex items-end gap-4">
              {[20,40,35,60,80,100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary rounded-t-md"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-black/40 border border-white/5 rounded-xl p-5">
              <div className="text-sm text-muted mb-4">
                Keyword Rankings
              </div>

              {[
                ["ร้าน SEO", "#1", "text-success"],
                ["SEO Tools", "#4", "text-yellow-500"],
                ["Local SEO", "#12", "text-red-500"],
              ].map((k) => (
                <div
                  key={k[0]}
                  className="flex justify-between py-2 border-b border-white/5"
                >
                  <span>{k[0]}</span>
                  <span className={`font-mono ${k[2]}`}>
                    {k[1]}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-black/40 border border-white/5 rounded-xl p-5">
              <div className="text-sm text-muted mb-4">
                Crawl Health
              </div>

              <div className="font-mono text-5xl text-success font-bold">
                98
              </div>

              <div className="mt-2 text-success">
                Excellent
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>

  {/* TOOLS */}
  <section className="py-32">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="mb-16">
        <div className="text-primary font-mono text-xs tracking-[3px] mb-4">
          TOOLS
        </div>

        <h2 className="font-mono text-5xl font-bold">
          Powerful SEO Tools
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool, index) => {
          const Icon = tool.icon;

          return (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-2xl p-6 hover:border-primary/20 hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <Icon className="text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {tool.title}
              </h3>

              <p className="text-muted leading-7 text-sm mb-6">
                {tool.desc}
              </p>

              <div className="inline-flex bg-primary/10 border border-primary/20 text-primary text-xs px-3 py-2 rounded-md font-mono">
                {tool.credits}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
</main>
```

);
}
