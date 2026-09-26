/* ──────────────────────────────────────────
   홀더 — 프로필 서술 텍스트

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
  quote: "내가 꽉 잡고 있으니까 걱정마. 뭐든 해보자고.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/holder.png, holder-2.png, holder-3.png, holder-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "내가 꽉 잡고 있으니까 걱정마. 뭐든 해보자고.",
    "내가 꽉 잡고 있으니까 걱정마. 뭐든 해보자고.",
    "내가 꽉 잡고 있으니까 걱정마. 뭐든 해보자고.",
    "내가 꽉 잡고 있으니까 걱정마. 뭐든 해보자고.",
  ],
  shortBio: "안전벨트처럼 위험에 방어",
  partnerDesc: "홀더가 쥔 카드 몇 장을 몰래 같이 쥐고 있는 조력자.",
  birthplaceDesc: "가장 화려한 거리에서 자랐지만, 겉과 속이 다른 세상의 이면을 일찍 깨달았다.",

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
  fullBio: "홀더는 손에 쥔 것을 절대 쉽게 내려놓지 않는다. 모든 카드를 가지고 있지만 마지막 순간까지 보여주지 않는 것이 그의 전략이다. 달콤한 미소 뒤에 날카로운 계산이 숨어있으며, 게임의 끝에서 항상 웃는 쪽은 그다. 6기 슈거의 진정한 딜러.",
  hiddenStory: "홀더의 손에 쥔 카드 중 하나는 비어있다. 항상 풀 덱을 쥔 것처럼 행동하지만, 사실 가장 중요한 패 하나가 오래전에 사라졌다. 그 카드가 무엇인지는 — 본인만 안다. 게임에서 항상 이기는 이유는 그 빈 자리를 절대 들키지 않기 때문이다. 마지막에 웃는 사람의 속 안에 있는 것은 승리의 확신이 아니라, 들키지 않았다는 안도감일 수도 있다.",
};
