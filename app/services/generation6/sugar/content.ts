/* ──────────────────────────────────────────
   슈거 — 프로필 서술 텍스트

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
  quote: "행복해지는 약.. 먹어볼래?",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/sugar.png, sugar-2.png, sugar-3.png, sugar-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "행복해지는 약.. 먹어볼래?",
    "행복해지는 약.. 먹어볼래?",
    "행복해지는 약.. 먹어볼래?",
    "행복해지는 약.. 먹어볼래?",
  ],
  shortBio: "달콤함으로 모든 것을 녹이는 존재. 한 번 맛보면 헤어나올 수 없다.",
  partnerDesc: "슈거가 건네는 달콤함을 가장 먼저 받아먹는 새하얀 동반자.",
  birthplaceDesc: "가장 달콤한 것들이 모이는 곳에서 태어났다. 그 달콤함이 독이 될 수 있다는 것도, 그곳에서 배웠다.",

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
  fullBio: "슈거는 스팀팩의 중심에 있는 존재다. 달콤함은 단순한 이미지가 아니라 전략이다. 사람들을 끌어당기고, 기분을 바꾸고, 세상을 조금 더 견딜 만하게 만드는 힘. 슈거는 그 힘을 가장 잘 다루는 사람이다. 행복해지는 약처럼 — 한 번 빠지면 쉽게 나오지 못한다.",
  hiddenStory: "슈거는 사실 단 것을 즐기지 않는다. 달콤한 것의 끝이 어떤지 너무 잘 알기 때문이다. 설탕이 녹고 나면 남는 건 텅 빈 단맛의 흔적뿐이라는 것. 그래서 슈거는 자신의 달콤함이 누군가를 망가뜨리지 않도록 항상 조심한다. 스스로를 약이라 부르지만, 그 약이 독이 되는 용량이 얼마인지 — 누구보다 정확하게 알고 있다. 달콤함을 나눠주는 사람의 가장 쓴 비밀이다.",
};
