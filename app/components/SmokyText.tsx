"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";

/* ── 스모키 텍스트 ──
   글자가 연기처럼 번져 있다가 또렷하게 모여드는 등장 효과.

   · text 에 HTML 이 들어와도 되고, 태그는 걷어낸 뒤 글자 단위로 쪼갭니다.
     (<br> 만 줄바꿈으로 남습니다)
   · 글꼴·크기·굵기는 부모(예: <h1 className="text-6xl ...">)에서 그대로 물려받습니다.
   · 색은 color prop 으로 직접 넘깁니다. (연기 그림자를 그리는 데 쓰이기 때문)
──────────────────────────────────────────── */

/* 연기가 모여드는 방향.
   inPlace            = 제자리에서 오므라듦 (레이아웃 밖으로 안 나감, 기본값)
   bottomLeft/topLeft = 화면 밖에서 흘러 들어옴 */
type Direction = "inPlace" | "bottomLeft" | "topLeft";

/* 글자가 나타나는 순서.
   sequential = 앞 글자부터 차례로
   perLine    = 줄마다 왼쪽→오른쪽으로 (여러 줄로 접힐 때)
   none       = 전부 동시에 */
type Stagger = "sequential" | "perLine" | "none";

/* 언제 재생할지. mount = 그려지자마자, scroll = 화면에 들어올 때 */
type Trigger = "mount" | "scroll";

type Phase = "hidden" | "appearing" | "visible";

type Char = { char: string; index: number };
type Group = { type: "word" | "space" | "newline"; chars: Char[]; gi: number };

/* 줄 단위 위치 정보 (perLine 전용) */
type LineInfo = { posInLine: Map<number, number> };

export type SmokyTextProps = {
  text: string;
  color?: string;
  /* 1 = 또렷하게 툭, 20 = 아주 짙고 넓게 퍼지는 연기 */
  intensity?: number;
  direction?: Direction;
  stagger?: Stagger;
  trigger?: Trigger;
  /* 전체 재생 시간(초) */
  duration?: number;
  /* 재생 전 대기(초) */
  delay?: number;
  className?: string;
};

/* ── HTML → 순수 텍스트 (<br> 은 줄바꿈으로) ── */
function toPlainText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .join("\n")
    .trim();
}

/* ── 단어 / 공백 / 줄바꿈 덩어리로 쪼개기 ──
   단어를 통째로 감싸 두어야 줄바꿈이 단어 중간에서 일어나지 않습니다. */
function buildGroups(text: string): Group[] {
  const groups: Group[] = [];
  let index = 0;
  let gi = 0;
  const lines = text.split("\n");
  lines.forEach((line, lineIdx) => {
    for (const seg of line.match(/\S+|\s+/g) ?? []) {
      groups.push({
        type: /^\s/.test(seg) ? "space" : "word",
        chars: seg.split("").map((char) => ({ char, index: index++ })),
        gi: gi++,
      });
    }
    if (lineIdx < lines.length - 1) {
      groups.push({ type: "newline", chars: [], gi: gi++ });
    }
  });
  return groups;
}

/* ── 연기 키프레임 ──
   intensity 가 커질수록 번짐 반경·그림자 겹 수·날아오는 거리가 함께 커집니다. */
function buildKeyframes(id: string, color: string, intensity: number): string {
  const n = (Math.max(1, Math.min(20, intensity)) - 1) / 19; // 0~1
  const r = (v: number) => +v.toFixed(2);

  const peakBlur = Math.round(6 + n * 200); // 6px → 206px
  const initBlur = Math.round(2 + n * 70); // 2px → 72px

  /* 그림자를 여러 겹 쌓아 연기에 밀도를 줍니다. */
  const layers = 1 + Math.round(n * 3);
  const stack = (blur: number) =>
    Array.from(
      { length: layers },
      (_, i) => `0 0 ${Math.round((blur * (i + 1)) / layers)}px ${color}`,
    ).join(",");
  const peak = stack(peakBlur);
  const init = stack(initBlur);

  const crisp = `0 0 0 ${color}`;
  const d = 0.7 + n * 0.8; // 날아오는 거리 배수
  const s1 = r(1.3 + n * 0.5); // 제자리 모드: 크게 퍼진 상태에서 오므라듦
  const s2 = r(1.15 + n * 0.35);

  return `
@keyframes smoky-${id}-inPlace-a{from{opacity:0;text-shadow:${init};transform:scale(${s1})}40%{text-shadow:${peak}}to{opacity:1;text-shadow:${crisp};transform:none}}
@keyframes smoky-${id}-inPlace-b{from{opacity:0;text-shadow:${init};transform:scale(${s2})}40%{text-shadow:${peak}}to{opacity:1;text-shadow:${crisp};transform:none}}
@keyframes smoky-${id}-bottomLeft-a{from{opacity:0;text-shadow:${init};transform:translate3d(${r(-15 * d)}rem,${r(8 * d)}rem,0) rotate(40deg) skewX(-70deg) scale(0.7)}40%{text-shadow:${peak}}to{opacity:1;text-shadow:${crisp};transform:none}}
@keyframes smoky-${id}-bottomLeft-b{from{opacity:0;text-shadow:${init};transform:translate3d(${r(-18 * d)}rem,${r(8 * d)}rem,0) rotate(40deg) skewX(70deg) scale(0.5)}40%{text-shadow:${peak}}to{opacity:1;text-shadow:${crisp};transform:none}}
@keyframes smoky-${id}-topLeft-a{from{opacity:0;text-shadow:${init};transform:translate3d(${r(-15 * d)}rem,${r(-8 * d)}rem,0) rotate(-40deg) skewX(70deg) scale(0.7)}40%{text-shadow:${peak}}to{opacity:1;text-shadow:${crisp};transform:none}}
@keyframes smoky-${id}-topLeft-b{from{opacity:0;text-shadow:${init};transform:translate3d(${r(-18 * d)}rem,${r(-8 * d)}rem,0) rotate(-40deg) skewX(-70deg) scale(0.5)}40%{text-shadow:${peak}}to{opacity:1;text-shadow:${crisp};transform:none}}
`;
}

export default function SmokyText({
  text,
  color = "#111827",
  intensity = 9,
  direction = "inPlace",
  stagger = "sequential",
  trigger = "mount",
  duration = 2,
  delay = 0.2,
  className,
}: SmokyTextProps) {
  /* 인스턴스마다 다른 키프레임 이름 (색·강도가 서로 다를 수 있으므로) */
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

  const plain = useMemo(() => toPlainText(text), [text]);
  const groups = useMemo(() => buildGroups(plain), [plain]);

  const containerRef = useRef<HTMLSpanElement>(null);
  const wordRefs = useRef(new Map<number, HTMLElement>());
  const [lineInfo, setLineInfo] = useState<LineInfo | null>(null);
  const [phase, setPhase] = useState<Phase>("hidden");

  /* 키프레임을 <head> 에 심습니다. */
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = buildKeyframes(uid, color, intensity);
    document.head.appendChild(el);
    return () => el.remove();
  }, [uid, color, intensity]);

  /* ── perLine: 실제로 그려진 줄 위치를 재서 줄마다 순서를 매깁니다. ── */
  const measureLines = useCallback(() => {
    if (stagger !== "perLine") {
      setLineInfo(null);
      return;
    }
    const items: { top: number; chars: Char[] }[] = [];
    for (const g of groups) {
      if (!g.chars.length) continue;
      const el = wordRefs.current.get(g.gi);
      if (el) items.push({ top: el.offsetTop, chars: g.chars });
    }
    const cursor = new Map<number, number>();
    const posInLine = new Map<number, number>();
    for (const { top, chars } of items) {
      for (const c of chars) {
        const p = cursor.get(top) ?? 0;
        posInLine.set(c.index, p);
        cursor.set(top, p + 1);
      }
    }
    setLineInfo({ posInLine });
  }, [groups, stagger]);

  useEffect(() => {
    measureLines();
    const el = containerRef.current;
    if (!el || stagger !== "perLine") return;
    const ro = new ResizeObserver(measureLines);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measureLines, stagger]);

  /* ── 글자별 순서 값 ── */
  const orderOf = useCallback(
    (c: Char) => {
      if (stagger === "none") return 0;
      if (stagger === "perLine") return lineInfo?.posInLine.get(c.index) ?? 0;
      return c.index;
    },
    [stagger, lineInfo],
  );

  const maxOrder = useMemo(() => {
    let m = 0;
    for (const g of groups) {
      for (const c of g.chars) m = Math.max(m, orderOf(c));
    }
    return m;
  }, [groups, orderOf]);

  /* ── 재생 ── */
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const run = useCallback(() => {
    clearTimers();
    setPhase("hidden");
    timers.current.push(
      setTimeout(
        () => {
          setPhase("appearing");
          timers.current.push(
            setTimeout(() => setPhase("visible"), duration * 1000 + 200),
          );
        },
        Math.max(delay * 1000, 60),
      ),
    );
  }, [duration, delay]);

  useEffect(() => {
    clearTimers();
    if (trigger === "mount") {
      run();
      return clearTimers;
    }
    /* scroll: 화면 안으로 들어오면 한 번만 재생 */
    const el = containerRef.current;
    if (!el) return clearTimers;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { rootMargin: "-15% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimers();
    };
  }, [trigger, run, plain]);

  /* 글자 하나의 재생 시간·지연.
     전체 시간의 절반은 글자별 재생에, 나머지 절반은 글자 사이 간격에 씁니다. */
  const charDuration = duration * 0.5;
  const delayOf = (c: Char) =>
    maxOrder <= 0 ? 0 : (orderOf(c) * duration * 0.5) / maxOrder;

  return (
    <span ref={containerRef} className={className} style={{ display: "block" }}>
      {/* 읽기 도구에는 원문 그대로 한 번만 */}
      <span className="sr-only">{plain}</span>
      <span
        aria-hidden
        style={{
          color: "transparent",
          display: "block",
          backfaceVisibility: "hidden",
          wordBreak: "keep-all",
          overflowWrap: "normal",
        }}
      >
        {groups.map((group) => {
          if (group.type === "newline") return <br key={group.gi} />;
          if (group.type === "space") {
            return (
              <span key={group.gi} style={{ whiteSpace: "pre" }}>
                {" "}
              </span>
            );
          }
          return (
            <span
              key={group.gi}
              ref={(el) => {
                if (el) wordRefs.current.set(group.gi, el);
              }}
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {group.chars.map((c) => {
                const base = {
                  display: "inline-block",
                  textShadow: `0 0 0 ${color}`,
                } as const;

                if (phase === "hidden") {
                  return (
                    <span key={c.index} style={{ ...base, opacity: 0 }}>
                      {c.char}
                    </span>
                  );
                }
                if (phase === "visible") {
                  return (
                    <span key={c.index} style={{ ...base, opacity: 1 }}>
                      {c.char}
                    </span>
                  );
                }
                const variant = c.index % 2 === 0 ? "a" : "b";
                return (
                  <span
                    key={c.index}
                    style={{
                      ...base,
                      animation: `smoky-${uid}-${direction}-${variant} ${charDuration}s ${delayOf(c)}s cubic-bezier(0,0,0.58,1) both`,
                    }}
                  >
                    {c.char}
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </span>
  );
}
