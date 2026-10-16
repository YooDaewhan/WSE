"use client";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useExperience } from "./components/Experience";
import { cast, generations, credit } from "./data/cast";
import { directions } from "./data/art-direction";
import NewsBoard from "./components/NewsBoard";
import ShopPreview from "./components/ShopPreview";
const MotionImage = motion.create(Image);
const featured = [
  "navigator",
  "igniter",
  "celebrator",
  "titi",
  "coco",
  "sugar",
];
export default function Home() {
  const [index, setIndex] = useState(0);
  const c = cast.find((c) => c.slug === featured[index])!;
  const d = directions[c.slug];
  const { paused } = useExperience();
  const video = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 900], [0, 130]);
  useEffect(() => {
    if (paused) video.current?.pause();
    else video.current?.play().catch(() => {});
  }, [paused]);
  return (
    <div className="wse-site">
      <Header />
      <main id="main">
        <section
          className="home-hero"
          style={
            { "--accent": d.color, "--tone": d.secondary } as CSSProperties
          }
        >
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-kicker">
            <span className="status-dot" /> A NEW EVENING, A NEW STORY.
          </div>
          <div className="hero-heading">
            <h1>
              YOUR EVENING.
              <br />
              <span>
                OUR <em>UNIVERSE.</em>
              </span>
            </h1>
            <div className="hero-intro">
              <span className="little-star">✳</span>
              <p>
                하루의 끝에서,
                <br />
                우리의 이야기가 시작된다.
              </p>
            </div>
            <Link className="pill-button" href="/services">
              나의 CAST 만나기<span>↗</span>
            </Link>
          </div>
          <motion.div
            className="hero-character"
            style={{ y: paused ? 0 : drift }}
          >
            <span className="hero-ghost" aria-hidden="true">
              {c.role.toUpperCase()}
            </span>
            <AnimatePresence mode="wait">
              <MotionImage
                width={1080}
                height={1620}
                sizes="(max-width: 700px) 90vw, 48vw"
                key={c.slug}
                src={c.image!}
                alt={c.name}
                initial={{ opacity: 0, x: 65, rotate: 4 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                fetchPriority="high"
              />
            </AnimatePresence>
            <Link className="hero-character-label" href={c.href}>
              <small>
                {c.generation} / {c.teamName}
              </small>
              <strong>
                {c.name.replace("(미정)", "")} <span>↗</span>
              </strong>
              <span>{d.chapter}</span>
            </Link>
          </motion.div>
          <div className="hero-bottom">
            <a href="#discover" className="scroll-cue">
              SCROLL TO EXPLORE <span>↓</span>
            </a>
            <div className="hero-selector" aria-label="주목할 캐릭터 선택">
              {featured.map((s, i) => (
                <button
                  key={s}
                  aria-label={`${cast.find((c) => c.slug === s)!.name} 보기`}
                  aria-pressed={index === i}
                  onClick={() => setIndex(i)}
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <i />
                </button>
              ))}
            </div>
            <span className="hero-edition">
              WSE / VIRTUAL TALENT COLLECTIVE
            </span>
          </div>
        </section>
        <div className="marquee" aria-hidden="true">
          <div>
            {Array.from({ length: 4 }, (_, i) => (
              <span key={i}>
                WE START EVENING <i>✳</i> YOUR NEXT FAVORITE <i>✳</i>{" "}
              </span>
            ))}
          </div>
        </div>
        <section id="discover" className="home-discover section-shell">
          <div className="section-top">
            <span className="eyebrow">01 / MEET THE CAST</span>
            <span>DIFFERENT WORLDS. SAME SKY.</span>
          </div>
          <div className="section-heading">
            <h2>
              어쩌면, 당신의
              <br />
              <em>다음 최애.</em>
            </h2>
            <p>
              불꽃을 피우는 친구부터 길을 잃은 안내자까지.
              <br />
              좋아하는 마음에는, 정해진 방향이 없으니까.
            </p>
            <Link className="text-link" href="/services">
              ALL CAST ↗
            </Link>
          </div>
          <div className="featured-grid">
            {["igniter", "navigator", "celebrator"].map((slug, i) => {
              const m = cast.find((c) => c.slug === slug)!;
              const a = directions[slug];
              return (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.7 }}
                >
                  <Link
                    href={m.href}
                    className="feature-card"
                    style={
                      {
                        "--accent": a.color,
                        "--tone": a.secondary,
                      } as CSSProperties
                    }
                  >
                    <span className="eyebrow">
                      0{i + 1} / {m.role.toUpperCase()}
                    </span>
                    <span className="feature-symbol" aria-hidden="true">
                      {a.motif}
                    </span>
                    <Image
                      width={720}
                      height={1080}
                      sizes="(max-width: 700px) 90vw, 30vw"
                      src={m.image!}
                      alt={m.name}
                      loading="lazy"
                    />
                    <div>
                      <h3>{m.name}<span className="real-name">{credit(m)}</span></h3>
                      <p>
                        {a.title} {a.subtitle}
                      </p>
                    </div>
                    <span className="feature-arrow">↗</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
        <section className="worlds-section section-shell">
          <div className="section-top">
            <span className="eyebrow">02 / FIND YOUR STORY</span>
            <span>어떤 이야기부터 만나볼까요?</span>
          </div>
          <div className="section-heading">
            <h2>
              지금 당신에게
              <br />
              <em>필요한 이야기.</em>
            </h2>
            <p>
              시작을 앞둔 날에도, 잠시 쉬고 싶은 날에도.
              <br />
              마음이 가는 팀을 골라 이야기를 만나보세요.
            </p>
          </div>
          <div className="story-grid">
            {generations.map((g) => (
              <Link key={g.id} href={g.href} className="story-card">
                <span className="eyebrow">{g.label} / {g.theme}</span>
                <span className="story-mark" aria-hidden="true">{["↗", "✳", "⚡", "+", "◐", "✦", "◇"][g.id - 1]}</span>
                <strong>{g.teamName}</strong>
                <p>{["아무도 걷지 않은 길에 첫 발자국을 남기는 이들.", "시작을 망설이는 순간부터, 첫걸음 너머까지 함께하는 정령들.", "평범한 일상에서 자신만의 역전을 꿈꾸는 이들.", "혼자 견디기 어려운 순간, 곁으로 다가오는 구원의 손길.", "당신의 마음을 두고 펼쳐지는 천사와 악마의 이야기.", "지친 하루에 다시 움직일 작은 자극을 건네는 이들.", "쉽게 물드는 마음을 지키기 위해 모인 이들."][g.id - 1]}</p>
                <span className="story-action">팀 만나보기 ↗</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="evening-film">
          <video
            ref={video}
            src="/images/home-hero.mp4"
            poster="/images/home-hero.webp"
            muted
            loop
            playsInline
            preload="none"
            aria-label="햇살이 머무는 WSE의 방"
          />
          <div>
            <span className="eyebrow">WE START EVENING</span>
            <h2>
              당신의 하루에
              <br />
              머물고 싶은 이야기.
            </h2>
            <Link className="pill-button" href="/about">
              WSE의 이야기<span>↗</span>
            </Link>
          </div>
        </section>
        <section className="home-news section-shell" id="news">
          <div className="section-top"><span className="eyebrow">03 / NEWS & NOTICE</span><span>WSE의 새로운 소식</span></div>
          <div className="section-heading"><h2>우리의 <em>다음 소식.</em></h2><p>공지와 새로운 이야기, 굿즈 소식을 한곳에서.</p><Link className="text-link" href="/news">전체 소식 ↗</Link></div>
          <NewsBoard compact />
        </section>
        <section className="home-shop section-shell" id="shop">
          <div className="section-top"><span className="eyebrow">04 / WSE SHOP</span><span>COMING SOON</span></div>
          <ShopPreview />
        </section>
        <section className="home-contact section-shell" id="connect">
          <span className="eyebrow">05 / CONNECT — LET'S MAKE SOMETHING REAL</span>
          <Link href="/contact">
            다음 이야기를,
            <br />
            <em>함께 만들어요.</em>
            <span>↗</span>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
