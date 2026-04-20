"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";

/* ── InView 래퍼 ── */
function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── 조직도 데이터 ── */
const orgChart = [
  {
    key: "leadership",
    title: "수뇌부",
    subtitle: "Leadership",
    tagline: "방향을 정하고, 책임을 지는 자들",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    emoji: "👑",
    members: [
      { name: "대표", role: "CEO", emoji: "🎯", note: "무대를 세운 사람" },
      {
        name: "홍길동",
        role: "Pioneer · 이사",
        emoji: "⚔️",
        note: "1기 · 원년멤버",
      },
      {
        name: "내시",
        role: "Strategist · 실장",
        emoji: "📜",
        note: "1기 · 전략 총괄",
      },
    ],
  },
  {
    key: "core",
    title: "심장부",
    subtitle: "Heart",
    tagline: "무대 위에서 직접 뛰는 얼굴들",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    emoji: "🔥",
    members: [
      { name: "도깨비", role: "Wildcard", emoji: "👹", note: "1기" },
      { name: "매국노", role: "Breaker", emoji: "🔥", note: "1기" },
      { name: "이그나이터", role: "Igniter", emoji: "🔥", note: "2기" },
      { name: "네비게이터", role: "Navigator", emoji: "🧭", note: "2기" },
      { name: "셀러브레이터", role: "Celebrator", emoji: "🎉", note: "2기" },
      { name: "알바", role: "Hustler", emoji: "💼", note: "3기" },
      { name: "편돌이", role: "Keeper", emoji: "🏪", note: "3기" },
      { name: "딸배", role: "Rebel", emoji: "🚬", note: "3기" },
      { name: "헬다이버", role: "Vanguard", emoji: "🪂", note: "4기" },
      { name: "앵커", role: "Anchor", emoji: "⚓", note: "4기" },
      { name: "페인킬러", role: "Healer", emoji: "💊", note: "4기" },
      { name: "천천", role: "Light", emoji: "☀️", note: "5기" },
      { name: "청악", role: "Dusk", emoji: "🌓", note: "5기" },
      { name: "악천", role: "Storm", emoji: "⛈️", note: "5기" },
      { name: "악악", role: "Shadow", emoji: "🌑", note: "5기" },
      { name: "홀더", role: "Holder", emoji: "🃏", note: "6기" },
      { name: "클로버", role: "Lucky", emoji: "🍀", note: "6기" },
      { name: "부장", role: "Director", emoji: "🏛️", note: "7기" },
    ],
  },
  {
    key: "operations",
    title: "실무부",
    subtitle: "Operations",
    tagline: "무대 뒤의 모든 것을 지탱하는 손",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    emoji: "🛠️",
    members: [
      {
        name: "폐급이병",
        role: "Survivor · 현장반장",
        emoji: "🎖️",
        note: "3기",
      },
      { name: "인턴", role: "Rookie · 실무", emoji: "📋", note: "7기" },
      { name: "사원", role: "Worker · 실무", emoji: "💻", note: "7기" },
      { name: "대리", role: "Manager · 실무", emoji: "📊", note: "7기" },
      { name: "매니저 A", role: "Staff", emoji: "📎", note: "매니지먼트" },
      { name: "매니저 B", role: "Staff", emoji: "📎", note: "매니지먼트" },
    ],
  },
];

/* ── 의전서열 데이터 ── */
const protocolRanks = [
  {
    rank: "1",
    who: "대표",
    tagline: "The One",
    emoji: "👑",
    gradient: "from-amber-500 via-yellow-500 to-orange-500",
    benefits: [
      "모든 회의 입장 시 전원 기립",
      "사옥 내 전용 주차 구역 및 엘리베이터 우선권",
      "회식 메뉴 최종 결정권",
      "모든 콘텐츠 기획안에 대한 거부권 1회 보유",
      "사옥 옥상 전용 접근 권한",
    ],
  },
  {
    rank: "2",
    who: "수뇌부 (Leadership)",
    tagline: "Heads",
    emoji: "🥇",
    gradient: "from-violet-500 via-purple-600 to-fuchsia-600",
    benefits: [
      "전용 회의실 우선 예약권",
      "회식 참석 시 상석 배정",
      "신규 기획 승인권",
      "법인카드 한도 상향",
    ],
  },
  {
    rank: "3",
    who: "심장부 에이스 (Main Faces)",
    tagline: "Aces",
    emoji: "🥈",
    gradient: "from-rose-500 via-pink-500 to-red-500",
    benefits: [
      "개인 전용 대기실 배정",
      "합방 게스트 지명 우선권",
      "스케줄 선점권",
      "연말 시상식 고정 참석",
    ],
  },
  {
    rank: "4",
    who: "심장부 일반 (Core)",
    tagline: "Cast",
    emoji: "🥉",
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    benefits: [
      "공용 대기실 이용",
      "월 1회 장비 지원",
      "합방 요청권",
      "분기 단합회 고정 초대",
    ],
  },
  {
    rank: "5",
    who: "실무부 · 매니지먼트 (Operations)",
    tagline: "Backbone",
    emoji: "🏅",
    gradient: "from-emerald-500 via-teal-500 to-green-500",
    benefits: [
      "야근 시 택시비 실비 지원",
      "회식 메뉴 2순위 투표권",
      "굿즈 우선 구매",
      "분기 성과급 지급 대상",
    ],
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* ══════ Hero ══════ */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-violet-400 rounded-full opacity-[0.12] blur-[100px]" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-pink-400 rounded-full opacity-[0.10] blur-[80px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-sm font-bold rounded-full mb-8 shadow-sm border border-gray-200/60"
          >
            ✨ About WSE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.05] mb-6"
          >
            하나의 무대,
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              하나의 가족
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            WSE는 연기자들이 모여 하루를 지어내는 곳입니다.
            <br className="hidden md:block" />그 시작과, 방향과, 그 안의 질서에
            대하여.
          </motion.p>
        </div>
      </section>

      {/* ══════ 대표의 출사표 ══════ */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-500 rounded-full opacity-[0.08] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500 rounded-full opacity-[0.08] blur-[120px]" />

        <div className="relative max-w-4xl mx-auto">
          <FadeInSection className="text-center mb-14">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-violet-300 mb-3">
              Manifesto
            </p>
            <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-pink-400 mb-8 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              대표의{" "}
              <span className="bg-gradient-to-r from-violet-300 to-pink-300 bg-clip-text text-transparent">
                출사표
              </span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-6xl mb-6">✒️</div>
              <div className="space-y-5 text-gray-200 text-lg leading-relaxed">
                <p>
                  처음 WSE를 만들겠다고 마음먹었을 때, 떠올린 건 거창한 회사가
                  아니라{" "}
                  <span className="text-white font-semibold">한 무대</span>
                  였습니다. 내가 좋아하는 사람들이 마음껏 뛸 수 있는 무대 하나만
                  있으면 된다 — 그 생각이 WSE의 전부였습니다.
                </p>
                <p>
                  연기자들이 자기 이야기를 연기로 풀어내고, 그 이야기를 함께
                  지키고 다듬어 줄 사람들이 모이는 곳. 누구 한 명이 다 짊어지는
                  구조가 아니라,{" "}
                  <span className="text-white font-semibold">
                    수뇌부 · 심장부 · 실무부
                  </span>
                  가 서로의 자리를 인정하고 기대는 구조를 원했습니다.
                </p>
                <p>
                  저는 대단한 대표가 아닙니다. 다만, 이 사람들과 같이 오래 가고
                  싶은 한 명일 뿐입니다. 그러니 WSE는 효율만 쫓는 회사가 되지
                  않을 겁니다.{" "}
                  <span className="text-white font-semibold">
                    사람을 먼저 챙기고, 작품은 그 다음에 챙기는
                  </span>{" "}
                  곳으로 운영하겠습니다.
                </p>
                <p>
                  화려한 약속은 하지 않겠습니다. 대신 이 한 가지만은 약속합니다
                  —{" "}
                  <span className="text-white font-semibold">
                    여기 있는 동안, 외롭지 않게 하겠습니다.
                  </span>
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-end gap-3">
                <div className="text-right">
                  <p className="text-gray-400 text-sm">WSE 대표</p>
                  <p className="text-white text-lg font-bold">— 대표</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-xl shadow-lg">
                  👑
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ══════ 조직도 ══════ */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
              Organization
            </p>
            <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 mb-8 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              이렇게{" "}
              <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                나뉘어
              </span>{" "}
              있습니다
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              연기자는 기본적으로 심장부 소속이지만, 중소기업 특성상 몇몇은
              수뇌부와 실무부에도 몸을 담고 있습니다.
            </p>
          </FadeInSection>

          <div className="space-y-10">
            {orgChart.map((group, gi) => (
              <FadeInSection key={group.key} delay={gi * 0.1}>
                <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                  {/* 타이틀 바 */}
                  <div
                    className={`bg-gradient-to-r ${group.gradient} px-6 md:px-8 py-6 relative overflow-hidden`}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div className="relative flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg shrink-0">
                        {group.emoji}
                      </div>
                      <div>
                        <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-1">
                          {group.subtitle}
                        </p>
                        <h3 className="text-white text-3xl font-extrabold leading-none mb-1">
                          {group.title}
                        </h3>
                        <p className="text-white/80 text-sm">{group.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* 멤버 그리드 */}
                  <div className="p-5 md:p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                      {group.members.map((m) => (
                        <div
                          key={m.name}
                          className="group relative bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
                        >
                          <div
                            className={`w-11 h-11 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center text-xl mb-3 shadow-sm`}
                          >
                            {m.emoji}
                          </div>
                          <p className="text-gray-900 font-bold text-sm leading-tight mb-1">
                            {m.name}
                          </p>
                          <p className="text-gray-500 text-xs mb-1 leading-tight">
                            {m.role}
                          </p>
                          <p className="text-gray-400 text-[11px]">{m.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 의전서열 (복지) ══════ */}
      <section className="relative py-24 px-6 bg-gray-50 overflow-hidden">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-amber-300 rounded-full opacity-[0.08] blur-[100px]" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-rose-400 rounded-full opacity-[0.08] blur-[100px]" />

        <div className="relative max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
              Welfare · Protocol
            </p>
            <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 mb-8 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              복지는{" "}
              <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
                의전서열
              </span>
              로 갑니다
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              서열이 곧 예우. WSE의 모든 사내 혜택은 의전서열에 따라 부여됩니다.
              농담 같지만 진담입니다.
            </p>
          </FadeInSection>

          <div className="space-y-5">
            {protocolRanks.map((r, i) => (
              <FadeInSection key={r.rank} delay={i * 0.08}>
                <div className="relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${r.gradient}`}
                  />
                  <div className="pl-8 pr-6 md:pr-8 py-6 md:py-8 flex flex-col md:flex-row gap-6 md:gap-10 md:items-center">
                    {/* 랭크 헤더 */}
                    <div className="md:w-72 shrink-0">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${r.gradient} flex items-center justify-center text-3xl shadow-lg shrink-0`}
                        >
                          {r.emoji}
                        </div>
                        <div className="min-w-0">
                          <p className="text-gray-400 text-[11px] font-bold tracking-[0.2em] uppercase">
                            Rank {r.rank} · {r.tagline}
                          </p>
                          <p className="text-gray-900 text-xl font-extrabold">
                            의전서열 {r.rank}위
                          </p>
                          <p
                            className={`text-sm font-bold bg-gradient-to-r ${r.gradient} bg-clip-text text-transparent`}
                          >
                            {r.who}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 혜택 목록 */}
                    <div className="flex-1">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                        {r.benefits.map((b, bi) => (
                          <li
                            key={bi}
                            className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed"
                          >
                            <span
                              className={`shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${r.gradient}`}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.2} className="mt-12">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 text-center">
              <p className="text-gray-500 text-sm leading-relaxed">
                ※ 의전서열은 회사 내부의 농담이자 문화입니다. 급여 · 법정 복지 ·
                표준 근로조건은 모든 구성원에게 동일하게 적용됩니다.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500 rounded-full opacity-10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            결국,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              사람
            </span>
            입니다
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            회사 이야기가 궁금해졌다면, 더 궁금해지기 전에 사람을 먼저
            만나보세요.
          </p>
          <Link
            href="/services"
            className="inline-block px-10 py-4 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-violet-500/20 hover:scale-105 transition-all"
          >
            Cast 보러가기 →
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-500 py-8 text-center text-sm border-t border-gray-800">
        © 2025 WSE. All rights reserved.
      </footer>
    </main>
  );
}
