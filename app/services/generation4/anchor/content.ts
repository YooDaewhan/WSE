/* ──────────────────────────────────────────
   앵커 — 프로필 서술 텍스트

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
  quote: "거꾸로 있는건 내가아니야. 네가 뒤집혀있는거야.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/anchor.png, anchor-2.png, anchor-3.png, anchor-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "거꾸로 있는건 내가아니야. 네가 뒤집혀있는거야.",
    "거꾸로 있는건 내가아니야. 네가 뒤집혀있는거야.",
    "거꾸로 있는건 내가아니야. 네가 뒤집혀있는거야.",
    "거꾸로 있는건 내가아니야. 네가 뒤집혀있는거야.",
  ],
  shortBio: "추후 수정.",
  partnerDesc: "앵커가 흔들릴 때 가장 먼저 자리 잡아주는 느린 단단함.",
  birthplaceDesc: "서남쪽 바다의 도시에서 태어나 파도에도 흔들리지 않는 닻의 정신을 체득했다.",

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
  fullBio: "앵커는 이름 그대로 팀의 닻이다. 모든 것이 흔들리고 무너질 때, 그는 절대 움직이지 않는다. 가장 조용하지만 가장 강한 멤버.",
  hiddenStory: "앵커가 흔들린 날이 딱 한 번 있었다. 그날 이후로 그는 앵커가 되었다. 흔들리지 않는 게 아니라, 다시는 흔들리지 않겠다고 결심한 것이다. 그날 무슨 일이 있었는지는 기록에 없다. 단 하나의 단서가 있다면 — 그의 왼쪽 손목 안쪽에 새겨진 작은 문자. 누가 물어보면 '오래된 것'이라고만 한다. 닻은 바닥에 묶여있다. 그 바닥이 무엇인지, 아무도 모른다.",
};
