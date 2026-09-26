/* ──────────────────────────────────────────
   부장 — 시크릿 서술 텍스트

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
    opening: "합격입니다. 부장은 이 기수의 최종 방어선입니다. 그 자리의 무게를 이해하는 사람이어야 합니다.",
    background: "부장님입니다. 보기보다 허당. 시도 때도 없이 야한농담으로 시청자를 당화하게 합니다. 하지만 이런 모습이지만, 실제로는 부대를 지위하고 상부에서 내려오는 부당한 명령에 맞서 세큐리티 팀을 지키고 있습니다. 계속해서 상부의 부당한 명령이 내려오고 있지만 혼자서 막아내고 있고, 세큐리티의 팀원들은 모르는 느낌. 모두가 행복하고 즐겁게 지내지만 부장만이 모든것을 짊어지고 있음.",
    direction: "실질적 경호나 호위 보다는 상부와 소통하고, 서류업무를 주로해서 시청자와는 자주 만날 수 없는 포지션. 하지만 만날때마다 따듯하게 인사해주고 미시계 또는 오지콤 매력을 풍깁니다. 또한 결혼 적령기가 지나가고 있는 느낌으로 시청자들에게 시도때도 없이 구애해야합니다.",
    closing: "최후까지 그 자리에 있어주세요. 팀이 당신을 믿습니다.",
  },
  classified: [
    {
      label: "군인",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "군인",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "육군 상사, 유일한 부사관임. 사연은 나중에 추가.",
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
      label: "잘못된 결정",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "잘못된 결정",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "잘못된 결정으로 인한 트라우마가 있습니다.",
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
      label: "미정",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "미정",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "미정",
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
      text: "미정",
      level: "필수",
    },
    {
      text: "미정",
      level: "요청",
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
  fanNote: "결혼 적령기를 놓쳐 결혼이 급한 컨셉입니다. 스스럼없이 결혼하자는 등 야한농담을 많이해주세요.",
};
