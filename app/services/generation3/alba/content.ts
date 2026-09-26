/* ──────────────────────────────────────────
   알바(미정) — 프로필 서술 텍스트

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
  quote: "어디서든 살아남는 생존왕. 현장의 달인.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/alba.png, alba-2.png, alba-3.png, alba-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "어디서든 살아남는 생존왕. 현장의 달인.",
    "어디서든 살아남는 생존왕. 현장의 달인.",
    "어디서든 살아남는 생존왕. 현장의 달인.",
    "어디서든 살아남는 생존왕. 현장의 달인.",
  ],
  shortBio: "어떤 상황에서든 적응하고 살아남는 궁극의 서바이버.",
  partnerDesc: "알바와 함께 이리저리 뛰어다니는 부지런한 동행.",
  birthplaceDesc: "산업의 중심지에서 태어나 다양한 현장 경험을 쌓으며 생존 능력을 키웠다.",

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
  fullBio: "알바는 3기 히어로즈의 생존 전문가다. 어떤 환경이든 적응하고 성과를 만들어낸다. 화려하지 않지만 가장 현실적이고 실용적인 접근 방식으로 팀에 기여한다.",
  hiddenStory: "알바가 가장 힘들었던 '알바'는 누군가에게 도움을 요청하는 일이었다. MCM에 오기 전, 그는 한 달 동안 끼니를 굶으면서도 아무에게도 말하지 않았다. 생존의 달인이지만 도움받는 법은 배우지 못했다. 지금도 팀원이 손을 내밀면 잠깐 굳는다. 그 0.5초의 정지 — 아무도 눈치채지 못하는 그 순간이, 알바의 가장 긴 싸움이다.",
};
