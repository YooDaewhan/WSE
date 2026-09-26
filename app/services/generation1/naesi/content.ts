/* ──────────────────────────────────────────
   내시(미정) — 프로필 서술 텍스트

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
  quote: "황송하옵니다~~~ 에예",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/naesi.png, naesi-2.png, naesi-3.png, naesi-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "황송하옵니다~~~ 에예",
    "황송하옵니다~~~ 에예",
    "황송하옵니다~~~ 에예",
    "황송하옵니다~~~ 에예",
  ],
  shortBio: "조선을 팔도에 검술이 가장 뛰어난 자를 '조선제일검'이라고 부른다지. 자네는 '조선제십팔검'정도 되려나보군.",
  partnerDesc: "밤새 편지를 나르는 내시의 눈과 귀.",
  birthplaceDesc: "화성의 성곽이 둘러싼 역사의 도시에서 자랐다. 고요한 성벽 안에서 치밀한 전략적 사고를 자연스럽게 체득했다.",

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
  fullBio: "왕의 가장 옆에서 보좌하는 인물입니다. 어떠한 경우에도 왕을 따라다닙니다. 심지어 왕께서 화장실에 가실때도 말이죠. 짬이 좀 차서 그런지 왕 보기를 우습게 보는 것 같습니다. 하지만 이래 보여도 왕과 함께 피난길에 올랐던 충신입니다. 그래서인지 왕도 딱히 뭐라 하지 않습니다.",
  hiddenStory: "내시는 동시에 두 팀을 위해 움직이고 있었다. 어느 쪽도 눈치채지 못했고, 내시 본인도 어느 순간부터 어느 쪽이 진짜 자신인지 알 수 없게 되었다. 그가 설계한 전략 중 일부는 의도적으로 실패하도록 짜여 있었다 — 누구를 위해서인지는, 지금도 알 수 없다. 내시의 서랍 속에는 한 번도 실행되지 않은 계획서가 있다. 그 마지막 줄에는 단 한 문장만 적혀있다. '이건 나를 위한 것이다.'",
};
