import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RecruitGuide from "../../components/RecruitGuide";
import { news } from "../../data/news";
import { cast } from "../../data/cast";
/* "~~글~~" → 취소선 */
const strike = (s: string) => s.split("~~").map((t, i) => (i % 2 ? <s key={i}>{t}</s> : t));
export function generateStaticParams() { return news.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: news.find((entry) => entry.slug === slug)?.title ?? "소식을 찾을 수 없습니다" };
}
export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = news.findIndex((item) => item.slug === slug);
  if (i < 0) notFound();
  const entry = news[i];
  /* 목록은 최신 → 오래된 순: 이전 글 = 더 오래된 글(아래), 다음 글 = 더 새 글(위) */
  const [prev, next] = [news[i + 1], news[i - 1]];
  /* 기본 템플릿 — 게시판형: 회색 머리말([분류] 제목 · 최종 수정일) → 작성자 줄 → 본문. "라벨 — 내용" 문단은 "라벨: 내용" 한 줄로 */
  const article = (
    <article className="news-article">
      <header className="news-head">
        <h1><span>[{entry.category}]</span> {entry.title}</h1>
        {entry.date && <p className="news-date">최종 수정일 : {entry.date}</p>}
      </header>
      <div className="news-meta">
        <span>{entry.author ?? "김일"}</span>
        {entry.category === "굿즈" && <Link className="text-link" href="/shop">WSE SHOP ↗</Link>}
      </div>
      <div className="news-body">
        {entry.body.map((paragraph) => {
          const [label, text] = paragraph.split(" — ");
          /* "Q. 질문 — A. 답" 문단은 문답 블록으로 */
          if (label.startsWith("Q. ") && text?.startsWith("A. ")) return <section className="news-qa" key={paragraph}><h2><b>Q</b>{label.slice(3)}</h2><p><b>A</b><span>{strike(text.slice(3))}</span></p></section>;
          return text && /^\S+( \S+)?$/.test(label) ? <p className="news-line" key={paragraph}>{label}: {text}</p> : <p key={paragraph}>{paragraph}</p>;
        })}
      {/* 기수 모집 글 — 멤버별 모집 페이지로 가는 카드 */}
      {entry.group && (
        <ul className="cast-recruit-cards">
          {cast.filter((m) => m.group === entry.group).map((m) => (
            <li key={m.slug}>
              <Link href={`${m.href}/recruit`}>
                {m.image && <Image src={m.image} alt="" width={160} height={160} />}
                <b>{m.name}</b>
                <small>{m.role} · {m.realName}</small>
              </Link>
            </li>
          ))}
        </ul>
      )}
      </div>
    </article>
  );
  return <div className="wse-site"><Header /><main id="main" className="updates-page section-shell"><Link className="news-back" href="/news">← 목록</Link>{slug === "recruit-guide" ? <RecruitGuide entry={entry} /> : article}<nav className="news-pager" aria-label="다른 소식">{prev ? <Link href={`/news/${prev.slug}`} rel="prev"><small>← 이전 글</small>{prev.title}</Link> : <span />}<Link className="text-link" href="/news">목록으로</Link>{next ? <Link href={`/news/${next.slug}`} rel="next"><small>다음 글 →</small>{next.title}</Link> : <span />}</nav></main><Footer /></div>;
}
