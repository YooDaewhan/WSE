"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cast } from "../data/cast";
import { directions } from "../data/art-direction";
import { content } from "../services/generation5/content";
import Header from "./Header";
import Footer from "./Footer";
import { EquinoxName, EquinoxTypeField } from "./EquinoxName";
import "../equinox.css";

const members = cast.filter((member) => member.group === 5);

export default function EquinoxChapter() {
  const [selected, setSelected] = useState(0);
  const member = members[selected];
  return (
    <div className="wse-site equinox-site">
      <Header />
      <main id="main">
        <section className="eq-hero" aria-label="이퀴녹스">
          <div className="eq-topline"><Link href="/services">← 모든 이야기</Link><span>WSE ORIGINAL / 4기</span></div>
          <div className="eq-orbit" aria-hidden="true" />
          <EquinoxTypeField slug={member.slug} korean={member.name} />
          <div className="eq-celestial" aria-hidden="true">
            <svg viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
              <defs><pattern id="eq-stars" width="150" height="130" patternUnits="userSpaceOnUse"><circle cx="22" cy="36" r="1" /><circle cx="113" cy="94" r="1.5" /><path d="M76 16v10m-5-5h10" /></pattern></defs>
              <rect width="1400" height="800" fill="url(#eq-stars)" stroke="none" />
              <g fill="none"><circle cx="370" cy="365" r="275" /><circle cx="370" cy="365" r="288" strokeDasharray="2 12" /><circle cx="1025" cy="375" r="330" /><ellipse cx="710" cy="385" rx="620" ry="175" transform="rotate(-20 710 385)" /><path d="M70 690H1330M700 85V720" strokeDasharray="3 9" /></g>
              <path d="M680 230l7 23 23 7-23 7-7 23-7-23-23-7 23-7zM1210 590l5 16 16 5-16 5-5 16-5-16-16-5 16-5z" />
            </svg>
            <span className="eq-margin-note">CELESTIAL ARCHIVE — EQUINOX</span>
            <span className="eq-margin-note eq-margin-right">光と影、その間にあなた。</span>
          </div>
          <div className="eq-intro">
            <span className="eq-kicker">BETWEEN DAY & NIGHT</span>
            <h1><span className="sr-only">이퀴녹스 EQUINOX</span><Image src="/images/equinox/logo.png" width={700} height={700} sizes="(max-width: 700px) 75vw, 34vw" alt="" priority /></h1>
            <h2>{content.tagline}</h2>
            <p>낮과 밤이 당신을 두고 다투는 이야기.</p>
            <a className="eq-link" href="#eq-story">두 세계의 이야기 <span>↓</span></a>
          </div>
          <div className="eq-feature" id="eq-selected" aria-live="polite">
            <div className="eq-feature-emblem" aria-hidden="true"><Image src={`/images/equinox/${member.slug}-mark.png`} width={140} height={140} alt="" /><span>0{selected + 1} / EQUINOX</span></div>
            <span className="eq-large-number" aria-hidden="true">0{selected + 1}</span>
            <Image className="eq-character" src={member.image!} alt={member.name} width={900} height={1350} sizes="(max-width: 700px) 90vw, 50vw" priority />
            <div className="eq-feature-caption" key={member.slug}><span>{member.role.toUpperCase()} / {member.birthplace}</span><EquinoxName slug={member.slug} /><h3>{member.name}</h3><Link href={member.href}>이 사람의 이야기 ↗</Link></div>
          </div>
          <div className="eq-vow"><span>DAY ◇ NIGHT</span><p key={member.slug}>“{member.content.quote}”</p><span>당신을 향한 네 개의 마음</span></div>
          <div className="eq-selector" aria-label="캐릭터 선택">
            {members.map((c, i) => <button key={c.slug} onClick={() => setSelected(i)} aria-pressed={selected === i} aria-controls="eq-selected"><span className="eq-seal"><Image src={`/images/equinox/${c.slug}-mark.png`} width={100} height={100} alt="" /></span><span><small>0{i + 1} / {c.role.toUpperCase()}</small><strong>{c.name}</strong></span><span className="eq-choice" aria-hidden="true">↗</span></button>)}
          </div>
        </section>
        <section className="eq-story" id="eq-story">
          <div><span className="eq-kicker">THE EQUILIBRIUM / 서막</span><h2>낮을 선물한 천사.<br />밤을 선물한 악마.<br /><em>그 사이에, 당신.</em></h2></div>
          <div><p className="eq-lead">{content.description}</p><p>{content.philosophy}</p><blockquote>“{content.motto}”</blockquote></div>
        </section>
        <section className="eq-cast" aria-labelledby="eq-cast-title">
          <div className="eq-section-heading"><span className="eq-kicker">FOUR SOULS, ONE EQUINOX</span><h2 id="eq-cast-title">당신에게 기울어진 세계.</h2><p>문장 너머, 네 사람의 이야기를 만나보세요.</p></div>
          <div className="eq-cast-grid">{members.map((c, i) => <Link className="eq-card" key={c.slug} href={c.href}><div className="eq-card-art"><span className="eq-card-index">0{i + 1}</span><Image className="eq-card-portrait" src={c.image!} alt={c.name} width={600} height={900} sizes="(max-width: 700px) 85vw, 24vw" /><span className="eq-card-seal"><Image src={`/images/equinox/${c.slug}-mark.png`} alt={`${c.name}의 문장`} width={100} height={100} /></span></div><div className="eq-card-copy"><EquinoxName slug={c.slug} /><span className="eq-kicker">{c.role} / {c.birthplace}</span><h3>{c.name}<span>↗</span></h3><p>{directions[c.slug].title}<br />{directions[c.slug].subtitle}</p></div></Link>)}</div>
        </section>
        <nav className="eq-bottom" aria-label="기수 이동"><Link href="/services">← 모든 이야기</Link><Link href="/services/generation6">다음 이야기 · 스팀팩 ↗</Link></nav>
      </main>
      <Footer />
    </div>
  );
}
