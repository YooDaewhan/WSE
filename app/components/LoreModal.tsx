"use client";

/* ──────────────────────────────────────────
   설정 팝업

   Partner / Birthplace 섹션에서 그림이나 이름을 누르면 열립니다.
   내용(제목·본문·이모지)은 각 페이지 옆자리 content.ts 의
   partnerLore / birthplaceLore 배열에 있습니다. 거기만 고치면 됩니다.
────────────────────────────────────────── */

import { useEffect } from "react";

export type LoreItem = {
  emoji: string;
  title: string;
  body: string;
  /* 그림 경로(public 기준). 비워 두면 emoji 가 대신 들어갑니다 */
  image?: string;
};

export default function LoreModal({
  items,
  gradient,
  index,
  onClose,
  onChange,
}: {
  items: LoreItem[];
  gradient: string;
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const open = index !== null && items.length > 0;

  useEffect(() => {
    if (!open) return;
    const step = (d: number) =>
      onChange(((index as number) + d + items.length) % items.length);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, items.length, onChange, onClose]);

  if (!open) return null;

  const item = items[index as number];
  const step = (d: number) =>
    onChange(((index as number) + d + items.length) % items.length);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/35 backdrop-blur-[2px] p-3"
      onClick={onClose}
    >
      {/* 화살표 · 팝업 · 화살표 — 한 줄로 붙여 둡니다.
          페이지가 하나뿐인 챕터에서는 화살표를 숨깁니다. */}
      <div className="flex items-center gap-2 sm:gap-4 w-[80vw] h-[80vh]">
        {items.length > 1 && (
          <button
            aria-label="이전"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/25 hover:bg-black/45 text-white text-4xl flex items-center justify-center transition"
          >
            ‹
          </button>
        )}

        <div
          className="relative flex-1 h-full overflow-hidden bg-white rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            aria-label="닫기"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/10 hover:bg-black/20 text-gray-700 text-2xl flex items-center justify-center transition"
          >
            ×
          </button>

          <div className="flex flex-col md:flex-row h-full overflow-y-auto">
            <div
              className={`md:w-2/5 shrink-0 bg-gradient-to-br ${gradient} flex items-center justify-center ${item.image ? "" : "p-10"}`}
              style={{ minHeight: "240px" }}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-[10rem] leading-none drop-shadow-lg">
                  {item.emoji}
                </div>
              )}
            </div>
            <div className="md:w-3/5 p-10 sm:p-16 pb-16 overflow-y-auto">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
                {(index as number) + 1} / {items.length}
              </p>
              <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xl leading-relaxed whitespace-pre-line">
                {item.body}
              </p>
            </div>
          </div>

          <div
            className={`absolute bottom-5 left-1/2 -translate-x-1/2 justify-center gap-2 ${items.length > 1 ? "flex" : "hidden"}`}
          >
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`${i + 1}번째`}
                onClick={() => onChange(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-gray-800" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {items.length > 1 && (
          <button
            aria-label="다음"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/25 hover:bg-black/45 text-white text-4xl flex items-center justify-center transition"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}
