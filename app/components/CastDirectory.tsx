"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform, useVelocity } from "framer-motion";
import { cast, generations, stories, sides, credit } from "../data/cast";
import { chapters } from "../data/chapters";
import { directions } from "../data/art-direction";
import Header from "./Header";
import Footer from "./Footer";
import { useExperience } from "./Experience";
import "../chapters.css";
import "../magazine.css";

type Chapter = (typeof chapters)[number];
const styleFor = (chapter: Chapter) =>
  ({
    "--chapter-accent": chapter.color,
    "--chapter-shade": chapter.shade,
  }) as CSSProperties;
function Atmosphere({ chapter }: { chapter: Chapter }) {
  return (
    <div
      className={`chapter-atmosphere atmosphere-${chapter.atmosphere}`}
      aria-hidden="true"
    >
      <span className="chapter-sigil">{chapter.symbol}</span>
      <div className="chapter-horizon" />
      <div className="chapter-orbit" />
      {Array.from({ length: 9 }, (_, i) => (
        <i key={i} style={{ "--particle": i } as CSSProperties} />
      ))}
    </div>
  );
}
function Ensemble({
  id,
  priority = false,
}: {
  id: number;
  priority?: boolean;
}) {
  const members = cast.filter((c) => c.group === id && c.image);
  return (
    <div
      className={`chapter-ensemble ensemble-${members.length}`}
      aria-label={`${generations[id - 1].teamName}의 캐스트`}
    >
      {members.map((c, i) => (
        <Link
          href={c.href}
          className="ensemble-portrait"
          key={c.slug}
          style={{ "--portrait": i } as CSSProperties}
          aria-label={`${c.name} 개별 화면 보기`}
        >
          <Image
            src={c.image!}
            width={720}
            height={1080}
            sizes="(max-width: 700px) 44vw, 23vw"
            alt={c.name}
            priority={priority && i === 0}
          />
          <span>{c.name.replace("(미정)", "")}<span className="real-name">{credit(c)}</span></span>
        </Link>
      ))}
    </div>
  );
}
export default function CastDirectory({ group = 0 }: { group?: number }) {
  const { paused } = useExperience();
  if (group) {
    const chapter = chapters[group - 1];
    const generation = generations[group - 1];
    const members = cast.filter((c) => c.group === group);
    // 다음 장은 같은 줄 안에서 돈다 — 기수는 기수끼리, 파트너 · 매니저는 그 둘끼리
    const line = generation.side ? sides : stories;
    const next = line[(line.indexOf(generation) + 1) % line.length];
    return (
      <div
        className={`wse-site chapter-site chapter-detail chapter-${chapter.atmosphere}`}
        style={styleFor(chapter)}
      >
        <Header />
        <main id="main">
          <section className="team-cover">
            <Atmosphere chapter={chapter} />
            <div className="chapter-breadcrumb">
              <Link href="/services">← 기수의 이야기로</Link>
              <span>{generation.side ? "" : `${generation.label} / `}WSE ORIGINAL STORY</span>
            </div>
            <div className="team-cover-copy">
              <span className="chapter-overline">
                {generation.side ? "WSE" : `CHAPTER ${String(group).padStart(2, "0")}`} — {chapter.english}
              </span>
              <h1>{generation.teamName}</h1>
              <p>{chapter.story.tagline}</p>
              <a className="chapter-enter" href="#team-story">
                이야기 펼치기 <span>↓</span>
              </a>
            </div>
            <Ensemble id={group} priority />
            <span className="cover-caption">{chapter.invitation}</span>
          </section>
          <section className="team-prologue" id="team-story">
            <div className="prologue-margin">
              <span>PROLOGUE</span>
              <small>
                {generation.label} · {generation.teamName}
              </small>
            </div>
            <div className="prologue-text">
              <span className="chapter-overline">{chapter.english}</span>
              <h2>{chapter.story.tagline}</h2>
              <p className="prologue-intro">{chapter.story.description}</p>
              <p>{chapter.story.philosophy}</p>
              <div className="chapter-keywords">
                {chapter.words.map((word, i) => (
                  <span key={word}>
                    <small>0{i + 1}</small>
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </section>
          <section className="team-manifesto">
            <span aria-hidden="true">{chapter.symbol}</span>
            <motion.blockquote
              initial={{ opacity: 0.2, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: paused ? 0 : 1 }}
            >
              {chapter.story.motto}
            </motion.blockquote>
            <small>{generation.teamName} / OUR PROMISE</small>
          </section>
          <section className="team-encounters">
            <div className="encounters-heading">
              <span className="chapter-overline">THE CAST OF THIS STORY</span>
              <h2>이 이야기를 살아가는 사람들.</h2>
              <p>{generation.teamName}의 시선으로, 조금 더 가까이.</p>
            </div>
            {members.map((c, i) => (
              <article
                key={c.slug}
                className={`team-member member-${i % 2 ? "right" : "left"}`}
              >
                <Link
                  href={c.href}
                  className="team-member-art"
                  aria-label={`${c.name} 개별 화면 보기`}
                >
                  {c.image ? (
                    <Image
                      src={c.image}
                      width={900}
                      height={1350}
                      sizes="(max-width: 700px) 88vw, 43vw"
                      alt={c.name}
                    />
                  ) : (
                    <div className="chapter-art-pending">
                      <span>{directions[c.slug].motif}</span>
                      <p>비주얼 준비 중</p>
                    </div>
                  )}
                  <span className="member-image-caption">
                    {c.role.toUpperCase()} / {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
                <motion.div
                  className="team-member-copy"
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: paused ? 0 : 0.7 }}
                >
                  <span className="chapter-overline">
                    {generation.teamName} — {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{c.name.replace("(미정)", "")}<span className="real-name">{credit(c)}</span></h3>
                  <blockquote>“{c.content.quote}”</blockquote>
                  <p>
                    {directions[c.slug].title}
                    <br />
                    {directions[c.slug].subtitle}
                  </p>
                  <Link className="chapter-enter" href={c.href}>
                    이 사람의 이야기 <span>↗</span>
                  </Link>
                </motion.div>
              </article>
            ))}
          </section>
          <nav className="chapter-next" aria-label="다음 기수">
            <Link href="/services">← 모든 이야기</Link>
            <Link href={next.href}>
              <small>다음 장으로 · {next.label}</small>
              <strong>{next.teamName} ↗</strong>
            </Link>
          </nav>
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="wse-site">
      <Header />
      <main id="main">
        <CastCanvas />
      </main>
    </div>
  );
}

/* CAST — 끝없이 이어지는 캔버스. 아무 데나 잡고 던지면 관성으로 흐르고, 속도만큼 기울어진다.
   위 가로줄 = 기수(전속), 왼쪽 세로줄 = 기수 밖 사람들(파트너 · 매니저). 벽에는 둘 다 섞여 흐른다 */
const COLS = 6;
const ROWS = Math.ceil((cast.length + 1) / COLS);
const GAP = 14;
const slots = Array.from({ length: COLS * ROWS }, (_, i) => cast[i] ?? null);
function CastCanvas() {
  const { paused } = useExperience();
  const [tw, setTw] = useState(200);
  const [hover, setHover] = useState<(typeof cast)[number] | null>(null);
  const [focus, setFocus] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  useEffect(() => {
    const fit = () => setTw(Math.round(Math.min(240, Math.max(140, innerWidth * 0.15))));
    fit();
    addEventListener("resize", fit);
    return () => removeEventListener("resize", fit);
  }, []);
  const th = Math.round(tw * 1.4);
  const W = COLS * (tw + GAP);
  const H = ROWS * (th + GAP);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tx = useTransform(x, (v) => (((v % W) + W) % W) - W);
  const ty = useTransform(y, (v) => (((v % H) + H) % H) - H);
  // 속도 샘플이 프레임마다 튀어서 기울기가 떨리던 것 — 스프링으로 걸러 부드럽게
  const smooth = { stiffness: 120, damping: 30 };
  const skewX = useSpring(useTransform(useVelocity(x), [-3000, 3000], [7, -7], { clamp: true }), smooth);
  const skewY = useSpring(useTransform(useVelocity(y), [-3000, 3000], [-5, 5], { clamp: true }), smooth);
  const vel = useRef({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number } | null>(null);
  const moved = useRef(0);
  const still = useRef(false);
  still.current = paused;
  useAnimationFrame((_, delta) => {
    if (drag.current) return;
    const v = vel.current;
    // 프레임 간격만큼만 흐르게 — 프레임이 밀려도 속도가 일정
    const drift = still.current ? 0 : Math.min(delta, 50) / 16.7;
    x.set(x.get() + v.x - 0.35 * drift);
    y.set(y.get() + v.y - 0.18 * drift);
    v.x *= 0.93;
    v.y *= 0.93;
  });
  const end = () => {
    drag.current = null;
    setDragging(false);
  };
  return (
    <section
      className={`cv${dragging ? " is-dragging" : ""}${focus !== null ? " has-focus" : ""}`}
      onPointerDown={(e) => {
        drag.current = { x: e.clientX, y: e.clientY };
        moved.current = 0;
        vel.current = { x: 0, y: 0 };
        setDragging(true);
      }}
      onPointerMove={(e) => {
        if (!drag.current) return;
        const dx = e.clientX - drag.current.x;
        const dy = e.clientY - drag.current.y;
        drag.current = { x: e.clientX, y: e.clientY };
        moved.current += Math.abs(dx) + Math.abs(dy);
        x.set(x.get() + dx);
        y.set(y.get() + dy);
        vel.current = { x: dx, y: dy };
      }}
      onPointerUp={end}
      onPointerLeave={end}
      onWheel={(e) => {
        vel.current.x -= e.deltaX * 0.12;
        vel.current.y -= e.deltaY * 0.12;
      }}
    >
      <motion.div className="cv-plane" style={{ x: tx, y: ty, skewX, skewY }}>
        {Array.from({ length: 9 }, (_, copy) => (
          <div
            key={copy}
            className="cv-copy"
            style={{ left: (copy % 3) * W, top: Math.floor(copy / 3) * H, width: W, height: H }}
            aria-hidden={copy > 0}
          >
            {slots.map((c, s) => {
              const col = s % COLS;
              const style = {
                left: col * (tw + GAP),
                top: Math.floor(s / COLS) * (th + GAP) + (col % 2 ? th / 2 : 0),
                width: tw,
                height: th,
                "--hue": c ? chapters[c.group - 1].color : "#d4ef83",
                "--shade": c ? chapters[c.group - 1].shade : "#252722",
              } as CSSProperties;
              if (!c)
                return (
                  <div key={s} className="cv-tile cv-logo" style={style}>
                    <span>wse</span>
                    <small>WE START EVENING</small>
                  </div>
                );
              return (
                <Link
                  key={s}
                  href={c.href}
                  className={`cv-tile${focus !== null && c.group !== focus ? " is-dim" : ""}`}
                  style={style}
                  tabIndex={copy > 0 ? -1 : undefined}
                  draggable={false}
                  onClick={(e) => moved.current > 8 && e.preventDefault()}
                  onPointerEnter={() => setHover(c)}
                  onPointerLeave={() => setHover(null)}
                >
                  {c.image ? (
                    <Image src={c.image} width={360} height={504} sizes="240px" alt={copy ? "" : c.name} draggable={false} loading="eager" />
                  ) : (
                    <span className="cv-pending">{chapters[c.group - 1].symbol}</span>
                  )}
                  <span className="cv-tag">
                    <small>{c.generation} {c.teamName}</small>
                    {c.name.replace("(미정)", "")}
                  </span>
                </Link>
              );
            })}
          </div>
        ))}
      </motion.div>
      <div className="cv-hud" aria-hidden="true">
        <motion.div key={hover?.slug ?? focus ?? "cast"} initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }}>
          <small>{hover ? `${hover.generation} ${hover.teamName} · ${hover.role.toUpperCase()}` : focus ? `${generations[focus - 1].label} · ${cast.filter((c) => c.group === focus).length} PEOPLE` : `${cast.length} PEOPLE · ${stories.length} STORIES`}</small>
          <strong>{hover ? hover.name.replace("(미정)", "") : focus ? generations[focus - 1].teamName : "THE CAST"}</strong>
        </motion.div>
      </div>
      <div className="cv-bar">
        <span className="cv-hint">DRAG · THROW · SCROLL</span>
        {/* 칩에 올리면 벽에서 그 팀만 밝아지고, 누르면 기수 페이지로 */}
        {([["기수별 이야기", stories, undefined], ["기수 밖 사람들", sides, "cv-side"]] as const).map(([label, list, cls]) => (
          <nav key={label} className={cls} aria-label={label} onPointerDown={(e) => e.stopPropagation()} onPointerLeave={() => setFocus(null)}>
            {list.map((g) => (
              <Link
                key={g.id}
                href={g.href}
                className={focus === g.id ? "is-on" : undefined}
                style={{ "--hue": chapters[g.id - 1].color } as CSSProperties}
                onPointerEnter={() => setFocus(g.id)}
                onFocus={() => setFocus(g.id)}
              >
                <em>{g.side ? chapters[g.id - 1].symbol : String(g.id).padStart(2, "0")}</em>
                <small>{chapters[g.id - 1].english}</small>
                <strong>{g.teamName}</strong>
                <span className="cv-faces" aria-hidden="true">
                  {cast.filter((c) => c.group === g.id && c.image).map((c) => (
                    <Image key={c.slug} src={c.image!} width={64} height={64} sizes="32px" alt="" />
                  ))}
                </span>
              </Link>
            ))}
          </nav>
        ))}
      </div>
    </section>
  );
}
