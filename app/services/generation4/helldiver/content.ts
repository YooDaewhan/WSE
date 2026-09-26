/* ──────────────────────────────────────────
   헬다이버 — 프로필 서술 텍스트

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
  quote: "내 이름을 불러줘",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/helldiver.png, helldiver-2.png, helldiver-3.png, helldiver-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "내 이름을 불러줘",
    "내 이름을 불러줘",
    "내 이름을 불러줘",
    "내 이름을 불러줘",
  ],
  shortBio: "네가 있는곳이 지옥이라면서 어째서 주저 앉아 있는거야",
  partnerDesc: "헬다이버가 강하하는 곳에 먼저 도착해 있는 공중 정찰.",
  birthplaceDesc: "거대한 산업 시설과 바다 사이에서 자란 그는 위험과 함께하는 삶에 익숙하다.",

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
  fullBio: "헬다이버의 이름을 세번 부르면 언제 어디서 든 당신을 구하러, 아마도? 당신위로 떨어집니다. 하하 헬다이버의 이름이 뭐냐구요? 그것은 직접 물어보세요.",
  hiddenStory: "헬다이버가 뛰어드는 이유는 두려움 때문이다. 두려우면 먼저 뛰어들면 사라진다는 것을 어린 시절 배웠다. 그것이 용기가 아니라 공황에 가까운 반응이라는 걸 — 그는 알고 있다. 가장 위험한 곳에 가장 먼저 들어가는 사람의 얼굴에 공포가 없어 보이는 이유는, 이미 너무 빨리 움직이기 때문에 공포를 느낄 틈이 없어서다. 멈추면 무너질 것 같아서, 그는 오늘도 뛰어든다.",
};
