/* ──────────────────────────────────────────
   내시(미정) — 시크릿 서술 텍스트

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
  letter: {
    opening: string;
    background: string;
    direction: string;
    closing: string;
  };
  classified: { label: string; emoji: string; pages: LorePage[] }[];
  requests: { text: string; level: RequestLevel }[];
  partnerSecret: { label: string; emoji: string; pages: LorePage[] }[];

  fanNote: string;
};

export const content: SecretContent = {
  letter: {
    opening:
      "합격을 축하드립니다. 내시 역할은 이번 시즌에서 가장 중요한 포지션 중 하나입니다. 신중하게 선택한 결과입니다.",
    background: "내시는 웃긴캐릭터입니다. 추후추가",
    direction:
      "경박하고 촐싹맞는 느낌으로 연기해주세요. 이왕이면 bl 해주세요. (왕의남자)",
    closing: "추후 추가",
  },
  classified: [
    {
      label: "조선제일검",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "조선제일검",
          emoji: "🔒",
          image: "" /* 예: "/images/page-1.png" */,
          body: "내시는 '조선8검중 조선 18검정도되겠그나' 라는 말을 들을 정도로 검술을 구사하긴하나 매우 약하다고 평가됨니다. 하지만 그것은 힘을 숨긴것. 사실 내시는 무과 장원을 한 제1검입니다. 왕의 주변에서 왕을 호휘하는 강력한검사입니다.",
        },
        {
          title: "2쪽",
          emoji: "🔒",
          image: "" /* 예: "/images/page-2.png" */,
          body: "내용을 채워주세요.",
        },
      ],
    },
    {
      label: "고자아님",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "고자아님",
          emoji: "🔒",
          image: "" /* 예: "/images/page-1.png" */,
          body: "내시는 고자를 연기해야하지만 사실 아닙니다. 심지어 왕의 어릴적 친구입니다.",
        },
        {
          title: "2쪽",
          emoji: "🔒",
          image: "" /* 예: "/images/page-2.png" */,
          body: "내용을 채워주세요.",
        },
      ],
    },
    {
      label: "일러스트",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "일러스트",
          emoji: "🔒",
          image: "" /* 예: "/images/page-1.png" */,
          body: "나중엔 대장군 갑옷을 입은 일러스트가 추가될예정입니다",
        },
        {
          title: "2쪽",
          emoji: "🔒",
          image: "" /* 예: "/images/page-2.png" */,
          body: "내용을 채워주세요.",
        },
      ],
    },
  ],
  requests: [
    {
      text: "감정적으로 흥분한 모습은 캐릭터에 맞지 않습니다.",
      level: "필수",
    },
    {
      text: "자신의 계획이나 의도를 직접 설명하지 마세요.",
      level: "필수",
    },
    {
      text: "팬들과의 소통에서 항상 한 박자 늦게 반응하세요. 충동적으로 보이지 않도록.",
      level: "요청",
    },
    {
      text: "먼저 다가가는 행동은 최소화하세요. 내시는 기다리는 사람입니다.",
      level: "요청",
    },
    {
      text: "다른 멤버들의 행동을 예측하는 듯한 코멘트를 가끔 흘려주세요.",
      level: "권고",
    },
    {
      text: "공개적인 자리에서 침묵이 길어져도 괜찮습니다. 그것도 연기입니다.",
      level: "인식",
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
          image: "" /* 예: "/images/page-1.png" */,
          body: "내용을 채워주세요.",
        },
        {
          title: "2쪽",
          emoji: "🐾",
          image: "" /* 예: "/images/page-2.png" */,
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
          image: "" /* 예: "/images/page-1.png" */,
          body: "내용을 채워주세요.",
        },
        {
          title: "2쪽",
          emoji: "🐾",
          image: "" /* 예: "/images/page-2.png" */,
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
          image: "" /* 예: "/images/page-1.png" */,
          body: "내용을 채워주세요.",
        },
        {
          title: "2쪽",
          emoji: "🐾",
          image: "" /* 예: "/images/page-2.png" */,
          body: "내용을 채워주세요.",
        },
      ],
    },
  ],
  fanNote:
    "팬들은 내시에게서 '나를 꿰뚫어 보는 사람'의 인상을 받고 싶어합니다. 때로는 팬들이 올린 글에 짧은 반응 하나로 그들이 많은 의미를 부여하게 만드세요.",
};
