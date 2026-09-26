/* ──────────────────────────────────────────
   사원 — 프로필 서술 텍스트

   이 파일은 이 페이지 전용입니다.
   여기 있는 글만 고치면 이 페이지의 문구만 바뀝니다.
────────────────────────────────────────── */

export type LoreItem = { emoji: string; title: string; body: string };

export type ProfileContent = {
  quote: string;
  lines: string[];
  shortBio: string;
  partnerDesc: string;
  birthplaceDesc: string;
  partnerLore: LoreItem[];
  birthplaceLore: LoreItem[];
  fullBio: string;
  hiddenStory: string;
};

export const content: ProfileContent = {
  quote: "묵묵히 실무를 돌리는 조직의 심장.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/sawon.png, sawon-2.png, sawon-3.png, sawon-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "묵묵히 실무를 돌리는 조직의 심장.",
    "묵묵히 실무를 돌리는 조직의 심장.",
    "묵묵히 실무를 돌리는 조직의 심장.",
    "묵묵히 실무를 돌리는 조직의 심장.",
  ],
  shortBio: "보이지 않는 곳에서 시스템을 유지하는 실무의 달인.",
  partnerDesc: "사원 곁에서 꾸준히 조직이라는 댐을 쌓는 성실파.",
  birthplaceDesc: "평범한 도시에서 평범하지 않은 성실함을 키웠다. 매일 같은 시간에 출근하는 것의 힘을 안다.",

  /* 파트너 설정 — 그림/이름 클릭 시 뜨는 팝업. 자유롭게 고치고 늘리세요 */
  partnerLore: [
    { emoji: "✨", title: "설정 1", body: "내용을 채워주세요." },
    { emoji: "✨", title: "설정 2", body: "내용을 채워주세요." },
    { emoji: "✨", title: "설정 3", body: "내용을 채워주세요." },
  ],

  /* 출생지 설정 — 그림/이름 클릭 시 뜨는 팝업. 자유롭게 고치고 늘리세요 */
  birthplaceLore: [
    { emoji: "📍", title: "설정 1", body: "내용을 채워주세요." },
    { emoji: "📍", title: "설정 2", body: "내용을 채워주세요." },
    { emoji: "📍", title: "설정 3", body: "내용을 채워주세요." },
  ],
  fullBio: "사원은 조직의 실질적인 엔진이다. 화려한 타이틀은 없지만 모든 실무가 그의 손을 거친다. 시스템이 멈추지 않는 이유, 프로젝트가 마감에 맞춰지는 이유, 그 뒤에는 항상 사원이 있다. 7기의 묵묵한 심장.",
  hiddenStory: "사원은 퇴사를 꿈꾼다. 매일. 출근하면서도, 일하면서도, 퇴근하면서도. 하지만 다음 날 또 출근한다. 이유를 생각해보면 — 의무도 아니고, 돈도 아니고, 어쩌면 여기 없으면 어딜 가야 할지 모르기 때문인 것 같다. 시스템이 자신 없이 멈출까 봐 두려운 건지, 아니면 시스템 없이 자신이 멈출까 봐 두려운 건지. 사원은 아직 그 질문에 답하지 못했다.",
};
