"use client";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useExperience } from "./components/Experience";
import { cast, stories } from "./data/cast";
import { directions } from "./data/art-direction";
import { news } from "./data/news";
import ShopPreview from "./components/ShopPreview";
import OfficeTower from "./components/OfficeTower";
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
const teamBlurbs = [
  "아무도 걷지 않은 길에 첫 발자국을 남기는 이들.",
  "시작을 망설이는 순간부터, 첫걸음 너머까지 함께하는 정령들.",
  "평범한 일상에서 자신만의 역전을 꿈꾸는 이들.",
  "혼자 견디기 어려운 순간, 곁으로 다가오는 구원의 손길.",
  "당신의 마음을 두고 펼쳐지는 천사와 악마의 이야기.",
  "지친 하루에 다시 움직일 작은 자극을 건네는 이들.",
  "쉽게 물드는 마음을 지키기 위해 모인 이들.",
  "히어로를 키우기 위해 기꺼이 악당이 된 이들.",
];
const feed = news.filter((n) => n.category !== "FAQ");
const lead = feed[0];
const plain = (name: string) => name.replace("(미정)", "");
export default function Home() {
  const [index, setIndex] = useState(0);
  const [issue, setIssue] = useState({ vol: 0, date: "" });
  const c = cast.find((c) => c.slug === featured[index])!;
  const d = directions[c.slug];
  const next = cast.find((m) => m.slug === featured[(index + 1) % featured.length])!;
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
          <Folio page="04" kind="COVER STORY" vol={issue.vol} />
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
          <OfficeTower />
        </section>
        <section id="special" className="mag-special">
          <Folio page="12" kind="SPECIAL" vol={issue.vol} />
          <div className="mag-special-head">
            <h2>
              일곱 개의 팀,
              <br />
              <em>일곱 개의 저녁.</em>
            </h2>
            <p>
              시작을 앞둔 날에도, 잠시 쉬고 싶은 날에도.
              <br />
              마음이 가는 팀을 골라 이야기를 만나보세요.
            </p>
          </div>
          <ol className="mag-teams">
            {stories.map((g, i) => {
              const members = cast.filter((m) => m.group === g.id && m.image);
              const color = directions[members[0]?.slug]?.color ?? "var(--acid)";
              return (
                <motion.li
                  key={g.id}
                  initial={still ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease, delay: (i % 2) * 0.06 }}
                >
                  <Link href={g.href} style={{ "--accent": color } as CSSProperties}>
                    <span className="mag-team-no">{String(g.id).padStart(2, "0")}</span>
                    <span className="mag-team-name">
                      <small>{g.label} · {g.theme}</small>
                      {g.teamName}
                    </span>
                    <span className="mag-team-blurb">{teamBlurbs[g.id - 1]}</span>
                    <span className="mag-team-faces" aria-hidden="true">
                      {members.slice(0, 4).map((m) => (
                        <Image key={m.slug} src={m.image!} alt="" width={96} height={144} sizes="56px" />
                      ))}
                    </span>
                    <span className="mag-team-arrow" aria-hidden="true">↗</span>
                  </Link>
                </motion.li>
              );
            })}
          </ol>
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
            <span className="eyebrow">p.18 — FILM · 햇살이 머무는 방</span>
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
        <section id="news" className="mag-news">
          <Folio page="20" kind="NEWS IN BRIEF" vol={issue.vol} />
          <div className="mag-news-paper">
            <div className="mag-news-nameplate">
              <span>{issue.date}</span>
              <strong>The Evening Post</strong>
              <span>VOL.{issue.vol || "—"} · 석간</span>
            </div>
            <article className="mag-news-lead">
              <span className="mag-kicker">{lead.category} · 헤드라인</span>
              <h2>
                <Link href={`/news/${lead.slug}`}>{lead.title}</Link>
              </h2>
              <div className="mag-news-columns">
                {lead.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
            <aside className="mag-news-side">
              <div>
                <span className="mag-kicker">다음 호 예고</span>
                <Link href={next.href} className="mag-news-next">
                  <Image src={next.image!} alt="" width={240} height={360} sizes="120px" />
                  <span>
                    <small>VOL.{issue.vol ? issue.vol + 1 : "—"} 커버</small>
                    <strong>{plain(next.name)}</strong>
                    {directions[next.slug].title}
                  </span>
                </Link>
              </div>
              <div>
                <span className="mag-kicker">{news.length > 1 ? "단신" : "아카이브"}</span>
                <ul>
                  {feed.slice(1, 4).map((n) => (
                    <li key={n.slug}>
                      <Link href={`/news/${n.slug}`}>{n.title}</Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/news">지난 소식 전체 보기 ↗</Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
        <section className="home-shop section-shell" id="shop">
          <Folio page="24" kind="SHOP · COMING SOON" vol={issue.vol} />
          <ShopPreview />
        </section>
        <section id="connect" className="mag-letters">
          <Folio page="28" kind="LETTERS · 독자 엽서" vol={issue.vol} />
          <div className="mag-letters-spread">
            <div className="mag-editor">
              <span className="mag-kicker">편집후기</span>
              <p>
                이번 호도 끝까지 읽어주셔서 고마워요. 하루의 끝에 잠깐 들러
                누군가의 이야기를 만나는 일, 그게 WSE가 매주 저녁을 여는 이유예요.
              </p>
              <p>다음 호에서도 새로운 얼굴로 찾아갈게요.</p>
              <span className="mag-sign">— WSE 편집부</span>
            </div>
            <motion.div
              className="mag-postcard"
              initial={still ? false : { rotate: -6, y: 40, opacity: 0 }}
              whileInView={{ rotate: -2, y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease }}
            >
              <Link href="/contact">
                <span className="mag-postcard-msg">
                  <small>POST CARD · 독자 엽서</small>
                  다음 이야기를,
                  <br />
                  <em>함께 만들어요.</em>
                  <span className="mag-postcard-cta">엽서 보내기 ↗</span>
                </span>
                <span className="mag-postcard-addr">
                  <span className="mag-stamp" style={{ "--accent": d.color } as CSSProperties}>
                    <Image src={c.image!} alt="" width={120} height={180} sizes="80px" />
                  </span>
                  <span className="mag-postmark" aria-hidden="true">
                    WSE
                    <br />
                    VOL.{issue.vol || "—"}
                  </span>
                  <span className="mag-addr-lines">
                    <span>받는 사람 — WSE 편집부</span>
                    <span>협업 · 제안 · 팬레터 모두 환영</span>
                    <span>wsestudio.net/contact</span>
                  </span>
                </span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
function Folio({ page, kind, vol }: { page: string; kind: string; vol: number }) {
  return (
    <header className="mag-folio">
      <span>p.{page}</span>
      <span>{kind}</span>
      <span>월간 WSE · VOL.{vol || "—"}</span>
    </header>
  );
}
