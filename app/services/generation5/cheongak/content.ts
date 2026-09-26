/* ──────────────────────────────────────────
   아자젤라(미정) — 프로필 서술 텍스트

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
  quote: "주저 앉아 기도하는건 그만. 일어서서 걸어가야해.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/cheongak.png, cheongak-2.png, cheongak-3.png, cheongak-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "주저 앉아 기도하는건 그만. 일어서서 걸어가야해.",
    "주저 앉아 기도하는건 그만. 일어서서 걸어가야해.",
    "주저 앉아 기도하는건 그만. 일어서서 걸어가야해.",
    "주저 앉아 기도하는건 그만. 일어서서 걸어가야해.",
  ],
  shortBio: "회계천사. 아자젤. 더 이상 기다리지 않아.",
  partnerDesc: "청악과 함께 경계 위를 오가는 양면의 동반자.",
  birthplaceDesc: "천년 고도의 빛과 그림자가 교차하는 도시. 오래된 것과 새로운 것 사이에서 균형을 배웠다.",

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
  fullBio: "청악은 맑은 하늘(청)과 악(악)의 사이에 선 인물이다. 어느 한쪽으로도 완전히 기울지 않으며, 상황에 따라 빛이 되기도 그림자가 되기도 한다. 이 이중성이야말로 5기의 핵심 테마를 가장 잘 체현하는 존재.",
  hiddenStory: "청악이 경계에 서 있는 건 양쪽을 모두 원하기 때문이 아니다. 어느 쪽도 선택할 수 없기 때문이다. 선이 되면 잃는 것이 있고, 악이 되면 잃는 것이 있다. 그 사이에서 그는 그냥 서 있다. 황혼은 가장 아름다운 시간이지만, 동시에 가장 짧은 시간이다. 청악은 그 황혼 위에 평생 발을 딛고 있다. 안정적인 것처럼 보이지만, 발바닥이 조금씩 타들어가고 있다는 사실을 아무도 모른다.",
};
