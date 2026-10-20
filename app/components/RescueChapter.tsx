"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cast, credit } from "../data/cast";
import { directions } from "../data/art-direction";
import { content } from "../services/generation4/content";
import Header from "./Header";
import Footer from "./Footer";
import "../rescue.css";

const members = cast.filter((member) => member.group === 4);
export const RescueLogo = () => <Image className="rs-logo" src="/images/rescuepack/rescue-pack-logo-1.webp" alt="RESCUE PACK 레스큐팩" width={1200} height={480} sizes="(max-width: 900px) 84vw, 520px" />;
/* 대원증 장비 — 헬다이버 소방관, 앵커 심해 잠수사, 페인킬러 구급대원 */
const gear: Record<string, { unit: string; code: string; label: string; value: string }> = {
  helldiver: { unit: "FIRE RESCUE · ENGINE 03", code: "HD-01", label: "HEAT", value: "1,100°C" },
  anchor: { unit: "DEEP SEA DIVE UNIT", code: "NAUTILUS", label: "DEPTH", value: "−1,000 m" },
  painkiller: { unit: "EMERGENCY MEDICAL", code: "EMS-03", label: "PULSE", value: "72 BPM" },
};
export const callsigns: Record<string, string> = { helldiver: "HELLDIVER", anchor: "ANCHOR", painkiller: "PAINKILLER" };

/* 표지판 픽토그램 (80×80 좌표, 굵은 선) */
const fall = <><circle cx="40" cy="60" r="7" className="f" /><path d="M40 52V30M40 44 26 54M40 44l14 10M40 30 28 16M40 30l12-14" /><path d="M14 32V18M66 32V18" className="thin" /></>;
const Pictos = {
  fall,
  upside: <g transform="rotate(180 40 40)">{fall}</g>,
  dive: <><circle cx="40" cy="64" r="7" className="f" /><path d="M40 56V32M40 40 26 30M40 40l14-10M34 32l-6 18M46 32l6 18" /><path d="M40 4v16M32 12l8 8 8-8" /></>,
  scissors: <><circle cx="18" cy="26" r="8" /><circle cx="18" cy="54" r="8" /><path d="M24 30 66 50M24 50l42-20" /><path d="M66 40h8" className="thin" /></>,
  photo: <><rect x="14" y="10" width="52" height="60" rx="3" /><path d="M14 56h52" /><path d="M40 46c-9-6-13-10-13-15a6.5 6.5 0 0 1 13-2 6.5 6.5 0 0 1 13 2c0 5-4 9-13 15z" className="f" /></>,
  call: <><circle cx="20" cy="28" r="7" className="f" /><path d="M20 36v26M20 46l-9 9M20 46l9 9" /><path d="M36 18h36v22H52l-8 8v-8h-8z" /><path d="M46 29h2M53 29h2M60 29h2" /></>,
  alone: <><circle cx="40" cy="20" r="8" className="f" /><path d="M40 30v24M40 38l-12 10M40 38l12 10M40 54l-10 16M40 54l10 16" /></>,
  anchor: <><circle cx="40" cy="14" r="6" /><path d="M40 20v48M28 30h24M14 48c2 13 13 20 26 20s24-7 26-20M14 48l-5 6M14 48l7 3M66 48l5 6M66 48l-7 3" /></>,
  exit: <><path d="M50 10h18v60H50" /><circle cx="30" cy="16" r="7" className="f" /><path d="M30 24l-4 20 12 8v16M26 44 16 62M28 30l14 6M28 30 14 36" /></>,
};

type SignKind = "warn" | "ban" | "must" | "info";
/* x·y는 데스크톱에서 흩어놓는 오프셋, r은 기울기 */
const signs: { kind: SignKind; picto: React.ReactNode; label: string; en: string; r: number; y: number }[] = [
  { kind: "warn", picto: Pictos.fall, label: "추락주의", en: "CAUTION · FALLING", r: -4, y: 0 },
  { kind: "warn", picto: Pictos.dive, label: "강하주의", en: "INCOMING DIVER", r: 3, y: 40 },
  { kind: "warn", picto: Pictos.scissors, label: "기억주의", en: "MEMORY MAY BE CUT", r: -2, y: 10 },
  { kind: "must", picto: Pictos.call, label: "이름 3회 호출", en: "HELLDIVER ONLY", r: 5, y: 60 },
  { kind: "warn", picto: Pictos.photo, label: "추억주의", en: "CAUTION · NOSTALGIA", r: -6, y: 24 },
  { kind: "info", picto: Pictos.anchor, label: "닻 내림 구역", en: "ANCHOR ZONE", r: 2, y: -10 },
  { kind: "warn", picto: Pictos.upside, label: "뒤집힘주의", en: "WORLD UPSIDE DOWN", r: 7, y: 30 },
  { kind: "ban", picto: Pictos.alone, label: "혼자 버티기 금지", en: "NO SOLO ENDURING", r: -3, y: 0 },
  { kind: "info", picto: Pictos.exit, label: "비상구", en: "EXIT · 나가도 됩니다", r: 1, y: 50 },
];

function SignMark({ kind, children }: { kind: SignKind; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" className="rs-sign-mark" aria-hidden="true">
      {kind === "warn" && <path d="M50 7 95 88H5z" className="shape" />}
      {kind === "ban" && <circle cx="50" cy="50" r="43" className="shape" />}
      {kind === "must" && <circle cx="50" cy="50" r="46" className="shape" />}
      {kind === "info" && <rect x="4" y="4" width="92" height="92" rx="10" className="shape" />}
      <g className="picto" transform={kind === "warn" ? "translate(29 38) scale(.53)" : "translate(20 20) scale(.75)"}>{children}</g>
      {kind === "ban" && <path d="M20 20 80 80" className="slash" />}
    </svg>
  );
}

function useFlip(ref: React.RefObject<HTMLElement | null>) {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return setP(1);
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setP(Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - innerHeight))));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); cancelAnimationFrame(frame); };
  }, [ref]);
  return p;
}

export default function RescueChapter() {
  const heroRef = useRef<HTMLElement>(null);
  const p = useFlip(heroRef);
  const rescued = p > 0.97;
  const eased = p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2;

  return (
    <div className="wse-site rescue-site">
      <Header />
      <main id="main">
        <section className="rs-hero" ref={heroRef} aria-label="레스큐팩">
          <div className={`rs-sticky${rescued ? " is-safe" : ""}`} style={{ "--p": Math.min(1, Math.max(0, (p - 0.55) / 0.4)) } as React.CSSProperties}>
            <div className="rs-streaks" aria-hidden="true" />
            <div className="rs-bigword" aria-hidden="true"><span>FALLING</span><span>SAFE</span></div>
            <div className="rs-altimeter" aria-hidden="true">
              {[3000, 2500, 2000, 1500, 1000, 500, 0].map((h) => <i key={h}>{h}</i>)}
              <b style={{ top: `${p * 100}%` }}>{Math.round((1 - p) * 3000)}m</b>
            </div>
            <div className="rs-status" aria-live="polite">
              <span className={rescued ? "is-safe" : ""}>{rescued ? "● 구조 완료 — 이제 괜찮아요" : `● 낙하 중 · 고도 ${Math.round((1 - p) * 3000).toLocaleString()} m`}</span>
              <span>{rescued ? "SAFE / 3기" : "↓ 스크롤해서 바로 서기"}</span>
            </div>
            <div className="rs-card" style={{ transform: `rotate(${(1 - eased) * 180}deg) scale(${1 - 0.5 * Math.sin(Math.PI * eased)})` }}>
              <div className="rs-card-band"><span>SAFETY ON BOARD</span><span>WSE ORIGINAL · 3기</span><span>좌석 앞 주머니에 보관하세요</span></div>
              <div className="rs-card-main">
                <div className="rs-card-title">
                  <span className="rs-kicker">WHEN YOU CALL</span>
                  <h1>RESCUE<br />PACK</h1>
                  <p className="rs-tagline">레스큐팩 — {content.tagline}</p>
                  <p className="rs-desc">{content.description}</p>
                </div>
                <div className="rs-card-crew">
                  {members.map((m, i) => (
                    <figure key={m.slug} style={{ "--rs-accent": directions[m.slug].color } as React.CSSProperties}>
                      <span className="rs-fig-no">{i + 1}</span>
                      <Image src={m.image!} alt={m.name} width={600} height={900} sizes="(max-width: 900px) 30vw, 18vw" priority />
                      <figcaption>{m.name}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <div className="rs-card-foot"><span>PLEASE READ BEFORE YOU FALL</span><span>3 CREW · 24H STANDBY</span></div>
            </div>
            <p className={`rs-anchor-note${rescued ? " is-on" : ""}`}>“거꾸로 있는 건 내가 아니야. 네가 뒤집혀 있는 거야.” <small>— 앵커</small></p>
          </div>
        </section>

        <section className="rs-signs" aria-labelledby="rs-signs-title">
          {[
            "위기 구간 ✕ CRISIS ZONE ✕ 위기 구간 ✕ CRISIS ZONE ✕ 위기 구간 ✕ CRISIS ZONE ✕",
            "출입주의 — DO NOT FALL — 출입주의 — DO NOT FALL — 출입주의 — DO NOT FALL —",
            "RESCUE IN PROGRESS ✕ 구조 진행 중 ✕ RESCUE IN PROGRESS ✕ 구조 진행 중 ✕",
            "KEEP CALM — 곧 도착 — KEEP CALM — 곧 도착 — KEEP CALM — 곧 도착 —",
            "POLICE LINE ✕ 추락 위험 ✕ POLICE LINE ✕ 추락 위험 ✕ POLICE LINE ✕ 추락 위험 ✕",
            "CAUTION ✕ 주의 ✕ CAUTION ✕ 주의 ✕ CAUTION ✕ 주의 ✕ CAUTION ✕ 주의 ✕",
            "작업 중 — 구조대 외 출입금지 — 작업 중 — 구조대 외 출입금지 —",
            "DO NOT CROSS ✕ 그래도 건너오면 잡아줌 ✕ DO NOT CROSS ✕ 그래도 건너오면 잡아줌 ✕",
          ].map((text, i) => (
            <div className={`rs-tape rs-tape-${i + 1}`} aria-hidden="true" key={i}><div>{[0, 1].map((k) => <span key={k}>{text}&nbsp;{text}&nbsp;</span>)}</div></div>
          ))}
          <span className="rs-stencil" aria-hidden="true">DANGER</span>
          <span className="rs-hazard rs-hazard-top" aria-hidden="true" />
          <span className="rs-hazard rs-hazard-bottom" aria-hidden="true" />
          <div className="rs-section-head">
            <span className="rs-kicker">CAUTION ZONE</span>
            <h2 id="rs-signs-title">이 구역은 위험합니다.</h2>
            <p>{content.philosophy}</p>
          </div>
          <ul className="rs-sign-wall">
            {signs.slice(0, 5).map((s) => (
              <li key={s.label} className={`rs-sign rs-sign-${s.kind}`} style={{ "--r": `${s.r}deg`, "--y": `${s.y}px` } as React.CSSProperties}>
                <SignMark kind={s.kind}>{s.picto}</SignMark><b>{s.label}</b><small>{s.en}</small>
              </li>
            ))}
            <li className="rs-sign rs-depth" style={{ "--r": "-2deg", "--y": "-20px" } as React.CSSProperties}>
              <span className="rs-depth-scale" aria-hidden="true">{[800, 900, 1000, 1100].map((d) => <i key={d} className={d === 1000 ? "on" : ""}>{d}</i>)}</span>
              <b>수심 1000m</b><small>DEPTH · 앵커 상주</small>
            </li>
            {signs.slice(5).map((s) => (
              <li key={s.label} className={`rs-sign rs-sign-${s.kind}`} style={{ "--r": `${s.r}deg`, "--y": `${s.y}px` } as React.CSSProperties}>
                <SignMark kind={s.kind}>{s.picto}</SignMark><b>{s.label}</b><small>{s.en}</small>
              </li>
            ))}
          </ul>
          <p className="rs-footnote">※ 본 구조대는 당신을 가르치지 않습니다. 손만 내밉니다.</p>
        </section>

        <section className="rs-crew" aria-labelledby="rs-crew-title">
          <div className="rs-section-head"><RescueLogo /><span className="rs-kicker">RESCUE CREW</span><h2 id="rs-crew-title">오늘의 당번.</h2><p>셋 다 24시간 대기 중입니다. 사실 잠은 잡니다.</p></div>
          <div className="rs-crew-grid">
            {members.map((m) => {
              const d = directions[m.slug];
              return (
                <Link href={m.href} className={`rs-badge is-${m.slug}`} key={m.slug} style={{ "--rs-accent": d.color, "--rs-deep": d.secondary } as React.CSSProperties}>
                  <div className="rs-badge-top"><span>{gear[m.slug].unit}</span><span>{gear[m.slug].code}</span></div>
                  <div className="rs-badge-photo">
                    <Image src={m.image!} alt={m.name} width={600} height={900} sizes="(max-width: 900px) 90vw, 30vw" />
                    <span className="rs-gauge" aria-hidden="true"><small>{gear[m.slug].label}</small><b>{gear[m.slug].value}</b></span>
                  </div>
                  <div className="rs-badge-body">
                    <span className="rs-callsign">CALLSIGN · {callsigns[m.slug]}</span>
                    <h3>{m.name}<span className="real-name">{credit(m)}</span></h3>
                    <dl>
                      <div><dt>임무</dt><dd>{d.chapter}</dd></div>
                      <div><dt>출동지</dt><dd>{m.birthplace}</dd></div>
                      <div><dt>파트너</dt><dd>{m.partner.emoji} {m.partner.name}</dd></div>
                    </dl>
                    <p>“{m.content.quote}”</p>
                    <span className="rs-badge-cta">구조 요청 <span>↗</span></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <nav className="rs-exits" aria-label="기수 이동">
          <Link href="/services/generation2"><span className="rs-exit-sign">EXIT ←</span><small>처음부터 다시 · 스타터팩</small></Link>
          <blockquote>“{content.motto}”</blockquote>
          <Link href="/services/generation5"><span className="rs-exit-sign">→ EXIT</span><small>다음 이야기 · 이퀴녹스</small></Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
