/* ──────────────────────────────────────────
   미카엘라(미정) — 프로필 서술 텍스트

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
  quote: "소중한 것들을 지켜야만 해.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/cheoncheon.png, cheoncheon-2.png, cheoncheon-3.png, cheoncheon-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "소중한 것들을 지켜야만 해.",
    "소중한 것들을 지켜야만 해.",
    "소중한 것들을 지켜야만 해.",
    "소중한 것들을 지켜야만 해.",
  ],
  shortBio: "필사적으로 앞으로 나아가지만 뭘 위해서, 어딜 보며 나아가는지 잊어버렸어.",
  partnerDesc: "이만과 합의하지 말라. 스스로 한계와 합의하지말라, 스스로 실패와 협의하지말라.",
  birthplaceDesc: "새로 태어난 도시에서 자랐다. 천천히 만들어지는 것의 가치를 누구보다 잘 아는 사람.",

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
  fullBio: "천천은 이름처럼 서두르지 않는다. 하지만 그가 한 번 내딛는 발걸음은 절대 헛되지 않는다. 조급함 속에서도 자신의 페이스를 잃지 않는 것, 그것이 천천의 빛이다. 5기의 방향등이자 첫 번째 빛.",
  hiddenStory: "천천의 느림은 선택이 아니다. 한때 너무 빨리 달렸다가 크게 다쳤다. 그 이후로 속도를 잃었고, 잃은 속도를 '철학'으로 바꾸었다. 빛은 서두르지 않는다고 말하지만, 사실 서두를 수가 없는 것이다. 그리고 그것이 오히려 맞는 방향이었다는 걸 — 지금은 안다. 상처가 가르쳐준 리듬. 천천은 자신의 빛이 원래부터 있던 게 아니라, 부서진 자리에서 새어나온 것임을 조용히 알고 있다.",
};
