"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const collections = [
  { key: "equinox", label: "이퀴녹스", english: "EQUINOX", blurb: "이퀴녹스의 네 가지 빛, 네 가지 이야기." },
  { key: "starterpack", label: "스타터팩", english: "STARTER PACK", blurb: "모험의 시작을 함께할 세 마리의 파트너." },
  { key: "rescuepack", label: "레스큐팩", english: "RESCUE PACK", blurb: "가장 어두운 순간에 손을 내미는 세 개의 구원." },
  { key: "stimpack", label: "스팀팩", english: "STIMPACK", blurb: "끝까지 곁에 남는 세 개의 상징." },
] as const;
type Collection = (typeof collections)[number]["key"];
const products: { collection: Collection; name: string; english: string; image: string; color: string; motif: string; description: string }[] = [
  { collection: "equinox", name: "포스포라 미카", english: "PHOSPHORA MIKA", image: "mika", color: "#e6dbc4", motif: "빛을 닮은 날개", description: "아이보리빛 날개와 섬세한 골드 라인. 미카의 상징을 작은 금속 배지에 담았습니다." },
  { collection: "equinox", name: "포스포라 루시", english: "PHOSPHORA LUCY", image: "lucy", color: "#bbc8dc", motif: "별을 품은 마음", description: "깊은 밤을 닮은 컬러, 날개 사이에 자리한 작은 별. 루시의 세계를 곁에 두세요." },
  { collection: "equinox", name: "티티", english: "TIAMAT V. TITI DE ABYSSO", image: "titi", color: "#c7b4df", motif: "나만의 작은 왕관", description: "보랏빛 하트와 왕관, 대담하게 펼쳐진 날개. 티티만의 존재감을 담은 디자인입니다." },
  { collection: "equinox", name: "코코", english: "LAMPYRIS V. DE PROFUNDIS", image: "coco", color: "#e6bba4", motif: "어둠 속의 반짝임", description: "선명한 실루엣과 흩어지는 빛의 조각. 코코의 개성을 골드와 블랙의 대비로 표현했습니다." },
  { collection: "starterpack", name: "이그나이터", english: "IGNITER", image: "igniter", color: "#e5482b", motif: "처음 붙은 불꽃", description: "붉은 날개 사이로 피어오르는 작은 스파크. 시작을 알리는 이그나이터의 불씨를 배지에 담았습니다." },
  { collection: "starterpack", name: "네비게이터", english: "NAVIGATOR", image: "navigator", color: "#2b86c9", motif: "바람이 가리키는 길", description: "푸른 바람을 타고 날아오르는 흰 새와 길잡이 별. 길을 잃어도 다시 찾게 해 줄 네비게이터의 상징입니다." },
  { collection: "starterpack", name: "셀러브레이터", english: "CELEBRATOR", image: "celebrator", color: "#e8ad12", motif: "축하의 순간", description: "구름처럼 포근한 강아지와 작은 햇살. 당신의 첫 페이지를 축하하는 셀러브레이터의 빛입니다." },
  { collection: "rescuepack", name: "헬다이버", english: "HELLDIVER", image: "helldiver", color: "#d9542b", motif: "가장 먼저 뛰어드는 자", description: "불길 속으로 가장 먼저 뛰어드는 헬다이버. 망설임 없는 첫걸음을 금속 배지에 새겼습니다." },
  { collection: "rescuepack", name: "앵커", english: "ANCHOR", image: "anchor", color: "#3d6f8f", motif: "흔들리지 않는 닻", description: "거센 파도에도 자리를 지키는 앵커. 끝까지 버텨 주는 단단한 마음을 담았습니다." },
  { collection: "rescuepack", name: "페인킬러", english: "PAINKILLER", image: "painkiller", color: "#e48fa8", motif: "아픔을 덜어 주는 손", description: "다친 곳을 가장 먼저 알아채는 페인킬러. 조용히 건네는 위로를 작은 반짝임으로 표현했습니다." },
  { collection: "stimpack", name: "슈거", english: "SUGAR", image: "sugar", color: "#9fd4b8", motif: "마지막 약속", description: "꿰맨 자국이 남은 민트빛 개와 품에 안은 복숭아. 몇 번이고 돌아오는 슈거의 마음을 담았습니다." },
  { collection: "stimpack", name: "홀더", english: "HOLDER", image: "holder", color: "#d8c3a0", motif: "놓치지 않는 끈", description: "흰 불꽃 속 검은 여우와 붉은 끈. 끝까지 붙잡고 있는 홀더의 이야기를 골드 라인으로 새겼습니다." },
  { collection: "stimpack", name: "클로버", english: "CLOVER", image: "clover", color: "#5f9b6b", motif: "행운이 머무는 자리", description: "네잎클로버를 품은 검은 토끼와 초록 고리. 곁에 두면 작은 행운이 찾아올 클로버의 배지입니다." },
];
const photo = (item: { collection: Collection; image: string }) => `/images/${item.collection}/${item.image}-badge.png`;
const collectionOf = (key: Collection) => collections.find((c) => c.key === key)!;
export default function EquinoxShop() {
  const [selected, setSelected] = useState(0);
  const [filter, setFilter] = useState<Collection | "all">("all");
  const product = products[selected];
  const shown = products.filter((item) => filter === "all" || item.collection === filter);
  const group = collectionOf(product.collection);
  function viewProduct(index: number) {
    setSelected(index);
    document.getElementById("badge-detail")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <main id="main" className="eqs-main">
    <div className="eqs-topline"><span>WSE OBJECTS — OFFICIAL GOODS</span><span>좋아하는 세계를 수집하는 곳 ↗</span></div>
    <section className="eqs-hero" aria-labelledby="shop-title">
      <div className="eqs-hero-copy">
        <span className="eqs-kicker">● &nbsp; METAL BADGE / {collections.length} COLLECTIONS</span>
        <h1 id="shop-title">SMALL<br />OBJECTS.<br /><span>BIG LOVE.</span></h1>
        <p className="eqs-hero-korean">좋아하는 세계를,<br />나의 일상에.</p>
        <p className="eqs-intro">가방에, 재킷에, 가장 아끼는 자리에.<br />WSE의 이야기가 작은 반짝임으로 찾아옵니다.</p>
        <a href="#collection" className="eqs-button">컬렉션 둘러보기 <span>↘</span></a>
        <div className="eqs-hero-foot"><span>01 — METAL BADGE</span><span>{products.length} CHARACTERS. YOUR PICK.</span></div>
      </div>
      <div className="eqs-hero-visual">
        <Image src={photo(products[0])} alt="이퀴녹스 포스포라 미카 금속 배지" fill priority sizes="(max-width: 760px) 100vw, 56vw" />
        <div className="eqs-image-top"><span>WSE<br />METAL BADGE COLLECTION</span><span className="eqs-round-tag">COMING<br />SOON ↗</span></div>
        <div className="eqs-image-bottom"><span>A LITTLE PIECE<br />OF YOUR UNIVERSE.</span><b>✳</b></div>
      </div>
    </section>
    <div className="eqs-ribbon" aria-hidden="true"><span>KEEP YOUR FAVORITES CLOSE</span><b>✳</b><span>WSE OBJECTS</span><b>✳</b><span>MADE FOR YOUR EVERYDAY</span><b>✳</b></div>
    <section id="collection" className="eqs-collection" aria-labelledby="collection-title">
      <div className="eqs-section-heading"><div><span className="eqs-kicker">THE COLLECTION / 001</span><h2 id="collection-title">당신의 최애는 누구인가요<span>?</span></h2></div><span className="eqs-count">금속 배지 <b>{String(products.length).padStart(2, "0")}</b></span></div>
      <div className="eqs-category"><div className="eqs-tabs" role="group" aria-label="컬렉션 선택"><button onClick={() => setFilter("all")} aria-pressed={filter === "all"}>전체 보기 <b>{products.length}</b></button>{collections.map((c) => <button key={c.key} onClick={() => setFilter(c.key)} aria-pressed={filter === c.key}>{c.label} <b>{products.filter((item) => item.collection === c.key).length}</b></button>)}</div><p>{filter === "all" ? "좋아하는 세계를 하나씩 모아 보세요." : collectionOf(filter).blurb}</p></div>
      <div className="eqs-products">{shown.map((item) => <button key={item.image} className="eqs-product" onClick={() => viewProduct(products.indexOf(item))} aria-label={`${item.name} 금속 배지 상세 보기`}>
        <div className="eqs-product-photo"><Image src={photo(item)} alt={`${item.name} 금속 배지 디자인`} fill sizes="(max-width: 1000px) 45vw, 23vw" /><span className="eqs-product-label">COMING SOON</span><span className="eqs-product-arrow" aria-hidden="true">↗</span></div>
        <div className="eqs-product-meta"><span>{collectionOf(item.collection).english} / METAL BADGE</span><i style={{ backgroundColor: item.color }} /></div>
        <h3>{item.name}</h3><p>{collectionOf(item.collection).label} 금속 배지</p><div className="eqs-product-status">판매 준비 중 <span>자세히 보기 ↗</span></div>
      </button>)}</div>
    </section>
    <section id="badge-detail" className="eqs-detail" aria-labelledby="detail-title">
      <div className="eqs-detail-photo"><Image key={product.image} src={photo(product)} alt={`${product.name} 금속 배지 확대 이미지`} fill sizes="(max-width: 760px) 100vw, 50vw" /><span>THE DETAILS / {String(selected + 1).padStart(2, "0")}</span></div>
      <div className="eqs-detail-copy"><span className="eqs-kicker">{group.english} — COLLECT YOUR FAVORITE</span>
        <div aria-live="polite"><h2 id="detail-title">{product.motif}</h2><p className="eqs-detail-english">{product.english}</p><p className="eqs-detail-description">{product.description}</p></div>
        <fieldset className="eqs-options"><legend>캐릭터 선택</legend>{products.filter((item) => item.collection === product.collection).map((item) => { const index = products.indexOf(item); return <button key={item.image} onClick={() => setSelected(index)} aria-pressed={selected === index} className={selected === index ? "is-selected" : ""}><i style={{ backgroundColor: item.color }} />{item.name}</button>; })}</fieldset>
        <dl className="eqs-specs"><div><dt>상품</dt><dd>{product.name} 금속 배지</dd></div><div><dt>컬렉션</dt><dd>{group.label} / {group.english}</dd></div><div><dt>가격 · 판매 일정</dt><dd>추후 공개 예정</dd></div></dl>
        <div className="eqs-coming">판매 준비 중 <span>COMING SOON</span></div>
        <p className="eqs-disclaimer">이미지는 디자인 참고용이며 실제 제작 상품과 차이가 있을 수 있습니다.<br />크기, 소재, 구성 및 배송 안내는 판매 시작 시 공개됩니다.</p>
      </div>
    </section>
    <section className="eqs-notice"><span className="eqs-notice-star" aria-hidden="true">✳</span><div><span className="eqs-kicker">GOOD THINGS ARE COMING.</span><h2>다음 반짝임을 기다려 주세요.</h2><p>WSE 굿즈의 판매 소식은 WSE 소식 게시판에서 안내합니다.</p></div><Link href="/news" className="eqs-button">WSE 소식 보기 <span>↗</span></Link></section>
    <div className="eqs-endmark" aria-hidden="true">OBJECTS WITH LOVE. <span>✳</span></div>
  </main>;
}
