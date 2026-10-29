"use client";
import { useRef, useState } from "react";
import { formats } from "../data/arena";

type Format = (typeof formats)[number];
// 썸네일 없는 포맷은 이모지로 대신함
function Thumb({ f, className }: { f: Format; className: string }) {
  if (!f.video) return <span className={`${className} grid place-items-center bg-black/10 text-6xl`} aria-hidden="true">{f.emoji}</span>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={`${className} object-cover`} src={`https://i.ytimg.com/vi/${f.video}/hqdefault.jpg`} alt={`${f.origin} 참고 영상 썸네일`} loading="lazy" />;
}

// 유튜브로 보내지 않고 썸네일만 씀 — 누르면 팝업
export default function ArenaCards() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [cur, setCur] = useState<Format | null>(null);
  const open = (f: Format) => {
    setCur(f);
    dialog.current?.showModal();
  };

  return (
    <>
      <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {formats.map((f) => (
          <li key={f.id}>
            <button className="group block w-full text-left" onClick={() => open(f)}>
              <div className="aspect-video overflow-hidden rounded-xl bg-black/10">
                <Thumb f={f} className="h-full w-full transition duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-4 text-[10px] tracking-[2px] opacity-60">INSPIRED BY {f.origin}</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight [word-break:keep-all]">
                {f.emoji} {f.label}
              </h2>
            </button>
            <p className="mt-2 text-sm leading-7 opacity-80 [word-break:keep-all]">{f.body}</p>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="m-auto w-[min(92vw,640px)] overflow-hidden rounded-2xl bg-[#fffaf2] p-0 text-[#2b2238] backdrop:bg-black/60"
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
      >
        {cur && (
          <div className="relative">
            <Thumb f={cur} className="aspect-video w-full" />
            <div className="p-6">
              <p className="text-[10px] tracking-[2px] opacity-60">INSPIRED BY {cur.origin}</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight [word-break:keep-all]">
                {cur.emoji} {cur.label}
              </h2>
              <p className="mt-3 text-sm leading-7 opacity-80 [word-break:keep-all]">{cur.body}</p>
            </div>
            <button
              className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white"
              aria-label="닫기"
              onClick={() => dialog.current?.close()}
            >
              ✕
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
