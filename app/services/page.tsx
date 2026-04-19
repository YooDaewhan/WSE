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
    tagline: "긴 밤을 끝내 마침내",
    description:
      "아직 빛 한 줄기 없는 이 길을, 우리 새벽조는 가장 먼저 걷습니다.이 여정은 결코 쉽지 않겠지만,뒤에 올 모두를 위해 오늘의 어둠을 먼저 건너갑니다.",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    members: [
      {
        name: "홍길동",
        emoji: "⚔️",
        role: "Pioneer",
        slug: "honggildong",
        desc: "길을 만드는 사람. 없던 길도 걸으면 길이 된다.",
        partner: {
          name: "홍구",
          animal: "여우",
          emoji: "🦊",
          desc: "홍길동 옆을 지키며 신호를 나르는 의적단의 꾀돌이.",
        },
      },
      {
        name: "내시",
        emoji: "📜",
        role: "Strategist",
        slug: "naesi",
        desc: "무대 뒤에서 판을 짜는 전략의 귀재.",
        partner: {
          name: "내서",
          animal: "올빼미",
          emoji: "🦉",
          desc: "밤새 편지를 나르는 내시의 눈과 귀.",
        },
      },
      {
        name: "도깨비",
        emoji: "👹",
        role: "Wildcard",
        slug: "dokkaebi",
        desc: "예측불가. 그래서 더 강하다.",
        partner: {
          name: "깨비",
          animal: "너구리",
          emoji: "🦝",
          desc: "도깨비의 장난에 가장 먼저 합류하는 말썽 공범.",
        },
      },
      {
        name: "파계승",
        emoji: "🔥",
        role: "Breaker",
        slug: "pagyeseung",
        desc: "규칙을 깨고 새로운 질서를 세우는 파괴자.",
        partner: {
          name: "파계",
          animal: "호랑이",
          emoji: "🐯",
          desc: "산중의 금기를 같이 부수는 한 쌍의 맹수.",
        },
      },
    ],
  },
  {
    id: 2,
    label: "2기",
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
        desc: "충분하진 않지만 부족하진 않아.",
        partner: {
          name: "이기",
          animal: "불도롱뇽",
          emoji: "🦎",
          desc: "이그나이터의 첫 불씨가 꺼지지 않게 지켜주는 작은 파트너.",
        },
      },
      {
        name: "네비게이터",
        emoji: "🧭",
        role: "Navigator",
        slug: "navigator",
        desc: "방향을 잡고 길을 제시하는 항해사.",
        partner: {
          name: "알버트",
          animal: "비둘기",
          emoji: "🕊️",
          desc: "네비게이터보다 먼저 길을 정찰하고 돌아오는 전서구.",
        },
      },
      {
        name: "셀러브레이터",
        emoji: "🎉",
        role: "Celebrator",
        slug: "celebrator",
        desc: "어, 잠깐만, 그거 대단한 거 아니야?! 축하해!!!",
        partner: {
          name: "봉봉이",
          animal: "호박벌",
          emoji: "🐝",
          desc: "셀러브레이터 주변을 돌며 축하를 퍼뜨리는 달콤한 꿀벌.",
        },
      },
    ],
  },
  {
    id: 3,
    label: "3기",
    teamName: "히어로즈",
    tagline: "평범한 일상 속 비범한 영웅들",
    description:
      "거창한 슈퍼파워 없이도 영웅이 될 수 있다. 각자의 자리에서 묵묵히 빛나는 3기 히어로즈.",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    members: [
      {
        name: "알바",
        emoji: "💼",
        role: "Hustler",
        slug: "alba",
        desc: "어디서든 살아남는 생존왕. 현장의 달인.",
        partner: {
          name: "알밤이",
          animal: "다람쥐",
          emoji: "🐿️",
          desc: "알바와 함께 이리저리 뛰어다니는 부지런한 동행.",
        },
      },
      {
        name: "편돌이",
        emoji: "🏪",
        role: "Keeper",
        slug: "pyeondori",
        desc: "365일 24시간. 멈추지 않는 편의점의 수호자.",
        partner: {
          name: "편순이",
          animal: "펭귄",
          emoji: "🐧",
          desc: "24시간 편의점 냉장고 옆을 지키는 단정한 카운터 지킴이.",
        },
      },
      {
        name: "딸배",
        emoji: "🚬",
        role: "Rebel",
        slug: "ddalbae",
        desc: "자유로운 영혼. 틀에 얽매이지 않는 반항아.",
        partner: {
          name: "딸콩이",
          animal: "제비",
          emoji: "🐦",
          desc: "딸배 뒤에 붙어 도로 위를 함께 가르는 자유로운 동행.",
        },
      },
      {
        name: "폐급이병",
        emoji: "🎖️",
        role: "Survivor",
        slug: "pyegeubibyeong",
        desc: "바닥을 찍어본 자만이 아는 성장의 비밀.",
        partner: {
          name: "폐리",
          animal: "달팽이",
          emoji: "🐌",
          desc: "폐급이병과 함께 바닥부터 천천히 기어오르는 끈기의 동반자.",
        },
      },
    ],
  },
  {
    id: 4,
    label: "4기",
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
        partner: {
          name: "헬비",
          animal: "매",
          emoji: "🦅",
          desc: "헬다이버가 강하하는 곳에 먼저 도착해 있는 공중 정찰.",
        },
      },
      {
        name: "앵커",
        emoji: "⚓",
        role: "Anchor",
        slug: "anchor",
        desc: "흔들리지 않는 중심. 팀의 단단한 닻.",
        partner: {
          name: "앵꼬",
          animal: "거북이",
          emoji: "🐢",
          desc: "앵커가 흔들릴 때 가장 먼저 자리 잡아주는 느린 단단함.",
        },
      },
      {
        name: "페인킬러",
        emoji: "💊",
        role: "Healer",
        slug: "painkiller",
        desc: "아픔을 치유하고 다시 일어서게 만드는 존재.",
        partner: {
          name: "페니",
          animal: "토끼",
          emoji: "🐰",
          desc: "페인킬러의 손끝에서 먼저 위로받는 작은 치유자.",
        },
      },
    ],
  },
  {
    id: 5,
    label: "5기",
    teamName: "이퀴녹스",
    tagline: "빛이 강할수록, 그림자도 깊다",
    description:
      "빛과 어둠의 경계에 선 자들. 5기 빛과 그림자는 대비 속에서 진짜 자신을 찾아가는 팀이다.",
    gradient: "from-slate-600 via-gray-700 to-zinc-900",
    members: [
      {
        name: "천천",
        emoji: "☀️",
        role: "Light",
        slug: "cheoncheon",
        desc: "천천히, 하지만 확실하게. 빛은 서두르지 않는다.",
        partner: {
          name: "천둥이",
          animal: "사슴",
          emoji: "🦌",
          desc: "천천의 곁에 조용히 서 있는 빛의 그림자.",
        },
      },
      {
        name: "청악",
        emoji: "🌓",
        role: "Dusk",
        slug: "cheongak",
        desc: "맑음과 악함의 경계. 어느 쪽이든 될 수 있는 존재.",
        partner: {
          name: "청이",
          animal: "고양이",
          emoji: "🐱",
          desc: "청악과 함께 경계 위를 오가는 양면의 동반자.",
        },
      },
      {
        name: "악천",
        emoji: "⛈️",
        role: "Storm",
        slug: "akcheon",
        desc: "악천후 속에서도 길을 찾는 자. 폭풍의 핵심.",
        partner: {
          name: "악까",
          animal: "까마귀",
          emoji: "🐦‍⬛",
          desc: "악천이 몰고 오는 폭풍 한가운데 떠 있는 검은 전령.",
        },
      },
      {
        name: "악악",
        emoji: "🌑",
        role: "Shadow",
        slug: "akak",
        desc: "가장 깊은 어둠. 그러나 어둠이 있어야 빛도 빛난다.",
        partner: {
          name: "악이",
          animal: "박쥐",
          emoji: "🦇",
          desc: "악악이 가장 어두운 곳으로 내려갈 때 함께 있는 작은 빛.",
        },
      },
    ],
  },
  {
    id: 6,
    label: "6기",
    teamName: "슈거",
    tagline: "달콤함 속에 숨겨진 독",
    description:
      "달콤하지만 만만하지 않다. 6기 슈거는 부드러운 카리스마로 세상을 사로잡는 팀이다.",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    members: [
      {
        name: "홀더",
        emoji: "🃏",
        role: "Holder",
        slug: "holder",
        desc: "모든 카드를 쥐고 있는 자. 마지막에 웃는 사람.",
        partner: {
          name: "홀이",
          animal: "문어",
          emoji: "🐙",
          desc: "홀더가 쥔 카드 몇 장을 몰래 같이 쥐고 있는 조력자.",
        },
      },
      {
        name: "클로버",
        emoji: "🍀",
        role: "Lucky",
        slug: "clover",
        desc: "행운은 준비된 자에게 온다. 네 잎 클로버의 주인공.",
        partner: {
          name: "클로리",
          animal: "무당벌레",
          emoji: "🐞",
          desc: "클로버 잎 위에 앉아 행운을 두 배로 만드는 작은 동행.",
        },
      },
    ],
  },
  {
    id: 7,
    label: "7기",
    teamName: "시큐리티엑스",
    tagline: "조직의 질서, 철벽의 방어",
    description:
      "체계와 질서의 화신. 7기 시큐리티엑스는 조직력으로 모든 것을 지켜내는 최강의 방패다.",
    gradient: "from-blue-600 via-sky-600 to-cyan-500",
    members: [
      {
        name: "인턴",
        emoji: "📋",
        role: "Rookie",
        slug: "intern",
        desc: "시작은 미약하나 그 끝은 창대하리라.",
        partner: {
          name: "인턴이",
          animal: "햄스터",
          emoji: "🐹",
          desc: "인턴과 함께 서류 더미를 굴리는 부지런한 신입 동기.",
        },
      },
      {
        name: "사원",
        emoji: "💻",
        role: "Worker",
        slug: "sawon",
        desc: "묵묵히 실무를 돌리는 조직의 심장.",
        partner: {
          name: "사원이",
          animal: "비버",
          emoji: "🦫",
          desc: "사원 곁에서 꾸준히 조직이라는 댐을 쌓는 성실파.",
        },
      },
      {
        name: "대리",
        emoji: "📊",
        role: "Manager",
        slug: "daeri",
        desc: "위와 아래를 잇는 다리. 실질적 중간 허리.",
        partner: {
          name: "대리미",
          animal: "수달",
          emoji: "🦦",
          desc: "대리의 중재를 매끄럽게 풀어주는 유연한 중간자.",
        },
      },
      {
        name: "부장",
        emoji: "🏛️",
        role: "Director",
        slug: "bujang",
        desc: "결정의 무게를 아는 자. 최종 방어선.",
        partner: {
          name: "부장님",
          animal: "곰",
          emoji: "🐻",
          desc: "부장 옆에서 결정을 지키는 조용하고 든든한 최종 방어선.",
        },
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
          {/* 파트너 뱃지 (박스 내부 우측 상단) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5, ease: "backOut" }}
            className="absolute top-6 right-6 flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg"
          >
            <span className="text-xl leading-none">{member.partner.emoji}</span>
            <div className="text-left pr-1">
              <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-gray-400 leading-none mb-0.5">
                Fan
              </p>
              <p className="text-gray-900 text-xs font-bold leading-none">
                {member.partner.name}
              </p>
            </div>
          </motion.div>
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
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
        <p className="text-gray-500 text-xl leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
          {member.desc}
        </p>

        {/* 파트너 카드 */}
        <div className="mb-7 max-w-md mx-auto md:mx-0">
          <div className="flex items-start gap-3.5 p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl shadow-md shrink-0`}
            >
              {member.partner.emoji}
            </div>
            <div className="text-left flex-1 min-w-0">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">
                Partner · 팬네임
              </p>
              <p className="text-gray-900 font-bold text-base leading-tight mb-1.5">
                {member.partner.name}
                <span className="text-gray-400 text-sm font-medium ml-2">
                  · {member.partner.animal}
                </span>
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {member.partner.desc}
              </p>
            </div>
          </div>
        </div>

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
                    <span className="text-gray-300">·</span>
                    <span className="text-gray-500 flex items-center gap-1">
                      {m.partner.emoji}
                      {m.partner.name}
                    </span>
                  </span>
                ))}
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
