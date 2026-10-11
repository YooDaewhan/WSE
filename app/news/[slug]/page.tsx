import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { news } from "../../data/news";
export function generateStaticParams() { return news.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: news.find((entry) => entry.slug === slug)?.title ?? "소식을 찾을 수 없습니다" };
}
export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = news.find((item) => item.slug === slug);
  if (!entry) notFound();
  return <div className="wse-site"><Header /><main id="main" className="updates-page section-shell"><article className="news-article"><span className="eyebrow">NEWS / {entry.category}</span><h1>{entry.title}</h1><div className="news-body">{entry.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><Link className="text-link" href="/shop">WSE SHOP ↗</Link></article><Link className="text-link" href="/news">← 전체 소식으로</Link></main><Footer /></div>;
}
