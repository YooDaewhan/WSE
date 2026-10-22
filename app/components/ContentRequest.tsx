"use client";
import { useRef, useState } from "react";
import "./content-request.css";

export default function ContentRequest() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [sent, setSent] = useState(false);
  const today = new Date().toLocaleDateString("ko-KR");

  return (
    <>
      <button
        className="req-open"
        onClick={() => {
          // 제출한 신청서만 비우고, 쓰다 닫은 건 그대로 둔다
          if (sent) dialog.current?.querySelector("form")?.reset();
          setSent(false);
          dialog.current?.showModal();
        }}
      >
        📝 콘텐츠 신청서 쓰기<span>사장님 결재 필요</span>
      </button>

      <dialog
        ref={dialog}
        className="req-dialog"
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
      >
        <form
          className="req-paper"
          onSubmit={(e) => {
            e.preventDefault();
            // ponytail: no backend yet, wire to the API here when it exists
            setSent(true);
          }}
        >
          <button type="button" className="req-close" aria-label="닫기" onClick={() => dialog.current?.close()}>✕</button>

          <header className="req-head">
            <div>
              <small>WSE 비공식 양식 제 4호</small>
              <h2>콘텐츠 신청서</h2>
              <p>(사장님 보시라고 쓰는 거임)</p>
            </div>
            <table className="req-sign">
              <tbody>
                <tr><th>담당</th><th>팀장</th><th>사장</th></tr>
                <tr>
                  <td>{sent && <i>접수</i>}</td>
                  <td>{sent && <i>검토중</i>}</td>
                  <td>{sent && <i className="wait">?</i>}</td>
                </tr>
              </tbody>
            </table>
          </header>

          <fieldset disabled={sent}>
            <div className="req-row">
              <label>제목<input name="title" required placeholder="예) 공겜동 정기 합방: 불 끄고 3시간" /></label>
              <label>신청인<input name="name" required placeholder="이름 (가명 불가)" /></label>
            </div>
            <label>뭐 할 건데요<textarea name="body" required rows={4} placeholder="어떤 콘텐츠인지 사장님이 한 번에 알아듣게 적어주세요." /></label>
            <label>준비해 주세요<textarea name="prep" rows={2} placeholder="예) 쿠션 3개, 무서운 게임 1개, 용기" /></label>
            <div className="req-row">
              <label>예산
                <span className="req-money"><input name="budget" type="number" min={0} step={1000} placeholder="0" />원</span>
              </label>
              <label>희망 날짜<input name="date" type="date" /></label>
            </div>
            <label>기타 남기고 싶은 말<textarea name="memo" rows={2} placeholder="예) 사장님 오늘 머리 멋지세요" /></label>
            <label className="req-check"><input type="checkbox" required /> 예산이 깎여도 울지 않겠습니다.</label>
          </fieldset>

          <footer className="req-foot">
            <span>{today} · 위와 같이 신청합니다.</span>
            {sent ? <button type="button" onClick={() => dialog.current?.close()}>닫기</button> : <button type="submit">제출하기 ✉</button>}
          </footer>

          {sent && (
            <div className="req-stamp" role="status">
              접수 완료
              <small>사장님 결재 대기 중 (평균 3~5 영업년)</small>
            </div>
          )}
        </form>
      </dialog>
    </>
  );
}
