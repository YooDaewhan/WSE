"use client";
import { useState } from "react";
import type { CSSProperties } from "react";
import { Nanum_Pen_Script } from "next/font/google";
import type { news } from "../data/news";

/* 모집요강 전용 레이아웃 — 전봇대 전단지 · 포스트잇 · 영수증. 문장은 news.ts 원문 그대로, 문단 순서로 배치 */
const pen = Nanum_Pen_Script({ weight: "400", subsets: ["latin"], display: "swap" });
const brag = ["영상", "노래", "연기", "빠르게 웃기", "삼행시", "밥 빨리 먹기"];
const judges = [
  { at: [6], name: "사장님", focus: "캐릭터에 대한 이해도", color: "#ffe066" },
  { at: [7, 8, 9, 10], name: "매니저 김일", focus: "성장 가능성", color: "#c9e4ff" },
  { at: [11], name: "매니저 박일", focus: "준비된 실력과 피지컬", color: "#ffc9dc" },
];
const strip = (p: string) => p.replace(/^\S+ — /, "");

export default function RecruitGuide({ entry }: { entry: (typeof news)[number] }) {
  const b = entry.body;
  const [torn, setTorn] = useState<number[]>([]);
  const tracks = b.slice(12).map((p) => ({
    name: p.split(" — ")[0],
    parts: [...p.matchAll(/(\S+) 의견 (\d+)%/g)].map(([, n, v]) => ({ n, v: +v })),
  }));
  return (
    <article className="rg" style={{ "--pen": pen.style.fontFamily } as CSSProperties}>
      <section className="rg-flyer">
        <span className="rg-tape" aria-hidden="true" />
        <span className="rg-tape rg-tape-r" aria-hidden="true" />
        <p className="rg-eyebrow">WSE · 0기 새벽조 · 1기 스타터팩</p>
        <h1><mark>모집요강</mark></h1>
        <p className="rg-tags">경력 무관 · 조건 무관 · 양식 무관</p>
        {b.slice(0, 2).map((p) => <p key={p}>{p}</p>)}

        <h2 className="rg-h2">자랑 접수 품목</h2>
        <ul className="rg-check">
          {brag.map((w) => <li key={w}>{w}</li>)}
          <li className="rg-blank">당신의 재능</li>
        </ul>
        {b.slice(2, 5).map((p) => <p key={p}>{p}</p>)}
        <span className="rg-sign">— 매니저 김일</span>

        <div className="rg-tabs" aria-label="뜯어가는 연락처">
          {Array.from({ length: 8 }, (_, i) => (
            <button key={i} type="button" className={torn.includes(i) ? "torn" : undefined} onClick={() => setTorn((t) => [...t, i])} aria-label="연락처 뜯기">
              WSE 모집요강 · 접수처 추후 안내
            </button>
          ))}
        </div>
      </section>

      <section className="rg-wall">
        <h2 className="rg-sticker">심사위원</h2>
        <p className="rg-lead">{b[5]}</p>
        <div className="rg-notes">
          {judges.map((j, i) => (
            <div className="rg-note" key={j.name} style={{ "--c": j.color, "--r": `${[-2, 1.5, -1][i]}deg` } as CSSProperties}>
              <h3>{j.name}</h3>
              <strong>{j.focus}</strong>
              {j.at.map((k) => <p key={k}>{strip(b[k])}</p>)}
            </div>
          ))}
        </div>
      </section>

      <section className="rg-receipts">
        {tracks.map((t) => (
          <div className="rg-receipt" key={t.name}>
            <p className="rg-rc-head">WSE AUDITION<br />*** {t.name} ***</p>
            {t.parts.map((x) => <p key={x.n} className="rg-rc-row"><span>{x.n} 의견</span><b>{x.v}%</b></p>)}
            <p className="rg-rc-row rg-rc-total"><span>합계</span><b>{t.parts.reduce((s, x) => s + x.v, 0)}%</b></p>
            <p className="rg-rc-foot">이용해 주셔서 감사합니다</p>
          </div>
        ))}
      </section>

      <p className="news-author">작성자 · {entry.author ?? "김일"}</p>
    </article>
  );
}
