import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsBoard from "../components/NewsBoard";
export const metadata = { title: "소식", description: "WSE의 공지, 새로운 이야기와 공식 굿즈 소식." };
export default function NewsPage() {
  return <div className="wse-site"><Header /><main id="main" className="updates-page section-shell"><span className="eyebrow">WSE / NEWS & NOTICE</span><h1>우리의 <em>다음 소식.</em></h1><p className="updates-intro">놓치지 않았으면 하는 이야기들을 이곳에 모았습니다.</p><NewsBoard /></main><Footer /></div>;
}
