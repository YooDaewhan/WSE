/* ──────────────────────────────────────────
   클로버 — 프로필 서술 텍스트

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
  quote: "세잎클로버는 행복, 네잎은 행운이래.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/clover.png, clover-2.png, clover-3.png, clover-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "세잎클로버는 행복, 네잎은 행운이래.",
    "이거 진짜 귀한 건데… 나중에 꼭 돌려줘야 해",
    "쉿. 저기 자판기 밑에 반짝이는 거 보여? …아니 동전 말고. 그 옆에 구겨진 거.",
    "행운이란건 운명의 반댓말이래.",
    "잠깐, 저 고양이 눈 떴어? 떴지? …아 안 떴구나. 그럼 가자. 아니 잠깐만. 한 번만 더 보고.",
    "네잎클로버? 난 그거 잘 안 모아. 너무 유명해서 재미없어.",
    "세잎은 행복이래. 그건 그냥 두는 거야. 행복은 줍는 게 아니래.",
    "너 방금 버스 딱 맞춰 탔지? 그거 내 조약돌 덕분이야. …아니라고? 그럼 조약돌 돌려줘.",
  ],
  shortBio: "행운의 상징이 많이 있으니까 걱정없겟지?",
  partnerDesc: "클로버 잎 위에 앉아 행운을 두 배로 만드는 작은 동행.",
  birthplaceDesc:
    "대나무 숲 사이에서 자라며, 바람에 흔들려도 부러지지 않는 유연함을 배웠다.",

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
  fullBio:
    "클로버는 운이 좋은 사람처럼 보이지만, 그 행운의 정체는 철저한 준비와 끈기다. 실패해도 다시 일어나는 복원력이 그를 '행운아'로 만들었다. 달콤한 외면 아래 단단한 내면을 가진 6기의 숨은 에이스.",
  hiddenStory:
    "클로버는 네 잎 클로버를 찾은 적이 없다. 세 잎짜리를 찾아서, 그 위에 잎 하나를 조심스럽게 붙인 것이다. 아무도 가까이서 보지 않았다. 행운처럼 보이는 모든 것 뒤에는 그 작은 속임수가 있었다 — 나쁜 의미가 아니다. 없는 것을 있는 것처럼 만드는 힘. 그게 진짜 클로버의 재능이다. 그리고 그게 행운보다 훨씬 단단한 것임을, 가끔 본인도 잊는다.",
};
