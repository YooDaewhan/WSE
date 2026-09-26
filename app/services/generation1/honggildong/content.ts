/* ──────────────────────────────────────────
   홍길동 — 프로필 서술 텍스트

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
  quote: "Ayo, 왓썹 bro.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/honggildong.png, honggildong-2.png, honggildong-3.png, honggildong-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "Ayo, 왓썹 bro.",
    "Ayo, 왓썹 bro.",
    "Ayo, 왓썹 bro.",
    "Ayo, 왓썹 bro.",
  ],
  shortBio: "오브콜스 형제여, 네가 말한것 처럼 세상은 불합리할지도 모르지. 하지만 그 사실을 당당하게 마주하고 삶은 이어가는건 오직 용감한 인간만이 할 수 있는 일이야. 난 네 심장보다도 가까운곳에서 널 지켜볼테니까. 기적같은 하루가 널 기다리고 있어.",
  partnerDesc: "홍길동은 시청자들을 형제 라고 부릅니다.",
  birthplaceDesc: "작은 시골마을에서 시작된 작은 무리. 아직 이야기의 초반이기 때문에 어줍잖은 왈패집단입니다. 홍길동과 bro 무리가 만든 '순수 청년 봉사 단체' 라는 뜻입니다.",

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
  fullBio: "'형'을 '형'이라고 부르지 못하고 '아버지'를 '아버지'라고 부르지 못하는 기구한 운명에 저항하는 인물입니다. '동'에 번쩍 '서'에 번쩍 '신출귀몰' 하며 특히 밤에 그는 '천하무적'입니다. 의롭고 용감하며 소울이 충만합니다. 가족의 사랑을 많이 받고 자란 티가납니다.",
  hiddenStory: "홍길동은 가명이다. MCM에 합류하기 전, 그는 전혀 다른 이름과 얼굴로 살고 있었다. 왜 이름을 바꿨는지, 원래 이름이 무엇인지 — 아는 사람은 단 한 명뿐이며, 그조차 입을 열지 않는다. '홍길동'이라는 이름을 선택한 이유도, 첫날 밤 무대 뒤에서 혼자 중얼거린 말도 모두 기록에 남아있지 않다. 길을 만들기 전에, 그는 먼저 자신을 지웠다.",
};
