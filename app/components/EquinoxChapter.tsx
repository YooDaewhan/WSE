"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Cinzel, Nanum_Myeongjo } from "next/font/google";
import { cast, credit } from "../data/cast";
import { directions } from "../data/art-direction";
import { content } from "../services/generation5/content";
import Header from "./Header";
import Footer from "./Footer";
import "../equinox-war.css";

/* 4기 이퀴녹스 — 인간계를 두고 벌이는 천사와 악마의 대격돌
   왼쪽 = 천계(낮), 오른쪽 = 마계(밤). 오른쪽은 왼쪽의 거울입니다. */
const cinzel = Cinzel({ weight: ["400", "700"], subsets: ["latin"], variable: "--ew-display", preload: false });
const myeongjo = Nanum_Myeongjo({ weight: ["400", "700", "800"], subsets: ["latin"], variable: "--ew-serif", preload: false });

const bySlug = (slug: string) => cast.find((m) => m.slug === slug)!;

/* 진영 — 개인화면(CharacterProfile)도 이 값으로 좌우를 정합니다. */
export const equinoxSide: Record<string, "day" | "night"> = { mika: "day", coco: "day", titi: "night", lucy: "night" };
/* 기본 그림 속 시선이 바깥을 향하는 캐릭터 — 뒤집어서 가운데(인간계)를 바라보게 합니다. */
export const equinoxFlip = ["coco"];

/* 같은 줄의 둘은 서로의 거울. */
const rows = [
  { day: "mika", night: "titi" },
  { day: "coco", night: "lucy" },
];

function Soul({ slug, side }: { slug: string; side: "day" | "night" }) {
  const flip = equinoxFlip.includes(slug);
  const m = bySlug(slug);
  const d = directions[slug];
  return (
    <Link href={m.href} className={`ew-soul ${side}`} style={{ "--c": d.color } as React.CSSProperties}>
      <span className="ew-portrait">
        <Image src={m.image!} alt={m.name} width={600} height={900} sizes="(max-width: 700px) 46vw, 30vw" className={flip ? "flip" : undefined} />
        <span className="ew-mark"><Image src={`/images/equinox/${slug}-mark.png`} width={80} height={80} alt="" /></span>
      </span>
      <span className="ew-soul-copy">
        <small>{side === "day" ? "天" : "魔"} · {m.role.toUpperCase()}</small>
        <b>{m.name}<span className="real-name">{credit(m)}</span></b>
        <em>{d.title} {d.subtitle}</em>
        <q>{m.content.quote}</q>
      </span>
    </Link>
  );
}

export default function EquinoxChapter() {
  /* 인간계의 마음 — 50 이 정확히 춘분. 왼쪽으로 갈수록 낮, 오른쪽으로 갈수록 밤. */
  const [tilt, setTilt] = useState(50);
  const verdict = tilt > 54 ? "낮 쪽으로 기울었다" : tilt < 46 ? "밤 쪽으로 기울었다" : "아직 아무 쪽도 아니다";
  /* 손대기 전엔 경계가 살랑 흔들리고(.idle), 화면 아무 데나 좌우로 끌면 경계가 손을 따라옵니다. */
  const [touched, setTouched] = useState(false);
  const [dragging, setDragging] = useState(false);
  const follow = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt(Math.round(Math.min(64, Math.max(36, ((e.clientX - r.left) / r.width) * 100))));
  };
  const grab = (e: React.PointerEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest("a, input")) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setTouched(true);
    setDragging(true);
    follow(e);
  };

  return (
    <div className={`wse-site equinox-war ${cinzel.variable} ${myeongjo.variable}`}>
      <Header />
      <main id="main">
        <section
          className={`ew-hero${touched ? "" : " idle"}${dragging ? " dragging" : ""}`}
          aria-label="이퀴녹스"
          style={{ "--tilt": tilt } as React.CSSProperties}
          onPointerDown={grab}
          onPointerMove={(e) => dragging && follow(e)}
          onPointerUp={() => setDragging(false)}
          onPointerCancel={() => setDragging(false)}
        >
          <div className="ew-topline"><Link href="/services">← 모든 이야기</Link><span>WSE ORIGINAL / 4기</span></div>

          <div className="ew-side day">
            <i className="ew-rays" aria-hidden="true" />
            <div className="ew-side-copy">
              <span className="ew-kicker">CAELUM · 천계</span>
              <strong>낮을 선물한<br />천사들</strong>
              <p>일어나. 넌 아직 할 수 있어.</p>
            </div>
          </div>
          <div className="ew-side night">
            <i className="ew-stars" aria-hidden="true" />
            <div className="ew-side-copy">
              <span className="ew-kicker">INFERNUM · 마계</span>
              <strong>밤을 선물한<br />악마들</strong>
              <p>괜찮아. 오늘은 쉬어도 돼.</p>
            </div>
          </div>

          <div className="ew-center">
            <h1><span className="sr-only">이퀴녹스 EQUINOX</span><Image src="/images/equinox/logo.png" width={700} height={700} sizes="(max-width: 700px) 42vw, 20vw" alt="" priority /></h1>
            <span className="ew-vs" aria-hidden="true">VS</span>
            <span className="ew-drag-hint" aria-hidden="true">← 끌어서 기울이기 →</span>
          </div>

          <div className="ew-balance">
            <p className="ew-tagline">{content.tagline}</p>
            <label htmlFor="ew-tilt">인간계의 마음 — {verdict}</label>
            <input id="ew-tilt" type="range" min={36} max={64} value={tilt} onChange={(e) => { setTouched(true); setTilt(+e.target.value); }} aria-valuetext={`낮 ${tilt} : 밤 ${100 - tilt}`} />
            <span className="ew-score"><b>낮 {tilt}</b><b>{100 - tilt} 밤</b></span>
          </div>
        </section>

        <section className="ew-decree">
          <span className="ew-kicker">THE WAGER · 신의 허락</span>
          <h2>{content.description}</h2>
          <p>{content.philosophy}</p>
        </section>

        <section className="ew-field" aria-labelledby="ew-field-title">
          <div className="ew-field-head">
            <span className="ew-kicker">FOUR SOULS · 전장</span>
            <h2 id="ew-field-title">당신을 두고, 둘씩 마주 섰다.</h2>
          </div>
          <div className="ew-banners" aria-hidden="true"><span>天 · 천계</span><span>魔 · 마계</span></div>
          {rows.map((r) => (
            <div className="ew-row" key={r.day}>
              <Soul slug={r.day} side="day" />
              <Soul slug={r.night} side="night" />
            </div>
          ))}
        </section>

        <section className="ew-vow">
          <blockquote>{content.motto}</blockquote>
          <span className="ew-kicker">낮도, 밤도, 결국 당신 편.</span>
        </section>

        <nav className="ew-bottom" aria-label="기수 이동">
          <Link href="/services/generation4">← 이전 이야기 · 레스큐팩</Link>
          <span>◐ · 이퀴녹스</span>
          <Link href="/services/generation6">다음 이야기 · 스팀팩 →</Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
