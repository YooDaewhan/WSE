"use client";
import { Fragment, useEffect, useRef, useState } from "react";

/* 개인화면 왼쪽 포스트잇 — 연두 치지직 · 파랑 X · 분홍 유튜브 · 노랑 INFO(팝업)
   content.ts 의 info 에 내용을 채우세요. 링크를 비워 두면 "준비 중" 으로 보입니다. */
export type ProfileInfo = {
  links: { chzzk: string; x: string; youtube: string };
  debut: string;
  profile: [string, string][];
  contract: { fee: string; status: string };
  schedule: [string, string][];
  notices: string[];
};

/* 정산 비율은 모든 멤버 공통 */
const split: [string, string][] = [["후원", "5 : 5"], ["굿즈", "8 : 2"], ["광고", "7 : 3"]];

export default function StickyNotes({ info, name }: { info: ProfileInfo; name: string }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  const notes = [
    ["chzzk", "CHZZK", "치지직", info.links.chzzk],
    ["x", "X", "트위터", info.links.x],
    ["youtube", "YOUTUBE", "유튜브", info.links.youtube],
  ];

  return (
    <>
      <nav className="sticky-notes" aria-label={`${name} 채널`}>
        {notes.map(([key, label, ko, href]) =>
          href ? (
            <a key={key} className={`sticky-note sn-${key}`} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} ${ko} (새 창)`}>{label}</a>
          ) : (
            <span key={key} className={`sticky-note sn-${key} sn-off`} title="준비 중">{label}<small>준비 중</small></span>
          )
        )}
        <button className="sticky-note sn-info" onClick={() => setOpen(true)} aria-haspopup="dialog">INFO</button>
      </nav>
      <dialog ref={dialog} className="sn-dialog" onClose={() => setOpen(false)} onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
        <div className="sn-paper">
          <span className="sn-kicker">MEMBER INFO · {name}</span>
          <h3>{name}</h3>
          <dl className="sn-grid">
            <dt>데뷔일</dt><dd>{info.debut}</dd>
            {info.profile.map(([k, v]) => <Fragment key={k}><dt>{k}</dt><dd>{v}</dd></Fragment>)}
          </dl>
          <h4>계약</h4>
          <dl className="sn-grid">
            <dt>계약금</dt><dd>{info.contract.fee}</dd>
            <dt>계약 상황</dt><dd>{info.contract.status}</dd>
          </dl>
          <h4>정산 비율</h4>
          <ul className="sn-split">{split.map(([k, v]) => <li key={k}><span>{k}</span><b>{v}</b></li>)}</ul>
          <h4>주간 방송 계획</h4>
          <ul className="sn-week">{info.schedule.map(([d, p]) => <li key={d}><span>{d}</span>{p}</li>)}</ul>
          <h4>공지사항</h4>
          <ul className="sn-notices">{info.notices.map((n) => <li key={n}>{n}</li>)}</ul>
          <button className="sn-close" onClick={() => setOpen(false)} aria-label="닫기">✕</button>
        </div>
      </dialog>
    </>
  );
}
