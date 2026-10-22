import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
export default function About() {
  return (
    <div className="wse-site">
      <Header />
      <main id="main" className="section-shell brand-page">
        <span className="eyebrow">ABOUT WSE / WE START EVENING</span>
        <h1 className="brand-title">
          THE DAY ENDS.
          <br />
          <em>OUR STORY BEGINS.</em>
        </h1>
        <p className="brand-lead">
          누군가에게는 하루의 끝.
          <br />
          우리에게는 새로운 이야기의 시작.
          <br />
          WSE는 서로 다른 세계를 가진 버추얼 크리에이터들이 당신의 저녁을
          함께하는 곳입니다.
        </p>
        <Image
          width={1672}
          height={941}
          sizes="90vw"
          className="brand-image"
          src="/images/home-hero.webp"
          alt="따뜻한 햇살이 비치는 WSE의 방"
        />
        <div className="about-values">
          {[
            [
              "01 / PEOPLE",
              "먼저, 사람.",
              "어떤 캐릭터를 좋아하게 되는 순간은 저마다 다릅니다. 목소리, 성격, 작은 버릇까지. WSE는 각자의 다름에서 이야기를 시작합니다.",
            ],
            [
              "02 / WORLDS",
              "다음은, 세계.",
              "어둠을 먼저 건너는 새벽조부터 당신을 지켜주는 시큐리티엑스까지. 일곱 팀이 서로 다른 방식으로 같은 저녁을 채웁니다.",
            ],
            [
              "03 / TOGETHER",
              "그리고, 우리.",
              "첫걸음을 응원하고, 작은 순간을 축하하고, 가끔은 함께 쉬어가는 사이. 화면 너머의 만남이 일상 속에 오래 남기를 바랍니다.",
            ],
          ].map(([n, t, p]) => (
            <article key={n}>
              <span className="eyebrow">{n}</span>
              <h2>{t}</h2>
              <p>{p}</p>
            </article>
          ))}
        </div>
        <div className="about-links">
          <Link className="pill-button" href="/services">
            우리의 CAST 만나기<span>↗</span>
          </Link>
          <Link className="pill-button" href="/about/org">
            조직도 보기<span>↗</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
