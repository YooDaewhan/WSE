"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const products = [
  { name: "포스포라 미카", english: "PHOSPHORA MIKA", image: "7y6atq7y6atq7y6a", color: "#e6dbc4", motif: "빛을 닮은 날개", description: "아이보리빛 날개와 섬세한 골드 라인. 미카의 상징을 작은 금속 배지에 담았습니다." },
  { name: "포스포라 루시", english: "PHOSPHORA LUCY", image: "bzpbbbzpbbbzpbbb", color: "#bbc8dc", motif: "별을 품은 마음", description: "깊은 밤을 닮은 컬러, 날개 사이에 자리한 작은 별. 루시의 세계를 곁에 두세요." },
  { name: "티티", english: "TIAMAT V. TITI DE ABYSSO", image: "lkd0a6lkd0a6lkd0", color: "#c7b4df", motif: "나만의 작은 왕관", description: "보랏빛 하트와 왕관, 대담하게 펼쳐진 날개. 티티만의 존재감을 담은 디자인입니다." },
  { name: "코코", english: "LAMPYRIS V. DE PROFUNDIS", image: "tt1loctt1loctt1l", color: "#e6bba4", motif: "어둠 속의 반짝임", description: "선명한 실루엣과 흩어지는 빛의 조각. 코코의 개성을 골드와 블랙의 대비로 표현했습니다." },
];
const photo = (image: string) => `/images/equinox/Gemini_Generated_Image_${image}.png`;
export default function EquinoxShop() {
  const [selected, setSelected] = useState(0);
  const product = products[selected];
  function viewProduct(index: number) {
    setSelected(index);
    document.getElementById("badge-detail")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <main id="main" className="eq-main">
    <div className="eq-topline"><span>WSE OBJECTS — OFFICIAL GOODS</span><span>좋아하는 세계를 수집하는 곳 ↗</span></div>
    <section className="eq-hero" aria-labelledby="shop-title">
      <div className="eq-hero-copy">
        <span className="eq-kicker">● &nbsp; FIRST COLLECTION / EQUINOX</span>
        <h1 id="shop-title">SMALL<br />OBJECTS.<br /><span>BIG LOVE.</span></h1>
        <p className="eq-hero-korean">좋아하는 세계를,<br />나의 일상에.</p>
        <p className="eq-intro">가방에, 재킷에, 가장 아끼는 자리에.<br />이퀴녹스의 이야기가 작은 반짝임으로 찾아옵니다.</p>
        <a href="#collection" className="eq-button">컬렉션 둘러보기 <span>↘</span></a>
        <div className="eq-hero-foot"><span>01 — METAL BADGE</span><span>4 CHARACTERS. YOUR PICK.</span></div>
      </div>
      <div className="eq-hero-visual">
        <Image src={photo(products[0].image)} alt="이퀴녹스 포스포라 미카 금속 배지" fill priority sizes="(max-width: 760px) 100vw, 56vw" />
        <div className="eq-image-top"><span>EQUINOX<br />METAL BADGE COLLECTION</span><span className="eq-round-tag">COMING<br />SOON ↗</span></div>
        <div className="eq-image-bottom"><span>A LITTLE PIECE<br />OF YOUR UNIVERSE.</span><b>✳</b></div>
      </div>
    </section>
    <div className="eq-ribbon" aria-hidden="true"><span>KEEP YOUR FAVORITES CLOSE</span><b>✳</b><span>EQUINOX OBJECTS</span><b>✳</b><span>MADE FOR YOUR EVERYDAY</span><b>✳</b></div>
    <section id="collection" className="eq-collection" aria-labelledby="collection-title">
      <div className="eq-section-heading"><div><span className="eq-kicker">THE COLLECTION / 001</span><h2 id="collection-title">당신의 최애는 누구인가요<span>?</span></h2></div><span className="eq-count">금속 배지 <b>04</b></span></div>
      <div className="eq-category"><span>전체 보기 <b>4</b></span><p>이퀴녹스의 네 가지 빛, 네 가지 이야기.</p></div>
      <div className="eq-products">{products.map((item, index) => <button key={item.image} className="eq-product" onClick={() => viewProduct(index)} aria-label={`${item.name} 금속 배지 상세 보기`}>
        <div className="eq-product-photo"><Image src={photo(item.image)} alt={`${item.name} 금속 배지 디자인`} fill sizes="(max-width: 1000px) 45vw, 23vw" /><span className="eq-product-label">COMING SOON</span><span className="eq-product-arrow" aria-hidden="true">↗</span></div>
        <div className="eq-product-meta"><span>EQUINOX / METAL BADGE</span><i style={{ backgroundColor: item.color }} /></div>
        <h3>{item.name}</h3><p>이퀴녹스 금속 배지</p><div className="eq-product-status">판매 준비 중 <span>자세히 보기 ↗</span></div>
      </button>)}</div>
    </section>
    <section id="badge-detail" className="eq-detail" aria-labelledby="detail-title">
      <div className="eq-detail-photo"><Image key={product.image} src={photo(product.image)} alt={`${product.name} 금속 배지 확대 이미지`} fill sizes="(max-width: 760px) 100vw, 50vw" /><span>THE DETAILS / {String(selected + 1).padStart(2, "0")}</span></div>
      <div className="eq-detail-copy"><span className="eq-kicker">EQUINOX — COLLECT YOUR FAVORITE</span>
        <div aria-live="polite"><h2 id="detail-title">{product.motif}</h2><p className="eq-detail-english">{product.english}</p><p className="eq-detail-description">{product.description}</p></div>
        <fieldset className="eq-options"><legend>캐릭터 선택</legend>{products.map((item, index) => <button key={item.image} onClick={() => setSelected(index)} aria-pressed={selected === index} className={selected === index ? "is-selected" : ""}><i style={{ backgroundColor: item.color }} />{item.name}</button>)}</fieldset>
        <dl className="eq-specs"><div><dt>상품</dt><dd>{product.name} 금속 배지</dd></div><div><dt>컬렉션</dt><dd>이퀴녹스 / EQUINOX</dd></div><div><dt>가격 · 판매 일정</dt><dd>추후 공개 예정</dd></div></dl>
        <div className="eq-coming">판매 준비 중 <span>COMING SOON</span></div>
        <p className="eq-disclaimer">이미지는 디자인 참고용이며 실제 제작 상품과 차이가 있을 수 있습니다.<br />크기, 소재, 구성 및 배송 안내는 판매 시작 시 공개됩니다.</p>
      </div>
    </section>
    <section className="eq-notice"><span className="eq-notice-star" aria-hidden="true">✳</span><div><span className="eq-kicker">GOOD THINGS ARE COMING.</span><h2>다음 반짝임을 기다려 주세요.</h2><p>이퀴녹스 굿즈의 판매 소식은 WSE 소식 게시판에서 안내합니다.</p></div><Link href="/news" className="eq-button">WSE 소식 보기 <span>↗</span></Link></section>
    <div className="eq-endmark" aria-hidden="true">OBJECTS WITH LOVE. <span>✳</span></div>
  </main>;
}
