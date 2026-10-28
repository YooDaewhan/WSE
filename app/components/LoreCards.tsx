"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* 개인화면 ORIGIN · COMPANION 설정 카드
   content.ts 의 birthplaceLore / partnerLore 항목에 image 를 넣으면 카드로 보입니다.
   눌러서 크게 보고, ◀ ▶ 는 모든 설정의 그림을 이어서 넘깁니다 — 다른 설정으로 넘어가면 글도 같이 바뀝니다.
   image 에 배열을 넣으면 그 설정의 그림 여러 장. stack 이면 카드는 맨 앞 1장만(나머지는 팝업에서). */
type Lore = { emoji: string; title: string; body: string; image?: string | string[]; logo?: string };
const pending = (s: string) => /추후|내용을 채워|\(추가\)/.test(s);
const pics = (l: Lore) => (l.image ? [l.image].flat() : []);

export default function LoreCards({ items, label, stack }: { items: Lore[]; label: string; stack?: boolean }) {
  const [page, setPage] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (page === null) d.open && d.close();
    else if (!d.open) d.showModal();
  }, [page]);
  /* 팝업 페이지 = 그림 한 장씩 (그림 없는 설정은 이모지 한 장), 각 페이지는 자기 설정의 글을 가짐 */
  const pages = items.flatMap((l, i) => (pics(l).length ? pics(l) : [""]).map((src, k) => ({ l, i, src, first: k === 0 })));
  const cur = page === null ? null : pages[page];
  const step = (n: number) => pages.length > 1 && setPage((p) => ((p ?? 0) + n + pages.length) % pages.length);
  const no = (i: number) => String(i + 1).padStart(2, "0");
  const body = (l: Lore) => (pending(l.body) ? "아직 기록되지 않은 페이지예요." : l.body);

  return (
    <>
      <div className={`lore-cards${stack ? " is-stack" : ""}`} role="list">
        {(stack ? items.slice(0, 1) : items).map((l, i) => (
          <button key={i} role="listitem" className="lore-card" onClick={() => setPage(pages.findIndex((p) => p.i === i))} aria-label={`${label} ${no(i)} ${l.title} 크게 보기`}>
            <span className="lore-card-art">
              {l.image ? <Image src={pics(l)[0]} alt="" fill sizes="(max-width: 700px) 90vw, 440px" /> : <span className="lore-card-emoji" aria-hidden="true">{l.emoji}</span>}
              <span className="lore-card-no">{stack && items.length > 1 ? `${items.length}개의 이야기` : `No.${no(i)}`}</span>
              {l.logo && <Image className="lore-logo" src={l.logo} alt="" width={860} height={300} />}
            </span>            <span className="lore-card-title">{l.title}</span>
            <span className="lore-card-body">{body(l)}</span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lore-dialog"
        onClose={() => setPage(null)}
        onClick={(e) => e.target === e.currentTarget && setPage(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1);
          if (e.key === "ArrowRight") step(1);
        }}
      >
        {cur && page !== null && (
          <div className="lore-dialog-inner">
            <div className="lore-dialog-art" key={`art-${page}`}>
              {cur.src ? <Image src={cur.src} alt={cur.l.title} fill sizes="(max-width: 700px) 92vw, 420px" /> : <span className="lore-card-emoji" aria-hidden="true">{cur.l.emoji}</span>}
              {cur.l.logo && cur.first && <Image className="lore-logo" src={cur.l.logo} alt="" width={860} height={300} />}
            </div>
            <div className="lore-dialog-copy" key={`copy-${cur.i}`}>
              <span className="lore-dialog-kicker">{label} · No.{no(cur.i)}{pages.length > 1 && ` · ${page + 1} / ${pages.length}`}</span>
              <h3>{cur.l.title}</h3>
              <p>{body(cur.l)}</p>
              {pages.length > 1 && (
                <div className="lore-dialog-nav">
                  <button onClick={() => step(-1)} aria-label="이전">◀</button>
                  <span aria-hidden="true">{pages.map((_, i) => <i key={i} className={i === page ? "on" : undefined} />)}</span>
                  <button onClick={() => step(1)} aria-label="다음">▶</button>
                </div>
              )}
            </div>
            <button className="lore-dialog-close" onClick={() => setPage(null)} aria-label="닫기">✕</button>
          </div>
        )}
      </dialog>
    </>
  );
}
