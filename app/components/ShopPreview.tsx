import Link from "next/link";
export default function ShopPreview({ full = false }: { full?: boolean }) {
  return <div className="shop-preview">
    <div className="shop-art" aria-hidden="true"><span>WSE OBJECTS / SOON</span><div className="shop-bag">wse✳</div><span>이야기가 일상에 머무는 방법</span></div>
    <div className="shop-copy"><span className="shop-badge">오픈 준비 중</span><h2>좋아하는 마음을,<br /><em>곁에 두는 방법.</em></h2><p>화면 너머의 이야기가 당신의 일상에 닿도록.<br />WSE의 공식 굿즈를 준비하고 있습니다.</p>{full ? <><p className="shop-note">상품과 판매 일정은 아직 정해지지 않았습니다.<br />준비가 끝나면 소식 게시판에서 가장 먼저 안내하겠습니다.</p><Link className="pill-button" href="/news">굿즈 소식 보기 <span>↗</span></Link></> : <Link className="pill-button" href="/shop">샵 둘러보기 <span>↗</span></Link>}</div>
  </div>;
}
