/* ──────────────────────────────────────────
   부장 — 프로필 서술 텍스트

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
  quote: "부장님",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/bujang.png, bujang-2.png, bujang-3.png, bujang-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "부장님",
    "부장님",
    "부장님",
    "부장님",
  ],
  shortBio: "모든 책임이 모이는 곳. 최종 결정권자이자 최후의 방패.",
  partnerDesc: "부장 옆에서 결정을 지키는 조용하고 든든한 최종 방어선.",
  birthplaceDesc: "권력과 역사의 도시 한복판에서 자라며, 결정의 무게와 책임의 의미를 체득했다.",

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
  fullBio: "부장은 시큐리티엑스의 최종 방어선이다. 모든 결정의 무게가 그의 어깨에 실리며, 팀이 위기에 처했을 때 최후의 판단을 내린다. 경험에서 우러나온 직관과 냉철한 분석력이 그의 무기다. 7기의 든든한 방패이자 최고 결정권자.",
  hiddenStory: "부장은 결정의 무게가 아니라, 결정하지 못했던 순간의 무게를 안고 산다. 가장 중요했던 순간에 내린 선택 하나가 지금도 맞았는지 틀렸는지 확신이 없다. 그 결정 이후 한 명이 팀을 떠났고, 부장은 아직도 그 이름을 기억한다. 최종 방어선은 무너지지 않았다. 하지만 방어선 안쪽, 아무도 못 보는 곳에 균열이 하나 있다. 부장은 매일 그 균열을 메운다. 혼자서.",
};
