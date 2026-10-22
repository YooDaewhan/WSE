import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./org.css";

type Stat = [string, number];

const protocol: { n: string; badge: string; role: string; group: string; motto: string; stats: Stat[]; perks: string[]; color: string; dark?: boolean }[] = [
  {
    n: "01", badge: "👑", role: "대표", group: "#사장", color: "#ffd84d",
    motto: "\"편하게 해~\" (편하게 하면 안 됨)",
    stats: [["권력", 99], ["에어컨 리모컨 장악력", 100], ["단톡방 읽씹률", 72]],
    perks: ["#결재권_독점", "#법인카드_소유", "#회의실_상석", "#금요일5시_회의소집권"],
  },
  {
    n: "02", badge: "💎", role: "전속 크리에이터", group: "#전속계약", color: "#ff8fb1",
    motto: "\"저 오늘 방송 3시간만 할게요\" (6시간 함)",
    stats: [["방송 시간", 96], ["매니저 호출 횟수", 110], ["수면 시간", 12]],
    perks: ["#굿즈_50%할인", "#외부행사_의전차량", "#매니저_대행(김일)", "#생일카페_회사부담"],
  },
  {
    n: "03", badge: "🤝", role: "파트너 크리에이터", group: "#파트너계약", color: "#7fd8be",
    motto: "\"저 사실 반쯤 프리랜서예요\"",
    stats: [["자유도", 88], ["합방 출석률", 64], ["소속감", 50]],
    perks: ["#굿즈_30%할인", "#행사_우선초청", "#합방_우선배정", "#탕비실_출입가능"],
  },
  {
    n: "04", badge: "🐜", role: "직원", group: "#직원", color: "#8fb8ff",
    motto: "\"넵\" \"넵!\" \"넵넵\" \"넵 ㅎㅎ\"",
    stats: [["실제 업무량", 100], ["탕비실 간식 점유율", 97], ["의전서열", 4]],
    perks: ["#굿즈_우선구입", "#할인은_없음", "#행사_스태프로_참석", "#야근_무제한"],
  },
  {
    n: "05", badge: "🚫", role: "블랙리스트", group: "#안티팬 #사이버렉카", color: "#2b2238", dark: true,
    motto: "\"이번 건 제가 단독으로 터뜨립니다\" … 그 단독, 사실 저희가 드린 겁니다.",
    stats: [["가십 생산량", 100], ["조회수 욕심", 99], ["전향 가능성", 63]],
    perks: ["#행사_참여금지", "#굿즈_구매배제", "#사건_터지면_정보_선공개", "#단독_기사거리_제공", "#안팔린_굿즈재고_무상지급", "#명절선물_보냄", "#사실상_우리편"],
  },
];

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
          <h2 className="org-section-title"><b>PART 1</b> 의전서열 <small>※ 단톡방 답장 속도와는 무관함</small></h2>
          <div className="org-cards">
            {protocol.map((p) => (
              <article key={p.n} className={p.dark ? "org-black" : undefined} style={{ "--c": p.color } as React.CSSProperties}>
                <header>
                  <span className="org-rank">No.{p.n}</span>
                  <span className="org-badge">{p.badge}</span>
                </header>
                <h3>{p.role}</h3>
                <span className="org-group">{p.group}</span>
                <q>{p.motto}</q>
                <dl>
                  {p.stats.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd><i style={{ width: `${Math.min(v, 100)}%` }} /><b>{v}</b></dd>
                    </div>
                  ))}
                </dl>
                <ul className="org-perks">
                  {p.perks.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </article>
            ))}
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
