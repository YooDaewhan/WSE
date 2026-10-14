"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cast } from "../data/cast";
import { directions } from "../data/art-direction";
import { content } from "../services/generation6/content";
import Header from "./Header";
import Footer from "./Footer";
import "../stimpack.css";

const members = cast.filter((member) => member.group === 6);

/* 숨겨진 이야기는 떡밥만 — 반전(가짜약·흉수·끊어진 목줄)은 시크릿 페이지에 남겨둔다 */
type Shot = { title: string } | { src: string; pos: string; origin: string; zoom: number; scene: string };
const reels: { no: string; name: string; slug: string; shots: Shot[]; line: string }[] = [
  {
    no: "REEL 1", name: "흰 개", slug: "sugar", line: "…알았어. 대신 이게 마지막이야. 진짜야.",
    shots: [
      { title: "굶어 죽어가던 흰 개를 만났다." },
      { src: "/images/members/sugar.png", pos: "50% 24%", origin: "57% 29%", zoom: 2.3, scene: "SC.01 흰 개" },
      { title: "몇 번이고, 다음 생에." },
    ],
  },
  {
    no: "REEL 2", name: "검은 여우", slug: "holder", line: "……잡고 있는 거야. 놓치면 안 되니까.",
    shots: [
      { title: "벼랑에서 검은 여우를 만났다." },
      { src: "/images/members/holder.png", pos: "50% 100%", origin: "60% 60%", zoom: 1.8, scene: "SC.01 끈" },
      { title: "다음 생에 만나면." },
    ],
  },
];

export default function StimpackChapter() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return setCount(0);
    const t = setInterval(() => setCount((c) => (c > 0 ? c - 1 : 0)), 650);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-in")), { threshold: 0.35 });
    document.querySelectorAll(".sn-reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="wse-site stimpack-site">
      <div className="sn-film" aria-hidden="true"><i className="sn-grain" /><i className="sn-scratch" /><i className="sn-vignette" /></div>
      <Header />
      <main id="main" className="sn-main">
        <section className="sn-hero" aria-label="스팀팩" onClick={() => setCount(0)}>
          <div className="sn-topline"><Link href="/services">← 모든 이야기</Link><span>WSE ORIGINAL / 5기</span></div>
          {count > 0 ? (
            <div className="sn-leader" aria-hidden="true"><span className="sn-leader-sweep" key={count} /><b>{count}</b></div>
          ) : (
            <div className="sn-title">
              <span className="sn-presents">WSE PICTURES 제공</span>
              <h1>STIMPACK</h1>
              <span className="sn-ko">스 팀 팩</span>
              <p className="sn-since">— 3000년 전부터 상영 중 —</p>
              <p className="sn-tag">{content.tagline}</p>
              <a className="sn-start" href="#sn-reel-1">상영 시작 <span>▼</span></a>
            </div>
          )}
        </section>

        {reels.map((reel, r) => (
          <section className="sn-reel" id={`sn-reel-${r + 1}`} key={reel.no} aria-label={`${reel.no} ${reel.name}`}>
            <header className="sn-reel-head sn-reveal"><span>{reel.no}</span><h2>{reel.name}</h2><small>{members.find((m) => m.slug === reel.slug)?.name}의 기억 · 무성 · 흑백</small></header>
            <div className="sn-strip">
              {reel.shots.map((s, i) => "title" in s ? (
                <p className="sn-card sn-reveal" key={i}><span>{s.title}</span></p>
              ) : (
                <figure className="sn-shot sn-reveal" key={i}>
                  <div className="sn-frame"><Image src={s.src} alt="" width={1024} height={1536} sizes="(max-width: 900px) 92vw, 760px" style={{ transformOrigin: s.origin, scale: String(s.zoom), objectPosition: s.pos }} /></div>
                  <figcaption>{s.scene} · TAKE {i}</figcaption>
                </figure>
              ))}
              <p className="sn-line sn-reveal">“{reel.line}”</p>
            </div>
          </section>
        ))}

        <section className="sn-reel sn-reel-empty" aria-label="REEL 3 미현상">
          <header className="sn-reel-head sn-reveal"><span>REEL 3</span><h2>행운</h2><small>클로버의 기억 · 미현상</small></header>
          <div className="sn-strip">
            <figure className="sn-shot sn-static sn-reveal"><div className="sn-frame"><i /></div><figcaption>NO SIGNAL</figcaption></figure>
            <p className="sn-card sn-reveal"><span>이 필름은 아직 현상되지 않았습니다.</span></p>
            <p className="sn-line sn-reveal">“세잎은 행복이래. 그건 그냥 두는 거야.”</p>
          </div>
        </section>

        <section className="sn-present" aria-labelledby="sn-present-title">
          <p className="sn-card sn-reveal"><span>그리고, 이번 생.</span></p>
          <h2 id="sn-present-title" className="sn-you sn-reveal">당신.</h2>
          <div className="sn-cast sn-reveal">
            {members.map((m) => {
              const d = directions[m.slug];
              return (
                <Link href={m.href} className="sn-person" key={m.slug} style={{ "--c": d.color } as React.CSSProperties}>
                  <div className="sn-person-photo"><Image src={m.image!} alt={m.name} width={600} height={900} sizes="(max-width: 900px) 90vw, 30vw" /></div>
                  <span className="sn-person-role">{d.chapter}</span>
                  <h3>{m.name}</h3>
                  <p>“{m.content.quote}”</p>
                  <span className="sn-person-cta">이번 생의 이야기 ↗</span>
                </Link>
              );
            })}
          </div>
          <div className="sn-outro sn-reveal">
            <p>{content.philosophy}</p>
            <blockquote>“{content.motto}”</blockquote>
          </div>
        </section>

        <nav className="sn-bottom" aria-label="기수 이동">
          <Link href="/services/generation5">← 이전 상영작 · 이퀴녹스</Link>
          <span>THE END… ?</span>
          <Link href="/services/generation7">다음 상영작 · 시큐리티엑스 →</Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
