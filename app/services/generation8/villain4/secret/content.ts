/* ──────────────────────────────────────────
   빌런 4(미정) — 시크릿 서술 텍스트

   이 파일은 이 페이지 전용입니다.
   여기 있는 글만 고치면 이 페이지의 문구만 바뀝니다.
────────────────────────────────────────── */

export type LorePage = {
  title: string;
  body: string;
  emoji: string;
  image?: string;
};

export type RequestLevel = "인식" | "권고" | "요청" | "필수";

export type SecretContent = {
  letter: { opening: string; background: string; direction: string; closing: string };
  classified: { label: string; emoji: string; pages: LorePage[] }[];
  requests: { text: string; level: RequestLevel }[];
  partnerSecret: { label: string; emoji: string; pages: LorePage[] }[];

  fanNote: string;
};

export const content: SecretContent = {
  letter: { opening: "합격입니다.", background: "미정", direction: "미정", closing: "미정" },
  classified: [
    { label: "미정", emoji: "🔒", pages: [{ title: "미정", emoji: "🔒", body: "내용을 채워주세요." }] },
  ],
  requests: [{ text: "미정", level: "필수" }],
  partnerSecret: [
    { label: "미정", emoji: "🔒", pages: [{ title: "미정", emoji: "🔒", body: "내용을 채워주세요." }] },
  ],
  fanNote: "미정",
};
