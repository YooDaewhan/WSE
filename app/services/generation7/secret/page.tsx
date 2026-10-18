"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Header from "../../../components/Header";
import { content, type RequestLevel } from "./content";

type GenerationSecretPageData = {
  id: number;
  label: string;
  teamName: string;
  emoji: string;
  gradient: string;
  href: string;
  directorName: string;
  noteDate: string;
  unlockDate: string;
  note: { opening: string; origin: string; direction: string; closing: string };
  classified: { label: string; content: string }[];
  operations: { text: string; level: RequestLevel }[];
  teamNote: string;
};

/* ──────────────────────────────────────────
   6기 시큐리티엑스 — 기수 시크릿

   이 페이지는 완전히 독립적입니다.
   여기 있는 데이터·레이아웃·연출을 마음대로 고쳐도
   다른 페이지에는 아무 영향이 없습니다.
────────────────────────────────────────── */

const gen: GenerationSecretPageData = {
  id: 7,
  label: "6기",
  teamName: "시큐리티엑스",
  emoji: "🛡️",
  gradient: "from-blue-600 via-sky-600 to-cyan-500",
  href: "/services/generation7",

  directorName: "오세준",
  noteDate: "2025년 9월 1일",
  unlockDate: "2026년 9월 1일",

  ...content,
};

/* ════════════════════════════════════════
   기밀 문서 연출 — 주사선 · 도장 · 검열 막대
════════════════════════════════════════ */

const SCANLINES = {
  backgroundImage:
    "repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 3px)",
};

function Stamp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none select-none inline-block border-[3px] border-red-600/60 text-red-600/60 font-mono font-black uppercase tracking-[0.25em] px-3 py-1 rounded-sm mix-blend-multiply ${className}`}
    >
      {children}
    </div>
  );
}

function Redaction({ widths }: { widths: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5" aria-hidden>
      {widths.map((w, i) => (
        <span key={i} className="h-2 rounded-[1px] bg-white/10" style={{ width: w }} />
      ))}
    </div>
  );
}

function SectionLabel({
  no,
  title,
  icon,
  tone,
}: {
  no: string;
  title: string;
  icon: string;
  tone: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-12 font-mono">
      <div className="w-8 h-8 rounded-sm border border-white/15 bg-white/[0.03] flex items-center justify-center text-sm">
        {icon}
      </div>
      <span className={`text-xs font-bold tracking-[0.3em] uppercase ${tone}`}>
        § {no} ── {title}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
    </div>
  );
}

/* ════════════════════════════════════════
   섹션 컴포넌트들
════════════════════════════════════════ */

/* ── 섹션 1: 디렉터 노트 ── */
function DirectorNoteSection({
  gen,
}: {
  gen: GenerationSecretPageData;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center py-24 px-6 relative bg-[#0b0b0d]"
    >
      <div className="absolute inset-0 pointer-events-none" style={SCANLINES} />
      <div className="max-w-3xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel
            no="01"
            title="Director's Note"
            icon="📝"
            tone="text-amber-300/80"
          />
          <div className="relative bg-[#f2ecdd] rounded-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(0,0,0,0.6) 24px, rgba(0,0,0,0.6) 25px)",
              }}
            />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(120,90,40,0.18))]" />
            <Stamp className="absolute top-[6.5rem] left-1/2 -translate-x-1/2 -rotate-12 text-sm md:text-base">
              Internal Only
            </Stamp>

            <div className="relative bg-[#141416] px-6 py-5 flex items-center justify-between border-b-4 border-red-700/70">
              <div className="font-mono">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">
                  MCM Internal Note
                </p>
                <p className="text-white text-lg font-bold">
                  {gen.label} {gen.teamName}
                </p>
              </div>
              <div className="text-4xl opacity-70 grayscale">{gen.emoji}</div>
            </div>

            <div className="relative p-8 md:p-12 text-stone-800">
              <div className="flex items-start justify-between mb-8 pb-6 border-b border-dashed border-stone-400/60 font-mono">
                <div>
                  <p className="text-stone-400 text-[10px] tracking-[0.25em] mb-1">DATE</p>
                  <p className="text-stone-700 text-sm font-semibold">
                    {gen.noteDate}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-stone-400 text-[10px] tracking-[0.25em] mb-1">DIRECTOR</p>
                  <p className="text-stone-700 text-sm font-semibold">
                    {gen.directorName} 디렉터
                  </p>
                </div>
              </div>
              <div className="space-y-8 leading-[1.9]">
                <div>
                  <p className="font-mono text-[11px] font-bold text-stone-400 uppercase tracking-[0.25em] mb-3">
                    ▌기수 출범의 변
                  </p>
                  <p className="text-base">{gen.note.opening}</p>
                </div>
                <div className="w-full h-px bg-stone-300/70" />
                <div>
                  <p className="font-mono text-[11px] font-bold text-stone-400 uppercase tracking-[0.25em] mb-3">
                    ▌기획 의도
                  </p>
                  <p className="text-base">{gen.note.origin}</p>
                </div>
                <div className="w-full h-px bg-stone-300/70" />
                <div>
                  <p className="font-mono text-[11px] font-bold text-stone-400 uppercase tracking-[0.25em] mb-3">
                    ▌팀 운영 방향
                  </p>
                  <div className="mt-4 pl-5 border-l-4 border-red-700/40">
                    <p className="text-base italic text-stone-600">
                      {gen.note.direction}
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-base text-stone-500 italic">
                    {gen.note.closing}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-stone-900 font-bold text-lg">
                        {gen.directorName}
                      </p>
                      <p className="text-stone-400 text-sm">
                        {gen.label} {gen.teamName} 담당 디렉터
                      </p>
                    </div>
                    <div className="w-20 h-20 rounded-full border-[3px] border-red-700/70 text-red-700/80 flex flex-col items-center justify-center rotate-[-8deg] font-bold select-none">
                      <span className="text-xl leading-none">{gen.emoji}</span>
                      <span className="text-sm mt-1 tracking-widest">출범</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── 섹션 2: 비밀 설정 ── */
function ClassifiedSection({
  gen,
}: {
  gen: GenerationSecretPageData;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [revealed, setRevealed] = useState<number | null>(null);

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center py-24 px-6 relative bg-black"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl ${gen.gradient} opacity-[0.08] blur-[120px]`}
        />
        <div className="absolute inset-0" style={SCANLINES} />
        <p className="absolute -right-10 top-1/3 rotate-90 font-mono font-black text-[90px] tracking-[0.2em] text-white/[0.02] whitespace-nowrap select-none">
          CLASSIFIED
        </p>
      </div>
      <div className="max-w-3xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel
            no="02"
            title="Team Classified"
            icon="🔐"
            tone="text-red-400"
          />
          <div className="flex items-center gap-4 mb-10 p-4 rounded-sm border border-dashed border-red-500/40 bg-red-950/20">
            <div className="text-2xl">⚠️</div>
            <div className="font-mono">
              <p className="text-red-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">
                기밀 해제 일자
              </p>
              <p className="text-white font-bold">{gen.unlockDate}</p>
              <p className="text-gray-500 text-xs mt-1">
                해당 일자 이전 무단 공개 시 계약 위반에 해당합니다.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {gen.classified.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <button
                  onClick={() => setRevealed(revealed === i ? null : i)}
                  className="group w-full text-left"
                >
                  <div
                    className={`relative rounded-sm border transition-all duration-300 overflow-hidden ${revealed === i ? "border-red-500/40 bg-white/[0.05]" : "border-white/10 bg-white/[0.02] hover:border-red-500/30"}`}
                  >
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${gen.gradient} ${revealed === i ? "opacity-100" : "opacity-60"}`}
                    />
                    <div className="flex items-center justify-between p-5 pl-6">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-white/25 text-sm font-bold tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="font-mono text-red-400/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">
                            Classified
                          </p>
                          <p className="text-white font-bold">{item.label}</p>
                        </div>
                      </div>
                      <div className="font-mono text-[10px] tracking-[0.2em] text-white/30 group-hover:text-red-300 transition-colors flex items-center gap-2">
                        <span className="hidden sm:inline">
                          {revealed === i ? "SEAL" : "DECRYPT"}
                        </span>
                        <span
                          className={`w-7 h-7 rounded-sm border border-white/15 flex items-center justify-center transition-transform ${revealed === i ? "rotate-180" : ""}`}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    {revealed === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5"
                      >
                        <div className="pt-4 border-t border-dashed border-white/10">
                          <p className="text-gray-300 leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex items-center justify-center gap-3 opacity-40 font-mono">
            <div className="flex-1 h-px bg-white/15" />
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">
              ■ MCM Confidential ■
            </p>
            <div className="flex-1 h-px bg-white/15" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── 섹션 3: 운영 가이드라인 ── */
const LEVEL_CONFIG: Record<
  RequestLevel,
  {
    label: string;
    sublabel: string;
    desc: string;
    bg: string;
    border: string;
    badge: string;
    badgeText: string;
    dot: string;
    icon: string;
  }
> = {
  필수: {
    label: "필수",
    sublabel: "중요도 50% 이상",
    desc: "기수 운영상 반드시 준수해야 합니다.",
    bg: "bg-red-950/20",
    border: "border-red-500/40",
    badge: "bg-red-500/10 text-red-300 border border-red-500/30",
    badgeText: "text-red-400",
    dot: "bg-red-500",
    icon: "🔴",
  },
  요청: {
    label: "요청",
    sublabel: "중요도 30% 이하",
    desc: "강제는 아니지만 가급적 따라주세요.",
    bg: "bg-orange-950/15",
    border: "border-orange-500/35",
    badge: "bg-orange-500/10 text-orange-300 border border-orange-500/30",
    badgeText: "text-orange-400",
    dot: "bg-orange-400",
    icon: "🟠",
  },
  권고: {
    label: "권고",
    sublabel: "중요도 15% 이하",
    desc: "추후 이벤트와 연계되니 알아두면 좋습니다.",
    bg: "bg-blue-950/15",
    border: "border-blue-500/35",
    badge: "bg-blue-500/10 text-blue-300 border border-blue-500/30",
    badgeText: "text-blue-400",
    dot: "bg-blue-400",
    icon: "🔵",
  },
  인식: {
    label: "인식",
    sublabel: "중요도 5% 이하",
    desc: "이런 운영 방침이 있구나 정도로 알아두세요.",
    bg: "bg-white/[0.02]",
    border: "border-white/15",
    badge: "bg-white/5 text-gray-400 border border-white/15",
    badgeText: "text-gray-500",
    dot: "bg-gray-500",
    icon: "⚪",
  },
};

const LEVEL_ORDER: RequestLevel[] = ["필수", "요청", "권고", "인식"];

function OperationsSection({
  gen,
}: {
  gen: GenerationSecretPageData;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const grouped = LEVEL_ORDER.reduce(
    (acc, level) => {
      acc[level] = gen.operations.filter((item) => item.level === level);
      return acc;
    },
    {} as Record<RequestLevel, { text: string; level: RequestLevel }[]>,
  );

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center py-24 px-6 relative bg-[#0b0b0d]"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr ${gen.gradient} opacity-[0.07] blur-[100px]`}
        />
        <div className="absolute inset-0" style={SCANLINES} />
      </div>

      <div className="max-w-3xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel
            no="03"
            title="Team Operations"
            icon="📋"
            tone="text-sky-300/80"
          />

          <div className="-mt-6 mb-10 p-4 rounded-sm bg-white/[0.02] border border-white/10 font-mono">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">
              중요도 기준
            </p>
            <div className="grid grid-cols-2 gap-2">
              {LEVEL_ORDER.map((level) => {
                const cfg = LEVEL_CONFIG[level];
                return (
                  <div key={level} className="flex items-center gap-2">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${cfg.dot} shrink-0`}
                    />
                    <div>
                      <span className="text-xs font-bold text-gray-200">
                        {cfg.label}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">
                        · {cfg.sublabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            {LEVEL_ORDER.map((level, levelIdx) => {
              const items = grouped[level];
              if (items.length === 0) return null;
              const cfg = LEVEL_CONFIG[level];

              return (
                <motion.div
                  key={level}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: levelIdx * 0.1 }}
                  className={`rounded-sm border-l-4 border ${cfg.border} ${cfg.bg} overflow-hidden`}
                >
                  <div className="flex items-start justify-between p-5 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{cfg.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-extrabold text-base">
                            {cfg.label}
                          </span>
                          <span
                            className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-sm ${cfg.badge}`}
                          >
                            {cfg.sublabel}
                          </span>
                        </div>
                        <p className="text-gray-500 text-xs mt-0.5 leading-snug">
                          {cfg.desc}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`font-mono text-xs font-bold ${cfg.badgeText} shrink-0 mt-0.5`}
                    >
                      {items.length}개
                    </span>
                  </div>

                  <div className="h-px mx-5 border-t border-dashed border-white/10" />

                  <div className="p-5 pt-4 space-y-3">
                    {items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.45,
                          delay: levelIdx * 0.1 + i * 0.07,
                        }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${cfg.dot} shrink-0 mt-2`}
                        />
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* 팀 운영 메모 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.45 }}
              className={`rounded-sm overflow-hidden bg-gradient-to-br ${gen.gradient} p-px`}
            >
              <div className="rounded-[1px] bg-[#111114] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🎯</span>
                  <h3 className="text-white font-extrabold text-lg">
                    팀 운영 메모
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {gen.teamNote}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href={gen.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-white text-black font-bold hover:bg-red-600 hover:text-white transition-all"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {gen.label} {gen.teamName} 페이지로
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-white/15 text-gray-400 font-semibold hover:border-white/40 hover:text-white transition-all text-sm"
            >
              크리에이터 목록 →
            </Link>
          </div>
          <p className="mt-16 text-center font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase">
            — End of File · MCM-GEN-{gen.id} —
          </p>
        </motion.div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   메인 페이지
════════════════════════════════════════ */
export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="bg-black pt-32 pb-20 px-6 relative overflow-hidden">
        <div
          className={`absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-br ${gen.gradient} opacity-25 blur-[140px]`}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0" style={SCANLINES} />
        <p className="absolute right-[-40px] bottom-6 -rotate-12 font-mono font-black text-[72px] md:text-[110px] tracking-[0.15em] text-red-600/[0.07] whitespace-nowrap select-none pointer-events-none">
          TOP SECRET
        </p>
        <Link
          href={gen.href}
          className="absolute top-[88px] left-6 z-50 inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/15 rounded-sm font-mono text-xs tracking-widest text-white/70 hover:text-white hover:bg-white/10 transition-all"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          돌아가기
        </Link>
        <div className="max-w-3xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-8 font-mono">
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-red-500/40 bg-red-500/10 rounded-sm text-red-300 text-[11px] font-bold uppercase tracking-[0.25em]">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-red-500"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
                🔓 Unlocked — Team Secret File
              </span>
              <span className="text-white/30 text-[11px] tracking-[0.25em] uppercase">
                File No. MCM-GEN-{gen.id}
              </span>
            </div>
            <div className="flex items-center gap-5 mb-6">
              <div className="text-6xl">{gen.emoji}</div>
              <div>
                <p className="font-mono text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-1">
                  {gen.label} · 기수 비밀 파일
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  {gen.teamName}
                </h1>
              </div>
            </div>
            <Redaction widths={["38%", "22%", "30%"]} />
            <p className="mt-6 text-white/60 text-lg max-w-xl">
              내부 운영자만 열람 가능한 비공개 기획 자료입니다. 외부 공유를
              금지합니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { label: "01 디렉터 노트", emoji: "📝", href: "#director" },
                { label: "02 비밀 설정", emoji: "🔐", href: "#classified" },
                { label: "03 운영 가이드", emoji: "📋", href: "#operations" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/15 rounded-sm text-white/80 text-sm font-semibold hover:border-red-500/50 hover:text-white transition-all"
                >
                  <span>{item.emoji}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div id="director">
        <DirectorNoteSection gen={gen} />
      </div>
      <div id="classified">
        <ClassifiedSection gen={gen} />
      </div>
      <div id="operations">
        <OperationsSection gen={gen} />
      </div>
    </main>
  );
}
