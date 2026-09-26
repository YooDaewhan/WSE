/* ──────────────────────────────────────────
   딸배(미정) — 프로필 서술 텍스트

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
  quote: "자유로운 영혼. 틀에 얽매이지 않는 반항아.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/ddalbae.png, ddalbae-2.png, ddalbae-3.png, ddalbae-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "자유로운 영혼. 틀에 얽매이지 않는 반항아.",
    "자유로운 영혼. 틀에 얽매이지 않는 반항아.",
    "자유로운 영혼. 틀에 얽매이지 않는 반항아.",
    "자유로운 영혼. 틀에 얽매이지 않는 반항아.",
  ],
  shortBio: "세상의 규칙에 얽매이지 않는 자유로운 영혼.",
  partnerDesc: "딸배 뒤에 붙어 도로 위를 함께 가르는 자유로운 동행.",
  birthplaceDesc: "바람과 바다의 섬에서 태어나 누구의 간섭도 받지 않는 자유로운 기질을 가지게 되었다.",

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
  fullBio: "딸배는 어떤 틀에도 갇히지 않는다. 그의 자유분방함은 단순한 반항이 아니라, 기존의 방식으로는 풀 수 없는 문제를 해결하는 열쇠가 된다. 3기의 자유 정신을 대표하는 인물.",
  hiddenStory: "딸배는 사실 규칙을 지키고 싶었다. 누구보다 간절하게. 하지만 규칙을 지킬 자격이 있는 사람들의 세계에 자신은 없다고 느꼈고, 그렇다면 규칙 밖에 있는 게 낫겠다고 생각했다. 자유는 선택이 아니라 배제에서 시작된 것이다. 가끔 딸배는 아무도 없는 새벽에 신호등 앞에 멈춰 초록불이 켜질 때까지 기다린다. 이유를 묻지 말 것.",
};
