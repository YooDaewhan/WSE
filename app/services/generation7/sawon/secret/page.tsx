"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Header from "../../../../components/Header";
import LoreModal from "../../../../components/LoreModal";
import {
  content,
  type LorePage,
  type RequestLevel,
  type SecretContent,
} from "./content";

/* ──────────────────────────────────────────
   사원 — 시크릿

   이 페이지는 완전히 독립적입니다.
   여기 있는 데이터·레이아웃·연출을 마음대로 고쳐도
   다른 페이지에는 아무 영향이 없습니다.
────────────────────────────────────────── */

const slug = "sawon";
const profileHref = "/services/generation7/sawon";

const creator: SecretMeta = {
  name: "사원",
  emoji: "💻",
  role: "Worker",
  generation: "6기",
  teamName: "시큐리티엑스",
  gradient: "from-blue-600 via-sky-600 to-cyan-500",

  managerName: "오세준",
  letterDate: "2025년 9월 1일",
  unlockDate: "2026년 9월 1일",
};

/* ── 시크릿 파일 타입 ── */
type SecretMeta = {
  name: string;
  emoji: string;
  role: string;
  generation: string;
  teamName: string;
  gradient: string;
  managerName: string;
  letterDate: string;
  unlockDate: string;
};

/* ════════════════════════════════════════
   섹션 컴포넌트들
════════════════════════════════════════ */

/* ── 섹션 1: 매니저 편지 ── */
function LetterSection({
  creator,
  content,
}: {
  creator: SecretMeta;
  content: SecretContent;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center py-24 px-6 relative"
    >
      <div className="absolute inset-0 bg-[#faf8f3] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(0,0,0,0.5) 24px, rgba(0,0,0,0.5) 25px)",
        }}
      />
      <div className="max-w-3xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-sm">
              ✉️
            </div>
            <span className="text-amber-800 text-sm font-bold tracking-widest uppercase">
              Section 01 — Manager's Letter
            </span>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className={`bg-gradient-to-r ${creator.gradient} p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">
                    MCM Official Letter
                  </p>
                  <p className="text-white text-xl font-bold">
                    {creator.name} ({creator.role})
                  </p>
                </div>
                <div className="text-4xl opacity-80">{creator.emoji}</div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-start justify-between mb-8 pb-6 border-b border-gray-100">
                <div>
                  <p className="text-gray-400 text-xs mb-1">DATE</p>
                  <p className="text-gray-700 text-sm font-semibold">
                    {creator.letterDate}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs mb-1">MANAGER</p>
                  <p className="text-gray-700 text-sm font-semibold">
                    {creator.managerName} 매니저
                  </p>
                </div>
              </div>
              <div className="space-y-8 text-gray-700 leading-[1.9]">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    합격 통보
                  </p>
                  <p className="text-base">{content.letter.opening}</p>
                </div>
                <div className="w-full h-px bg-gray-100" />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    캐릭터 제작 배경
                  </p>
                  <p className="text-base">{content.letter.background}</p>
                </div>
                <div className="w-full h-px bg-gray-100" />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    연기 디렉션
                  </p>
                  <div className={`mt-4 pl-5 border-l-4 border-opacity-40`}>
                    <p className="text-base italic text-gray-600">
                      {content.letter.direction}
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-base text-gray-500 italic">
                    {content.letter.closing}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-bold text-lg">
                        {creator.managerName}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {creator.generation} {creator.teamName} 담당 매니저
                      </p>
                    </div>
                    <div
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${creator.gradient} text-white text-sm font-bold shadow`}
                    >
                      {creator.emoji} 합격
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
  creator,
  content,
}: {
  creator: SecretMeta;
  content: SecretContent;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  /* [챕터 인덱스, 페이지 인덱스] — 챕터 하나에 페이지가 여럿일 수 있습니다 */
  const [lore, setLore] = useState<[number, number] | null>(null);
  const [pLore, setPLore] = useState<[number, number] | null>(null);
  const chapterPages = (
    list: { pages: LorePage[] }[],
    at: [number, number] | null,
  ) => (at ? list[at[0]].pages : []);

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center py-24 px-6 relative bg-gray-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl ${creator.gradient} opacity-[0.06] blur-[120px]`}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>
      <div className="max-w-3xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 rounded-full bg-red-900/40 border border-red-800/40 flex items-center justify-center text-sm">
              🔐
            </div>
            <span className="text-red-400 text-sm font-bold tracking-widest uppercase">
              Section 02 — Classified Settings
            </span>
          </div>
          <div className="flex items-center gap-4 mb-10 p-4 rounded-xl border border-red-900/30 bg-red-950/20">
            <div className="text-2xl">⚠️</div>
            <div>
              <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-1">
                기밀 해제 일자
              </p>
              <p className="text-white font-bold">
                {creator.unlockDate}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                해당 일자 이전 무단 공개 시 계약 위반에 해당합니다.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {content.classified.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <button
                  onClick={() => setLore([i, 0])}
                  className="w-full text-left"
                >
                  <div className="rounded-2xl border border-gray-800 bg-gray-900/40 hover:border-gray-700 hover:bg-gray-900 transition-all duration-300 overflow-hidden">
                    <div className="flex items-center justify-between p-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-gradient-to-br ${creator.gradient} text-white shadow`}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-0.5">
                            CLASSIFIED
                          </p>
                          <p className="text-white font-bold">{item.label}</p>
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-full border border-gray-700 bg-gray-800 flex items-center justify-center text-gray-400 text-xs">
                        ↗
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
          <LoreModal
            items={chapterPages(content.classified, lore).map((p) => ({
              emoji: p.emoji,
              title: p.title,
              body: p.body,
              image: p.image,
            }))}
            gradient={creator.gradient}
            index={lore ? lore[1] : null}
            onClose={() => setLore(null)}
            onChange={(i) => setLore((s) => (s ? [s[0], i] : s))}
          />
          <div className="mt-12 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-red-900/40 border border-red-800/40 flex items-center justify-center text-sm">
              🐾
            </div>
            <span className="text-red-400 text-sm font-bold tracking-widest uppercase">
              Partner Secrets
            </span>
          </div>
          <div className="space-y-4">
            {content.partnerSecret.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <button onClick={() => setPLore([i, 0])} className="w-full text-left">
                  <div className="rounded-2xl border border-gray-800 bg-gray-900/40 hover:border-gray-700 hover:bg-gray-900 transition-all duration-300 overflow-hidden">
                    <div className="flex items-center justify-between p-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-gradient-to-br ${creator.gradient} text-white shadow`}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-0.5">
                            PARTNER
                          </p>
                          <p className="text-white font-bold">{item.label}</p>
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-full border border-gray-700 bg-gray-800 flex items-center justify-center text-gray-400 text-xs">
                        ↗
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
          <LoreModal
            items={chapterPages(content.partnerSecret, pLore).map((p) => ({
              emoji: p.emoji,
              title: p.title,
              body: p.body,
              image: p.image,
            }))}
            gradient={creator.gradient}
            index={pLore ? pLore[1] : null}
            onClose={() => setPLore(null)}
            onChange={(i) => setPLore((s) => (s ? [s[0], i] : s))}
          />
          <div className="mt-10 flex items-center justify-center gap-3 opacity-30">
            <div className="flex-1 h-px bg-gray-700" />
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              MCM Confidential
            </p>
            <div className="flex-1 h-px bg-gray-700" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── 섹션 3: 요청사항 ── */
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
    headerBg: string;
    icon: string;
  }
> = {
  필수: {
    label: "필수",
    sublabel: "중요도 50% 이상",
    desc: "설정상 필요합니다. 최대한 고려해주세요.",
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-700 border border-red-200",
    badgeText: "text-red-700",
    dot: "bg-red-500",
    headerBg: "bg-red-500",
    icon: "🔴",
  },
  요청: {
    label: "요청",
    sublabel: "중요도 30% 이하",
    desc: "강제는 아닙니다. 이런 상황에선 보통 이렇게 해주세요.",
    bg: "bg-orange-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700 border border-orange-200",
    badgeText: "text-orange-700",
    dot: "bg-orange-400",
    headerBg: "bg-orange-400",
    icon: "🟠",
  },
  권고: {
    label: "권고",
    sublabel: "중요도 15% 이하",
    desc: "추후 이벤트나 추가 설정이 있을 수도 있으니 이왕이면 언급해주세요.",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700 border border-blue-200",
    badgeText: "text-blue-700",
    dot: "bg-blue-400",
    headerBg: "bg-blue-400",
    icon: "🔵",
  },
  인식: {
    label: "인식",
    sublabel: "중요도 5% 이하",
    desc: "이런 설정이 있구나 정도만 알고있어주세요.",
    bg: "bg-gray-50",
    border: "border-gray-200",
    badge: "bg-gray-100 text-gray-500 border border-gray-200",
    badgeText: "text-gray-500",
    dot: "bg-gray-300",
    headerBg: "bg-gray-300",
    icon: "⚪",
  },
};

const LEVEL_ORDER: RequestLevel[] = ["필수", "요청", "권고", "인식"];

function RequestsSection({
  creator,
  content,
  slug,
}: {
  creator: SecretMeta;
  content: SecretContent;
  slug: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const grouped = LEVEL_ORDER.reduce(
    (acc, level) => {
      acc[level] = content.requests.filter((item) => item.level === level);
      return acc;
    },
    {} as Record<RequestLevel, { text: string; level: RequestLevel }[]>,
  );

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center py-24 px-6 relative bg-gray-50"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr ${creator.gradient} opacity-[0.04] blur-[100px]`}
        />
      </div>

      <div className="max-w-3xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* 섹션 라벨 */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-sm">
              📋
            </div>
            <span className="text-blue-700 text-sm font-bold tracking-widest uppercase">
              Section 03 — Requests
            </span>
          </div>

          {/* 중요도 범례 */}
          <div className="mb-10 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
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
                      <span className="text-xs font-bold text-gray-700">
                        {cfg.label}
                      </span>
                      <span className="text-xs text-gray-400 ml-1">
                        · {cfg.sublabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 레벨별 카드 */}
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
                  className={`rounded-2xl border ${cfg.border} ${cfg.bg} overflow-hidden shadow-sm`}
                >
                  {/* 카드 헤더 */}
                  <div className="flex items-start justify-between p-5 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{cfg.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-900 font-extrabold text-base">
                            {cfg.label}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cfg.badge}`}
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
                      className={`text-xs font-bold ${cfg.badgeText} shrink-0 mt-0.5`}
                    >
                      {items.length}개
                    </span>
                  </div>

                  {/* 구분선 */}
                  <div className={`h-px mx-5 ${cfg.border} opacity-60`} />

                  {/* 아이템 목록 */}
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
                          className={`w-4 h-4 rounded-full ${cfg.dot} shrink-0 mt-0.5 opacity-70`}
                        />
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* 팬 소통 가이드 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.45 }}
              className={`rounded-2xl overflow-hidden bg-gradient-to-br ${creator.gradient} p-0.5`}
            >
              <div className="rounded-[14px] bg-white p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">💌</span>
                  <h3 className="text-gray-900 font-extrabold text-lg">
                    팬 소통 가이드
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {content.fanNote}
                </p>
              </div>
            </motion.div>
          </div>

          {/* 하단 버튼 */}
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href={profileHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-700 hover:scale-105 transition-all shadow-lg"
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
              {creator.name} 프로필로
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-500 font-semibold hover:border-gray-400 hover:text-gray-700 transition-all text-sm"
            >
              크리에이터 목록 →
            </Link>
          </div>
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
    <main className="min-h-screen">
      <Header />
      <div
        className={`bg-gradient-to-br ${creator.gradient} pt-32 pb-20 px-6 relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <Link
          href={profileHref}
          className="absolute top-[88px] left-6 z-50 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white hover:bg-white/20 transition-all"
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
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase tracking-widest">
                🔓 Unlocked — Secret File
              </span>
            </div>
            <div className="flex items-center gap-5 mb-6">
              <div className="text-6xl">{creator.emoji}</div>
              <div>
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest">
                  {creator.generation} · {creator.teamName}
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                  {creator.name}
                </h1>
              </div>
            </div>
            <p className="text-white/70 text-lg max-w-xl">
              합격자만 열람 가능한 비공개 파일입니다. 외부 공유를 금지합니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { label: "01 매니저 편지", emoji: "✉️", href: "#letter" },
                { label: "02 비밀 설정", emoji: "🔐", href: "#classified" },
                { label: "03 요청사항", emoji: "📋", href: "#requests" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold hover:bg-white/25 transition-all"
                >
                  <span>{item.emoji}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div id="letter">
        <LetterSection creator={creator} content={content} />
      </div>
      <div id="classified">
        <ClassifiedSection creator={creator} content={content} />
      </div>
      <div id="requests">
        <RequestsSection creator={creator} content={content} slug={slug} />
      </div>
    </main>
  );
}
