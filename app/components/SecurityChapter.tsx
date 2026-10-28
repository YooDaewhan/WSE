"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cast, credit } from "../data/cast";
import { directions } from "../data/art-direction";
import { content } from "../services/generation7/content";
import Header from "./Header";
import Footer from "./Footer";
import "../security.css";

const members = cast.filter((member) => member.group === 7);
const PINKS = ["#ffb3c9", "#f2477e", "#ffe0e9", "#c2185b"];
const HEART = "M50 92 C20 72 2 52 2 30 C2 14 14 3 28 3 C38 3 46 9 50 17 C54 9 62 3 72 3 C86 3 98 14 98 30 C98 52 80 72 50 92 Z";

export default function SecurityChapter() {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);
  const member = members.find((m) => m.slug === picked);

  return (
    <div className="wse-site security-site">
      <Header />
      <main id="main">
        <section className={`sx-hero${open ? " is-open" : ""}`} aria-label="시큐리티엑스">
          <div className="sx-topline"><Link href="/services">← 모든 이야기</Link><span>WSE ORIGINAL / 6기</span></div>
          <div className="sx-intro">
            <span className="sx-kicker">VALENTINE EDITION · BODYGUARD CHOCOLAT</span>
            <h1>Security<em>X</em></h1>
            <p className="sx-tagline">시큐리티엑스 — {content.tagline}</p>
            <p className="sx-desc">{content.description}</p>
            <p className="sx-hint" aria-live="polite">{!open ? "포장은 경호팀이 직접 했어요." : member ? `${member.name}, 지금부터 당신 담당입니다.` : "마음에 드는 하트를 고르세요. 담당 경호원이 배정됩니다."}</p>
            <button className="sx-btn" onClick={() => { setOpen((o) => !o); setPicked(null); }}>{open ? "다시 포장하기" : "리본 풀기"} <span>{open ? "↺" : "♥"}</span></button>
          </div>

          <div className="sx-stage">
            <div className="sx-box">
              <svg className="sx-tray" viewBox="0 0 100 95" aria-hidden="true"><path d={HEART} /><path d={HEART} className="inner" transform="translate(7 6.5) scale(.86)" /></svg>
              <div className="sx-chocs">
                {members.map((m, i) => (
                  <button key={m.slug} className={`sx-choc${picked === m.slug ? " is-picked" : ""}`} onClick={() => setPicked(m.slug)} disabled={!open} aria-label={`${m.name} 초콜릿 고르기`} style={{ "--c": PINKS[i] } as React.CSSProperties}>
                    <svg viewBox="0 0 100 95" aria-hidden="true"><path d={HEART} /></svg>
                    <b>{String(i + 1).padStart(2, "0")}</b>
                  </button>
                ))}
              </div>
              <button className="sx-lid" onClick={() => setOpen(true)} tabIndex={open ? -1 : 0} aria-label="상자 열기">
                <svg viewBox="0 0 100 95" aria-hidden="true">
                  <defs>
                    <linearGradient id="sx-lid-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffe1ea" /><stop offset=".55" stopColor="#ff9fbb" /><stop offset="1" stopColor="#f2709a" /></linearGradient>
                    <clipPath id="sx-lid-clip"><path d={HEART} /></clipPath>
                  </defs>
                  <path d={HEART} fill="url(#sx-lid-g)" />
                  <g clipPath="url(#sx-lid-clip)">
                    <path d="M-10 70 L70 -10 L82 2 L2 82 Z" className="ribbon" />
                    <path d="M30 -10 L110 70 L98 82 L18 2 Z" className="ribbon" />
                  </g>
                  <path d={HEART} fill="none" stroke="#d9b26f" strokeWidth="1.2" />
                </svg>
                <span className="sx-lid-label"><small>SECURITY X</small><strong>Bodyguard<br />Chocolat</strong><small>4 PIECES · 6기</small></span>
                <span className="sx-bow" aria-hidden="true" />
              </button>
            </div>
            {member && (
              <div className="sx-tag" key={member.slug} style={{ "--c": "#f2477e" } as React.CSSProperties}>
                <div className="sx-tag-photo"><Image src={member.image!} alt={member.name} width={600} height={900} sizes="200px" /></div>
                <div>
                  <span className="sx-tag-code">CODE {directions[member.slug].motif} · 담당 경호원</span>
                  <h3>{member.name}<span className="real-name">{credit(member)}</span></h3>
                  <p>“{member.content.quote}”</p>
                  <Link href={member.href}>경호원 프로필 ↗</Link>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="sx-team" aria-labelledby="sx-team-title">
          <div className="sx-section-head"><span className="sx-kicker">YOUR BODYGUARDS</span><h2 id="sx-team-title">당신만을 위한 네 명.</h2><p>{content.philosophy}</p></div>
          <div className="sx-team-grid">
            {members.map((m) => {
              const d = directions[m.slug];
              return (
                <Link href={m.href} className="sx-card" key={m.slug} style={{ "--c": d.color } as React.CSSProperties}>
                  <div className="sx-card-photo"><Image src={m.image!} alt={m.name} width={600} height={900} sizes="(max-width: 900px) 90vw, 24vw" /><span className="sx-card-code">CODE {d.motif}</span></div>
                  <div className="sx-card-body">
                    <span className="sx-card-ch">{d.chapter}</span>
                    <h3>{m.name}<span className="real-name">{credit(m)}</span></h3>
                    <p>{d.title} {d.subtitle}</p>
                    <span className="sx-card-cta">경호 의뢰하기 <span>♥</span></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="sx-contract-sec">
          <article className="sx-contract">
            <span className="sx-kicker">PRIVATE ESCORT CONTRACT</span>
            <h2>경호 계약서</h2>
            <p className="sx-parties"><b>갑</b> 당신 <span>♥</span> <b>을</b> 시큐리티엑스</p>
            <ol>
              <li>을은 갑의 하트를 24시간 경호한다.</li>
              <li>을은 갑의 하트가 검게 물들지 않도록 한다.</li>
              <li>경호 기간은 정하지 않는다.</li>
              <li>본 계약은 갑이 해지할 수 없다. 을도 하지 않는다.</li>
            </ol>
            <p className="sx-redacted">※ 을의 신원 및 경력 사항 — <i>████████████</i> <small>(기밀)</small></p>
            <blockquote>“{content.motto}”</blockquote>
            <div className="sx-sign"><span>을 · Security X</span><i aria-hidden="true">♥</i></div>
          </article>
        </section>

        <nav className="sx-bottom" aria-label="기수 이동">
          <Link href="/services/generation6">← 이전 이야기 · 스팀팩</Link>
          <span>SECURITY X · WITH LOVE</span>
          <Link href="/services/generation8">다음 이야기 · 빌런즈 →</Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
