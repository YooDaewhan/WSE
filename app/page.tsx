"use client";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useExperience } from "./components/Experience";
import { cast, generations } from "./data/cast";
import { directions } from "./data/art-direction";
import NewsBoard from "./components/NewsBoard";
import ShopPreview from "./components/ShopPreview";
import "./magazine.css";
const MotionImage = motion.create(Image);
const featured = [
  "navigator",
  "igniter",
  "celebrator",
  "titi",
  "coco",
  "sugar",
];
/* 월간 WSE — 매주 월요일 새 호. 커버 캐릭터는 호수에 따라 돌아갑니다. */
const FIRST_ISSUE = Date.UTC(2026, 0, 5);
const WEEK = 7 * 24 * 60 * 60 * 1000;
const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
const ease = [0.22, 1, 0.36, 1] as const;
const plain = (name: string) => name.replace("(미정)", "");
export default function Home() {
  const [index, setIndex] = useState(0);
  const [issue, setIssue] = useState({ vol: 0, date: "" });
  const c = cast.find((c) => c.slug === featured[index])!;
  const d = directions[c.slug];
  const others = featured.filter((s) => s !== c.slug).map((s) => cast.find((m) => m.slug === s)!);
  const { paused } = useExperience();
  const still = useReducedMotion() || paused;
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const now = new Date();
    const vol = Math.max(1, Math.floor((now.getTime() - FIRST_ISSUE) / WEEK) + 1);
    setIssue({ vol, date: `${MONTHS[now.getMonth()]} ${now.getFullYear()}` });
    setIndex(vol % featured.length);
  }, []);
  useEffect(() => {
    if (paused) video.current?.pause();
    else video.current?.play().catch(() => {});
  }, [paused]);
  const contents = [
    { page: "04", kind: "COVER STORY", title: `${plain(c.name)}, ${d.title}`, href: "#discover" },
    { page: "12", kind: "SPECIAL", title: "일곱 개의 팀, 일곱 개의 저녁", href: "#special" },
    { page: "18", kind: "FILM", title: "햇살이 머무는 방", href: "#film" },
    { page: "20", kind: "NEWS", title: "이번 주 WSE 소식", href: "#news" },
    { page: "24", kind: "SHOP", title: "곧 문을 여는 가게", href: "#shop" },
    { page: "28", kind: "LETTERS", title: "독자 엽서 — 함께 만들기", href: "#connect" },
  ];
  return (
    <div className="wse-site">
      <Header />
      <main id="main">
        <section
          className="mag-spread"
          style={{ "--accent": d.color, "--tone": d.secondary } as CSSProperties}
        >
          <div className="mag-contents">
            <div className="mag-masthead">
              <span>월간</span> WSE
              <small>
                WE START EVENING
                <br />
                VOL.{issue.vol || "—"} · {issue.date}
              </small>
            </div>
            <h1 className="mag-contents-title">
              Contents<em>이번 호</em>
            </h1>
            <ol className="mag-toc">
              {contents.map((item, i) => (
                <motion.li
                  key={item.page}
                  initial={still ? false : { opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.6, ease }}
                >
                  <a href={item.href}>
                    <span className="mag-toc-page">{item.page}</span>
                    <span className="mag-toc-text">
                      <small>{item.kind}</small>
                      {item.title}
                    </span>
                    <span className="mag-toc-arrow">↘</span>
                  </a>
                </motion.li>
              ))}
            </ol>
            <div className="mag-back" aria-label="다른 호 표지 보기">
              <span>BACK ISSUES</span>
              {featured.map((s, i) => {
                const m = cast.find((c) => c.slug === s)!;
                return (
                  <button
                    key={s}
                    aria-label={`${plain(m.name)} 표지 보기`}
                    aria-pressed={index === i}
                    onClick={() => setIndex(i)}
                  >
                    <Image src={m.image!} alt="" width={64} height={96} />
                  </button>
                );
              })}
            </div>
          </div>
          <motion.div
            className="mag-cover"
            initial={still ? false : { rotateY: -70, opacity: 0 }}
            animate={issue.vol ? { rotateY: 0, opacity: 1 } : undefined}
            transition={{ duration: 1.3, ease }}
          >
            <AnimatePresence initial={false}>
              {issue.vol > 0 && <MotionImage
                key={c.slug}
                className="mag-cover-art"
                width={1023}
                height={1537}
                sizes="(max-width: 700px) 100vw, 52vw"
                src={c.image!}
                alt={`${plain(c.name)} 표지`}
                initial={{ clipPath: "inset(0 0 0 100%)" }}
                animate={{ clipPath: "inset(0 0 0 0%)" }}
                exit={{ opacity: 0, transition: { delay: 0.8 } }}
                transition={{ duration: 0.9, ease }}
                fetchPriority="high"
              />}
            </AnimatePresence>
            <div className="mag-cover-type">
              <div className="mag-cover-top">
                <span>VOL.{issue.vol || "—"}</span>
                <span>{c.generation} / {c.teamName}</span>
                <span>₩0 · FREE</span>
              </div>
              <div className="mag-cover-logo" aria-hidden="true">WSE</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={c.slug}
                  className="mag-cover-lines"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <a href="#discover" className="mag-cover-main">
                    <small>COVER STORY — p.04</small>
                    <strong>{plain(c.name)}</strong>
                    <span>&ldquo;{c.content.quote}&rdquo;</span>
                  </a>
                  <a href="#special" className="mag-cover-side">
                    <small>SPECIAL — p.12</small>
                    일곱 개의 팀,
                    <br />
                    일곱 개의 저녁
                  </a>
                  <span className="mag-cover-role">{d.chapter}</span>
                </motion.div>
              </AnimatePresence>
              <div className="mag-barcode" aria-hidden="true">
                <i />
                <span>9 772026 {String(issue.vol).padStart(3, "0")}</span>
              </div>
            </div>
          </motion.div>
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
        <section
          id="discover"
          className="mag-story"
          style={{ "--accent": d.color, "--tone": d.secondary } as CSSProperties}
        >
          <header className="mag-folio">
            <span>p.04</span>
            <span>COVER STORY</span>
            <span>월간 WSE · VOL.{issue.vol || "—"}</span>
          </header>
          <div className="mag-story-spread" key={c.slug}>
            <motion.figure
              className="mag-story-photo"
              initial={still ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                variants={{ hidden: { clipPath: "inset(0 0 100% 0)" }, show: { clipPath: "inset(0 0 0% 0)" } }}
                transition={{ duration: 1.4, ease }}
              >
                <Image
                  src={c.alternate ?? c.image!}
                  alt={plain(c.name)}
                  width={1024}
                  height={1536}
                  sizes="(max-width: 700px) 100vw, 45vw"
                />
              </motion.div>
              <figcaption>
                FIG.1 — {plain(c.name)}{c.birthplace.includes("미정") ? "" : `, ${c.birthplace}에서`}. 오후 6시의 빛.
              </figcaption>
              <span className="mag-story-motif" aria-hidden="true">{d.motif}</span>
            </motion.figure>
            <article className="mag-story-text">
              <span className="mag-kicker">{c.generation} {c.teamName} · {c.role.toUpperCase()}</span>
              <h2>
                {d.title}
                <br />
                <em>{d.subtitle}</em>
              </h2>
              <p className="mag-deck">{c.content.shortBio}</p>
              <motion.blockquote
                initial={still ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                transition={{ staggerChildren: 0.08 }}
              >
                {c.content.quote.split(" ").map((w, i) => (
                  <motion.span
                    key={i}
                    variants={{ hidden: { opacity: 0, y: "0.6em" }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease }}
                  >
                    {w}{" "}
                  </motion.span>
                ))}
              </motion.blockquote>
              <dl className="mag-qna">
                <dt>Q. 처음 만나는 당신에게 한마디.</dt>
                <dd>{c.content.lines[0]}</dd>
                <dt>Q. 요즘 입버릇은?</dt>
                <dd>{c.content.lines[2] ?? c.content.lines[1]}</dd>
                <dt>Q. {plain(c.partner.name)}는 어떤 존재인가요?</dt>
                <dd>{c.content.partnerDesc}</dd>
              </dl>
              <Link className="text-link" href={c.href}>
                인터뷰 전문 읽기 ↗
              </Link>
            </article>
          </div>
          <div className="mag-also">
            <span className="mag-kicker">ALSO IN THIS ISSUE — 이번 호의 다른 얼굴들</span>
            <div>
              {others.map((m) => (
                <Link key={m.slug} href={m.href} style={{ "--accent": directions[m.slug].color } as CSSProperties}>
                  <Image src={m.image!} alt="" width={240} height={360} sizes="160px" />
                  <strong>{plain(m.name)}</strong>
                  <small>{directions[m.slug].chapter}</small>
                </Link>
              ))}
            </div>
            <Link className="text-link" href="/services">ALL CAST ↗</Link>
          </div>
        </section>
        <section id="special" className="worlds-section section-shell">
          <div className="section-top">
            <span className="eyebrow">p.12 — SPECIAL</span>
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
        <section id="film" className="evening-film">
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
          <div className="section-top"><span className="eyebrow">p.20 — NEWS</span><span>WSE의 새로운 소식</span></div>
          <div className="section-heading"><h2>우리의 <em>다음 소식.</em></h2><p>공지와 새로운 이야기, 굿즈 소식을 한곳에서.</p><Link className="text-link" href="/news">전체 소식 ↗</Link></div>
          <NewsBoard compact />
        </section>
        <section className="home-shop section-shell" id="shop">
          <div className="section-top"><span className="eyebrow">p.24 — SHOP</span><span>COMING SOON</span></div>
          <ShopPreview />
        </section>
        <section className="home-contact section-shell" id="connect">
          <span className="eyebrow">p.28 — LETTERS · 독자 엽서</span>
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
