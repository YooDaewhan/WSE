import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopPreview from "../components/ShopPreview";
export const metadata = { title: "공식 굿즈 샵", description: "WSE 공식 굿즈 샵. 좋아하는 이야기를 일상에 두는 방법, 곧 만나요." };
export default function ShopPage() {
  return <div className="wse-site"><Header /><main id="main" className="updates-page section-shell"><span className="eyebrow">WSE / OFFICIAL SHOP</span><h1>WSE <em>SHOP.</em></h1><ShopPreview full /></main><Footer /></div>;
}
