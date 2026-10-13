"use client";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useExperience } from "./components/Experience";
import { cast, generations } from "./data/cast";
import { directions } from "./data/art-direction";
import { news } from "./data/news";
import ShopPreview from "./components/ShopPreview";
import "./broadcast.css";
const featured = [
  "navigator",
  "igniter",
  "celebrator",
  "titi",
  "coco",
  "sugar",
];
/* 오늘 밤 편성표 — 7개 팀이 18시부터 자정까지 한 시간씩. */
const FIRST_HOUR = 18;
const ease = [0.22, 1, 0.36, 1] as const;
const plain = (name: string) => name.replace("(미정)", "");
const pad = (n: number) => String(n).padStart(2, "0");
export default function Home() {
  const [index, setIndex] = useState(0);
  const [tuning, setTuning] = useState(false);
  const [now, setNow] = useState<Date | null>(null);
  const c = cast.find((c) => c.slug === featured[index])!;
  const d = directions[c.slug];
  const { paused } = useExperience();
  const still = useReducedMotion() || paused;
  const video = useRef<HTMLVideoElement>(null);
  const tune = (i: number) => {
    const next = (i + featured.length) % featured.length;
    if (next === index) return;
    if (still) return setIndex(next);
    setTuning(true);
    setTimeout(() => {
      setIndex(next);
      setTuning(false);
    }, 260);
  };
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (still) return;
    const t = setTimeout(() => tune(index + 1), 9000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, still]);
  useEffect(() => {
    if (paused) video.current?.pause();
    else video.current?.play().catch(() => {});
  }, [paused]);
  const hour = now?.getHours() ?? -1;
  const live = hour >= FIRST_HOUR ? hour - FIRST_HOUR : hour === 0 ? 6 : -1;
  const clock = now ? `${pad(now.getHours())}:${pad(now.getMinutes())}` : "--:--";
  return (
    <div className="wse-site">
      <Header />
      <main id="main">
        <section
          className="tv-hero"
          style={{ "--accent": d.color, "--tone": d.secondary } as CSSProperties}
          aria-label="WSE 저녁 방송"
        >
          <div className="tv-screen">
            <AnimatePresence initial={false}>
              <motion.div
                key={c.slug}
                className="tv-picture"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                <Image className="tv-picture-bg" src={c.image!} alt="" fill sizes="40vw" />
                <Image
                  className="tv-picture-fg"
                  src={c.image!}
                  alt={`${plain(c.name)} 방송 화면`}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="tv-scanlines" aria-hidden="true" />
            <div className={`tv-static${tuning ? " is-on" : ""}`} aria-hidden="true" />
            <div className="tv-osd">
              <span className="tv-live">
                <i /> LIVE
              </span>
              <span className="tv-channel">
                CH.{pad(index + 1)} <small>{c.generation} {c.teamName}</small>
              </span>
              <span className="tv-clock">{clock}</span>
            </div>
            <div className="tv-title">
              <span>WSE EVENING BROADCAST</span>
              <h1>
                YOUR EVENING.
                <br />
                OUR <em>CHANNEL.</em>
              </h1>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={c.slug}
                className="tv-lower"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 30, opacity: 0 }}
                transition={{ duration: 0.45, ease }}
              >
                <Link href={c.href} className="tv-lower-name">
                  <small>{d.chapter}</small>
                  {plain(c.name)} <span>↗</span>
                </Link>
                <p className="tv-lower-quote">
                  {[...c.content.quote].map((ch, i) => (
                    <motion.span
                      key={i}
                      initial={still ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.35 + i * 0.035, duration: 0.01 }}
                    >
                      {ch}
                    </motion.span>
                  ))}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="tv-viewer">지금 이 방송을 보는 사람 — <strong>당신</strong></div>
          </div>
          <div className="tv-remote" role="group" aria-label="채널 바꾸기">
            <button onClick={() => tune(index - 1)} aria-label="이전 채널">CH ▲</button>
            {featured.map((s, i) => (
              <button
                key={s}
                className="tv-num"
                aria-label={`${plain(cast.find((m) => m.slug === s)!.name)} 채널`}
                aria-pressed={index === i}
                onClick={() => tune(i)}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={() => tune(index + 1)} aria-label="다음 채널">CH ▼</button>
          </div>
        </section>
        <div className="tv-ticker">
          <Link href="/news" className="tv-ticker-tag">속보</Link>
          <div aria-hidden="true">
            <div>
              {Array.from({ length: 3 }, (_, i) => (
                <span key={i}>
                  {news.map((n) => n.title).join("  ✳  ")}  ✳  오늘 밤도 WSE와 함께  ✳  YOUR NEXT FAVORITE IS ON AIR  ✳{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
        <section id="discover" className="tv-lineup">
          <div className="tv-section-head">
            <span className="tv-chip">TONIGHT&apos;S LINEUP</span>
            <h2>
              오늘 밤
              <br />
              <em>편성표.</em>
            </h2>
            <p>
              {live >= 0
                ? `지금 ${generations[live].teamName} 방송 중. 원하는 채널로 들어오세요.`
                : `첫 방송은 오늘 저녁 ${FIRST_HOUR}:00. 미리 편성표를 확인하세요.`}
            </p>
          </div>
          <ol className="tv-slots">
            {generations.map((g, i) => {
              const members = cast.filter((m) => m.group === g.id && m.image);
              const color = directions[members[0]?.slug]?.color ?? "var(--acid)";
              const state = i === live ? "live" : live >= 0 && i < live ? "past" : "next";
              return (
                <motion.li
                  key={g.id}
                  initial={still ? false : { opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.55, ease }}
                >
                  <Link
                    href={g.href}
                    className={`tv-slot is-${state}`}
                    style={{ "--accent": color } as CSSProperties}
                  >
                    <span className="tv-slot-time">{pad((FIRST_HOUR + i) % 24)}:00</span>
                    <span className="tv-slot-state">
                      {state === "live" ? "● ON AIR" : state === "past" ? "다시보기" : "방송 예정"}
                    </span>
                    <span className="tv-slot-show">
                      <small>{g.label} · {g.theme}</small>
                      <strong>{g.teamName}</strong>
                      <span>{g.tagline}</span>
                    </span>
                    <span className="tv-slot-cast" aria-hidden="true">
                      {members.slice(0, 4).map((m) => (
                        <Image key={m.slug} src={m.image!} alt="" width={96} height={144} sizes="52px" />
                      ))}
                    </span>
                    <span className="tv-slot-go" aria-hidden="true">↗</span>
                  </Link>
                </motion.li>
              );
            })}
          </ol>
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
            <span className="eyebrow">INTERMISSION · 잠시 후 계속됩니다</span>
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
        <section id="news" className="tv-news">
          <div className="tv-section-head">
            <span className="tv-chip">WSE NEWS · 뉴스 데스크</span>
            <h2>
              저녁
              <br />
              <em>뉴스.</em>
            </h2>
            <Link className="text-link" href="/news">전체 소식 ↗</Link>
          </div>
          <div className="tv-news-list">
            {news.slice(0, 3).map((n, i) => (
              <Link key={n.slug} href={`/news/${n.slug}`} className="tv-caption">
                <span className="tv-caption-tag">{i === 0 ? "단독" : n.category}</span>
                <strong>{n.title}</strong>
                <span className="tv-caption-sub">{n.body[0]}</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="home-shop section-shell" id="shop">
          <div className="section-top">
            <span className="eyebrow">WSE 홈쇼핑 채널</span>
            <span>방송 준비 중 · 채널 고정!</span>
          </div>
          <ShopPreview />
        </section>
        <section id="connect" className="tv-letters">
          <span className="tv-chip">시청자 게시판</span>
          <Link href="/contact" className="tv-onair">
            <motion.span
              className="tv-onair-sign"
              whileInView={{
                color: ["#4a1b1a", "#ff4a3d", "#4a1b1a", "#ff4a3d"],
                borderColor: ["#4a1b1a", "#ff4a3d", "#4a1b1a", "#ff4a3d"],
                textShadow: ["0 0 0 #0000", "0 0 18px #ff4a3d", "0 0 0 #0000", "0 0 18px #ff4a3d"],
              }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: still ? 0 : 0.9, times: [0, 0.2, 0.35, 1], delay: 0.3 }}
            >
              ON AIR
            </motion.span>
            <span className="tv-onair-copy">
              당신의 사연이,
              <br />
              <em>다음 방송이 됩니다.</em>
            </span>
            <span className="tv-onair-cta">사연 보내기 ↗</span>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
