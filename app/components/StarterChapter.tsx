"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cast } from "../data/cast";
import { directions } from "../data/art-direction";
import { content } from "../services/generation2/content";
import Header from "./Header";
import Footer from "./Footer";
import "../starter.css";

const members = cast.filter((member) => member.group === 2);
/* 타이틀 STAR 색 — 이그나이터 붉은 계열, 네비게이터 푸른 계열, 셀러브레이터 노란 계열 */
const starColors: Record<string, string> = { igniter: "#e5482b", navigator: "#2b86c9", celebrator: "#e8ad12" };
const types: Record<string, string> = { igniter: "불", navigator: "바람", celebrator: "빛" };
const names: Record<string, { en: string; ja: string; el: string; elJa: string }> = {
  igniter: { en: "IGNITER", ja: "イグナイター", el: "FIRE", elJa: "炎" },
  navigator: { en: "NAVIGATOR", ja: "ナビゲーター", el: "WIND", elJa: "風" },
  celebrator: { en: "CELEBRATOR", ja: "セレブレーター", el: "LIGHT", elJa: "光" },
};

function TypeField({ slug, korean }: { slug: string; korean: string }) {
  const n = names[slug];
  const rows: [string, string[]][] = [
    ["xl", [n.en, n.el]],
    ["sm", [korean, n.elJa, types[slug], "STARTER PACK", n.ja]],
    ["md", [n.ja, korean, n.elJa]],
    ["sm", [n.el, n.en, types[slug], "THE FIRST ADVENTURE", n.elJa]],
    ["xl", [n.el, n.ja]],
    ["sm", [n.elJa, korean, n.en, "1기", types[slug]]],
    ["md", [korean, n.en, n.elJa]],
  ];
  return (
    <div className="sp-type-field" aria-hidden="true">
      {rows.map(([size, words], r) => (
        <div className={`sp-type-row sp-type-${size}`} key={r}>
          <div className="sp-type-track">{[0, 1].map((c) => <div className="sp-type-cycle" key={c}>{[...words, ...words].map((w, k) => <span key={k}>{w}<i>✦</i></span>)}</div>)}</div>
        </div>
      ))}
    </div>
  );
}
const no = (i: number) => `No.${String(i + 1).padStart(3, "0")}`;

function useTypewriter(text: string) {
  const [shown, setShown] = useState(text);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return setShown(text);
    let i = 0;
    setShown("");
    const t = setInterval(() => { i += 1; setShown(text.slice(0, i)); if (i >= text.length) clearInterval(t); }, 38);
    return () => clearInterval(t);
  }, [text]);
  return shown;
}

export default function StarterChapter() {
  const [selected, setSelected] = useState<number | null>(null);
  const [color, setColor] = useState(false);
  const index = selected ?? 0;
  const member = members[index];
  const speaker = selected === null ? "WSE 박사" : member.name;
  const line = selected === null ? content.description : member.content.quote;
  const typed = useTypewriter(line);
  const move = (step: number) => setSelected((index + step + members.length) % members.length);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") move(-1);
    else if (e.key === "ArrowRight" || e.key === "ArrowDown") move(1);
    else if (e.key.toLowerCase() === "b") setColor((c) => !c);
    else return;
    e.preventDefault();
  };

  return (
    <div className="wse-site starter-site">
      <Header />
      <main id="main">
        <section className="sp-hero" aria-label="스타터팩" style={{ "--sp-accent": directions[member.slug].color } as React.CSSProperties}>
          <TypeField key={member.slug} slug={member.slug} korean={member.name} />
          <div className="sp-topline"><Link href="/services">← 모든 이야기</Link><span>WSE ORIGINAL / 1기</span></div>
          <div className="sp-intro">
            <span className="sp-kicker">WSE POCKET DEX · VOL.01</span>
            <h1><span className="sp-star" style={{ color: starColors[member.slug] }}>STAR</span>TER<br /><em>PACK.</em></h1>
            <p className="sp-tagline">스타터팩 — {content.tagline}</p>
            <div className="sp-textbox" aria-live="polite">
              <span className="sp-speaker">{speaker}</span>
              <p>{typed}<span className="sp-caret" aria-hidden="true">{typed === line ? "▼" : ""}</span></p>
            </div>
            <dl className="sp-meta">
              <div><dt>도감 등록</dt><dd>{members.length} / {members.length}</dd></div>
              <div><dt>타입</dt><dd>{members.map((m) => types[m.slug]).join(" · ")}</dd></div>
              <div><dt>위험도</dt><dd>혼자일 때 높음</dd></div>
            </dl>
            <div className="sp-carts" aria-label="카트리지 선택">
              {members.map((m, i) => (
                <button key={m.slug} className="sp-cart" onClick={() => setSelected(i)} aria-pressed={index === i} style={{ "--sp-accent": directions[m.slug].color } as React.CSSProperties}>
                  <span className="sp-cart-label"><Image src={m.image!} alt="" width={200} height={300} sizes="120px" /><small>{no(i)}</small></span>
                  <span className="sp-cart-name"><b>{m.name}</b><small>{m.role.toUpperCase()} VER.</small></span>
                </button>
              ))}
            </div>
          </div>

          <div className="sp-console-wrap">
            <div className="sp-console" tabIndex={0} onKeyDown={onKey} aria-label="포켓 도감. 방향키로 넘기고 B로 컬러 전환">
              <div className="sp-power"><span>◀ OFF · ON ▶</span></div>
              <div className="sp-bezel">
                <div className="sp-bezel-top"><span className="sp-led" aria-hidden="true" /><span>WSE MATRIX WITH STEREO STORIES</span></div>
                <div className={`sp-screen${color ? " is-color" : ""}`}>
                  <div className="sp-screen-bar"><span>{no(index)}</span><span>{member.role.toUpperCase()}</span></div>
                  <div className="sp-screen-art" key={member.slug}>
                    <Image src={member.image!} alt={member.name} width={600} height={900} sizes="320px" priority />
                  </div>
                  <div className="sp-screen-foot"><strong>{member.name}</strong><span className="sp-type">{types[member.slug]}</span></div>
                </div>
              </div>
              <p className="sp-brand"><span>WSE</span> <i>Pocket Dex</i></p>
              <div className="sp-controls">
                <div className="sp-dpad" role="group" aria-label="방향키">
                  <button aria-label="이전" className="up" onClick={() => move(-1)} />
                  <button aria-label="이전" className="left" onClick={() => move(-1)} />
                  <span aria-hidden="true" />
                  <button aria-label="다음" className="right" onClick={() => move(1)} />
                  <button aria-label="다음" className="down" onClick={() => move(1)} />
                </div>
                <div className="sp-ab">
                  <button className="sp-b" onClick={() => setColor((c) => !c)} aria-pressed={color}><span>B</span><small>{color ? "MONO" : "COLOR"}</small></button>
                  <Link className="sp-a" href={member.href}><span>A</span><small>OPEN</small></Link>
                </div>
              </div>
              <div className="sp-pills">
                <button onClick={() => move(1)}><span />SELECT</button>
                <a href="#sp-dex"><span />START</a>
              </div>
              <div className="sp-grille" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
            </div>
            <p className="sp-hint">◀ ▶ 넘기기 · <b>A</b> 프로필 · <b>B</b> 컬러 · <b>START</b> 도감</p>
          </div>
        </section>

        <div className="sp-ticker" aria-hidden="true"><div>{[0, 1].map((k) => <span key={k}>야생의 이그나이터가 불을 붙였다! ✦ 네비게이터는 길을 잃었다… 일부러! ✦ 셀러브레이터의 축하! 효과는 굉장했다! ✦ 당신의 레벨이 1 올랐다 ✦ 스타터팩이 동료가 되고 싶은 듯 이쪽을 보고 있다 ✦&nbsp;</span>)}</div></div>

        <section className="sp-story">
          <span className="sp-kicker">THE FIRST ADVENTURE / 서막</span>
          <div className="sp-story-box">
            <h2>바깥은 위험하단다.<br /><em>그러니 친구를 데려가렴.</em></h2>
            <p>{content.philosophy}</p>
            <blockquote>“{content.motto}”</blockquote>
          </div>
        </section>

        <section className="sp-dex" id="sp-dex" aria-labelledby="sp-dex-title">
          <div className="sp-section-heading"><span className="sp-kicker">CHOOSE YOUR STARTER</span><h2 id="sp-dex-title">누구를 데려갈래?</h2><p>신중하게 골라. 물론, 나중에 전부 데려가도 돼.</p></div>
          <div className="sp-dex-grid">
            {members.map((m, i) => {
              const d = directions[m.slug];
              return (
                <article className="sp-card" key={m.slug} style={{ "--sp-accent": d.color, "--sp-deep": d.secondary } as React.CSSProperties}>
                  <div className="sp-card-art">
                    <span className="sp-card-no">{no(i)}</span>
                    <Image src={m.image!} alt={m.name} width={600} height={900} sizes="(max-width: 900px) 90vw, 30vw" />
                  </div>
                  <div className="sp-card-body">
                    <div className="sp-card-head"><h3>{m.name}</h3><span className="sp-type">{types[m.slug]}</span></div>
                    <span className="sp-card-class">분류 · {d.chapter}</span>
                    <dl>
                      <div><dt>서식지</dt><dd>{m.birthplace}</dd></div>
                      <div><dt>파트너</dt><dd>{m.partner.emoji} {m.partner.name} <small>({m.partner.animal})</small></dd></div>
                    </dl>
                    <p>{m.content.shortBio}</p>
                    <Link href={m.href} className="sp-card-cta">너로 정했다! <span>↗</span></Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <nav className="sp-bottom" aria-label="기수 이동">
          <p>모험을 계속하시겠습니까?</p>
          <div><Link href="/services/generation3">▶ 예 <small>다음 이야기 · 히어로즈</small></Link><Link href="/services">아니오 <small>모든 이야기</small></Link></div>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
