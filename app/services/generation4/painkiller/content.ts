/* ──────────────────────────────────────────
   페인킬러 — 프로필 서술 텍스트

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
  quote: "아픔을 치유하고 다시 일어서게 만드는 존재.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/painkiller.png, painkiller-2.png, painkiller-3.png, painkiller-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "아픔을 치유하고 다시 일어서게 만드는 존재.",
    "아픔을 치유하고 다시 일어서게 만드는 존재.",
    "아픔을 치유하고 다시 일어서게 만드는 존재.",
    "아픔을 치유하고 다시 일어서게 만드는 존재.",
  ],
  shortBio: "아픔을 잊게해줍니다.",
  partnerDesc: "페인킬러의 손끝에서 먼저 위로받는 작은 치유자.",
  birthplaceDesc: "맛과 정이 넘치는 도시에서 자라며 사람의 마음을 어루만지는 따뜻함을 배웠다.",

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
  fullBio: "페인킬러는 레스큐팩의 치유자다. 강함은 싸우는 것만이 아니라 다시 일어서는 것이라는 걸 몸소 보여주는 인물. 4기의 따뜻한 심장.",
  hiddenStory: "페인킬러는 자신의 아픔을 치료하지 않는다. 남의 상처를 매일 어루만지면서, 정작 자신의 것은 오래된 채로 놔두었다. 어떤 상처인지는 본인도 잘 모른다 — 너무 오래 방치해서 감각이 없어진 것이다. 약을 가장 잘 아는 사람이 가장 약을 안 먹는다는 것. 치유자에게 치유자가 없다는 것. 그것이 페인킬러의 유일한, 그리고 가장 오래된 통증이다.",
};
