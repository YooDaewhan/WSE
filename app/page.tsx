"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Header from "./components/Header";

/* ── 페이지 인디케이터 ── */
function PageIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => {
            document
              .getElementById(`home-section-${i}`)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`w-2.5 rounded-full transition-all duration-500 ${
            i === current
              ? "h-8 bg-gray-800 shadow-lg"
              : "h-2.5 bg-gray-300 hover:bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
}

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

/* ── 숫자 카운터 ── */
function Counter({
  end,
  label,
  suffix = "",
}: {
  end: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(end / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, end]);
  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
        {count}
        {suffix}
      </p>
      <p className="text-gray-500 text-sm font-semibold mt-2 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

/* ══════ 메인 ══════ */
export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSections = 5;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = container.clientHeight;
      setCurrentSection(Math.round(scrollTop / sectionHeight));
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <PageIndicator current={currentSection} total={totalSections} />

      <div
        ref={containerRef}
        className="h-screen overflow-y-auto"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {/* ══════ 섹션 1: 히어로 ══════ */}
        <section
          id="home-section-0"
          className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-violet-400 rounded-full opacity-[0.15] blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-pink-400 rounded-full opacity-[0.12] blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-400 rounded-full opacity-[0.08] blur-[80px]" />

          <div className="relative z-10 text-center max-w-5xl px-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block px-5 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-sm font-bold rounded-full mb-8 shadow-sm border border-gray-200/60"
            >
              ✨ Welcome to WSE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-6xl md:text-8xl font-extrabold text-gray-900 leading-[1.05] mb-6"
            >
              Build the future{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                together
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              크리에이터와 함께 만들어가는 새로운 경험.
              <br className="hidden md:block" />
              WSE에서 당신의 이야기가 시작됩니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/services"
                className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold text-lg rounded-full shadow-xl shadow-violet-200 hover:shadow-violet-300 hover:scale-105 transition-all"
              >
                크리에이터 보기
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold text-lg rounded-full hover:bg-gray-50 hover:scale-105 transition-all shadow-sm"
              >
                Contact →
              </Link>
            </motion.div>
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

        {/* ══════ 섹션 2: WSE 소개 ══════ */}
        <section
          id="home-section-1"
          className="h-screen flex items-center relative overflow-hidden bg-white"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-violet-500 to-transparent rounded-full opacity-[0.04] blur-[100px]" />
          <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-16">
            <FadeInSection className="w-full md:w-[45%]">
              <div
                className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 shadow-2xl"
                style={{ aspectRatio: "1/1" }}
              >
                <div className="absolute inset-0 bg-white/5" />
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="text-8xl mb-4">🚀</div>
                    <p className="text-white/80 text-lg font-bold tracking-wider uppercase">
                      Since 2024
                    </p>
                  </div>
                </div>
                <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
                <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
              </div>
            </FadeInSection>
            <FadeInSection className="w-full md:w-[55%]" delay={0.15}>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-violet-500 mb-4">
                About WSE
              </p>
              <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 mb-8" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                우리가 만드는
                <br />
                <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                  새로운 무대
                </span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                WSE는 크리에이터들이 모여 함께 성장하는 플랫폼입니다. 각자의
                개성과 재능을 극대화하고, 협업을 통해 더 큰 가치를 만들어냅니다.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                1기부터 6기까지, 매 시즌 새로운 크리에이터들이 합류하며 WSE만의
                독보적인 문화를 만들어가고 있습니다.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* ══════ 섹션 3: 숫자로 보는 WSE ══════ */}
        <section
          id="home-section-2"
          className="h-screen flex items-center relative overflow-hidden bg-gray-50"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-400 to-transparent rounded-full opacity-[0.04] blur-[100px]" />
          <div className="max-w-6xl mx-auto px-6 w-full">
            <FadeInSection className="text-center mb-16">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
                WSE in Numbers
              </p>
              <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 mb-8 mx-auto" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                숫자로 보는{" "}
                <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                  WSE
                </span>
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <FadeInSection delay={0}>
                <Counter end={7} label="시즌" suffix="기" />
              </FadeInSection>
              <FadeInSection delay={0.1}>
                <Counter end={24} label="크리에이터" suffix="명" />
              </FadeInSection>
              <FadeInSection delay={0.2}>
                <Counter end={7} label="팀" suffix="팀" />
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <Counter end={1} label="하나의 무대" suffix="" />
              </FadeInSection>
            </div>

            <FadeInSection delay={0.2} className="mt-16">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                {[
                  {
                    gen: "0기",
                    team: "새벽조",
                    gradient: "from-indigo-600 to-purple-700",
                    emoji: "🌅",
                  },
                  {
                    gen: "1기",
                    team: "스타터팩",
                    gradient: "from-rose-500 to-fuchsia-700",
                    emoji: "🔥",
                  },
                  {
                    gen: "2기",
                    team: "히어로즈",
                    gradient: "from-emerald-500 to-cyan-700",
                    emoji: "🦸",
                  },
                  {
                    gen: "3기",
                    team: "레스큐팩",
                    gradient: "from-amber-500 to-red-600",
                    emoji: "🪂",
                  },
                  {
                    gen: "4기",
                    team: "이퀴녹스",
                    gradient: "from-slate-600 to-zinc-900",
                    emoji: "🌓",
                  },
                  {
                    gen: "5기",
                    team: "스팀팩",
                    gradient: "from-pink-400 to-red-400",
                    emoji: "🍬",
                  },
                  {
                    gen: "6기",
                    team: "시큐리티엑스",
                    gradient: "from-blue-600 to-cyan-500",
                    emoji: "🛡️",
                  },
                ].map((item) => (
                  <div
                    key={item.gen}
                    className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} p-4 shadow-lg`}
                  >
                    <div className="absolute inset-0 bg-black/5" />
                    <div className="relative z-10">
                      <div className="text-2xl mb-1">{item.emoji}</div>
                      <p className="text-white/70 text-[10px] font-bold tracking-widest uppercase">
                        {item.gen}
                      </p>
                      <p className="text-white text-sm font-extrabold leading-tight">
                        {item.team}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ══════ 섹션 4: 가치 / 철학 ══════ */}
        <section
          id="home-section-3"
          className="h-screen flex items-center relative overflow-hidden bg-white"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-amber-300 to-transparent rounded-full opacity-[0.04] blur-[100px]" />
          <div className="max-w-6xl mx-auto px-6 w-full">
            <FadeInSection className="text-center mb-16">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
                Our Values
              </p>
              <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 mb-8 mx-auto" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                WSE가 믿는{" "}
                <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                  가치
                </span>
              </h2>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "개척 정신",
                  desc: "누구도 가지 않은 길을 먼저 걷는 용기. WSE의 크리에이터는 도전을 두려워하지 않습니다.",
                  gradient: "from-indigo-600 to-violet-600",
                },
                {
                  icon: "🤝",
                  title: "함께 성장",
                  desc: "혼자 빠르게 가기보다 함께 멀리. 서로의 강점을 이어 더 큰 시너지를 만들어냅니다.",
                  gradient: "from-rose-500 to-pink-600",
                },
                {
                  icon: "💎",
                  title: "진정성",
                  desc: "꾸미지 않은 날것의 이야기가 가장 강합니다. 있는 그대로의 모습이 가장 빛나는 무대.",
                  gradient: "from-emerald-500 to-teal-600",
                },
              ].map((value, i) => (
                <FadeInSection key={value.title} delay={i * 0.12}>
                  <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                    <div
                      className={`h-1.5 bg-gradient-to-r ${value.gradient} rounded-full mb-6 w-12 group-hover:w-20 transition-all duration-500`}
                    />
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed">
                      {value.desc}
                    </p>
                    <div
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${value.gradient} group-hover:w-full transition-all duration-500 rounded-b-2xl`}
                    />
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ 섹션 5: CTA + 푸터 ══════ */}
        <section
          id="home-section-4"
          className="h-screen flex flex-col relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500 rounded-full opacity-10 blur-[120px]" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-[120px]" />
            </div>
            <FadeInSection className="max-w-4xl mx-auto text-center px-6 relative z-10">
              <div className="text-6xl mb-6">🌟</div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
                다음 이야기의
                <br />
                주인공은{" "}
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                  당신
                </span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                WSE와 함께라면, 당신의 이야기도 무대 위에서 빛날 수 있습니다.
                지금 바로 시작하세요.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/services"
                  className="px-10 py-4 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-violet-500/20 hover:scale-105 transition-all"
                >
                  크리에이터 둘러보기
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/20 hover:scale-105 transition-all"
                >
                  문의하기 →
                </Link>
              </div>
            </FadeInSection>
          </div>
          <footer className="bg-gray-900 text-gray-500 py-8 text-center text-sm border-t border-gray-800 shrink-0">
            © 2025 WSE. All rights reserved.
          </footer>
        </section>
      </div>
    </>
  );
}
