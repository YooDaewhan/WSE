"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { cast, generations } from "../data/cast";
import { directions } from "../data/art-direction";
import { chzzk, demo } from "../data/channels";

const plain = (name: string) => name.replace("(미정)", "");
const label = Object.fromEntries(generations.map((g) => [g.id, `${g.label} ${g.teamName}`]));
const members = cast.filter((m) => m.image);
const pad = (n: number) => String(n).padStart(2, "0");
/* 빈 칸은 컬러바(STANDBY)로 채워 8열 벽을 맞춥니다. (8의 배수면 6열·3열에서도 대체로 딱 맞음) */
const fillers = (8 - (members.length % 8)) % 8;

/* MASTER CONTROL — 송출 모니터 월. 멤버 한 명 = 채널 하나.
   방송 중이면 화면이 켜지고 REC가 깜빡이고, 아니면 지지직 + NO SIGNAL. */
export default function OfficeTower() {
  const [live, setLive] = useState<string[]>([]);
  const [clock, setClock] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (demo) return setLive(generations.flatMap((g) => members.filter((m) => m.group === g.id).slice(0, -1).map((m) => m.slug)));
    if (!Object.keys(chzzk).length) return;
    const load = () =>
      fetch("/api/live")
        .then((r) => r.json())
        .then(setLive)
        .catch(() => {});
    load();
    const t = setInterval(load, 60_000);
    return () => clearInterval(t);
  }, []);
  const onAir = members.filter((m) => live.includes(m.slug)).length;
  /* 방송 중인 채널이 앞으로 (안에서는 기수 순서 유지). 채널 번호는 멤버마다 고정. */
  const wall = members.map((m, i) => ({ m, ch: i + 1, on: live.includes(m.slug) })).sort((a, b) => +b.on - +a.on);
  return (
    <div className="mcr">
      <header className="mcr-bar">
        <span>
          MASTER CONTROL <i>· WSE</i>
        </span>
        <time>{clock}</time>
        <p>
          <b>{onAir}</b>
          <small>
            / {members.length}
            <br />
            CH LIVE
          </small>
        </p>
      </header>
      <ul className="mcr-wall">
        {wall.map(({ m, ch: no, on }) => {
          const ch = on && chzzk[m.slug];
          return (
            <li key={m.slug} data-live={on || undefined} style={{ "--accent": directions[m.slug]?.color } as CSSProperties}>
              <Link href={ch ? `https://chzzk.naver.com/live/${ch}` : m.href} {...(ch ? { target: "_blank", rel: "noreferrer" } : {})}>
                <Image src={m.image!} alt="" width={240} height={360} sizes="(max-width: 800px) 33vw, 160px" />
                <span className="mcr-ch">CH{pad(no)}</span>
                {on ? <span className="mcr-rec">● REC</span> : <span className="mcr-nosig">NO SIGNAL</span>}
                <span className="mcr-name">
                  <strong>{plain(m.name)}</strong>
                  <small>{label[m.group]}</small>
                </span>
              </Link>
            </li>
          );
        })}
        {Array.from({ length: fillers }, (_, i) => (
          <li key={i} className="mcr-bars" aria-hidden>
            <span>STANDBY</span>
          </li>
        ))}
      </ul>
      <footer className="mcr-foot">
        <span>
          <i className="mcr-dot" /> ON AIR <i className="mcr-dot mcr-dot-off" /> OFF AIR
        </span>
        <Link className="text-link" href="/live">
          LIVE ↗
        </Link>
      </footer>
    </div>
  );
}
