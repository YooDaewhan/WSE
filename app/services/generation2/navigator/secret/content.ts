/* ──────────────────────────────────────────
   네비게이터 — 시크릿 서술 텍스트

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
    opening: "합격을 알립니다. 네비게이터는 팀의 방향을 결정하는 포지션입니다. 그 무게를 감당할 수 있다고 판단했습니다.",
    background: "네비게이터는 리더보다 한 발 앞서 가는 존재입니다. 리더가 결정을 내리기 전에 이미 경로를 계산해둔 사람. 차갑게 보일 수 있지만, 그 냉정함이 팀을 살립니다. 감정보다 방향을 먼저 생각하는 인물로 기획했습니다.",
    direction: "결정이 빠르고, 그 결정에 확신이 있어야 합니다. 길을 안내할 때는 명확하게. 모호한 표현은 네비게이터에게 맞지 않습니다. 단, 차갑게 보이지 않도록 팀원을 챙기는 작은 디테일을 항상 넣어주세요.",
    closing: "당신이 이끄는 방향이 어디로 향할지 기대됩니다.",
  },
  classified: [
    {
      label: "길을 잃었던 순간",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "길을 잃었던 순간",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "MCM 합류 직전 사흘간의 실종 기간이 있습니다. 그 사흘의 기록이 시즌 2에 공개됩니다.",
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
      label: "진짜 목적지",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "진짜 목적지",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "네비게이터가 팀을 이끄는 최종 목적지는 팀 전체가 아닌 특정 한 명을 위한 곳입니다.",
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
      label: "나침반의 결함",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "나침반의 결함",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "네비게이터는 한 가지 방향에서만 판단이 흐려집니다. 그 방향이 무엇인지 시즌 2에서 밝혀집니다.",
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
      text: "우유부단한 모습은 캐릭터와 맞지 않습니다.",
      level: "필수",
    },
    {
      text: "팀 활동에서 방향을 제시하는 역할을 자연스럽게 맡으세요.",
      level: "필수",
    },
    {
      text: "결정이 필요한 순간 망설이지 말고 먼저 제안하세요.",
      level: "필수",
    },
    {
      text: "팀원들의 강점과 약점을 파악하고 있는 모습을 보여주세요.",
      level: "요청",
    },
    {
      text: "감정적 판단으로 방향을 바꾸는 모습은 피하세요.",
      level: "요청",
    },
    {
      text: "팀원의 의견을 무시하는 것처럼 보이는 언행은 삼가세요.",
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
  fanNote: "팬들은 네비게이터에게서 '믿고 따라가도 되는 사람'을 찾습니다. 확신에 찬 모습, 방향이 명확한 모습이 그들에게 안정감을 줍니다.",
};
