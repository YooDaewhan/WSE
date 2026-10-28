import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import type { CSSProperties } from "react";
import { cast } from "../data/cast";
import { news } from "../data/news";

/* 멤버별 지원 요건 — [항목, 내용] 순서대로 정보 상자에 나옵니다. 없으면 "미정" */
const wanted: Record<string, [string, string][]> = {
  honggildong: [
    ["성별", "남성"],
    ["나이", "만 7세 ~ 만 79세"],
    ["목소리", "낮거나 높은 목소리"],
    ["국적", "한국인 또는 영어권, 혹은 외국인을 흉내 낼 수 있는 사람"],
    ["요청 사항", "쌈@뽕, 시@봉방거, 상@너메거 등 힙플 밈 말투와 기가차드 말투를 잘 연기할 수 있는 사람"],
  ],
  naesi: [
    ["성별", "남성"],
    ["나이", "만 7세 ~ 만 79세"],
    ["목소리", "낮거나 높은 목소리"],
    ["국적", "한국인"],
    ["요청 사항", "BL 연기를 할 수 있는 사람 (노력만 해도 됨)"],
  ],
  dokkaebi: [
    ["성별", "남성"],
    ["나이", "만 7세 ~ 만 79세"],
    ["목소리", "낮거나 높은 목소리"],
    ["국적", "한국인"],
    ["요청 사항", "여성층을 타깃으로 한 스윗한 연기를 잘할 수 있는 사람"],
  ],
  hoteisenji: [
    ["성별", "남성"],
    ["나이", "만 7세 ~ 만 79세"],
    ["목소리", "낮거나 높은 목소리"],
    ["국적", "한국인 또는 일본인, 혹은 일본인을 연기할 수 있는 사람"],
    ["요청 사항", "미정"],
    ["자격증", "한국사능력검정시험 심화 2급 이상"],
  ],
  ...Object.fromEntries(["igniter", "navigator", "celebrator"].map((s) => [s, [
    ["성별", "여성"],
    ["나이", "만 7세 ~ 만 79세"],
    ["목소리", "낮거나 높은 목소리"],
    ["국적", "한국인"],
  ] as [string, string][]])),
};

/* 기수별 문장 그림 · 정보 상자 색 (새벽조 = 밤 남색 + 금빛, 스타터팩 = 도감 빨강 + 흰색) */
const team: Record<number, { mark: (slug: string) => string; style?: CSSProperties }> = {
  1: { mark: (s) => `/images/saebyeokjo/${s}-mark.png` },
  2: { mark: (s) => `/images/starterpack/${s}-mark.webp`, style: { "--ib-bg": "#b3202a", "--ib-ink": "#fff", "--ib-edge": "#7d121a" } as CSSProperties },
};

/* 멤버별 모집 페이지 — /services/generationN/<slug>/recruit. 나무위키 정보 상자 느낌 */
export default function CastRecruit({ slug }: { slug: string }) {
  const c = cast.find((m) => m.slug === slug)!;
  const t = team[c.group];
  const post = news.find((n) => n.group === c.group)?.slug;
  const rows: [string, string][] = [...(wanted[slug] ?? [["지원 요건", "미정"]]), ["모집", "모집 중"]];
  return (
    <div className="wse-site">
      <Header />
      <main id="main" className="updates-page section-shell">
        <article className="cast-wiki">
          <Link className="news-back" href={post ? `/news/${post}` : "/news"}>← 모집 글</Link>
            <table className="cast-infobox" style={t?.style}>
              <thead>
                <tr><th colSpan={2}>
                  <div className="cast-infobox-head">
                    {t && <Image src={t.mark(slug)} alt="" width={96} height={96} />}
                    <p><b>{c.name}</b><span>{c.generation} {c.teamName}</span></p>
                  </div>
                </th></tr>
                {c.image && <tr><td colSpan={2} className="cast-infobox-art"><Image src={c.image} alt={c.name} width={640} height={640} /></td></tr>}
              </thead>
              <tbody>
                {rows.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
                <tr><th>관련 페이지</th><td><Link href={c.href}>프로필</Link> | <Link href={`${c.href}/secret`}>비공개 페이지</Link></td></tr>
              </tbody>
            </table>
        </article>
      </main>
      <Footer />
    </div>
  );
}
