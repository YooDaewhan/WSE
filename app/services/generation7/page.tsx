"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import { content } from "./content";
import SmokyText from "../../components/SmokyText";

type CastMember = {
  slug: string;
  name: string;
  emoji: string;
  role: string;
  blurb: string;
  href: string;
};

type GenLink = {
  href: string;
  label: string;
  teamName: string;
  emoji: string;
  gradient: string;
  tagline: string;
};

type GenerationPageData = {
  id: number;
  label: string;
  teamName: string;
  emoji: string;
  gradient: string;
  theme: string;
  tagline: string;
  description: string;
  href: string;
  members: CastMember[];
  philosophy: string;
  motto: string;
};

/* ──────────────────────────────────────────
   6기 시큐리티엑스 — 기수 페이지

   이 페이지는 완전히 독립적입니다.
   여기 있는 데이터·레이아웃·연출을 마음대로 고쳐도
   다른 페이지에는 아무 영향이 없습니다.
────────────────────────────────────────── */

const gen: GenerationPageData = {
  id: 7,
  label: "6기",
  teamName: "시큐리티엑스",
  emoji: "🛡️",
  gradient: "from-blue-600 via-sky-600 to-cyan-500",
  theme: "질서 · Order",
  tagline: content.tagline,
  description: content.description,
  href: "/services/generation7",
  members: [
    {
      slug: "intern",
      name: "인턴",
      emoji: "📋",
      role: "Rookie",
      blurb: "첫 출근 잘 부탁드리겠습니다.",
      href: "/services/generation7/intern",
    },
    {
      slug: "sawon",
      name: "사원",
      emoji: "💻",
      role: "Worker",
      blurb: "커피 한잔 하실래요?",
      href: "/services/generation7/sawon",
    },
    {
      slug: "daeri",
      name: "대리",
      emoji: "📊",
      role: "Manager",
      blurb: "지금은 좀 바빠서..",
      href: "/services/generation7/daeri",
    },
    {
      slug: "bujang",
      name: "부장",
      emoji: "🏛️",
      role: "Director",
      blurb: "어엇. 잠시 여기 앉아봐",
      href: "/services/generation7/bujang",
    },
  ],

  philosophy: content.philosophy,
  motto: content.motto,
};

const prevGen: GenLink | null = {
  href: "/services/generation6",
  label: "5기",
  teamName: "스팀팩",
  emoji: "🍬",
  gradient: "from-pink-400 via-rose-500 to-red-400",
  tagline: "힘을 낼 수 있도록 도와줘요",
};
const nextGen: GenLink | null = null;

/* ── 멤버 카드 ── */
function MemberCard({
  member,
  gradient,
  index,
}: {
  member: CastMember;
  gradient: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link href={member.href} className="group block h-full">
        <div className="relative bg-white rounded-2xl border border-gray-100 p-6 h-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div
            className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${gradient} opacity-[0.08] blur-2xl group-hover:opacity-20 transition-opacity`}
          />
          <div className="relative">
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-md`}
            >
              <span className="text-3xl drop-shadow">{member.emoji}</span>
            </div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1.5">
              {member.role}
            </p>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3 leading-tight">
              {member.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-5">
              {member.blurb}
            </p>
            <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 group-hover:text-gray-900">
              프로필 보기
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── 페이지 본문 ── */
export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* ══════ Hero ══════ */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden pt-[72px]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-10 left-10 w-[600px] h-[600px] bg-gradient-to-br ${gen.gradient} rounded-full opacity-[0.15] blur-[120px]`}
          />
          <div
            className={`absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tr ${gen.gradient} rounded-full opacity-[0.1] blur-[100px]`}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <Link
          href="/services"
          className="absolute top-[88px] left-6 z-50 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full text-sm font-semibold text-gray-600 hover:text-gray-900 hover:shadow-md transition-all shadow-sm"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          기수 목록
        </Link>

        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          {/* 왼쪽: 엠블럼 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className={`relative w-full max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-to-br ${gen.gradient} shadow-2xl`}
              style={{ aspectRatio: "1/1" }}
            >
              <div className="absolute inset-0 bg-white/5" />
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
                    className="text-[140px] mb-4 drop-shadow-2xl leading-none"
                  >
                    {gen.emoji}
                  </motion.div>
                  <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-2">
                    <p className="text-white text-sm font-bold tracking-[0.2em] uppercase">
                      {gen.theme}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/25 rounded-tl-lg" />
              <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/25 rounded-tr-lg" />
              <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/25 rounded-bl-lg" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/25 rounded-br-lg" />
            </div>
          </motion.div>

          {/* 오른쪽: 텍스트 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${gen.gradient} text-white text-sm font-bold shadow-lg mb-6`}
            >
              {gen.label} · {gen.teamName}
            </span>
            {/* 한 줄 표어: 연기가 모여들듯 나타납니다 (SmokyText) */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              <SmokyText
                text={gen.tagline}
                color="#111827"
                intensity={9}
                delay={0.35}
              />
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              {gen.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {gen.members.map((m) => (
                <span
                  key={m.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 shadow-sm"
                >
                  <span>{m.emoji}</span>
                  {m.name}
                </span>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex items-center gap-2 text-gray-400"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              <span className="text-sm font-medium">
                스크롤하여 더 알아보기
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════ 철학 섹션 ══════ */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
              Philosophy
            </p>
            <div
              className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${gen.gradient} mb-10`}
            />
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 leading-tight">
              {gen.teamName}의 <br />
              <span
                className={`bg-gradient-to-r ${gen.gradient} bg-clip-text text-transparent`}
              >
                이야기
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-[1.9] mb-14">
              {gen.philosophy}
            </p>

            {/* 모토 카드 */}
            <div
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${gen.gradient} p-10 md:p-14 shadow-2xl`}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10">
                <p className="text-white/70 text-xs font-bold uppercase tracking-[0.25em] mb-4">
                  Team Motto
                </p>
                <p className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
                  &ldquo;{gen.motto}&rdquo;
                </p>
              </div>
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════ 멤버 섹션 ══════ */}
      <section className="py-32 px-6 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-14"
          >
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
              Members
            </p>
            <div
              className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${gen.gradient} mb-8`}
            />
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {gen.teamName}의 <span className="text-gray-400">구성원</span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl">
              {gen.members.length}명의 크리에이터가 이 팀을 이룹니다. 각자의
              이야기를 들어보세요.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gen.members.map((member, i) => (
              <MemberCard
                key={member.slug}
                member={member}
                gradient={gen.gradient}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 비밀 파일 입구 ══════ */}
      <section className="py-32 px-6 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl ${gen.gradient} opacity-[0.08] blur-[140px]`}
          />
          <div
            className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr ${gen.gradient} opacity-[0.06] blur-[120px]`}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500">
                Team Secret File
              </p>
            </div>
            <div className="w-16 h-px bg-gray-700 mb-10" />
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="w-full md:w-1/3 shrink-0">
                <div
                  className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900"
                  style={{ aspectRatio: "3/4" }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gen.gradient} opacity-10`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                    <div className="text-6xl grayscale opacity-60">
                      {gen.emoji}
                    </div>
                    <div className="px-4 py-1.5 bg-gray-800/80 rounded-full border border-gray-700">
                      <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                        {gen.label} {gen.teamName}
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px)",
                    }}
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
                  {gen.teamName}의{" "}
                  <span className="text-gray-500">기수 비밀 파일</span>
                </h2>
                <p className="text-gray-600 text-sm font-medium mb-8">
                  디렉터 노트, 내부 기획 자료, 팀 운영 가이드라인 — 공개되지
                  않은 내부 메모.
                </p>
                <div className="relative rounded-2xl border border-gray-800 bg-gray-900/60 p-6 mb-8 overflow-hidden">
                  <p
                    className="text-gray-400 text-base leading-relaxed select-none"
                    style={{ filter: "blur(6px)" }}
                  >
                    {gen.philosophy}
                  </p>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-950/40 backdrop-blur-[1px]">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🔒</div>
                      <p className="text-gray-400 text-sm font-semibold">
                        잠긴 내용
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href={`${gen.href}/secret`}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-gray-900 font-extrabold text-lg shadow-2xl shadow-white/10 hover:scale-105 hover:shadow-white/20 transition-all"
                >
                  <span>🗝️</span>
                  기수 비밀 파일 열기
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════ 네비게이션 (이전/다음 기수) ══════ */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
          {prevGen ? (
            <Link
              href={prevGen.href}
              className="group relative rounded-2xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all overflow-hidden"
            >
              <div
                className={`absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br ${prevGen.gradient} opacity-[0.08] blur-2xl group-hover:opacity-20 transition-opacity`}
              />
              <div className="relative flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${prevGen.gradient} flex items-center justify-center shadow-md shrink-0`}
                >
                  <span className="text-2xl">{prevGen.emoji}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1 flex items-center gap-1.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </p>
                  <p className="text-base font-extrabold text-gray-900 truncate">
                    {prevGen.label} · {prevGen.teamName}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {prevGen.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextGen ? (
            <Link
              href={nextGen.href}
              className="group relative rounded-2xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all overflow-hidden md:text-right"
            >
              <div
                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${nextGen.gradient} opacity-[0.08] blur-2xl group-hover:opacity-20 transition-opacity`}
              />
              <div className="relative flex items-center gap-4 md:flex-row-reverse">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${nextGen.gradient} flex items-center justify-center shadow-md shrink-0`}
                >
                  <span className="text-2xl">{nextGen.emoji}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1 flex items-center gap-1.5 md:justify-end">
                    Next
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </p>
                  <p className="text-base font-extrabold text-gray-900 truncate">
                    {nextGen.label} · {nextGen.teamName}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {nextGen.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-500 py-8 text-center text-sm border-t border-gray-800">
        © 2025 WSE. All rights reserved.
      </footer>
    </main>
  );
}
