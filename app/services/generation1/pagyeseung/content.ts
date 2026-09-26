/* ──────────────────────────────────────────
   호테이 센지 — 프로필 서술 텍스트

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
  quote: "매국노 민족반역자",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/pagyeseung.png, pagyeseung-2.png, pagyeseung-3.png, pagyeseung-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "매국노 민족반역자",
    "매국노 민족반역자",
    "매국노 민족반역자",
    "매국노 민족반역자",
  ],
  shortBio: "어이 조무래기들 모여서 뭣들하는거야. 조용히 아침이나 기다리라고",
  partnerDesc: "힘없는 민초",
  birthplaceDesc: "기밀",

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
  fullBio: "기밀",
  hiddenStory: "파계승이 부순 것들 중 가장 오래된 것은 자기 자신에게 세웠던 약속이다. '절대 타협하지 않겠다'는 그 맹세는, 어느 날 밤 말없이 깨어졌다. 무엇을 위해서였는지, 그는 아직도 스스로에게 말하지 못한다. 혁명가의 가장 큰 적은 낡은 세계가 아니라, 자신이 혁명하지 못한 내면이라는 것을 그는 알고 있다. 파계(破戒) — 그가 부순 계율 중 하나는 남들 것이 아니었다.",
};
