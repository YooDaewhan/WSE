"use client";
import { useState } from "react";
import Link from "next/link";
import { news, type NewsCategory } from "../data/news";

export default function NewsBoard({ compact = false }: { compact?: boolean }) {
  const [category, setCategory] = useState<NewsCategory | "전체">("전체");
  const entries = news.filter((entry) => category === "전체" || entry.category === category);
  return <div className="news-board">
    {!compact && <div className="news-filters" role="group" aria-label="소식 분류">
      {(["전체", "공지", "뉴스", "굿즈"] as const).map((item) => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
    </div>}
    <div className="news-table-head" aria-hidden="true"><span>분류</span><span>제목</span><span>보기</span></div>
    {entries.length ? (compact ? entries.slice(0, 3) : entries).map((entry) => <Link className="news-row" key={entry.slug} href={`/news/${entry.slug}`}><span className="news-category">{entry.category}</span><strong>{entry.title}</strong><span aria-hidden="true">↗</span></Link>) : <p className="news-empty" role="status">아직 등록된 {category} 소식이 없습니다. 새로운 소식이 생기면 이곳에 전하겠습니다.</p>}
  </div>;
}
