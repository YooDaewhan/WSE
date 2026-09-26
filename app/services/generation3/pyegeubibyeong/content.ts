/* ──────────────────────────────────────────
   폐급이병(미정) — 프로필 서술 텍스트

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
  quote: "바닥을 찍어본 자만이 아는 성장의 비밀.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/pyegeubibyeong.png, pyegeubibyeong-2.png, pyegeubibyeong-3.png, pyegeubibyeong-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "바닥을 찍어본 자만이 아는 성장의 비밀.",
    "바닥을 찍어본 자만이 아는 성장의 비밀.",
    "바닥을 찍어본 자만이 아는 성장의 비밀.",
    "바닥을 찍어본 자만이 아는 성장의 비밀.",
  ],
  shortBio: "최저점에서 시작해 누구보다 높이 올라간 성장형 인물.",
  partnerDesc: "폐급이병과 함께 바닥부터 천천히 기어오르는 끈기의 동반자.",
  birthplaceDesc: "내륙 깊숙한 곳, 조용한 도시에서 묵묵히 자신만의 시간을 쌓아왔다.",

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
  fullBio: "폐급이병은 바닥에서 시작한 사람이다. 실패를 두려워하지 않는 이유는 이미 바닥을 경험했기 때문이고, 포기하지 않는 이유는 올라갈 곳밖에 남지 않았기 때문이다. 3기의 성장 서사를 상징한다.",
  hiddenStory: "폐급이병의 바닥은 아직 끝나지 않았을 수도 있다. 그는 매일 아침 '오늘은 올라갔나'를 확인한다. 어떤 날은 맞다. 어떤 날은 또 내려간다. 성장 서사에서 빠진 챕터가 있다 — 올라가다가 다시 떨어지는 날들. 그 날들에 그는 아무에게도 연락하지 않는다. 혼자 버틴다. 그게 습관이 되어버렸고, 그게 가장 무서운 일이라는 것을, 본인은 아직 모른다.",
};
