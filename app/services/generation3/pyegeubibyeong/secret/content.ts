/* ──────────────────────────────────────────
   폐급이병(미정) — 시크릿 서술 텍스트

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
  letter: {
    opening: "합격입니다. 많이 힘드셨을 텐데, 여기까지 오신 것 자체가 이미 이 캐릭터입니다.",
    background: "폐급이병은 최저점에서 시작하는 성장형 캐릭터입니다. 시작이 화려하지 않아도, 출발선이 뒤에 있어도 결국 도달하는 사람. 군대라는 시스템 안에서 가장 낮은 위치에서 시작하는 '이병'의 이미지를 차용했지만, 그 끝은 누구보다 높이 올라갑니다.",
    direction: "초반에는 위축되어 있지만 당당한 내면이 느껴져야 합니다. 자기 비하와 자기 인식은 다릅니다. 자신의 위치를 알지만 그걸로 멈추지 않는 사람. 성장할 때마다 그 변화를 명확하게 보여주세요.",
    closing: "당신의 성장이 많은 사람에게 용기가 될 것입니다.",
  },
  classified: [
    {
      label: "진짜 바닥",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "진짜 바닥",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "폐급이병이 경험한 실제 최저점이 시즌 2에서 공개됩니다. 알려진 것보다 훨씬 낮습니다.",
        },
        {
          title: "2쪽",
          emoji: "🔒",
          image: "", /* 예: "/images/page-2.png" */
          body: "내용을 채워주세요.",
        },
      ],
    },
    {
      label: "다시 떨어진 날",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "다시 떨어진 날",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "성장 중 다시 내려간 날들의 기록이 시즌 2 중반부에 공개됩니다.",
        },
        {
          title: "2쪽",
          emoji: "🔒",
          image: "", /* 예: "/images/page-2.png" */
          body: "내용을 채워주세요.",
        },
      ],
    },
    {
      label: "최종 계급",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "최종 계급",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "폐급이병이 결국 도달하는 계급과 그 의미가 시즌 피날레에서 밝혀집니다.",
        },
        {
          title: "2쪽",
          emoji: "🔒",
          image: "", /* 예: "/images/page-2.png" */
          body: "내용을 채워주세요.",
        },
      ],
    },
  ],
  requests: [
    {
      text: "자신을 폐급으로 정의하는 발언을 반복하지 마세요. 캐릭터가 고착됩니다.",
      level: "필수",
    },
    {
      text: "성장을 보여주지 않고 피해 의식만 드러내는 것은 금지입니다.",
      level: "필수",
    },
    {
      text: "성장하는 모습을 꾸준히, 단계적으로 보여주세요.",
      level: "필수",
    },
    {
      text: "실수했을 때 자책보다 빠른 복기와 재도전을 선택하세요.",
      level: "요청",
    },
    {
      text: "도움 없이 혼자 모든 것을 해결하려는 모습은 가끔만 보여주세요.",
      level: "요청",
    },
    {
      text: "선배 멤버들에게 배우는 모습을 자연스럽게 보여주세요.",
      level: "권고",
    },
  ],
  /* 파트너 비밀 설정 — 카드 클릭 시 팝업. image 에 경로를 넣으면 그림이 들어갑니다 */
  partnerSecret: [
    {
      label: "비밀 1",
      emoji: "🐾",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "비밀 1",
          emoji: "🐾",
          image: "", /* 예: "/images/page-1.png" */
          body: "내용을 채워주세요.",
        },
        {
          title: "2쪽",
          emoji: "🐾",
          image: "", /* 예: "/images/page-2.png" */
          body: "내용을 채워주세요.",
        },
      ],
    },
    {
      label: "비밀 2",
      emoji: "🐾",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "비밀 2",
          emoji: "🐾",
          image: "", /* 예: "/images/page-1.png" */
          body: "내용을 채워주세요.",
        },
        {
          title: "2쪽",
          emoji: "🐾",
          image: "", /* 예: "/images/page-2.png" */
          body: "내용을 채워주세요.",
        },
      ],
    },
    {
      label: "비밀 3",
      emoji: "🐾",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "비밀 3",
          emoji: "🐾",
          image: "", /* 예: "/images/page-1.png" */
          body: "내용을 채워주세요.",
        },
        {
          title: "2쪽",
          emoji: "🐾",
          image: "", /* 예: "/images/page-2.png" */
          body: "내용을 채워주세요.",
        },
      ],
    },
  ],
  fanNote: "팬들은 폐급이병에게서 '나보다 힘든 사람도 하는데'라는 동기를 얻습니다. 당신의 성장 서사가 그들의 이야기와 겹칠 때 가장 강력한 연결이 생깁니다.",
};
