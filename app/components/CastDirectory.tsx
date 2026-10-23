"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { cast, generations, credit } from "../data/cast";
import { chapters } from "../data/chapters";
import { directions } from "../data/art-direction";
import Header from "./Header";
import Footer from "./Footer";
import { useExperience } from "./Experience";
import "../chapters.css";
import "../magazine.css";

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
  const [open, setOpen] = useState(0);
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
  return (
    <div className="wse-site">
      <Header />
      <main id="main" className="rack">
        <div className="rack-head">
          <h1>
            The Cast<em>등장인물</em>
          </h1>
          <p>
            사람을 만나기 전에, 그들이 살아가는 세계부터.
            <small>{generations.length} ISSUES · {cast.length} PEOPLE</small>
          </p>
        </div>
        <div className="rack-shelf">
          {generations.map((g, i) => {
            const chapter = chapters[i];
            const [lead, ...rest] = cast.filter((c) => c.group === g.id && c.image);
            return (
              <Link
                key={g.id}
                href={g.href}
                className={`rack-issue${open === i ? " is-open" : ""}`}
                style={{ "--accent": chapter.color, "--tone": chapter.shade } as CSSProperties}
                onMouseEnter={() => setOpen(i)}
                onFocus={() => setOpen(i)}
              >
                {lead && (
                  <Image className="rack-art" src={lead.image!} width={720} height={1080} sizes="(max-width: 800px) 50vw, 30vw" alt="" priority />
                )}
                <span className="rack-top">
                  <span className="rack-logo">WSE</span>
                  <small>No.{String(g.id).padStart(2, "0")}</small>
                </span>
                <span className="rack-copy">
                  <small>{g.label} · {chapter.english}</small>
                  <strong>{g.teamName}</strong>
                  <em>{chapter.story.tagline}</em>
                  <span className="rack-more">
                    <span className="rack-desc">{chapter.story.description}</span>
                    {rest.length > 0 && (
                      <span className="rack-faces" aria-hidden="true">
                        {rest.slice(0, 4).map((c) => (
                          <Image key={c.slug} src={c.image!} width={96} height={144} sizes="48px" alt="" />
                        ))}
                      </span>
                    )}
                    <span className="rack-go">이 호 펼치기 ↗</span>
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
