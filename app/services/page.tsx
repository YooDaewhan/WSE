"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";

/* ── 기수 데이터 ── */
const generations = [
  {
    id: 1,
    label: "0기",
    teamName: "새벽조",
    tagline: "긴 밤을 마침내",
    description:
      "아직 빛 한 줄기 없는 이 길을, 우리 새벽조는 가장 먼저 걷습니다.이 여정은 결코 쉽지 않겠지만,뒤에 올 모두를 위해 오늘의 어둠을 먼저 건너갑니다.",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    members: [
      {
        name: "홍길동",
        emoji: "⚔️",
        role: "Pioneer",
        slug: "honggildong",
        desc: "A Yo 브로 와썹 bro.",
      },
      {
        name: "내시(미정)",
        emoji: "📜",
        role: "Strategist",
        slug: "naesi",
        desc: "황송하옵니다~~.",
      },
      {
        name: "도깨비(미정)",
        emoji: "👹",
        role: "Wildcard",
        slug: "dokkaebi",
        desc: "날이 좋아서..",
      },
      {
        name: "호테이 센지",
        emoji: "🔥",
        role: "Breaker",
        slug: "pagyeseung",
        desc: "당신의 오늘은 아침이 밝았습니까.",
      },
    ],
  },
  {
    id: 2,
    label: "1기",
    teamName: "스타터팩",
    tagline: "시작하는 우리들을 위해",
    description:
      "바깥은 혼자 돌아다니기엔 위험하단다. 이 아이들 중 하나를 데려가렴.",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    members: [
      {
        name: "이그나이터",
        emoji: "🔥",
        role: "Igniter",
        slug: "igniter",
        desc: "충분하진 않지만, 부족하진 않아.",
      },
      {
        name: "네비게이터",
        emoji: "🧭",
        role: "Navigator",
        slug: "navigator",
        desc: "어디든 상관없다면, 어디로든 가도 되겠네.",
      },
      {
        name: "셀러브레이터",
        emoji: "🎉",
        role: "Celebrator",
        slug: "celebrator",
        desc: "어, 잠깐만, 그거 대단한 거 아니야?! 축하해!!!",
      },
    ],
  },
  {
    id: 3,
    label: "2기",
    teamName: "히어로즈",
    tagline: "언더독: 히어로즈",
    description: "너도 우리가 이기는 이야기를 보고 싶은거잖아.",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    members: [
      {
        name: "알바(미정)",
        emoji: "💼",
        role: "Hustler",
        slug: "alba",
        desc: "어디서든 살아남는 생존왕. 현장의 달인.",
      },
      {
        name: "편돌이(미정)",
        emoji: "🏪",
        role: "Keeper",
        slug: "pyeondori",
        desc: "어서오세요. 오늘도.",
      },
      {
        name: "딸배(미정)",
        emoji: "🚬",
        role: "Rebel",
        slug: "ddalbae",
        desc: "내가 쉬면 사람들 밥은 어떻게 먹는데?",
      },
      {
        name: "폐급이병(미정)",
        emoji: "🎖️",
        role: "Survivor",
        slug: "pyegeubibyeong",
        desc: "네..? 잘 못들었습니다..?",
      },
    ],
  },
  {
    id: 4,
    label: "3기",
    teamName: "레스큐팩",
    tagline: "위기의 순간, 구원의 손길",
    description:
      "가장 어두운 순간에 나타나는 구원자들. 4기 레스큐팩은 위기를 기회로 바꾸는 최후의 팀.",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    members: [
      {
        name: "헬다이버",
        emoji: "🪂",
        role: "Vanguard",
        slug: "helldiver",
        desc: "네가 어디에 있던지 너에게로 갈게",
      },
      {
        name: "앵커",
        emoji: "⚓",
        role: "Anchor",
        slug: "anchor",
        desc: "바닥에 닿아있는건 내가 아니야.",
      },
      {
        name: "페인킬러",
        emoji: "💊",
        role: "Healer",
        slug: "painkiller",
        desc: "당신이 원한다면 얼마든지..",
      },
    ],
  },
  {
    id: 5,
    label: "4기",
    teamName: "이퀴녹스",
    tagline: "당신을 위해서라면",
    description: "인간을 유혹하기 위한 천사와 악마들의 대격돌!",
    gradient: "from-slate-600 via-gray-700 to-zinc-900",
    members: [
      {
        name: "미카엘라(미정)",
        emoji: "☀️",
        role: "Light",
        slug: "cheoncheon",
        desc: "똑바로 보고 나아가는거야. 내가 너와 함께할게.",
      },
      {
        name: "아자젤라(미정)",
        emoji: "🌗",
        role: "Dusk",
        slug: "cheongak",
        desc: "넘어져도 다시 일어 설 수 있도록. 내가 너와 함께할게.",
      },
      {
        name: "루시아(미정)",
        emoji: "🌓",
        role: "Storm",
        slug: "akcheon",
        desc: "더 이상 널 무리해서 태우지마.",
      },
      {
        name: "데아(미정)",
        emoji: "🌑",
        role: "Shadow",
        slug: "akak",
        desc: "아플거란거 알고있잖아. 가지마.",
      },
    ],
  },
  {
    id: 6,
    label: "5기",
    teamName: "스팀팩",
    tagline: "힘을 낼 수 있도록 도와줘요",
    description: "견디기 힘들다면..?",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    members: [
      {
        name: "슈거",
        emoji: "🧂",
        role: "sugar",
        slug: "sugar",
        desc: "행복해지는 약.. 먹어볼래?",
      },
      {
        name: "홀더",
        emoji: "🔗",
        role: "Holder",
        slug: "holder",
        desc: "내가 안전하게 지켜줄게",
      },
      {
        name: "클로버",
        emoji: "🍀",
        role: "Lucky",
        slug: "clover",
        desc: "세잎클로버는 행복, 네잎은 행운이래. 어떤걸로 빌어줄까?",
      },
    ],
  },
  {
    id: 7,
    label: "6기",
    teamName: "시큐리티엑스",
    tagline: "당신의 하트를 지켜 줄게요",
    description:
      "순수한 분홍색 하트는 물들기 쉬워서, 우리가 당신을 지켜줄게요.",
    gradient: "from-blue-600 via-sky-600 to-cyan-500",
    members: [
      {
        name: "인턴",
        emoji: "📋",
        role: "Rookie",
        slug: "intern",
        desc: "첫 출근 잘 부탁드리겠습니다.",
      },
      {
        name: "사원",
        emoji: "💻",
        role: "Worker",
        slug: "sawon",
        desc: "커피 한잔 하실래요?",
      },
      {
        name: "대리",
        emoji: "📊",
        role: "Manager",
        slug: "daeri",
        desc: "지금은 좀 바빠서..",
      },
      {
        name: "부장",
        emoji: "🏛️",
        role: "Director",
        slug: "bujang",
        desc: "어엇. 잠시 여기 앉아봐",
      },
    ],
  },
];

/* ── 멤버 스크롤 섹션 ── */
function MemberSection({
  member,
  gradient,
  reverse,
  index,
}: {
  member: (typeof generations)[0]["members"][0];
  gradient: string;
  reverse: boolean;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [imgFailed, setImgFailed] = useState(false);
  const imgSrc = `/images/members/${member.slug}.png`;

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-16 py-40 px-6 max-w-7xl mx-auto ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        initial={reverse ? { x: 120, opacity: 0 } : { x: -120, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1,
        }}
        className="w-full md:w-1/2"
      >
        <div
          className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-br ${gradient} shadow-2xl`}
          style={{ aspectRatio: "1/1" }}
        >
          <div className="absolute inset-0 bg-white/5" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {!imgFailed ? (
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
              src={imgSrc}
              alt={member.name}
              onError={() => setImgFailed(true)}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
                  className="text-9xl mb-6 drop-shadow-lg"
                >
                  {member.emoji}
                </motion.div>
                <div className="inline-block px-5 py-2 bg-white/15 backdrop-blur-sm rounded-full">
                  <p className="text-white/90 text-base font-bold tracking-widest uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          )}
          {!imgFailed && (
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full">
                <p className="text-white/90 text-xs font-bold tracking-widest uppercase">
                  {member.role}
                </p>
              </div>
              <div className="text-3xl drop-shadow-lg">{member.emoji}</div>
            </div>
          )}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-lg pointer-events-none" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-lg pointer-events-none" />
        </div>
      </motion.div>

      <motion.div
        initial={reverse ? { x: -120, opacity: 0 } : { x: 120, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2,
        }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`h-1.5 rounded-full bg-gradient-to-r ${gradient} mb-6 mx-auto md:mx-0`}
        />
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          Member {index + 1}
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          {member.name}
        </h2>
        <p className="text-gray-500 text-xl leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
          {member.desc}
        </p>
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
          <div
            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r ${gradient} text-white text-base font-bold shadow-lg`}
          >
            <span className="text-lg">{member.emoji}</span>
            {member.role}
          </div>
          <Link
            href={`/services/${member.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 text-base font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all"
          >
            프로필 보기
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
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

/* ── 메인 ── */
export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % generations.length);
      }, 15000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  const goTo = (i: number) => {
    setCurrentSlide(i);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };
  const prev = () =>
    goTo((currentSlide - 1 + generations.length) % generations.length);
  const next = () => goTo((currentSlide + 1) % generations.length);

  const current = generations[currentSlide];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* ══════ Hero 슬라이더 ══════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div
              className={`absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br ${current.gradient} rounded-full opacity-[0.12] blur-[100px]`}
            />
            <div
              className={`absolute bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-tr ${current.gradient} rounded-full opacity-[0.08] blur-[80px]`}
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center max-w-4xl w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-sm font-bold rounded-full mb-8 shadow-sm border border-gray-200/60"
          >
            ✨ MCM Creators
          </motion.span>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <span
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${current.gradient} text-white text-sm font-bold shadow-lg`}
                >
                  {current.label} · {current.teamName}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-5">
                {current.tagline}
              </h1>

              <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
                {current.description}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {current.members.map((m) => (
                  <span
                    key={m.name}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                  >
                    <span>{m.emoji}</span>
                    {m.name}
                  </span>
                ))}
              </div>

              {/* ── 기수 상세 보기 버튼 ── */}
              <div className="mt-8 flex items-center justify-center">
                <Link
                  href={`/services/generation/${current.id}`}
                  className={`group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r ${current.gradient} text-white font-bold text-base shadow-xl hover:scale-105 hover:shadow-2xl transition-all`}
                >
                  <span>✨</span>
                  {current.label} {current.teamName} 자세히 보기
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
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all text-gray-500"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {generations.map((gen, i) => (
                <button
                  key={gen.id}
                  onClick={() => goTo(i)}
                  className="relative group"
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${i === currentSlide ? `w-10 bg-gradient-to-r ${gen.gradient}` : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                  />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {gen.label} {gen.teamName}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all text-gray-500"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════ 기수 선택 네비 ══════ */}
      <section className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto py-3 px-6">
          <div className="relative">
            {/* 좌우 페이드 */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white/90 to-transparent z-10 pointer-events-none" />
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar px-1">
              {generations.map((gen, i) => (
                <button
                  key={gen.id}
                  onClick={() => goTo(i)}
                  className={`shrink-0 flex items-center gap-1.5 py-2 px-3.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    i === currentSlide
                      ? `bg-gradient-to-r ${gen.gradient} text-white shadow-md scale-105`
                      : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-base leading-none">
                    {["🌅", "🔥", "🦸", "🪂", "🌓", "🍬", "🛡️"][i]}
                  </span>
                  <span>{gen.label}</span>
                  <span
                    className={`text-xs font-medium ${
                      i === currentSlide ? "text-white/80" : "text-gray-300"
                    }`}
                  >
                    {gen.teamName}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ 멤버 스크롤 섹션 ══════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {current.members.map((member, i) => (
            <div
              key={member.name}
              className={i % 2 === 0 ? "bg-white" : "bg-gray-50/70"}
            >
              <MemberSection
                member={member}
                gradient={current.gradient}
                reverse={i % 2 !== 0}
                index={i}
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ══════ CTA ══════ */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500 rounded-full opacity-10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            다음 시즌의 주인공은{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              당신
            </span>
            입니다
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            MCM 크리에이터의 새로운 여정에 함께하세요.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-violet-500/20 hover:scale-105 transition-all">
            크리에이터 지원하기 →
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-500 py-8 text-center text-sm border-t border-gray-800">
        © 2025 WSE. All rights reserved.
      </footer>
    </main>
  );
}
