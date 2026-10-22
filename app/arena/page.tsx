import Header from "../components/Header";
import Footer from "../components/Footer";
import { formats } from "../data/arena";
import ContentRequest from "../components/ContentRequest";
export default function Arena() {
  return (
    <div className="wse-site">
      <Header />
      <main id="main" className="section-shell brand-page">
        <div className="flex items-center justify-between gap-4">
          <span className="eyebrow">ARENA / VIEWER VOTE</span>
          <ContentRequest />
        </div>
        <h1 className="brand-title">
          WSE
          <br />
          <em>ARENA.</em>
        </h1>
        <p className="mb-16">
          대전 · 인기투표 · 특별 초대석은 준비 중입니다. 매일 1 토큰으로 투표할
          수 있게 열릴 예정이에요.
        </p>
        <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {formats.map((f) => (
            <li key={f.id}>
              <a
                className="group block"
                href={`https://www.youtube.com/watch?v=${f.video}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="aspect-video overflow-hidden rounded-xl bg-black/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={`https://i.ytimg.com/vi/${f.video}/hqdefault.jpg`}
                    alt={`${f.origin} 참고 영상 썸네일`}
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 text-[10px] tracking-[2px] opacity-60">
                  INSPIRED BY {f.origin} ↗
                </p>
                <h2 className="mt-1 text-2xl font-extrabold tracking-tight [word-break:keep-all]">
                  {f.emoji} {f.label}
                </h2>
              </a>
              <p className="mt-2 text-sm leading-7 opacity-80 [word-break:keep-all]">
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
