"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cast, generations, credit } from "../data/cast";
import { chapters } from "../data/chapters";
import { directions } from "../data/art-direction";
import Header from "./Header";
import Footer from "./Footer";
import { useExperience } from "./Experience";
import "../chapters.css";

type Chapter = (typeof chapters)[number];
const styleFor = (chapter: Chapter) =>
  ({
    "--chapter-accent": chapter.color,
    "--chapter-shade": chapter.shade,
  }) as CSSProperties;
function Atmosphere({ chapter }: { chapter: Chapter }) {
  return (
    <div
      className={`chapter-atmosphere atmosphere-${chapter.atmosphere}`}
      aria-hidden="true"
    >
      <span className="chapter-sigil">{chapter.symbol}</span>
      <div className="chapter-horizon" />
      <div className="chapter-orbit" />
      {Array.from({ length: 9 }, (_, i) => (
        <i key={i} style={{ "--particle": i } as CSSProperties} />
      ))}
    </div>
  );
}
function Ensemble({
  id,
  priority = false,
}: {
  id: number;
  priority?: boolean;
}) {
  const members = cast.filter((c) => c.group === id && c.image);
  return (
    <div
      className={`chapter-ensemble ensemble-${members.length}`}
      aria-label={`${generations[id - 1].teamName}의 캐스트`}
    >
      {members.map((c, i) => (
        <Link
          href={c.href}
          className="ensemble-portrait"
          key={c.slug}
          style={{ "--portrait": i } as CSSProperties}
          aria-label={`${c.name} 개별 화면 보기`}
        >
          <Image
            src={c.image!}
            width={720}
            height={1080}
            sizes="(max-width: 700px) 44vw, 23vw"
            alt={c.name}
            priority={priority && i === 0}
          />
          <span>{c.name.replace("(미정)", "")}<span className="real-name">{credit(c)}</span></span>
        </Link>
      ))}
    </div>
  );
}
export default function CastDirectory({ group = 0 }: { group?: number }) {
  const [selected, setSelected] = useState(0);
  const lastWheel = useRef(0);
  const { paused } = useExperience();
  if (group) {
    const chapter = chapters[group - 1];
    const generation = generations[group - 1];
    const members = cast.filter((c) => c.group === group);
    const next = generations[group % generations.length];
    return (
      <div
        className={`wse-site chapter-site chapter-detail chapter-${chapter.atmosphere}`}
        style={styleFor(chapter)}
      >
        <Header />
        <main id="main">
          <section className="team-cover">
            <Atmosphere chapter={chapter} />
            <div className="chapter-breadcrumb">
              <Link href="/services">← 기수의 이야기로</Link>
              <span>{generation.label} / WSE ORIGINAL STORY</span>
            </div>
            <div className="team-cover-copy">
              <span className="chapter-overline">
                CHAPTER {String(group).padStart(2, "0")} — {chapter.english}
              </span>
              <h1>{generation.teamName}</h1>
              <p>{chapter.story.tagline}</p>
              <a className="chapter-enter" href="#team-story">
                이야기 펼치기 <span>↓</span>
              </a>
            </div>
            <Ensemble id={group} priority />
            <span className="cover-caption">{chapter.invitation}</span>
          </section>
          <section className="team-prologue" id="team-story">
            <div className="prologue-margin">
              <span>PROLOGUE</span>
              <small>
                {generation.label} · {generation.teamName}
              </small>
            </div>
            <div className="prologue-text">
              <span className="chapter-overline">{chapter.english}</span>
              <h2>{chapter.story.tagline}</h2>
              <p className="prologue-intro">{chapter.story.description}</p>
              <p>{chapter.story.philosophy}</p>
              <div className="chapter-keywords">
                {chapter.words.map((word, i) => (
                  <span key={word}>
                    <small>0{i + 1}</small>
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </section>
          <section className="team-manifesto">
            <span aria-hidden="true">{chapter.symbol}</span>
            <motion.blockquote
              initial={{ opacity: 0.2, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: paused ? 0 : 1 }}
            >
              {chapter.story.motto}
            </motion.blockquote>
            <small>{generation.teamName} / OUR PROMISE</small>
          </section>
          <section className="team-encounters">
            <div className="encounters-heading">
              <span className="chapter-overline">THE CAST OF THIS STORY</span>
              <h2>이 이야기를 살아가는 사람들.</h2>
              <p>{generation.teamName}의 시선으로, 조금 더 가까이.</p>
            </div>
            {members.map((c, i) => (
              <article
                key={c.slug}
                className={`team-member member-${i % 2 ? "right" : "left"}`}
              >
                <Link
                  href={c.href}
                  className="team-member-art"
                  aria-label={`${c.name} 개별 화면 보기`}
                >
                  {c.image ? (
                    <Image
                      src={c.image}
                      width={900}
                      height={1350}
                      sizes="(max-width: 700px) 88vw, 43vw"
                      alt={c.name}
                    />
                  ) : (
                    <div className="chapter-art-pending">
                      <span>{directions[c.slug].motif}</span>
                      <p>비주얼 준비 중</p>
                    </div>
                  )}
                  <span className="member-image-caption">
                    {c.role.toUpperCase()} / {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
                <motion.div
                  className="team-member-copy"
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: paused ? 0 : 0.7 }}
                >
                  <span className="chapter-overline">
                    {generation.teamName} — {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{c.name.replace("(미정)", "")}<span className="real-name">{credit(c)}</span></h3>
                  <blockquote>“{c.content.quote}”</blockquote>
                  <p>
                    {directions[c.slug].title}
                    <br />
                    {directions[c.slug].subtitle}
                  </p>
                  <Link className="chapter-enter" href={c.href}>
                    이 사람의 이야기 <span>↗</span>
                  </Link>
                </motion.div>
              </article>
            ))}
          </section>
          <nav className="chapter-next" aria-label="다음 기수">
            <Link href="/services">← 모든 이야기</Link>
            <Link href={next.href}>
              <small>다음 장으로 · {next.label}</small>
              <strong>{next.teamName} ↗</strong>
            </Link>
          </nav>
        </main>
        <Footer />
      </div>
    );
  }
  const chapter = chapters[selected];
  const generation = generations[selected];
  return (
    <div className="wse-site chapter-site">
      <Header />
      <main id="main">
        <section
          className="chapter-reader"
          style={styleFor(chapter)}
          aria-label="기수별 이야기 선택"
          onWheel={(e) => {
            // ponytail: desktop wheel only; mobile layout scrolls normally
            if (window.innerWidth <= 700 || Math.abs(e.deltaY) < 20) return;
            const now = Date.now();
            if (now - lastWheel.current < 900) return;
            lastWheel.current = now;
            setSelected((i) => (i + (e.deltaY > 0 ? 1 : 6)) % 7);
          }}
        >
          <div className="reader-heading">
            <span>CAST / SEVEN ORIGINAL STORIES</span>
            <p>
              사람을 만나기 전에,
              <br />
              그들이 살아가는 세계부터.
            </p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={chapter.id}
              className={`chapter-scene chapter-${chapter.atmosphere}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: paused ? 0 : 0.35 }}
            >
              <Atmosphere chapter={chapter} />
              <div className="chapter-cover-copy">
                <span className="chapter-overline">
                  {generation.label} — {chapter.english}
                </span>
                <motion.h1
                  initial={{ y: paused ? 0 : 25 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  {generation.teamName}
                </motion.h1>
                <h2>{chapter.story.tagline}</h2>
                <p>{chapter.story.description}</p>
                <Link className="chapter-enter" href={generation.href}>
                  {generation.teamName}의 이야기로<span>↗</span>
                </Link>
              </div>
              <Ensemble id={chapter.id} priority />
              <div className="chapter-side-note">
                <span>{String(chapter.id).padStart(2, "0")}</span>
                <small>{chapter.invitation}</small>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="reader-bottom">
            <div className="reader-pagination">
              <span>
                {String(chapter.id).padStart(2, "0")} <small>/ 07</small>
              </span>
              <div>
                <button
                  onClick={() => setSelected((i) => (i + 6) % 7)}
                  aria-label="이전 기수"
                >
                  ←
                </button>
                <button
                  onClick={() => setSelected((i) => (i + 1) % 7)}
                  aria-label="다음 기수"
                >
                  →
                </button>
              </div>
            </div>
            <nav className="chapter-spine" aria-label="기수 선택">
              {generations.map((g, i) => (
                <button
                  key={g.id}
                  aria-pressed={selected === i}
                  onClick={() => setSelected(i)}
                >
                  <small>{g.label}</small>
                  <span>{g.teamName}</span>
                  <i />
                </button>
              ))}
            </nav>
          </div>
        </section>
      </main>
    </div>
  );
}
