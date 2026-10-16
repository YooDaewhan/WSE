"use client";

import Link from "next/link";
import { useState } from "react";
import { Black_Han_Sans, Gothic_A1 } from "next/font/google";
import { cast, credit } from "../data/cast";
import { directions } from "../data/art-direction";
import { content } from "../services/generation3/content";
import ImgOr from "./ImgOr";
import Header from "./Header";
import Footer from "./Footer";
import "../heroes.css";

/* 2기 히어로즈 — 삼류 청춘만화 · 언더독 */
export const heroesFonts = () => `${punch.variable} ${gothic.variable}`;
const punch = Black_Han_Sans({ weight: "400", subsets: ["latin"], variable: "--hr-punch", preload: false });
const gothic = Gothic_A1({ weight: ["400", "700", "900"], subsets: ["latin"], variable: "--hr-gothic", preload: false });

const members = cast.filter((member) => member.group === 3);
const plain = (name: string) => name.replace("(미정)", "");

/* 1화의 그들 — 별볼일없는 첫 등장 */
export const firstEpisode: Record<string, { job: string; line: string }> = {
  alba: { job: "고깃집 알바생", line: "불판 갈아드릴게요~" },
  pyeondori: { job: "편의점 야간 알바생", line: "봉투 필요하세요?" },
  ddalbae: { job: "배달 알바생", line: "문 앞에 두고 갈게요!" },
  pyegeubibyeong: { job: "어리숙한 이등병", line: "이, 이병! 잘 못 들었습니다!" },
};

const acts = [
  { no: "제1화", word: "바닥", text: "아무도 기대하지 않았다. 본인들조차도." },
  { no: "제12화", word: "반격", text: "넘어지고, 또 넘어지고. 그래도 이번엔 일어났다." },
  { no: "최종화", word: "역전", text: "모두가 질 거라던 바로 그 자리에서." },
];

const sfx = ["쾅!", "역전!", "한 방!", "가자!", "이겼다!"];
type Pop = { id: number; x: number; y: number; t: string; r: number };

export default function HeroesChapter() {
  const [pops, setPops] = useState<Pop[]>([]);
  /* 컷을 누르면 효과음이 터진다 */
  const hit = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    const r = e.currentTarget.getBoundingClientRect();
    const pop = { id: Date.now(), x: e.clientX - r.left, y: e.clientY - r.top, t: sfx[Math.floor(Math.random() * sfx.length)], r: Math.random() * 30 - 15 };
    setPops((p) => [...p.slice(-5), pop]);
    setTimeout(() => setPops((p) => p.filter((x) => x.id !== pop.id)), 1200);
  };

  return (
    <div className={`wse-site heroes-site ${punch.variable} ${gothic.variable}`}>
      <Header />
      <main id="main">
        <section className="hr-hero" aria-label="히어로즈" onClick={hit}>
          <div className="hr-topline"><Link href="/services">← 모든 이야기</Link><span>WSE ORIGINAL / 2기</span></div>
          <i className="hr-speed" aria-hidden="true" />
          <div className="hr-cover">
            <span className="hr-vol">VOL.2 · AGAINST ALL ODDS</span>
            <h1><small>언더독</small>히어로즈</h1>
            <p className="hr-tagline">{content.description}</p>
            <span className="hr-stamp" aria-hidden="true">결말 스포 주의<b>결국 이김</b></span>
          </div>
          <p className="hr-hint">아무 데나 눌러서 한 방 먹여 보세요.</p>
          {pops.map((p) => (
            <b key={p.id} className="hr-pop" style={{ left: p.x, top: p.y, "--r": `${p.r}deg` } as React.CSSProperties} aria-hidden="true">{p.t}</b>
          ))}
        </section>

        <section className="hr-cast" aria-labelledby="hr-cast-title">
          <div className="hr-head">
            <span className="hr-kicker">등장인물 소개</span>
            <h2 id="hr-cast-title">어디서 본 것 같은 넷.</h2>
            <p>고깃집에서, 편의점에서, 골목에서, 연병장에서. 1화의 그들은 정말 별볼일없었다.</p>
          </div>
          <div className="hr-panels">
            {members.map((m, i) => {
              const d = directions[m.slug];
              const ep = firstEpisode[m.slug];
              return (
                <Link href={m.href} className="hr-panel" key={m.slug} style={{ "--c": d.color, "--d": `${i * 0.1}s` } as React.CSSProperties}>
                  <span className="hr-frame">
                    <i className="hr-burst" aria-hidden="true" />
                    {m.image
                      ? <ImgOr src={m.image} alt={plain(m.name)} className="hr-art" fallback={<span className="hr-art hr-silhouette" aria-hidden="true">{m.emoji}</span>} />
                      : <span className="hr-art hr-silhouette" aria-hidden="true">{m.emoji}</span>}
                    <span className="hr-bubble">{ep.line}</span>
                    <span className="hr-final">{d.title}<br />{d.subtitle}</span>
                  </span>
                  <span className="hr-caption">
                    <small>제1화 · {ep.job}</small>
                    <b>{plain(m.name)}</b>
                    <span className="real-name">{credit(m)}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="hr-plot" aria-labelledby="hr-plot-title">
          <div className="hr-head">
            <span className="hr-kicker">줄거리</span>
            <h2 id="hr-plot-title">어차피 결말은 다 알잖아.</h2>
            <p>그래도 끝까지 보는 이유는 하나. 마지막에 시원하게 한 방 먹이는 그 장면.</p>
          </div>
          <ol className="hr-acts">
            {acts.map((a) => (
              <li key={a.word}>
                <small>{a.no}</small>
                <b>{a.word}</b>
                <p>{a.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="hr-last">
          <div className="hr-last-inner">
            <span className="hr-kicker">최종화 · 작가의 말</span>
            <p>{content.philosophy}</p>
            <blockquote>{content.motto}</blockquote>
            <span className="hr-end">― 완 ―</span>
          </div>
        </section>

        <nav className="hr-bottom" aria-label="기수 이동">
          <Link href="/services/generation2">← 이전 이야기 · 스타터팩</Link>
          <span>↑ · 히어로즈</span>
          <Link href="/services/generation4">다음 이야기 · 레스큐팩 →</Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
