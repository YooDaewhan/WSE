"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* 개인화면 ORIGIN · COMPANION 설정 카드
   content.ts 의 birthplaceLore / partnerLore 항목에 image 를 넣으면 카드로 보입니다.
   눌러서 크게 보고, ◀ ▶ 로 넘깁니다. */
type Lore = { emoji: string; title: string; body: string; image?: string };
const pending = (s: string) => /추후|내용을 채워|\(추가\)/.test(s);

export default function LoreCards({ items, label }: { items: Lore[]; label: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open === null) d.open && d.close();
    else if (!d.open) d.showModal();
  }, [open]);
  const step = (n: number) => setOpen((i) => ((i ?? 0) + n + items.length) % items.length);
  const item = open === null ? null : items[open];
  const no = (i: number) => String(i + 1).padStart(2, "0");
  const body = (l: Lore) => (pending(l.body) ? "아직 기록되지 않은 페이지예요." : l.body);

  return (
    <>
      <div className="lore-cards" role="list">
        {items.map((l, i) => (
          <button key={i} role="listitem" className="lore-card" onClick={() => setOpen(i)} aria-label={`${label} ${no(i)} ${l.title} 크게 보기`}>
            <span className="lore-card-art">
              {l.image ? <Image src={l.image} alt="" fill sizes="220px" /> : <span className="lore-card-emoji" aria-hidden="true">{l.emoji}</span>}
              <span className="lore-card-no">No.{no(i)}</span>
            </span>
            <span className="lore-card-title">{l.title}</span>
            <span className="lore-card-body">{body(l)}</span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lore-dialog"
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1);
          if (e.key === "ArrowRight") step(1);
        }}
      >
        {item && open !== null && (
          <div className="lore-dialog-inner">
            <div className="lore-dialog-art" key={open}>
              {item.image ? <Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 92vw, 420px" /> : <span className="lore-card-emoji" aria-hidden="true">{item.emoji}</span>}
            </div>
            <div className="lore-dialog-copy">
              <span className="lore-dialog-kicker">{label} · {no(open)} / {no(items.length - 1)}</span>
              <h3>{item.title}</h3>
              <p>{body(item)}</p>
              {items.length > 1 && (
                <div className="lore-dialog-nav">
                  <button onClick={() => step(-1)} aria-label="이전 설정">◀</button>
                  <span aria-hidden="true">{items.map((_, i) => <i key={i} className={i === open ? "on" : undefined} />)}</span>
                  <button onClick={() => step(1)} aria-label="다음 설정">▶</button>
                </div>
              )}
            </div>
            <button className="lore-dialog-close" onClick={() => setOpen(null)} aria-label="닫기">✕</button>
          </div>
        )}
      </dialog>
    </>
  );
}
