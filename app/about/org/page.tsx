import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./org.css";

// 서열은 직함이 아니라 예우의 순서. who[0] = 보통 그 서열에 계신 분
const rows: { n: number; color: string; who: string[]; perks: string[] }[] = [
  { n: 1, color: "#ffd84d", who: ["대표", "공동창업자", "VIP 게스트"], perks: ["#결재권_독점", "#법인카드_소유", "#에어컨_리모컨"] },
  { n: 2, color: "#ff8fb1", who: ["전속 크리에이터", "주요 협력사", "대표 지인"], perks: ["#굿즈_50%할인", "#의전차량", "#생일카페_회사부담"] },
  { n: 3, color: "#7fd8be", who: ["파트너 크리에이터", "게스트 출연자", "외부 스태프"], perks: ["#굿즈_30%할인", "#행사_우선초청", "#합방_우선배정"] },
  { n: 4, color: "#8fb8ff", who: ["직원", "매니저", "운영 지원팀", "인턴"], perks: ["#굿즈_우선구입", "#할인은_없음", "#야근_무제한"] },
];

// 단상 좌석: 청중이 보는 방향 왼쪽→오른쪽. 1 중앙, 2는 단상 기준 오른쪽(청중 기준 왼쪽), 3은 그 반대 순으로 교대
const dais = [6, 4, 2, 1, 3, 5, 7];

const outside = {
  who: ["안티팬", "사이버렉카", "악플러"],
  perks: ["#행사_참여금지", "#굿즈_구매배제", "#단독_기사거리_제공", "#안팔린_굿즈재고_무상지급", "#명절선물_보냄", "#사실상_우리편"],
};

const teams = [
  { en: "CONTENT", name: "콘텐츠 기획팀", color: "#ffb86b", quote: "그거 재밌는데? 그걸로 가자.", jobs: ["방송 · 이벤트 기획", "세계관 설정 관리"], secret: "회의 중 아무 말이 다음 달 공식 콘텐츠가 됨. 발언 조심." },
  { en: "OPERATION", name: "운영 지원팀", color: "#b49cff", quote: "그건… 운영 지원팀 일이 아닌데요… (결국 함)", jobs: ["일정 · 정산 · 장비", "모든 문의의 최종 도착지"], secret: "프린터와 대화가 통하는 유일한 부서. 프린터도 이들 말만 들음." },
  { en: "MANAGER", name: "매니저", color: "#6fd3ff", quote: "물 마셨어요? 밥 먹었어요? 잤어요?", jobs: ["크리에이터 1:1 케어", "방송 전 컨디션 체크"], secret: "사실상 부모님. 크리에이터 생일을 본인 생일보다 잘 기억함." },
];

const clubs = [
  { short: "공겜동", full: "공포게임동아리", color: "#2b2238", ink: "#ff5d73", members: "부원 4명 (1명은 항상 눈 감고 참여)", desc: "점프스케어 대비 쿠션 3개 상시 비치. 정기 모임은 금요일 밤, 불 끄고. 비명 소리 민원 누적 7건.", tear: "같이 무서워할 사람" },
  { short: "귀가부", full: "정시퇴근 연구회", color: "#ffe14d", ink: "#2b2238", members: "부원 수 비공개 (6시 01분엔 아무도 없음)", desc: "주요 활동: 5시 50분 가방 미리 싸기. 부장 얼굴 본 사람 없음. 늘 퇴근한 뒤라서.", tear: "지금 퇴근하실 분" },
  { short: "점메추위", full: "점심메뉴 추천위원회", color: "#ff8fb1", ink: "#2b2238", members: "상임위원 3명 · 결론 낸 적 0회", desc: "11시 30분 소집, 12시 10분 \"아무거나\"로 만장일치. 그리고 아무거나는 없음.", tear: "오늘 뭐 먹지" },
  { short: "야식TF", full: "야근 대응 특별팀", color: "#7fd8be", ink: "#2b2238", members: "야근 발생 시 자동 결성 · 자동 해산", desc: "야근보다 메뉴 고르는 시간이 더 길다는 내부 감사 결과 있음. 치킨파 vs 떡볶이파 내전 중.", tear: "반반 무 많이" },
  { short: "에분위", full: "에어컨 온도 분쟁조정위원회", color: "#8fb8ff", ink: "#2b2238", members: "추위파 2 · 더위파 2 · 중립 0", desc: "18도와 26도 사이에서 매일 교전. 대표의 리모컨이 유일한 평화유지군.", tear: "담요 빌려주실 분" },
  { short: "간식수호대", full: "탕비실 간식 보호 결사대", color: "#ffb86b", ink: "#2b2238", members: "대원 전원 (자기 간식 한정)", desc: "\"이름 적어둔 거 먹지 마세요\" 포스트잇 발행처. 범인은 아직 못 잡음.", tear: "제 초코파이 보신 분" },
];

const news = [
  "속보) 귀가부 부장, 오늘도 17:59:59 퇴근 성공",
  "공겜동 쿠션 1개 추가 구매… 법인카드는 거절됨",
  "점메추위 오늘 회의 결과: 아무거나",
  "에분위, 리모컨 소유권 두고 3주째 협상 결렬",
  "간식수호대 \"초코파이 실종 사건\" 미제로 남아",
  "대표 \"편하게 해~\" 발언에 크루 일동 긴장",
];

export default function Org() {
  return (
    <div className="wse-site">
      <Header />
      <main id="main" className="org-page">
        <div className="org-ticker" aria-hidden="true">
          <div>{[...news, ...news].map((t, i) => <span key={i}>★ {t}</span>)}</div>
        </div>

        <section className="section-shell org-hero">
          <span className="eyebrow">ABOUT WSE / ORGANIZATION CHART v4.0 (최종_진짜최종)</span>
          <h1>
            누가 누구<span className="org-wiggle">냐</span>면요<span className="org-sparkle">✦</span>
          </h1>
          <p>
            WSE의 <mark className="m-yellow">공식</mark> 조직도입니다. 그리고 <mark className="m-pink">비공식</mark> 조직도도 몰래 실었습니다.
            <br />회사는 아직 모릅니다. 쉿.
          </p>
          <ul className="org-legend">
            <li><i className="l-solid" />결재 라인</li>
            <li><i className="l-dash" />친한 사이</li>
            <li><i className="l-zig" />냉전 중</li>
          </ul>
        </section>

        <section className="section-shell org-block">
          <h2 className="org-section-title"><b>PART 1</b> 의전서열 <small>※ 정부의전편람 형식을 참고했습니다. 서열은 직함이 아니라 예우의 순서입니다.</small></h2>
          <div className="org-doc">
            <div className="org-doc-head">
              <span>WSE 의전편람</span>
              <span>제1장 의전서열</span>
              <span>2026. 10. 시행</span>
            </div>
            <h3 className="org-doc-title">의전서열</h3>
            <p className="org-doc-lead">서열은 직함이 아닌 예우의 순서이며, 같은 서열에도 행사에 따라 다른 분이 계실 수 있다.</p>

            <table className="org-table">
              <thead>
                <tr><th>서열</th><th>주로 해당</th><th>그 밖의 해당</th><th>예우</th></tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.n} style={{ "--c": r.color } as React.CSSProperties}>
                    <td className="org-n">{r.n}</td>
                    <td><strong>{r.who[0]}</strong></td>
                    <td>{r.who.slice(1).join(" · ")}</td>
                    <td className="org-perk">{r.perks.map((p) => <span key={p}>{p}</span>)}</td>
                  </tr>
                ))}
                <tr className="org-out">
                  <td className="org-n">외</td>
                  <td><strong>출입 제한</strong></td>
                  <td>{outside.who.join(" · ")}</td>
                  <td className="org-perk">{outside.perks.map((p) => <span key={p}>{p}</span>)}</td>
                </tr>
              </tbody>
            </table>

            <figure className="org-dais">
              <figcaption>단상 좌석 배치</figcaption>
              <div className="org-dais-seats">
                {dais.map((n) => (
                  <span key={n} style={{ "--c": rows[Math.ceil((n - 1) / 2)].color } as React.CSSProperties}>{n}</span>
                ))}
              </div>
              <i>청 중 석</i>
              <p>최상위 서열이 중앙에 앉고, 다음 서열부터 단상에서 청중을 바라보아 오른쪽 · 왼쪽 순으로 번갈아 앉는다.</p>
            </figure>

            <div className="org-doc-sign">WSE 운영 지원팀 <b>인</b></div>
          </div>
        </section>

        <section className="section-shell org-block">
          <h2 className="org-section-title"><b>PART 2</b> 공식 조직 <small>※ 결재는 위로, 책임은 옆으로</small></h2>
          <div className="org-tree">
            <div className="org-root">WSE<small>본사 (라고 쓰고 사무실 한 층)</small></div>
            <div className="org-teams">
              {teams.map((t) => (
                <article key={t.en} style={{ "--c": t.color } as React.CSSProperties}>
                  <span className="org-bubble">{t.quote}</span>
                  <span className="eyebrow">{t.en}</span>
                  <h3>{t.name}</h3>
                  <ul>{t.jobs.map((j) => <li key={j}>{j}</li>)}</ul>
                  <p><b>비공식 업무</b>{t.secret}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="org-clubs-wrap">
          <div className="section-shell org-block">
            <h2 className="org-section-title"><b>PART 3</b> 지들끼리 만든 집단 <small>※ 결재 라인 없음 · 법인카드 불가 · 회사 공식 입장: &quot;그게 뭔데&quot;</small></h2>
            <div className="org-clubs">
              {clubs.map((c, i) => (
                <article key={c.short} style={{ "--c": c.color, "--ink": c.ink, "--r": `${(i % 3) - 1}deg` } as React.CSSProperties}>
                  <i className="org-pin" />
                  <i className="org-stamp">미승인</i>
                  <span className="org-recruit">부원 모집 (안 함)</span>
                  <h3>{c.short}</h3>
                  <span className="org-full">{c.full}</span>
                  <p>{c.desc}</p>
                  <small>{c.members}</small>
                  <div className="org-tear">
                    {Array.from({ length: 5 }, (_, k) => <span key={k}>{c.tear}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell org-outro">
          <p>이 조직도는 매주 바뀝니다. 점메추위는 매일 바뀝니다.<br />동아리 신설 문의는 받지 않습니다. 그래도 생깁니다.</p>
          <Link className="pill-button" href="/about">
            ABOUT으로 도망가기<span>↩</span>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
