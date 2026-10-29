import Header from "../components/Header";
import Footer from "../components/Footer";
import ArenaCards from "./ArenaCards";
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
        <ArenaCards />
      </main>
      <Footer />
    </div>
  );
}
