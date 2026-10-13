"use client";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useExperience } from "./components/Experience";
import { cast, generations } from "./data/cast";
import { directions } from "./data/art-direction";
import { news } from "./data/news";
import ShopPreview from "./components/ShopPreview";
import "./sky.css";
const ease = [0.22, 1, 0.36, 1] as const;
const plain = (name: string) => name.replace("(미정)", "");
/* 별자리 — 팀마다 하늘의 한 자리, 멤버는 그 주변의 별. 좌표는 viewBox 1000×620 기준. */
const CENTERS = [
  [150, 150], [430, 105], [760, 140], [890, 400], [620, 470], [330, 420], [110, 470],
];
const SHAPES = [
  [[0, 0], [78, -34], [140, 18], [70, 78]],
  [[0, 0], [62, 52], [128, 30], [176, -26]],
  [[0, 0], [-58, 60], [26, 96], [96, 44]],
  [[0, 0], [44, -70], [-40, -92], [-96, -30]],
];
const constellations = generations.map((g, i) => {
  const members = cast.filter((m) => m.group === g.id && m.image);
  const [cx, cy] = CENTERS[i];
  const shape = SHAPES[i % SHAPES.length];
  const stars = members.map((m, k) => ({ m, x: cx + shape[k % 4][0], y: cy + shape[k % 4][1] }));
  const xs = stars.map((s) => s.x);
  const label = [(Math.min(...xs) + Math.max(...xs)) / 2, Math.max(...stars.map((s) => s.y)) + 40] as const;
  return { g, stars, label };
});
/* 고정된 별 배경 — 매번 같은 자리에 뜨도록 간단한 의사난수. */
const starfield = Array.from({ length: 140 }, (_, i) => {
  const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
  return `${(r(1) * 100).toFixed(2)}vw ${(r(2) * 100).toFixed(2)}vh 0 ${r(3) > 0.85 ? 1.2 : 0.4}px #fff${r(4) > 0.5 ? "" : "a"}`;
}).join(",");
export default function Home() {
  const { paused } = useExperience();
  const still = useReducedMotion() || paused;
  const video = useRef<HTMLVideoElement>(null);
  const [pick, setPick] = useState("igniter");
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 0.12, 0.3, 1], ["#f7b98a", "#d9708a", "#2b2557", "#070a1c"]);
  const bottom = useTransform(scrollYProgress, [0, 0.12, 0.3, 1], ["#fbe3b8", "#f2a77f", "#5b3a78", "#11183a"]);
  const sky = useMotionTemplate`linear-gradient(${top}, ${bottom})`;
  const stars = useTransform(scrollYProgress, [0.06, 0.25], [0, 1]);
  const sunY = useTransform(scrollYProgress, [0, 0.14], ["0vh", "48vh"]);
  useEffect(() => {
    if (paused) video.current?.pause();
    else video.current?.play().catch(() => {});
  }, [paused]);
  const chosen = cast.find((m) => m.slug === pick)!;
  const dc = directions[pick];
  return (
    <div className="wse-site sky-site">
      <motion.div className="sky-bg" style={{ background: sky }} aria-hidden="true">
        <motion.div className="sky-stars" style={{ opacity: stars, boxShadow: starfield }} />
      </motion.div>
      <Header />
      <main id="main">
        <section className="sky-hero">
          <motion.div className="sky-sun" style={{ y: still ? 0 : sunY }} aria-hidden="true" />
          <div className="sky-horizon" aria-hidden="true" />
          <span className="sky-kicker">DIFFERENT WORLDS. SAME SKY.</span>
          <h1>
            {"WE START EVENING".split(" ").map((w, i) => (
              <motion.span
                key={w}
                initial={still ? false : { opacity: 0, y: "0.4em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease, delay: 0.2 + i * 0.18 }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          <p>
            서로 다른 세계에서 온 이들이,
            <br />
            같은 저녁 하늘 아래에서 당신을 기다려요.
          </p>
          <a href="#discover" className="sky-cue">
            해가 지면, 별이 떠요 <span>↓</span>
          </a>
        </section>
        <section id="discover" className="sky-map">
          <div className="sky-head">
            <span className="sky-chip">CONSTELLATIONS</span>
            <h2>
              일곱 개의 별자리,
              <br />
              <em>하나의 하늘.</em>
            </h2>
            <p>별을 눌러 보세요. 오늘 밤 당신에게 닿을 이야기가 있어요.</p>
          </div>
          <div className="sky-map-grid">
            <svg viewBox="0 0 1000 620" className="sky-chart" role="group" aria-label="WSE 별자리 지도">
              {constellations.map(({ g, stars: pts, label }, ci) => (
                <g key={g.id}>
                  <motion.polyline
                    points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
                    className="sky-line"
                    initial={still ? false : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.6, ease, delay: ci * 0.15 }}
                  />
                  <a href={g.href}>
                    <text x={label[0]} y={label[1]} className="sky-label">
                      {g.teamName}
                    </text>
                    <text x={label[0]} y={label[1] + 20} className="sky-sublabel">
                      {g.label} · {g.theme.split(" · ")[1] ?? g.theme}
                    </text>
                  </a>
                  {pts.map(({ m, x, y }) => (
                    <g
                      key={m.slug}
                      className={`sky-star${pick === m.slug ? " is-on" : ""}`}
                      style={{ "--accent": directions[m.slug]?.color ?? "#fff" } as CSSProperties}
                      tabIndex={0}
                      role="button"
                      aria-label={`${plain(m.name)} 별`}
                      aria-pressed={pick === m.slug}
                      onClick={() => setPick(m.slug)}
                      onMouseEnter={() => setPick(m.slug)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setPick(m.slug);
                        }
                      }}
                    >
                      <circle cx={x} cy={y} r={18} className="sky-star-halo" />
                      <circle cx={x} cy={y} r={5.5} className="sky-star-core" />
                    </g>
                  ))}
                </g>
              ))}
            </svg>
            <AnimatePresence mode="wait">
              <motion.article
                key={pick}
                className="sky-card"
                style={{ "--accent": dc.color } as CSSProperties}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease }}
              >
                <Image src={chosen.image!} alt={plain(chosen.name)} width={600} height={900} sizes="(max-width: 800px) 90vw, 30vw" />
                <div>
                  <small>{chosen.generation} {chosen.teamName} · {chosen.role.toUpperCase()}</small>
                  <h3>{plain(chosen.name)}</h3>
                  <p>&ldquo;{chosen.content.quote}&rdquo;</p>
                  <Link href={chosen.href}>이 별의 이야기 ↗</Link>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </section>
        <section id="film" className="evening-film">
          <video
            ref={video}
            src="/images/home-hero.mp4"
            poster="/images/home-hero.webp"
            muted
            loop
            playsInline
            preload="none"
            aria-label="햇살이 머무는 WSE의 방"
          />
          <div>
            <span className="eyebrow">AFTERGLOW · 해가 머물던 방</span>
            <h2>
              당신의 하루에
              <br />
              머물고 싶은 이야기.
            </h2>
            <Link className="pill-button" href="/about">
              WSE의 이야기<span>↗</span>
            </Link>
          </div>
        </section>
        <section id="news" className="sky-news">
          <div className="sky-head">
            <span className="sky-chip">TONIGHT</span>
            <h2>
              오늘 밤
              <br />
              <em>하늘 소식.</em>
            </h2>
            <Link className="sky-more" href="/news">전체 소식 ↗</Link>
          </div>
          <ul>
            {news.slice(0, 3).map((n) => (
              <li key={n.slug}>
                <Link href={`/news/${n.slug}`}>
                  <span>{n.category}</span>
                  <strong>{n.title}</strong>
                  <i aria-hidden="true">✦</i>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="home-shop section-shell" id="shop">
          <ShopPreview />
        </section>
        <section id="connect" className="sky-wish">
          <span className="sky-meteor" aria-hidden="true" />
          <span className="sky-chip">MAKE A WISH</span>
          <Link href="/contact">
            별똥별에게,
            <br />
            <em>다음 이야기를 빌어요.</em>
            <span>소원 보내기 ↗</span>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
