"use client";

/* ────────────────────────────────────────────
   GSAP 연출 버전 프로필

   · 연출 대상은 전부 data-anim="..." 속성으로 표시합니다.
     globals.css 의 [data-gsap-scope] [data-anim] { opacity: 0 } 이
     스크립트가 붙기 전 깜빡임을 막고, 아래 타임라인이 다시 켜 줍니다.
   · 아래 variant 로 "글자가 등장하는 방식"만 바꿉니다.
     "base" — 마스크 뒤에서 밀려 올라옴
     "mist" — 안개가 걷히듯 블러에서 한 글자씩 무작위로 맺힘
   · 서술 텍스트는 옆자리 content.ts 에 있습니다.
──────────────────────────────────────────── */

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Header from "../../../components/Header";
import LoreModal from "../../../components/LoreModal";
import ImgOr from "../../../components/ImgOr";
import { content, type ProfileContent } from "./content";

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

/* ──────────────────────────────────────────
   홍길동 — 프로필

   이 페이지는 완전히 독립적입니다.
   여기 있는 데이터·레이아웃·연출을 마음대로 고쳐도
   다른 페이지에는 아무 영향이 없습니다.
────────────────────────────────────────── */

const slug = "honggildong";
const secretHref = "/services/generation1/honggildong/secret";
const variant: ProfileVariant = "mist";

const creator: CreatorMeta = {
  name: "홍길동",
  emoji: "⚔️",
  role: "Pioneer",
  generation: "0기",
  teamName: "새벽조",
  gradient: "from-indigo-600 via-violet-600 to-purple-700",

  birthplace: "활빈당",
  partner: {
    name: "Bro",
    animal: "여우",
    emoji: "🦊",
  },
};

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

/* SSR 경고 없이 페인트 직전에 실행 */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ── 캐릭터 컨셉 (글자 등장 방식) ── */
type ProfileVariant = "base" | "mist";

/* ── 페이지 인디케이터 ── */
function PageIndicator({ current }: { current: number }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {[0, 1, 2, 3, 4].map((i) => (
        <button
          key={i}
          aria-label={`섹션 ${i + 1}로 이동`}
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
  const mist = variant === "mist";
  const [currentSection, setCurrentSection] = useState(0);
  /* 히어로 대사 (null = 아직 안 누름) — 그림 카드는 HeroCard 가 따로 넘김 */
  const [pose, setPose] = useState<number | null>(null);
  const lines = content.lines;
  const nextPose = () => setPose((p) => ((p ?? 0) + 1) % lines.length);
  const rootRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  /* 현재 섹션 추적 (인디케이터용) */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const sectionHeight = container.clientHeight || 1;
      setCurrentSection(Math.round(container.scrollTop / sectionHeight));
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── GSAP 연출 ── */
  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    const scroller = containerRef.current;
    if (!root || !scroller) return;

    const splits: SplitText[] = [];

    const build = () => {
      const q = gsap.utils.selector(root);
      const sections = q("[data-section]") as HTMLElement[];
      if (!sections.length) return;

      /* 모션 최소화 설정이면 전부 그대로 보여 주고 끝냅니다. */
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(q("[data-anim]"), { opacity: 1 });
        return;
      }

      /* 섹션마다 없는 요소가 있으므로(예: 파트너 섹션엔 row 가 없음)
         대상이 비어 있으면 건너뜁니다. */
      const step = (
        tl: gsap.core.Timeline,
        targets: Element[],
        from: gsap.TweenVars,
        to: gsap.TweenVars,
        at: number,
      ) => {
        if (targets.length) tl.fromTo(targets, from, to, at);
      };

      /* 글 덩어리(문단·라벨·표 행)에 안개를 입힙니다.
         mist 가 아니면 원래 vars 를 그대로 씁니다. */
      const mistFrom = (v: gsap.TweenVars, amount = 10): gsap.TweenVars =>
        mist ? { ...v, filter: `blur(${amount}px)` } : v;
      const mistTo = (v: gsap.TweenVars): gsap.TweenVars =>
        mist
          ? {
              duration: 1.25,
              ease: "power2.out",
              ...v,
              filter: "blur(0px)",
              clearProps: "filter",
            }
          : v;

      /* 글자/단어 단위 등장.
         base 는 마스크 뒤에서 밀려 올라오고,
         mist 는 마스크 없이 블러에서 무작위 순서로 맺힙니다. */
      const splitIn = (
        el: Element | undefined,
        tl: gsap.core.Timeline,
        at: number,
        type: "chars" | "words" = "chars",
        stagger = 0.035,
      ) => {
        if (!el) return;
        const split = new SplitText(el, {
          type,
          aria: "auto",
          ...(mist ? {} : { mask: type }),
        });
        splits.push(split);
        gsap.set(el, { opacity: 1 });
        tl.from(
          type === "chars" ? split.chars : split.words,
          mist
            ? {
                opacity: 0,
                filter: "blur(14px)",
                yPercent: 16,
                duration: 1.5,
                ease: "power2.out",
                stagger: { each: stagger * 1.7, from: "random" },
              }
            : {
                yPercent: 115,
                opacity: 0,
                duration: 0.9,
                ease: "power4.out",
                stagger,
              },
          at,
        );
      };

      /* ── 상단 진행 바 ── */
      if (progressRef.current) {
        gsap.set(progressRef.current, {
          scaleX: 0,
          transformOrigin: "left center",
        });
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            scroller,
            trigger: sections[0],
            start: "top top",
            endTrigger: sections[sections.length - 1],
            end: "bottom bottom",
            scrub: 0.4,
          },
        });
      }

      /* ── 배경 광원 패럴랙스 ── */
      (q("[data-orb]") as HTMLElement[]).forEach((orb) => {
        const amount = Number(orb.dataset.orb || 14);
        gsap.fromTo(
          orb,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: {
              scroller,
              trigger: orb.closest("[data-section]") as HTMLElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      /* ── 상시 부유 ── */
      (q("[data-float]") as HTMLElement[]).forEach((el, i) => {
        gsap.to(el, {
          y: -13,
          duration: 2.3 + i * 0.25,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      /* ── 광택 스윕 ── */
      (q("[data-shine]") as HTMLElement[]).forEach((el, i) => {
        gsap.fromTo(
          el,
          { xPercent: -150 },
          {
            xPercent: 260,
            duration: 1.5,
            ease: "power2.inOut",
            repeat: -1,
            repeatDelay: 3.4,
            delay: 1.2 + i * 0.5,
          },
        );
      });

      /* ══ 섹션 1: 히어로 (즉시 재생) ══ */
      const hero = sections[0];
      const hq = gsap.utils.selector(hero);
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      step(
        heroTl,
        hq('[data-anim="hero-card"]'),
        { opacity: 0, clipPath: "inset(100% -15% -15% -15%)", scale: 1.06 },
        {
          opacity: 1,
          clipPath: "inset(-15% -15% -15% -15%)",
          scale: 1,
          duration: 1.25,
          ease: "power4.out",
        },
        0,
      );
      step(
        heroTl,
        hq('[data-anim="badge"]'),
        mistFrom({ opacity: 0, y: 22 }, 8),
        mistTo({ opacity: 1, y: 0, duration: 0.7 }),
        0.3,
      );

      splitIn(hq('[data-anim="name"]')[0], heroTl, 0.42, "chars", 0.045);

      step(
        heroTl,
        hq('[data-anim="quote-bar"]'),
        { opacity: 0, scaleY: 0 },
        { opacity: 1, scaleY: 1, transformOrigin: "top center", duration: 0.7 },
        0.6,
      );

      splitIn(hq('[data-anim="quote"]')[0], heroTl, 0.7, "words", 0.05);

      step(
        heroTl,
        hq('[data-anim="bio"]'),
        mistFrom({ opacity: 0, y: 24 }),
        mistTo({ opacity: 1, y: 0 }),
        mist ? 1.15 : 0.95,
      );
      step(
        heroTl,
        hq('[data-anim="cue"]'),
        mistFrom({ opacity: 0, y: 14 }, 6),
        mistTo({ opacity: 1, y: 0, duration: 0.7 }),
        mist ? 1.45 : 1.1,
      );

      /* 히어로 카드 포인터 틸트 */
      const card = hq('[data-anim="hero-card"]')[0] as HTMLElement | undefined;
      let detachTilt: (() => void) | undefined;
      if (card && window.matchMedia("(pointer: fine)").matches) {
        gsap.set(card, { transformPerspective: 900 });
        const rx = gsap.quickTo(card, "rotationX", {
          duration: 0.7,
          ease: "power3.out",
        });
        const ry = gsap.quickTo(card, "rotationY", {
          duration: 0.7,
          ease: "power3.out",
        });
        const onMove = (e: PointerEvent) => {
          const r = card.getBoundingClientRect();
          rx(-((e.clientY - r.top) / r.height - 0.5) * 12);
          ry(((e.clientX - r.left) / r.width - 0.5) * 15);
        };
        const onLeave = () => {
          rx(0);
          ry(0);
        };
        hero.addEventListener("pointermove", onMove);
        hero.addEventListener("pointerleave", onLeave);
        detachTilt = () => {
          hero.removeEventListener("pointermove", onMove);
          hero.removeEventListener("pointerleave", onLeave);
        };
      }

      /* ══ 섹션 2~5: 스크롤 진입 타임라인 ══ */
      sections.slice(1).forEach((section, idx) => {
        const sq = gsap.utils.selector(section);
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.85 },
          scrollTrigger: {
            scroller,
            trigger: section,
            start: "top 60%",
            once: true,
          },
        });

        step(
          tl,
          sq('[data-anim="eyebrow"]'),
          mistFrom({ opacity: 0, y: 18 }, 8),
          mistTo({ opacity: 1, y: 0, duration: 0.6 }),
          0,
        );
        step(
          tl,
          sq('[data-anim="rule"]'),
          { opacity: 0, scaleX: 0 },
          {
            opacity: 1,
            scaleX: 1,
            transformOrigin: "left center",
            duration: 0.7,
          },
          0.08,
        );
        step(
          tl,
          sq('[data-anim="media"]'),
          { opacity: 0, clipPath: "inset(0% 0% 100% 0%)", scale: 1.05 },
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.1,
            ease: "power4.out",
          },
          0.14,
        );

        splitIn(sq('[data-anim="heading"]')[0], tl, 0.3, "chars", 0.03);

        step(
          tl,
          sq('[data-anim="stagger"]'),
          mistFrom({ opacity: 0, y: 26 }),
          mistTo({ opacity: 1, y: 0, stagger: mist ? 0.13 : 0.09 }),
          0.42,
        );
        step(
          tl,
          sq('[data-anim="pop"]'),
          { opacity: 0, scale: 0.35 },
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(2.4)" },
          0.45,
        );
        step(
          tl,
          sq('[data-anim="row"]'),
          mistFrom({ opacity: 0, x: -18 }, 7),
          mistTo({
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: mist ? 0.09 : 0.055,
          }),
          0.5,
        );

        /* 마지막(숨겨진 이야기) 섹션 전용 연출 */
        if (idx === sections.length - 2) {
          const decode = sq('[data-anim="decode"]')[0];
          if (decode) {
            const split = new SplitText(decode, {
              type: "chars",
              aria: "auto",
            });
            splits.push(split);
            gsap.set(decode, { opacity: 1 });
            tl.from(
              split.chars,
              {
                opacity: 0,
                filter: "blur(6px)",
                duration: 0.5,
                ease: "none",
                stagger: { each: 0.012, from: "random" },
              },
              0.55,
            );
          }

          const veil = sq("[data-veil]")[0];
          if (veil) {
            gsap.to(veil, {
              filter: "blur(4px)",
              duration: 2.6,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          }

          const scan = sq("[data-scan]")[0];
          if (scan) {
            gsap.fromTo(
              scan,
              { yPercent: -100, opacity: 0 },
              {
                yPercent: 1100,
                opacity: 1,
                duration: 5.5,
                ease: "none",
                repeat: -1,
                repeatDelay: 1.6,
              },
            );
          }

          (sq("[data-pulse]") as HTMLElement[]).forEach((el) => {
            gsap.to(el, {
              scale: 1.12,
              duration: 1.3,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          });
        }
      });

      ScrollTrigger.refresh();

      return () => {
        detachTilt?.();
      };
    };

    /* 웹폰트가 자리를 잡은 뒤 쪼개야 줄바꿈이 어긋나지 않습니다. */
    let ctx: gsap.Context | null = null;
    let disposed = false;
    let started = false;
    const start = () => {
      if (started || disposed) return;
      started = true;
      ctx = gsap.context(build, root);
    };

    const fontsReady = document.fonts?.ready;
    let timer = 0;
    if (fontsReady) {
      fontsReady.then(start, start);
      timer = window.setTimeout(start, 1200);
    } else {
      start();
    }

    return () => {
      disposed = true;
      if (timer) clearTimeout(timer);
      splits.forEach((s) => s.revert());
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={rootRef} data-gsap-scope>
      <Header />
      <PageIndicator current={currentSection} />

      {/* 스크롤 진행 바 */}
      <div className="fixed top-[72px] left-0 w-full h-[3px] z-50 pointer-events-none">
        <div
          ref={progressRef}
          className={`h-full w-full bg-gradient-to-r ${creator.gradient}`}
        />
      </div>

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
          data-section
          className="h-screen flex items-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${creator.gradient} opacity-[0.05]`}
          />
          <div
            data-orb="10"
            className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-white to-transparent rounded-full opacity-20 blur-[100px]"
          />
          <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center">
            <div className="w-full md:w-[40%] shrink-0">
              <HeroCard
                creator={creator}
                slug={slug}
                lines={lines}
                pose={pose}
                onNext={nextPose}
              />
            </div>
            <div className="w-full md:w-[60%] md:pl-16 mt-10 md:mt-0">
              <div className="flex items-center gap-2 mb-5">
                <span
                  data-anim="badge"
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${creator.gradient} text-white text-sm font-bold shadow-lg`}
                >
                  {creator.generation} · {creator.teamName}
                </span>
              </div>
              <h1
                data-anim="name"
                className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-none mb-4"
              >
                {creator.name}
              </h1>
              <blockquote className="relative my-8">
                <div
                  data-anim="quote-bar"
                  className={`absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${creator.gradient}`}
                />
                <p
                  key={pose ?? -1}
                  data-anim="quote"
                  className={`pl-6 text-2xl md:text-3xl font-bold text-gray-800 leading-snug ${pose === null ? "" : "pose-in"}`}
                >
                  &ldquo;{lines[pose ?? 0]}&rdquo;
                </p>
              </blockquote>
              <div
                data-anim="bio"
                className="text-lg text-gray-500 leading-relaxed max-w-xl"
              >
                {content.shortBio}
              </div>
              <div
                data-anim="cue"
                className="mt-10 flex items-center gap-2 text-gray-400"
              >
                <div data-float>
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
                </div>
                <span className="text-sm font-medium">
                  스크롤하여 더 알아보기
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 섹션 2: 파트너 ══ */}
        <section
          id="section-1"
          data-section
          className="h-screen flex items-center relative overflow-hidden bg-white"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              data-orb="16"
              className={`absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl ${creator.gradient} rounded-full opacity-[0.05] blur-[120px]`}
            />
          </div>
          <PartnerContent creator={creator} content={content} />
        </section>

        {/* ══ 섹션 3: 출생지 ══ */}
        <section
          id="section-2"
          data-section
          className="h-screen flex items-center relative overflow-hidden bg-gray-50"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              data-orb="16"
              className={`absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr ${creator.gradient} rounded-full opacity-[0.05] blur-[120px]`}
            />
          </div>
          <BirthplaceContent creator={creator} content={content} />
        </section>

        {/* ══ 섹션 4: 자세한 설명 ══ */}
        <section
          id="section-3"
          data-section
          className="h-screen flex items-center relative overflow-hidden bg-white"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              data-orb="14"
              className={`absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl ${creator.gradient} rounded-full opacity-[0.05] blur-[120px]`}
            />
          </div>
          <FullBioContent creator={creator} content={content} />
        </section>

        {/* ══ 섹션 5: 숨겨진 이야기 ══ */}
        <section
          id="section-4"
          data-section
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
            {/* 스캔 라인 */}
            <div
              data-scan
              className="absolute left-0 top-0 w-full h-[8%] opacity-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,255,255,0.045), transparent)",
              }}
            />
            <div
              data-orb="18"
              className={`absolute -top-60 -right-60 w-[700px] h-[700px] bg-gradient-to-bl ${creator.gradient} rounded-full opacity-[0.08] blur-[140px]`}
            />
            <div
              data-orb="12"
              className={`absolute -bottom-60 -left-60 w-[600px] h-[600px] bg-gradient-to-tr ${creator.gradient} rounded-full opacity-[0.06] blur-[120px]`}
            />
          </div>
          <HiddenStoryContent creator={creator} content={content} slug={slug} />
        </section>
      </div>
    </div>
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
      data-anim="hero-card"
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
                    <div data-float className="text-[120px] md:text-[160px] drop-shadow-lg">
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
            {/* 카드 위를 지나가는 광택 */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                data-shine
                className="absolute top-0 -left-1/3 w-1/3 h-full skew-x-[-18deg]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
                }}
              />
            </div>
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
  return (
    <div className="max-w-6xl mx-auto px-6 w-full">
      <p
        data-anim="eyebrow"
        className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3"
      >
        Partner
      </p>
      <div
        data-anim="rule"
        className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${creator.gradient} mb-10`}
      />
      <div className="flex flex-col md:flex-row items-center gap-14">
        <div className="w-full md:w-1/2">
          <div
            data-anim="media"
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
                  <div data-anim="pop" className="mb-4">
                    <div data-float className="text-8xl drop-shadow-lg">
                      {creator.partner.emoji}
                    </div>
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
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                data-shine
                className="absolute top-0 -left-1/3 w-1/3 h-full skew-x-[-18deg]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                }}
              />
            </div>
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <p
            data-anim="stagger"
            className="text-sm font-semibold text-gray-400 mb-2"
          >
            {creator.name}의 팬네임
          </p>
          <h2
            data-anim="heading"
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight cursor-pointer" onClick={() => setLore(0)}
          >
            {creator.partner.name}
          </h2>
          <div data-anim="stagger" className="flex items-center gap-2 mb-6">
            <span className="text-2xl">{creator.partner.emoji}</span>
            <span
              className={`text-base font-bold bg-gradient-to-r ${creator.gradient} bg-clip-text text-transparent`}
            >
              {creator.partner.animal}
            </span>
          </div>
          <div
            data-anim="stagger"
            className="text-gray-500 text-lg leading-relaxed"
          >
            {content.partnerDesc}
          </div>
        </div>
      </div>
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
  return (
    <div className="max-w-6xl mx-auto px-6 w-full">
      <p
        data-anim="eyebrow"
        className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3"
      >
        Birthplace
      </p>
      <div
        data-anim="rule"
        className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${creator.gradient} mb-10`}
      />
      <div className="flex flex-col md:flex-row items-center gap-14">
        <div className="w-full md:w-1/2">
          <div
            data-anim="media"
            className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-br ${creator.gradient} shadow-xl cursor-pointer`}
            style={{ aspectRatio: "4/3" }}
            onClick={() => setLore(0)}
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div data-anim="pop" className="mb-3">
                  <div data-float className="text-7xl">
                    📍
                  </div>
                </div>
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
          <h2
            data-anim="heading"
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight cursor-pointer" onClick={() => setLore(0)}
          >
            {creator.birthplace}
          </h2>
          <div data-anim="stagger" className="flex items-center gap-2 mb-6">
            <span className="text-2xl">{creator.emoji}</span>
            <span className="text-lg font-semibold text-gray-600">
              {creator.name}의 고향
            </span>
          </div>
          <div
            data-anim="stagger"
            className="text-gray-500 text-lg leading-relaxed"
          >
            {content.birthplaceDesc}
          </div>
        </div>
      </div>
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
  return (
    <div className="max-w-5xl mx-auto px-6 w-full">
      <p
        data-anim="eyebrow"
        className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3"
      >
        About {creator.name}
      </p>
      <div
        data-anim="rule"
        className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${creator.gradient} mb-10`}
      />
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="w-full md:w-1/3 shrink-0">
          <div
            data-anim="media"
            className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
          >
            <div data-float className="text-6xl mb-4 text-center">
              <ImgOr src={`/images/marks/${slug}.png`} className="w-24 h-24 mx-auto object-contain" fallback={creator.emoji} />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-1">
              {creator.name}
            </h3>
            <p className="text-center text-sm text-gray-400 font-semibold uppercase tracking-wider mb-5">
              {creator.role}
            </p>
            <div className="space-y-3 text-sm">
              <div data-anim="row" className="flex justify-between">
                <span className="text-gray-400">기수</span>
                <span className="text-gray-700 font-semibold">
                  {creator.generation} {creator.teamName}
                </span>
              </div>
              <div className="w-full h-px bg-gray-200" />
              <div data-anim="row" className="flex justify-between">
                <span className="text-gray-400">팬네임</span>
                <span className="text-gray-700 font-semibold flex items-center gap-1">
                  <span>{creator.partner.emoji}</span>
                  {creator.partner.name}
                </span>
              </div>
              <div className="w-full h-px bg-gray-200" />
              <div data-anim="row" className="flex justify-between">
                <span className="text-gray-400">출생지</span>
                <span className="text-gray-700 font-semibold">
                  {creator.birthplace}
                </span>
              </div>
              <div className="w-full h-px bg-gray-200" />
              <div data-anim="row" className="flex justify-between">
                <span className="text-gray-400">역할</span>
                <span className="text-gray-700 font-semibold">
                  {creator.role}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2
            data-anim="heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            {creator.name}의 이야기
          </h2>
          <div
            data-anim="stagger"
            className="text-gray-600 text-lg leading-[1.9]"
          >
            {content.fullBio}
          </div>
          <div
            data-anim="stagger"
            className={`mt-10 p-6 rounded-2xl bg-gradient-to-r ${creator.gradient} relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/10" />
            <div
              data-shine
              className="absolute top-0 -left-1/3 w-1/3 h-full skew-x-[-18deg]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              }}
            />
            <div className="relative z-10">
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">
                Signature Quote
              </p>
              <p className="text-white text-xl font-bold leading-relaxed">
                &ldquo;{content.quote}&rdquo;
              </p>
            </div>
          </div>
          <div data-anim="stagger" className="mt-8 flex flex-wrap gap-3">
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
  const previewText = content.hiddenStory.slice(0, 45) + "...";

  return (
    <div className="max-w-4xl mx-auto px-6 w-full">
      <div data-anim="eyebrow" className="flex items-center gap-3 mb-4">
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
      <div data-anim="rule" className="w-16 h-px bg-gray-700 mb-10" />
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="w-full md:w-1/3 shrink-0">
          <div
            data-anim="media"
            className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900"
            style={{ aspectRatio: "3/4" }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${creator.gradient} opacity-10`}
            />
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
              <div data-float className="text-6xl grayscale opacity-60">
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
          <h2
            data-anim="heading"
            className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight"
          >
            {creator.name}의 숨겨진 이야기
          </h2>
          <p
            data-anim="stagger"
            className="text-gray-600 text-sm font-medium mb-8"
          >
            공개된 프로필 너머, 아무도 몰랐던 진실.
          </p>
          <div
            data-anim="stagger"
            className="relative rounded-2xl border border-gray-800 bg-gray-900/60 p-6 mb-8 overflow-hidden"
          >
            <div
              data-veil
              className="text-gray-400 text-base leading-relaxed select-none"
              style={{ filter: "blur(6px)" }}
            >
              {content.hiddenStory}
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-gray-950/40 backdrop-blur-[1px]">
              <div className="text-center">
                <div data-pulse className="text-4xl mb-3">
                  🔒
                </div>
                <p className="text-gray-400 text-sm font-semibold">잠긴 내용</p>
              </div>
            </div>
          </div>
          <p
            data-anim="decode"
            className="text-gray-600 text-sm italic mb-8 pl-4 border-l border-gray-700"
          >
            &ldquo;{previewText}&rdquo;
          </p>
          <div data-anim="stagger">
            <Link
              href={secretHref}
              className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-gray-900 font-extrabold text-lg shadow-2xl shadow-white/10 hover:scale-105 hover:shadow-white/20 transition-all"
            >
              <span
                data-shine
                className="absolute top-0 -left-1/3 w-1/3 h-full skew-x-[-18deg] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)",
                }}
              />
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
      </div>
    </div>
  );
}
