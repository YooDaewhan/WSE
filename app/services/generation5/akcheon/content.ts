/* ──────────────────────────────────────────
   루시아(미정) — 프로필 서술 텍스트

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
  quote: "더 이상 무리해서 스스로를 태우지마.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/akcheon.png, akcheon-2.png, akcheon-3.png, akcheon-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "더 이상 무리해서 스스로를 태우지마.",
    "더 이상 무리해서 스스로를 태우지마.",
    "더 이상 무리해서 스스로를 태우지마.",
    "더 이상 무리해서 스스로를 태우지마.",
  ],
  shortBio: "타락천사. 루시퍼",
  partnerDesc: "추후추가",
  birthplaceDesc: "서해안의 거친 바람과 안개 속에서 악천후와 싸우며 자랐다. 나쁜 날씨는 그에게 일상이다.",

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
  fullBio: "악천은 폭풍 그 자체다. 모두가 피하는 최악의 상황 속으로 들어가 그 한가운데에서 답을 찾아낸다. 악조건이 그를 더 강하게 만들며, 팀이 가장 힘든 순간에 가장 믿음직한 존재가 된다.",
  hiddenStory: "악천은 폭풍을 두려워한다. 정확히는, 폭풍이 자신 안에서 온다는 걸 알기 때문에 두렵다. 외부의 폭풍은 다룰 수 있다. 하지만 내면에서 갑자기 몰아치는 검은 감정은 — 예보도 없고, 대피소도 없다. 악천후를 헤쳐나가는 사람이 정작 자신의 내부 기상 예보에는 속수무책이라는 아이러니. 폭풍의 눈은 고요하다. 그 고요 안에 갇혀있는 것이 진짜 폭풍보다 무섭다.",
};
