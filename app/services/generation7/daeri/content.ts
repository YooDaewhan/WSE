/* ──────────────────────────────────────────
   대리 — 프로필 서술 텍스트

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
  quote: "위와 아래를 잇는 다리. 실질적 중간 허리.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/daeri.png, daeri-2.png, daeri-3.png, daeri-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "위와 아래를 잇는 다리. 실질적 중간 허리.",
    "위와 아래를 잇는 다리. 실질적 중간 허리.",
    "위와 아래를 잇는 다리. 실질적 중간 허리.",
    "위와 아래를 잇는 다리. 실질적 중간 허리.",
  ],
  shortBio: "현장과 경영 사이에서 양쪽의 언어를 모두 구사하는 통역가.",
  partnerDesc: "대리의 중재를 매끄럽게 풀어주는 유연한 중간자.",
  birthplaceDesc: "비즈니스의 중심부에서 자라며 조직의 위계와 소통의 기술을 자연스럽게 배웠다.",

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
  fullBio: "대리는 위와 아래를 연결하는 핵심 고리다. 인턴의 아이디어를 부장의 언어로 번역하고, 부장의 전략을 현장에 적용 가능한 형태로 변환한다. 가장 많은 압박을 받으면서도 가장 유연하게 대처하는 존재. 7기의 실질적 허리.",
  hiddenStory: "대리는 위도 아래도 아닌 — 그 어디에도 속하지 않는다고 느낀다. 다리이기 때문에 항상 밟히고, 무게를 견디고, 자신이 지탱하는 사람들에게 결코 기댈 수 없다. 퇴근 후 혼자 차 안에서 5분을 멍하니 앉아있다. 위쪽도 아래쪽도 아닌 그 5분이 하루 중 가장 자기 자신인 시간이다. 다리는 스스로 쉴 수 없다. 그게 대리의 유일한 비밀이다.",
};
