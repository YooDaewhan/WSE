import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function Multiview() {
  return (
    <div className="wse-site">
      <Header />
      <main id="main" className="section-shell brand-page">
        <span className="eyebrow">LIVE / MULTIVIEW</span>
        <h1 className="brand-title">
          MULTI
          <br />
          <em>VIEW.</em>
        </h1>
        <p className="mb-8">멀티뷰는 준비 중입니다.</p>
        <Link className="pill-button" href="/live">
          라이브로 돌아가기<span>←</span>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
