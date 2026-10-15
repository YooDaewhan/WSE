"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Nanum_Brush_Script, Nanum_Myeongjo } from "next/font/google";
import { cast } from "../data/cast";
import { directions } from "../data/art-direction";
import { content } from "../services/generation1/content";
import Header from "./Header";
import Footer from "./Footer";
import "../dawn.css";

/* 0기 새벽조 — 먹과 수묵화 */
const brush = Nanum_Brush_Script({ weight: "400", subsets: ["latin"], variable: "--dw-brush", preload: false });
const myeongjo = Nanum_Myeongjo({ weight: ["400", "700"], subsets: ["latin"], variable: "--dw-serif", preload: false });

const members = cast.filter((member) => member.group === 1);
const plain = (name: string) => name.replace("(미정)", "");
type Drop = { id: number; x: number; y: number; s: number };

export default function DawnChapter() {
  const [drops, setDrops] = useState<Drop[]>([]);
  /* 종이를 누르면 먹물이 번진다 */
  const ink = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    const r = e.currentTarget.getBoundingClientRect();
    const drop = { id: Date.now(), x: e.clientX - r.left, y: e.clientY - r.top, s: 0.6 + Math.random() * 0.8 };
    setDrops((d) => [...d.slice(-6), drop]);
    setTimeout(() => setDrops((d) => d.filter((x) => x.id !== drop.id)), 2600);
  };

  return (
    <div className={`wse-site dawn-site ${brush.variable} ${myeongjo.variable}`}>
      <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
        <filter id="dw-bleed"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="4" /><feDisplacementMap in="SourceGraphic" scale="14" /><feGaussianBlur stdDeviation="0.6" /></filter>
        <filter id="dw-rough"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" /><feDisplacementMap in="SourceGraphic" scale="3" /></filter>
      </svg>
      <Header />
      <main id="main">
        <section className="dw-hero" aria-label="새벽조" onClick={ink}>
          <div className="dw-topline"><Link href="/services">← 모든 이야기</Link><span>WSE ORIGINAL / 0기</span></div>

          <div className="dw-scenery" aria-hidden="true">
            <span className="dw-sun" />
            <svg viewBox="0 0 1440 560" preserveAspectRatio="xMidYMax slice">
              <defs>
                {["far", "mid", "near"].map((k, i) => (
                  <linearGradient id={`dw-${k}`} x1="0" y1="0" x2="0" y2="1" key={k}>
                    <stop offset="0" stopColor="#1b1a17" stopOpacity={[0.28, 0.55, 0.92][i]} />
                    <stop offset={[0.55, 0.6, 0.7][i]} stopColor="#1b1a17" stopOpacity={[0.06, 0.12, 0.3][i]} />
                    <stop offset="1" stopColor="#1b1a17" stopOpacity="0" />
                  </linearGradient>
                ))}
              </defs>
              <g filter="url(#dw-bleed)">
                <path className="dw-far" fill="url(#dw-far)" d="M0 300 C120 250 170 170 260 190 C330 205 360 120 450 140 C520 156 560 240 640 230 C730 218 760 110 860 120 C960 130 990 230 1080 220 C1170 210 1200 150 1290 170 C1360 186 1400 240 1440 230 L1440 560 L0 560Z" />
                <path className="dw-mid" fill="url(#dw-mid)" d="M0 380 C90 340 150 250 230 270 C300 288 320 360 400 350 C480 340 520 230 610 250 C690 268 700 380 790 370 C880 360 930 280 1010 300 C1090 320 1120 400 1210 390 C1300 380 1350 320 1440 340 L1440 560 L0 560Z" />
                <path className="dw-near" fill="url(#dw-near)" d="M0 470 C80 430 130 360 210 380 C270 395 300 460 360 455 C430 450 470 410 520 430 L520 560 L0 560Z M980 560 L980 450 C1040 400 1110 330 1190 350 C1270 370 1300 440 1360 430 C1400 424 1420 400 1440 395 L1440 560Z" />
              </g>
            </svg>
            <i className="dw-mist" />
            <i className="dw-mist two" />
          </div>

          <div className="dw-title">
            <h1><span>새</span><span>벽</span><span>조</span></h1>
            <span className="dw-seal">曉<br />組</span>
          </div>
          <div className="dw-intro">
            <span className="dw-kicker">零 · 第一章 — 새벽을 여는 사람들</span>
            <p className="dw-tagline">{content.tagline}</p>
            <p className="dw-desc">{content.description}</p>
            <p className="dw-hint">종이를 눌러 먹을 떨어뜨려 보세요.</p>
          </div>

          {drops.map((d) => (
            <i key={d.id} className="dw-drop" style={{ left: d.x, top: d.y, "--s": d.s } as React.CSSProperties} aria-hidden="true" />
          ))}
        </section>

        <section className="dw-gallery" aria-labelledby="dw-gallery-title">
          <div className="dw-head">
            <span className="dw-kicker">四幅 · 네 폭의 족자</span>
            <h2 id="dw-gallery-title">가장 먼저 걸어간 넷.</h2>
            <p>먹으로 그린 얼굴에 손을 대면, 숨어 있던 색이 번져 나옵니다.</p>
          </div>
          <div className="dw-scrolls">
            {members.map((m, i) => {
              const d = directions[m.slug];
              return (
                <Link href={m.href} className="dw-scroll" key={m.slug} style={{ "--c": d.color, "--d": `${i * 0.12}s` } as React.CSSProperties}>
                  <span className="dw-rod" aria-hidden="true" />
                  <span className="dw-silk">
                    <span className="dw-paper">
                      <span className="dw-motif" aria-hidden="true">{d.motif}</span>
                      <Image src={m.image!} alt={plain(m.name)} width={600} height={900} sizes="(max-width: 900px) 45vw, 22vw" />
                      <span className="dw-name">{plain(m.name)}</span>
                      <span className="dw-mini-seal" aria-hidden="true">{d.motif}</span>
                    </span>
                  </span>
                  <span className="dw-rod bottom" aria-hidden="true" />
                  <span className="dw-caption"><b>{d.chapter}</b>{d.title} {d.subtitle}</span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="dw-ink">
          <div className="dw-ink-inner">
            <span className="dw-kicker">跋文 · 발문</span>
            <p>{content.philosophy}</p>
            <blockquote>{content.motto}</blockquote>
          </div>
        </section>

        <nav className="dw-bottom" aria-label="기수 이동">
          <Link href="/services/generation7">← 이전 이야기 · 시큐리티엑스</Link>
          <span>曉 · 새벽조</span>
          <Link href="/services/generation2">다음 이야기 · 스타터팩 →</Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
