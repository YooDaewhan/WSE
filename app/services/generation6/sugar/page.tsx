"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Header from "../../../components/Header";
import LoreModal from "../../../components/LoreModal";
import ImgOr from "../../../components/ImgOr";
import { content, type ProfileContent } from "./content";

/* ──────────────────────────────────────────
   슈거 — 프로필

   이 페이지는 완전히 독립적입니다.
   여기 있는 데이터·레이아웃·연출을 마음대로 고쳐도
   다른 페이지에는 아무 영향이 없습니다.
────────────────────────────────────────── */

const slug = "sugar";
const secretHref = "/services/generation6/sugar/secret";

const creator: CreatorMeta = {
  name: "슈거",
  emoji: "🧂",
  role: "Sugar",
  generation: "5기",
  teamName: "스팀팩",
  gradient: "from-pink-400 via-rose-500 to-red-400",

  birthplace: "미정",
  partner: {
    name: "슈크림",
    animal: "토끼",
    emoji: "🐇",
  },
};

/* ── 크리에이터 프로필 타입 ── */
type CreatorMeta = {
  name: string;
  emoji: string;
  role: string;
  generation: string;
  teamName: string;
  gradient: string;
  birthplace: string;
  partner: { name: string; animal: string; emoji: string };
};

/* ── 페이지 인디케이터 ── */
function PageIndicator({ current }: { current: number }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {[0, 1, 2, 3, 4].map((i) => (
        <button
          key={i}
          onClick={() => {
            document
              .getElementById(`section-${i}`)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`w-2.5 rounded-full transition-all duration-500 ${
            i === current
              ? i === 4
                ? "h-8 bg-gray-800 shadow-lg ring-2 ring-gray-400"
                : "h-8 bg-gray-800 shadow-lg"
              : i === 4
                ? "h-2.5 bg-gray-500 hover:bg-gray-600"
                : "h-2.5 bg-gray-300 hover:bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
}

/* ── 메인 페이지 ── */
export default function Page() {
  const [currentSection, setCurrentSection] = useState(0);
  /* 히어로 대사 (null = 아직 안 누름) — 그림 카드는 HeroCard 가 따로 넘김 */
  const [pose, setPose] = useState<number | null>(null);
  const lines = content.lines;
  const nextPose = () => setPose((p) => ((p ?? 0) + 1) % lines.length);
  const containerRef = useRef<HTMLDivElement>(null);

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
      <PageIndicator current={currentSection} />
      <Link
        href="/services"
        className="fixed top-[88px] left-6 z-50 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full text-sm font-semibold text-gray-600 hover:text-gray-900 hover:shadow-md transition-all shadow-sm"
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
        목록
      </Link>

      <div
        ref={containerRef}
        className="h-screen overflow-y-auto"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {/* ══ 섹션 1: 프로필 히어로 ══ */}
        <section
          id="section-0"
          className="h-screen flex items-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${creator.gradient} opacity-[0.05]`}
          />
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-white to-transparent rounded-full opacity-20 blur-[100px]" />
          <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center">
            <div className="w-full md:w-[40%] shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <HeroCard
                creator={creator}
                slug={slug}
                lines={lines}
                pose={pose}
                onNext={nextPose}
              />
              </motion.div>
            </div>
            <div className="w-full md:w-[60%] md:pl-16 mt-10 md:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${creator.gradient} text-white text-sm font-bold shadow-lg`}
                  >
                    {creator.generation} · {creator.teamName}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-none mb-4">
                  {creator.name}
                </h1>
                <blockquote className="relative my-8">
                  <div
                    className={`absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${creator.gradient}`}
                  />
                  <p
                    key={pose ?? -1}
                    className={`pl-6 text-2xl md:text-3xl font-bold text-gray-800 leading-snug ${pose === null ? "" : "pose-in"}`}
                  >
                    &ldquo;{lines[pose ?? 0]}&rdquo;
                  </p>
                </blockquote>
                <div className="text-lg text-gray-500 leading-relaxed max-w-xl">
                  {content.shortBio}
                </div>
                <div className="mt-10 flex items-center gap-2 text-gray-400">
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </motion.div>
                  <span className="text-sm font-medium">
                    스크롤하여 더 알아보기
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ 섹션 2: 파트너 ══ */}
        <section
          id="section-1"
          className="h-screen flex items-center relative overflow-hidden bg-white"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className={`absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl ${creator.gradient} rounded-full opacity-[0.05] blur-[120px]`}
            />
          </div>
          <PartnerContent creator={creator} content={content} />
        </section>

        {/* ══ 섹션 3: 출생지 ══ */}
        <section
          id="section-2"
          className="h-screen flex items-center relative overflow-hidden bg-gray-50"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className={`absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr ${creator.gradient} rounded-full opacity-[0.05] blur-[120px]`}
            />
          </div>
          <BirthplaceContent creator={creator} content={content} />
        </section>

        {/* ══ 섹션 4: 자세한 설명 ══ */}
        <section
          id="section-3"
          className="h-screen flex items-center relative overflow-hidden bg-white"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className={`absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl ${creator.gradient} rounded-full opacity-[0.05] blur-[120px]`}
            />
          </div>
          <FullBioContent creator={creator} content={content} />
        </section>

        {/* ══ 섹션 5: 숨겨진 이야기 ══ */}
        <section
          id="section-4"
          className="h-screen flex items-center relative overflow-hidden bg-gray-950"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div
              className={`absolute -top-60 -right-60 w-[700px] h-[700px] bg-gradient-to-bl ${creator.gradient} rounded-full opacity-[0.08] blur-[140px]`}
            />
            <div
              className={`absolute -bottom-60 -left-60 w-[600px] h-[600px] bg-gradient-to-tr ${creator.gradient} rounded-full opacity-[0.06] blur-[120px]`}
            />
          </div>
          <HiddenStoryContent creator={creator} content={content} slug={slug} />
        </section>
      </div>
    </>
  );
}

/* ── 히어로 카드 뭉치 ──
   · 카드를 누르면 대사만 바뀝니다 (그림은 그대로)
   · 맨 앞 카드를 옆으로 넘기거나 ↻ 를 누르면 다음 그림 카드가 앞으로 옵니다
   · 그림: /images/members/{slug}.png, {slug}-2.png … {slug}-4.png (없는 건 자동으로 빠짐)
   · 마지막 카드는 캐릭터 마크 /images/marks/{slug}.png (없으면 이모지)
   · 카드가 3장보다 적으면 뒤쪽은 빈 카드로 채웁니다 */
const MARK_CARD = -1;
const STACK = [
  { x: 0, y: 0, rotate: 0, scale: 1, brightness: 1 },
  { x: -18, y: 10, rotate: -6, scale: 0.95, brightness: 0.8 },
  { x: 18, y: 18, rotate: 5, scale: 0.9, brightness: 0.65 },
];

function HeroCard({
  creator,
  slug,
  lines,
  pose,
  onNext,
}: {
  creator: CreatorMeta;
  slug: string;
  lines: string[];
  pose: number | null;
  onNext: () => void;
}) {
  const [deck, setDeck] = useState([0, 1, 2, 3, MARK_CARD]);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const dragged = useRef(false);
  const i = pose ?? 0;
  const interactive = lines.length > 1;
  const cards = deck.filter((n) => !failed[n]);
  const canCycle = cards.length > 1;
  const srcOf = (n: number) =>
    n === 0 ? `/images/members/${slug}.png` : `/images/members/${slug}-${n + 1}.png`;
  const cycle = () => setDeck(() => [...cards.slice(1), cards[0]]);
  /* 없는 그림 걸러내기 — <img onError> 는 하이드레이션 전에 404 가 나면 놓치므로 따로 확인 */
  useEffect(() => {
    deck.forEach((n) => {
      if (n === MARK_CARD) return;
      const probe = new Image();
      probe.onerror = () => setFailed((f) => ({ ...f, [n]: true }));
      probe.src = srcOf(n);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  const fillers = Math.max(0, STACK.length - cards.length);

  const face = (
    <>
      <div className="absolute inset-0 bg-white/5" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );

  return (
    <div
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? `${creator.name} 다음 대사 보기` : undefined}
      onPointerDownCapture={() => (dragged.current = false)}
      onClick={() => {
        if (interactive && !dragged.current) onNext();
      }}
      onKeyDown={(e) => {
        if (interactive && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onNext();
        }
      }}
      className={`relative w-full ${interactive ? "cursor-pointer select-none" : ""}`}
      style={{ aspectRatio: "3/4" }}
    >
      {/* 빈 카드 (카드가 부족할 때 뒤쪽 채움) */}
      {Array.from({ length: fillers }, (_, f) => {
        const k = cards.length + f;
        const s = STACK[k];
        return (
          <motion.div
            key={`filler-${f}`}
            animate={{ x: s.x, y: s.y, rotate: s.rotate, scale: s.scale, filter: `brightness(${s.brightness})` }}
            className={`absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br ${creator.gradient} shadow-2xl`}
            style={{ zIndex: STACK.length - k }}
          >
            {face}
          </motion.div>
        );
      })}

      {/* 그림 카드 + 마크 카드 */}
      {deck.map((n) => {
        if (failed[n]) return null;
        const k = cards.indexOf(n);
        const s = STACK[Math.min(k, STACK.length - 1)];
        const front = k === 0;
        return (
          <motion.div
            key={n}
            drag={front && canCycle ? "x" : false}
            dragSnapToOrigin
            dragElastic={0.6}
            onDragStart={() => (dragged.current = true)}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > 90 || Math.abs(info.velocity.x) > 500) cycle();
            }}
            initial={false}
            animate={{
              x: s.x,
              y: s.y,
              rotate: s.rotate,
              scale: s.scale,
              opacity: k < STACK.length ? 1 : 0,
              filter: `brightness(${s.brightness})`,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className={`absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br ${creator.gradient} shadow-2xl ${front && canCycle ? "cursor-grab active:cursor-grabbing" : ""}`}
            style={{ zIndex: STACK.length - k + 1 }}
          >
            {face}
            {n === MARK_CARD ? (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <ImgOr
                  src={`/images/marks/${slug}.png`}
                  alt={front ? `${creator.name} 마크` : ""}
                  className="w-2/3 object-contain drop-shadow-lg"
                  fallback={
                    <div className="text-[120px] md:text-[160px] drop-shadow-lg">
                      {creator.emoji}
                    </div>
                  }
                />
              </div>
            ) : (
              <img
                src={srcOf(n)}
                alt={front ? creator.name : ""}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            )}
            <div className="absolute top-6 left-6 w-14 h-14 border-t-2 border-l-2 border-white/20 rounded-tl-lg pointer-events-none" />
            <div className="absolute bottom-6 right-6 w-14 h-14 border-b-2 border-r-2 border-white/20 rounded-br-lg pointer-events-none" />
          </motion.div>
        );
      })}

      {/* 다음 카드 버튼 */}
      {canCycle && (
        <button
          type="button"
          aria-label="다음 그림 카드"
          onClick={(e) => {
            e.stopPropagation();
            cycle();
          }}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/35 backdrop-blur-md text-white text-lg flex items-center justify-center hover:bg-black/50 transition-colors"
        >
          ↻
        </button>
      )}

      {/* 대사 상자 */}
      {interactive && (
        <div
          aria-live="polite"
          className="absolute z-20 bottom-20 left-10 right-10 flex justify-center pointer-events-none"
        >
          <div
            key={i}
            className={`relative max-w-full px-5 py-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg bubble-pop`}
          >
            <p className="text-gray-900 text-base md:text-lg font-bold leading-snug text-center">
              {lines[i]}
            </p>
            <p className="mt-1 text-[11px] text-gray-400 text-center tracking-wide">
              {i + 1} / {lines.length} · 눌러서 다음 대사{canCycle ? " · 옆으로 넘겨 다른 카드" : ""}
            </p>
          </div>
        </div>
      )}
      <div className="absolute z-20 bottom-6 left-6 right-6 flex justify-center pointer-events-none">
        <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full">
          <p className="text-white text-sm font-bold tracking-widest uppercase">
            {creator.role}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── 파트너 콘텐츠 ── */
function PartnerContent({
  creator,
  content,
}: {
  creator: CreatorMeta;
  content: ProfileContent;
}) {
  const [lore, setLore] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="max-w-6xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
          Partner
        </p>
        <div
          className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${creator.gradient} mb-10`}
        />
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2">
            <div
              className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-br ${creator.gradient} shadow-xl cursor-pointer`}
              style={{ aspectRatio: "4/3" }}
              onClick={() => setLore(0)}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <ImgOr
                src={`/images/partners/${slug}.png`}
                alt={creator.partner.name}
                className="absolute inset-0 w-full h-full object-cover"
                fallback={
                  <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4 drop-shadow-lg">
                      {creator.partner.emoji}
                    </div>
                    <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                      <p className="text-white text-sm font-bold tracking-widest uppercase">
                        {creator.partner.animal}
                      </p>
                    </div>
                  </div>
                </div>
                }
              />
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-sm font-semibold text-gray-400 mb-2">
              {creator.name}의 팬네임
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight cursor-pointer" onClick={() => setLore(0)}>
              {creator.partner.name}
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">{creator.partner.emoji}</span>
              <span
                className={`text-base font-bold bg-gradient-to-r ${creator.gradient} bg-clip-text text-transparent`}
              >
                {creator.partner.animal}
              </span>
            </div>
            <div className="text-gray-500 text-lg leading-relaxed">
              {content.partnerDesc}
            </div>
          </div>
        </div>
      </motion.div>
      <LoreModal
        items={content.partnerLore}
        gradient={creator.gradient}
        index={lore}
        onClose={() => setLore(null)}
        onChange={setLore}
      />
    </div>
  );
}

/* ── 출생지 콘텐츠 ── */
function BirthplaceContent({
  creator,
  content,
}: {
  creator: CreatorMeta;
  content: ProfileContent;
}) {
  const [lore, setLore] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="max-w-6xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
          Birthplace
        </p>
        <div
          className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${creator.gradient} mb-10`}
        />
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2">
            <div
              className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-br ${creator.gradient} shadow-xl cursor-pointer`}
              style={{ aspectRatio: "4/3" }}
              onClick={() => setLore(0)}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-3">📍</div>
                  <p className="text-white text-3xl font-extrabold">
                    {creator.birthplace}
                  </p>
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight cursor-pointer" onClick={() => setLore(0)}>
              {creator.birthplace}
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">{creator.emoji}</span>
              <span className="text-lg font-semibold text-gray-600">
                {creator.name}의 고향
              </span>
            </div>
            <div className="text-gray-500 text-lg leading-relaxed">
              {content.birthplaceDesc}
            </div>
          </div>
        </div>
      </motion.div>
      <LoreModal
        items={content.birthplaceLore}
        gradient={creator.gradient}
        index={lore}
        onClose={() => setLore(null)}
        onChange={setLore}
      />
    </div>
  );
}

/* ── 자세한 설명 콘텐츠 ── */
function FullBioContent({
  creator,
  content,
}: {
  creator: CreatorMeta;
  content: ProfileContent;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="max-w-5xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
          About {creator.name}
        </p>
        <div
          className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${creator.gradient} mb-10`}
        />
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-6xl mb-4 text-center"><ImgOr src={`/images/marks/${slug}.png`} className="w-24 h-24 mx-auto object-contain" fallback={creator.emoji} /></div>
              <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-1">
                {creator.name}
              </h3>
              <p className="text-center text-sm text-gray-400 font-semibold uppercase tracking-wider mb-5">
                {creator.role}
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">기수</span>
                  <span className="text-gray-700 font-semibold">
                    {creator.generation} {creator.teamName}
                  </span>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div className="flex justify-between">
                  <span className="text-gray-400">팬네임</span>
                  <span className="text-gray-700 font-semibold flex items-center gap-1">
                    <span>{creator.partner.emoji}</span>
                    {creator.partner.name}
                  </span>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div className="flex justify-between">
                  <span className="text-gray-400">출생지</span>
                  <span className="text-gray-700 font-semibold">
                    {creator.birthplace}
                  </span>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div className="flex justify-between">
                  <span className="text-gray-400">역할</span>
                  <span className="text-gray-700 font-semibold">
                    {creator.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              {creator.name}의 이야기
            </h2>
            <div className="text-gray-600 text-lg leading-[1.9]">
              {content.fullBio}
            </div>
            <div
              className={`mt-10 p-6 rounded-2xl bg-gradient-to-r ${creator.gradient} relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">
                  Signature Quote
                </p>
                <p className="text-white text-xl font-bold leading-relaxed">
                  &ldquo;{content.quote}&rdquo;
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${creator.gradient} text-white font-bold shadow-lg hover:scale-105 transition-all`}
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
                크리에이터 목록으로
              </Link>
              <button
                onClick={() =>
                  document
                    .getElementById("section-4")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-gray-300 font-bold border border-gray-700 hover:bg-gray-800 hover:scale-105 transition-all"
              >
                <span>🔒</span>
                숨겨진 이야기
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── 숨겨진 이야기 콘텐츠 ── */
function HiddenStoryContent({
  creator,
  content,
  slug,
}: {
  creator: CreatorMeta;
  content: ProfileContent;
  slug: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const previewText = content.hiddenStory.slice(0, 45) + "...";

  return (
    <div ref={ref} className="max-w-4xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-300"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500">
            Hidden Story
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
                className={`absolute inset-0 bg-gradient-to-br ${creator.gradient} opacity-10`}
              />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                <div className="text-6xl grayscale opacity-60">
                  {creator.emoji}
                </div>
                <div className="px-4 py-1.5 bg-gray-800/80 rounded-full border border-gray-700">
                  <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                    {creator.name}
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
              {creator.name}의{" "}
              <span className="text-gray-500">숨겨진 이야기</span>
            </h2>
            <p className="text-gray-600 text-sm font-medium mb-8">
              공개된 프로필 너머, 아무도 몰랐던 진실.
            </p>
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900/60 p-6 mb-8 overflow-hidden">
              <div
                className="text-gray-400 text-base leading-relaxed select-none"
                style={{ filter: "blur(6px)" }}
              >
                {content.hiddenStory}
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-950/40 backdrop-blur-[1px]">
                <div className="text-center">
                  <div className="text-4xl mb-3">🔒</div>
                  <p className="text-gray-400 text-sm font-semibold">
                    잠긴 내용
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic mb-8 pl-4 border-l border-gray-700">
              &ldquo;{previewText}&rdquo;
            </p>
            <Link
              href={secretHref}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-gray-900 font-extrabold text-lg shadow-2xl shadow-white/10 hover:scale-105 hover:shadow-white/20 transition-all"
            >
              <span>🗝️</span>
              숨겨진 이야기 열기
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
  );
}
