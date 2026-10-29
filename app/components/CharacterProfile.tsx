"use client";
import Image from "next/image";
import { useState, type CSSProperties } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cast, credit } from "../data/cast";
import { directions } from "../data/art-direction";
import Header from "./Header";
import Footer from "./Footer";
import CharacterSignature from "./CharacterSignature";
import LoreCards from "./LoreCards";
import StickyNotes, { type ProfileInfo } from "./StickyNotes";
import { useExperience } from "./Experience";
import "../equinox.css";
import "../equinox-war.css";
import { EquinoxName, EquinoxTypeField } from "./EquinoxName";
import { equinoxFlip, equinoxSide } from "./EquinoxChapter";
import { StarterLogo, TypeField, no, starColors, types } from "./StarterChapter";
import { dawnFonts } from "./DawnChapter";
import { firstEpisode, heroesFonts } from "./HeroesChapter";
import { callsigns, gear } from "./RescueChapter";
import "../profiles.css";
const starters = cast.filter((m) => m.group === 2);
/* 그 밖의 기수 개인화면 — 챕터 페이지 컨셉을 이어받습니다 (스타일은 profiles.css) */
const teamKey: Record<number, string> = { 1: "dawn", 3: "heroes", 4: "rescue", 6: "stimpack", 7: "security" };
const teamNav: Record<string, string> = { dawn: "四幅 · 네 폭의 족자", heroes: "등장인물 소개", rescue: "LOCKER ROOM · 대원 사물함", stimpack: "NOW SHOWING · 상영작", security: "BODYGUARD TEAM · 경호팀" };
const teamFonts: Record<string, () => string> = { dawn: dawnFonts, heroes: heroesFonts };
export default function CharacterProfile({ slug }: { slug: string }) {
  const c = cast.find((c) => c.slug === slug)!;
  /* 개인 문장 — 4기 이퀴녹스, 1기 스타터팩, 3기 레스큐팩, 5기 스팀팩 */
  const mark = c.group === 1 ? `/images/saebyeokjo/${slug}-mark.png` : c.group === 5 ? `/images/equinox/${slug}-mark.png` : c.group === 2 ? `/images/starterpack/${slug}-mark.webp` : c.group === 4 ? `/images/rescuepack/${slug}-mark.png` : c.group === 6 ? `/images/stimpack/${slug}-mark.png` : null;
  const d = directions[slug];
  const { paused } = useExperience();
  const [pose, setPose] = useState(0);
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rx = useSpring(x, { stiffness: 70, damping: 20 }),
    ry = useSpring(y, { stiffness: 70, damping: 20 });
  const lines = [...new Set(c.content.lines)];
  const next = cast[(cast.indexOf(c) + 1) % cast.length];
  const clean = (s: string) => !/추후|내용을 채워|\(추가\)/.test(s);
  /* 설정 목록 — 그림이 하나라도 있으면 카드(LoreCards), 아니면 접는 목록 */
  const lore = (items: { emoji: string; title: string; body: string; image?: string | string[]; logo?: string }[], label: string) =>
    items.some((l) => l.image || l.logo)
      ? <LoreCards items={items.filter((l) => l.image || l.logo || clean(l.body))} label={label} stack={starter || c.group === 1} />
      : items.filter((l) => clean(l.body)).map((l) => <details key={l.title}><summary>{l.title}</summary><p>{l.body}</p></details>);
  /* 1기 스타터팩 — 포켓 도감 컨셉 */
  const starter = c.group === 2;
  /* 4기 이퀴녹스 — 천계(day)는 그림이 왼쪽, 마계(night)는 오른쪽. 서로의 거울입니다. */
  const side = c.group === 5 ? equinoxSide[slug] : null;
  const eqMembers = cast.filter((m) => m.group === 5).sort((a, b) => (equinoxSide[a.slug] === "day" ? 0 : 1) - (equinoxSide[b.slug] === "day" ? 0 : 1));
  const dexNo = no(starters.indexOf(c));
  const team = teamKey[c.group];
  const rescue = team === "rescue";
  const crew = cast.filter((m) => m.group === c.group);
  const reel = String(crew.indexOf(c) + 1).padStart(2, "0");
  const badge = team && ({ dawn: `零 · 第${reel}幅 — 새벽조`, heroes: `제1화 · ${firstEpisode[slug]?.job}`, rescue: `CALLSIGN · ${callsigns[slug]}`, stimpack: `REEL ${reel} · SILENT FILM`, security: `♥ ${c.role.toUpperCase()} · VALENTINE GUARD` } as Record<string, string>)[team];
  const stamp = team && ({ dawn: d.motif, heroes: "역전!", security: "♥" } as Record<string, string>)[team];
  return (
    <div
      className={`wse-site profile theme-${d.effect} character-${slug}${side ? ` equinox-profile eq-${side}` : ""}${starter ? " starter-site starter-profile" : ""}${team ? ` team-profile tp-${team} ${teamFonts[team]?.() ?? ""}` : ""}`}
      style={{ "--accent": d.color, "--tone": d.secondary, "--sp-accent": d.color, "--sp-star": starColors[slug] } as CSSProperties}
    >
      <Header />
      {"info" in c.content && <StickyNotes info={c.content.info as ProfileInfo} name={c.name} />}
      <main id="main">
        <section
          className="profile-stage"
          onPointerMove={(e) => {
            if (paused || e.pointerType === "touch") return;
            const r = e.currentTarget.getBoundingClientRect();
            x.set((e.clientX - r.left - r.width / 2) / 45);
            y.set((e.clientY - r.top - r.height / 2) / 55);
          }}
          onPointerLeave={() => {
            x.set(0);
            y.set(0);
          }}
        >
          <div className="profile-topline">
            <Link href={`/services/generation${c.group}`}>↖ {c.teamName}</Link>
            <span>
              {c.generation} / {c.role.toUpperCase()}
            </span>
          </div>
          {c.group === 5 && <EquinoxTypeField slug={slug} korean={c.name} />}
          {starter && <TypeField slug={slug} korean={c.name} />}
          <div className="world-effects" aria-hidden="true">
            <div className="world-ring" />
            <div className="world-ring ring-two" />
            {Array.from({ length: 12 }, (_, i) => (
              <i key={i} style={{ "--i": i } as CSSProperties} />
            ))}
            <span className="world-motif">{d.motif}</span>
          </div>
          <div className="profile-copy">
            {c.group === 5 && <Link className="eq-profile-identity" href="/services/generation5" aria-label="이퀴녹스 이야기로"><span className="eq-profile-seal"><Image src={`/images/equinox/${slug}-mark.png`} alt={`${c.name}의 문장`} width={76} height={76} /></span><span>{side === "day" ? <>EQUINOX · 天 천계<br />낮을 선물한 천사</> : <>EQUINOX · 魔 마계<br />밤을 선물한 악마</>}</span></Link>}
            {starter && <span className="sp-profile-dex"><span className="sp-kicker">WSE POCKET DEX · {dexNo}</span><span className="sp-type">{types[slug]} 타입</span></span>}
            {team && <span className="tp-badge">{badge}</span>}
            <span className="eyebrow">{d.chapter}</span>
            {c.group === 5 && <EquinoxName slug={slug} />}
            <h1>
              {c.name.replace("(미정)", "")}<span className="real-name">{credit(c)}</span>
              <small>
                {c.name.includes("(미정)")
                  ? "NAME IN DEVELOPMENT"
                  : c.role.toUpperCase()}
              </small>
            </h1>
            <h2>
              {d.title}
              <br />
              {d.subtitle}
            </h2>
            <div className="profile-dialogue" aria-live="polite">
              {starter && <span className="sp-speaker">{c.name}</span>}
              {starter && <span className="sp-caret" aria-hidden="true">▼</span>}
              <AnimatePresence mode="wait">
                <motion.p
                  key={pose}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  “{lines[pose % lines.length]}”
                </motion.p>
              </AnimatePresence>
            </div>
            <button
              className="pill-button"
              onClick={() => setPose((v) => v + 1)}
            >
              {d.action}
              <span>✦</span>
            </button>
            <span className="interaction-count">
              {String(pose + 1).padStart(2, "0")} / MOMENTS WITH YOU
            </span>
            <CharacterSignature slug={slug} moment={pose} />
          </div>
          <motion.div
            className="profile-visual"
            style={{ x: paused ? 0 : rx, y: paused ? 0 : ry, cursor: "pointer" }}
            onClick={(e) => !(e.target as Element).closest("a") && setPose((v) => v + 1)}
          >
            <div className="portrait-frame" />
            {stamp && <span className="tp-stamp" aria-hidden="true">{stamp}</span>}
            {starter && <Link className="sp-frame-logo" href="/services/generation2" aria-label="스타터팩 이야기로"><StarterLogo slug={slug} /></Link>}
            {starter && <div className="sp-profile-bar" aria-hidden="true"><span>{dexNo}</span><span>{c.role.toUpperCase()}</span></div>}
            {mark && <div className="eq-personal-crest" aria-hidden="true"><Image src={mark} width={180} height={180} alt="" /><span>{c.birthplace} / {c.role.toUpperCase()}</span></div>}
            <AnimatePresence mode="wait">
              <motion.div
                className="portrait-wrap"
                key={pose}
                initial={{
                  opacity: 0,
                  scale: 0.97,
                  y: d.effect === "dive" ? -90 : 12,
                  rotate: d.effect === "tide" ? 4 : 0,
                }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
              >
                {c.image ? (
                  <Image
                    width={1080}
                    height={1620}
                    sizes="(max-width: 700px) 90vw, 51vw"
                    className={`profile-portrait${equinoxFlip.includes(slug) && !(pose % 2 && c.alternate) ? " eq-flip" : ""}`}
                    src={(pose % 2 ? c.alternate : c.image) || c.image}
                    alt={c.name}
                    fetchPriority="high"
                  />
                ) : (
                  <div className="profile-pending">
                    {d.motif}
                    <small>캐릭터 비주얼 준비 중</small>
                  </div>
                )}
                {pose > 0 && (
                  <span className="interaction-flash" aria-hidden="true">
                    {d.motif}
                  </span>
                )}
              </motion.div>
            </AnimatePresence>
            <span className="portrait-index">
              WSE — {String(cast.indexOf(c) + 1).padStart(2, "0")}
              <br />
              {c.teamName}
            </span>
            {team === "rescue" && <><span className="tp-fx" aria-hidden="true" /><span className="tp-gauge" aria-hidden="true"><small>{gear[slug].label}</small><b>{gear[slug].value}</b></span></>}
          </motion.div>
          <a className="profile-scroll" href="#story">
            SCROLL TO DISCOVER <span>↓</span>
          </a>
        </section>
        {c.group === 5 && <nav className="eq-personal-nav" aria-label="이퀴녹스 캐릭터"><span>天 · VS · 魔<br /><strong>다른 마음을 만나보세요.</strong></span>{eqMembers.map(member => <Link href={member.href} key={member.slug} className={`eq-${equinoxSide[member.slug]}`} aria-current={member.slug === slug ? "page" : undefined}><span className="eq-seal"><Image src={`/images/equinox/${member.slug}-mark.png`} width={64} height={64} alt="" /></span><span>{member.name}<small>{member.role.toUpperCase()}</small></span><span aria-hidden="true">↗</span></Link>)}</nav>}
        {starter && <nav className="sp-profile-nav" aria-label="스타터팩 캐릭터"><span>CHOOSE YOUR STARTER<br /><strong>다른 스타터도 만나보세요.</strong></span>{starters.map((m, i) => <Link href={m.href} key={m.slug} className="sp-cart" aria-current={m.slug === slug ? "page" : undefined} style={{ "--sp-accent": directions[m.slug].color } as CSSProperties}><span className="sp-cart-label"><Image src={m.image!} alt="" width={200} height={300} sizes="120px" /><small>{no(i)}</small></span><span className="sp-cart-name"><b>{m.name}</b><small>{m.role.toUpperCase()} VER.</small></span></Link>)}</nav>}
        {team && <nav className="tp-nav" aria-label={`${c.teamName} 캐릭터`}><span>{teamNav[team]}<br /><strong>다른 멤버도 만나보세요.</strong></span>{crew.map((m) => <Link href={m.href} key={m.slug} aria-current={m.slug === slug ? "page" : undefined} style={{ "--accent": directions[m.slug].color } as CSSProperties}><span className="tp-nav-art">{m.image ? <Image src={m.image} alt="" width={200} height={300} sizes="96px" /> : <span aria-hidden="true">{m.emoji}</span>}</span><span><b>{m.name.replace("(미정)", "")}</b><small>{m.role.toUpperCase()}</small></span></Link>)}</nav>}
        <section id="story" className="profile-story section-shell">
          {rescue && <div className="tp-locker-top" aria-hidden="true"><span className="tp-vents" /><b>LOCKER 3{reel}</b><span>{callsigns[slug]}</span></div>}
          <div>
            {mark && <div className="eq-story-crest"><Image src={mark} width={160} height={160} alt={`${c.name}의 문장`} /><span>PERSONAL ARCHIVE<br />{({ 1: "SAEBYEOKJO", 2: "STARTER PACK", 4: "RESCUE PACK", 5: "EQUINOX", 6: "STIMPACK" } as Record<number, string>)[c.group]} / {c.role.toUpperCase()}</span></div>}
            <span className="eyebrow">{rescue ? `01 / LOCKER 3${reel} · 개인 사물함` : "01 / BEHIND THE NAME"}</span>
            <h2>
              {d.title}
              <br />
              <em>{d.subtitle}</em>
            </h2>
            {rescue && <div className="tp-dogtag" aria-hidden="true"><i /><div><b>{callsigns[slug]}</b><span>{c.name} · {c.role.toUpperCase()}</span><span>{gear[slug].unit}</span><span>ORIGIN {c.birthplace}</span><span>WSE-03-{reel}</span></div></div>}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="story-lead">
              {clean(c.content.shortBio) ? c.content.shortBio : d.subtitle}
            </p>
            <p>{c.content.fullBio}</p>
          </motion.div>
        </section>
        <section className="world-notes section-shell">
          <span className="eyebrow">{rescue ? "02 / GEAR LIST · 장비 목록" : "02 / PIECES OF THEIR WORLD"}</span>
          <div className="notes-grid">
            <article>
              <span>ORIGIN ↗</span>
              <h2>{c.birthplace}</h2>
              <p>{c.content.birthplaceDesc}</p>
              {lore(c.content.birthplaceLore, "ORIGIN")}
            </article>
            <article>
              <span>COMPANION ↗</span>
              <h2>
                {c.partner.name} <small>{c.partner.animal}</small>
              </h2>
              <p>
                {clean(c.content.partnerDesc)
                  ? c.content.partnerDesc
                  : "아직 밝혀지지 않은 이야기입니다."}
              </p>
              {lore(c.content.partnerLore, "COMPANION")}
            </article>
          </div>
        </section>
        <section className="next-character">
          <span className="eyebrow">{rescue ? "NEXT LOCKER · 옆 사물함" : "ANOTHER WORLD AWAITS"}</span>
          <Link href={next.href}>
            <span>
              {rescue ? "다음 사물함," : "다음 만남,"}
              <br />
              <strong>{next.name.replace("(미정)", "")}</strong>
            </span>
            <span>↗</span>
          </Link>
          <Link className="text-link" href="/services">
            모든 CAST 보기 →
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
