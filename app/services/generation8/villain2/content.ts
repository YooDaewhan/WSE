/* ──────────────────────────────────────────
   빌런 2(미정) — 프로필 서술 텍스트

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
  quote: "미정",
  /* 히어로 대사·포즈 — /images/members/villain2.png, villain2-2.png ... */
  lines: ["미정", "미정", "미정", "미정"],
  shortBio: "미정",
  partnerDesc: "미정",
  birthplaceDesc: "미정",
  partnerLore: [
    { emoji: "✨", title: "설정 1", body: "내용을 채워주세요." },
  ],
  birthplaceLore: [
    { emoji: "📍", title: "설정 1", body: "내용을 채워주세요." },
  ],
  fullBio: "미정",
  hiddenStory: "미정",
};
