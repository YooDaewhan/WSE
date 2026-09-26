/* ──────────────────────────────────────────
   편돌이(미정) — 프로필 서술 텍스트

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
  quote: "365일 24시간. 멈추지 않는 편의점의 수호자.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/pyeondori.png, pyeondori-2.png, pyeondori-3.png, pyeondori-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "365일 24시간. 멈추지 않는 편의점의 수호자.",
    "365일 24시간. 멈추지 않는 편의점의 수호자.",
    "365일 24시간. 멈추지 않는 편의점의 수호자.",
    "365일 24시간. 멈추지 않는 편의점의 수호자.",
  ],
  shortBio: "쉬지 않고 묵묵히 자리를 지키는 든든한 존재.",
  partnerDesc: "24시간 편의점 냉장고 옆을 지키는 단정한 카운터 지킴이.",
  birthplaceDesc: "뜨거운 분지의 도시에서 인내심과 끈기를 배웠다.",

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
  fullBio: "편돌이는 팀에서 가장 안정적인 존재다. 누가 보지 않는 곳에서도 묵묵히 자신의 역할을 수행한다. 화려하지 않지만 그가 없으면 팀이 돌아가지 않는다.",
  hiddenStory: "편돌이는 가끔 사라진다. 아무 말 없이, 아무 흔적 없이. 24시간 자리를 지키는 것으로 유명하지만, 그 사이사이 아무도 모르는 1시간이 있다. 그 시간 동안 그가 어디 있는지, 무엇을 하는지 — 팀 내에서 아는 사람이 없다. CCTV를 확인해도 나오지 않는다고 한다. 편의점의 수호자는 자신만의 비밀 공간이 있다. 그곳에서 그는, 아마도 처음으로 아무것도 지키지 않는다.",
};
