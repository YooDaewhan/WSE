"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../../components/Header";

/* ── 기수 데이터 (확장) ── */
const generations = [
  {
    id: 1,
    label: "0기",
    teamName: "새벽조",
    tagline: "긴 밤을 끝내 마침내",
    description:
      "아직 빛 한 줄기 없는 이 길을, 우리 새벽조는 가장 먼저 걷습니다. 이 여정은 결코 쉽지 않겠지만, 뒤에 올 모두를 위해 오늘의 어둠을 먼저 건너갑니다.",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    emoji: "🌅",
    philosophy:
      "가장 먼저 선다는 것은 영광이 아니라 책임입니다. 새벽조는 길이 없는 곳에서 길을 만들고, 답이 없는 질문 앞에서 첫 번째 답을 써 내려갑니다. 이들이 걸어간 자국이 곧 이후 모든 기수의 지도가 됩니다.",
    motto: "우리가 먼저 건너야, 뒤가 건널 수 있다.",
    theme: "개척 · Pioneering",
    members: [
      {
        name: "홍길동",
        emoji: "⚔️",
        role: "Pioneer",
        slug: "honggildong",
        desc: "A Yo bro 와썹 man.",
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
    emoji: "🔥",
    philosophy:
      "모험의 첫 걸음에는 준비물이 필요합니다. 스타터팩은 세상에 처음 발을 딛는 이들에게 꼭 필요한 세 가지 — 불꽃, 방향, 축하 — 를 건네줍니다. 작지만 결정적인 동반자들.",
    motto: "준비됐다면, 함께 떠나자.",
    theme: "출발 · Departure",
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
    emoji: "🦸",
    philosophy:
      "가장 낮은 곳에서 시작한 사람들의 이야기. 히어로즈는 화려한 이력이 아닌, 바닥에서 버티고 일어선 흔적으로 자신을 증명합니다. 모두가 질 거라 말했던 바로 그 자리에서, 이들은 이기는 장면을 만듭니다.",
    motto: "지는 이야기는 이제 지겨워.",
    theme: "역전 · Underdog",
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
      "가장 어두운 순간에 나타나는 구원자들. 레스큐팩은 위기를 기회로 바꾸는 최후의 팀.",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    emoji: "🪂",
    philosophy:
      "이야기의 발단 전개 위기 절정 결말 에서 위기, 시작이 있었다면 위기가 있죠",
    motto: "네가 어디에 있든, 너에게로 갈게.",
    theme: "구원 · Rescue",
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
    description:
      "빛과 어둠의 경계에 선 자들. 이퀴녹스는 대비 속에서 진짜 자신을 찾아가는 팀이다.",
    gradient: "from-slate-600 via-gray-700 to-zinc-900",
    emoji: "🌓",
    philosophy:
      "신의 허락 아래 천사와 악마는 인간계를 차지하기 위해 경쟁하게 되었습니다. 먼저 인간을 유혹하는 쪽이 승리입니다. 천사는 인간에게 낮을 선물로 주었습니다. 악마는 인간에게 밤을 선물로 주었습니다.",
    motto: "눈 감지 마. 무너지지 마. 내가 함께할게.",
    theme: "균형 · Equinox",
    members: [
      {
        name: "미카엘라(미정)",
        emoji: "☀️",
        role: "Light",
        slug: "cheoncheon",
        desc: "눈감지마. 무너지지마. 내가 너와 함께할게.",
      },
      {
        name: "아자젤라(미정)",
        emoji: "🌗",
        role: "Dusk",
        slug: "cheongak",
        desc: "넘어져도 다시 일어 설 수 있도록.",
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
    emoji: "🍬",
    philosophy:
      "행복은 가끔 약처럼 온다. 스팀팩은 달콤함과 위험이 구분되지 않는 세계를 다루는 팀입니다. 이들의 손에 쥔 것이 약인지 독인지 — 선택은 언제나 당신의 몫입니다.",
    motto: "행복해지는 약.. 먹어볼래?",
    theme: "자극 · Stimulus",
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
    description: "어두운 세상에서, 당신만의 수호천사",
    gradient: "from-blue-600 via-sky-600 to-cyan-500",
    emoji: "🛡️",
    philosophy:
      "거칠고 가시투성이인 세상 속에서 당신을 지켜주는 엘리트 집단입니다.",
    motto: "어두운 세상이 당신을 검게 물들이지 않도록",
    theme: "질서 · Order",
    members: [
      {
        name: "인턴",
        emoji: "📋",
        role: "Rookie",
        slug: "intern",
        desc: "시작은 미약하나 그 끝은 창대하리라.",
      },
      {
        name: "사원",
        emoji: "💻",
        role: "Worker",
        slug: "sawon",
        desc: "묵묵히 실무를 돌리는 조직의 심장.",
      },
      {
        name: "대리",
        emoji: "📊",
        role: "Manager",
        slug: "daeri",
        desc: "위와 아래를 잇는 다리. 실질적 중간 허리.",
      },
      {
        name: "부장",
        emoji: "🏛️",
        role: "Director",
        slug: "bujang",
        desc: "결정의 무게를 아는 자. 최종 방어선.",
      },
    ],
  },
];

/* ── 멤버 카드 ── */
function MemberCard({
  member,
  gradient,
  index,
}: {
  member: (typeof generations)[0]["members"][0];
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
      <Link href={`/services/${member.slug}`} className="group block h-full">
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
              {member.desc}
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
export default function GenerationDetail() {
  const params = useParams();
  const id = Number(params.id);
  const gen = generations.find((g) => g.id === id);

  if (!gen) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <Header />
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            해당 기수를 찾을 수 없습니다
          </h1>
          <Link
            href="/services"
            className="text-violet-600 font-semibold hover:underline"
          >
            ← 크리에이터 목록으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = generations.findIndex((g) => g.id === id);
  const prevGen = currentIndex > 0 ? generations[currentIndex - 1] : null;
  const nextGen =
    currentIndex < generations.length - 1
      ? generations[currentIndex + 1]
      : null;

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
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              {gen.tagline}
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
                  href={`/services/generation/${gen.id}/secret`}
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
              href={`/services/generation/${prevGen.id}`}
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
              href={`/services/generation/${nextGen.id}`}
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
