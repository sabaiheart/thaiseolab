"use client";

import { motion } from "framer-motion";

const rankings = [
  { keyword: "ร้าน SEO", position: 1, change: 12 },
  { keyword: "เครื่องมือ SEO", position: 2, change: 8 },
  { keyword: "SEO Tools", position: 4, change: 3 },
  { keyword: "Local SEO", position: 7, change: -2 },
  { keyword: "ตรวจสอบ SEO", position: 12, change: -5 },
];

const stats = [
  { title: "Organic Traffic", value: "25.6K", growth: "+241%" },
  { title: "Keywords Ranked", value: "1,248", growth: "+187%" },
  { title: "Impressions", value: "1.62M", growth: "+156%" },
  { title: "Clicks", value: "18.3K", growth: "+212%" },
];

function getPositionColor(pos: number) {
  if (pos <= 3) return "text-green-400";
  if (pos <= 7) return "text-yellow-400";
  return "text-red-400";
}

export default function DashboardHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative rounded-[32px] border border-red-500/20 bg-[#111111]/70 backdrop-blur-2xl p-6 shadow-[0_0_80px_rgba(232,25,12,0.18)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,25,12,0.18),transparent_40%)] pointer-events-none" />

      {/* TOP STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        {stats.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="bg-black/40 border border-white/5 rounded-2xl p-4 transition-all"
          >
            <div className="text-[11px] text-zinc-500 mb-2">{item.title}</div>
            <div className="text-[22px] font-bold font-mono text-white">{item.value}</div>
            <div className="text-green-400 text-[12px] mt-1">▲ {item.growth}</div>
          </motion.div>
        ))}
      </div>

      {/* GRAPH */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative h-[200px] rounded-2xl border border-red-500/10 bg-black/30 overflow-hidden p-4 mb-5"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <svg viewBox="0 0 600 200" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="graphGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(232,25,12,0.3)" />
              <stop offset="100%" stopColor="rgba(232,25,12,0)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M20 180 C80 160,120 140,160 120 S240 90,280 80 S360 50,420 55 S500 25,580 10"
            fill="none" stroke="#E8190C" strokeWidth="3" strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M20 180 C80 160,120 140,160 120 S240 90,280 80 S360 50,420 55 S500 25,580 10 L580 200 L20 200 Z"
            fill="url(#graphGrad)"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
        </svg>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute right-8 top-6 bg-[#111] border border-red-500/20 rounded-xl px-4 py-3 shadow-[0_0_30px_rgba(232,25,12,0.2)]"
        >
          <div className="text-[28px] font-bold font-mono text-white">25,600</div>
          <div className="text-zinc-500 text-[11px] mt-0.5">30 มิ.ย. 68</div>
        </motion.div>
      </motion.div>

      {/* BOTTOM CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }} whileHover={{ y: -4 }}
          className="bg-black/40 border border-white/5 rounded-2xl p-5"
        >
          <div className="text-[12px] text-zinc-500 mb-4">AI Overview Visibility</div>
          <div className="relative w-28 h-28 mx-auto">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" stroke="#222" strokeWidth="10" fill="none" />
              <motion.circle
                cx="60" cy="60" r="50" stroke="#E8190C" strokeWidth="10" fill="none"
                strokeLinecap="round" strokeDasharray={314}
                initial={{ strokeDashoffset: 314 }} animate={{ strokeDashoffset: 100 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[32px] font-bold font-mono">68%</div>
            </div>
          </div>
          <div className="text-green-400 text-center mt-3 text-[13px]">▲ 18%</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-black/40 border border-white/5 rounded-2xl p-5"
        >
          <div className="flex justify-between mb-4">
            <div className="text-[12px] text-zinc-500">Keyword Rankings</div>
            <div className="text-[#E8190C] text-[12px]">ดูทั้งหมด</div>
          </div>
          <div className="space-y-3">
            {rankings.map((item, i) => (
              <motion.div
                key={item.keyword}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="flex items-center justify-between border-b border-white/5 pb-2"
              >
                <div className="text-[12px] text-zinc-300">{item.keyword}</div>
                <div className="flex items-center gap-3">
                  <div className={`font-mono font-bold text-[13px] ${getPositionColor(item.position)}`}>#{item.position}</div>
                  <div className={`text-[11px] ${item.change > 0 ? "text-green-400" : "text-red-400"}`}>
                    {item.change > 0 ? "▲" : "▼"} {Math.abs(item.change)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }} whileHover={{ y: -4 }}
          className="bg-black/40 border border-white/5 rounded-2xl p-5"
        >
          <div className="text-[12px] text-zinc-500 mb-3">Crawl Health</div>
          <div className="text-[56px] font-bold font-mono text-green-400">98</div>
          <div className="text-green-400 text-[13px] mt-1">Excellent</div>
          <div className="mt-6 flex items-end gap-1.5 h-16">
            {[10, 20, 15, 40, 30, 55, 70].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }} animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex-1 bg-green-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}