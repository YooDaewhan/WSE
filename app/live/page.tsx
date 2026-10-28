import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Live() {
  return (
    <div className="wse-site">
      <Header />
      <main id="main" className="section-shell brand-page">
        <span className="eyebrow">LIVE / ON AIR</span>
        <h1 className="brand-title">
          WSE
          <br />
          <em>LIVE.</em>
        </h1>
        <p className="mb-8">라이브 방송 목록은 준비 중입니다.</p>
        <Link className="pill-button" href="/live/multiview">
          멀티뷰<span>↗</span>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
