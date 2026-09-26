/* ──────────────────────────────────────────
   인턴 — 프로필 서술 텍스트

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
  quote: "첫 출근 잘 부탁드리겠습니다.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/intern.png, intern-2.png, intern-3.png, intern-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "첫 출근 잘 부탁드리겠습니다.",
    "첫 출근 잘 부탁드리겠습니다.",
    "첫 출근 잘 부탁드리겠습니다.",
    "첫 출근 잘 부탁드리겠습니다.",
  ],
  shortBio: "아직 배우는 중이지만, (추가)",
  partnerDesc: "인턴과 함께 서류 더미를 굴리는 부지런한 신입 동기.",
  birthplaceDesc: "IT 산업의 중심지에서 자라며, 디지털 세상의 빠른 변화를 몸으로 익혔다.",

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
  fullBio: "인턴은 7기의 막내이자 가장 빠르게 성장하는 멤버다. 모든 것이 새롭고 모든 것을 배우려는 열정으로 가득하다. 경험은 부족하지만 잠재력은 무한하며, 선배들의 장점을 스펀지처럼 흡수한다. 시큐리티엑스의 미래를 상징하는 신인.",
  hiddenStory: "인턴은 처음부터 인턴이 아니었다. 이전에 다른 팀에서 주전이었고, 그곳을 떠나 이곳에서 다시 시작하기로 선택했다. 아무에게도 말하지 않았다. 제로에서 다시 시작하는 것이 필요했다 — 이유는 아직 말하지 않는다. 막내처럼 보이는 눈빛 뒤에, 이미 한 번 정상을 본 사람의 조용한 확신이 있다. 인턴이 가장 빠르게 성장하는 이유는, 사실 처음이 아니기 때문이다.",
};
