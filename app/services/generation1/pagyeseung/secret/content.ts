/* ──────────────────────────────────────────
   호테이 센지 — 시크릿 서술 텍스트

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
    opening: "합격을 알립니다. 쉬운 캐릭터가 아닙니다. 그래서 당신을 선택했습니다.",
    background: "후테이센진 이 모티브입니다. 본명은 김광복.",
    direction: "일본에 관한 회사의 입장을 대변할때 전선에 서야합니다. 회사는 이 캐릭터로 입장을 내보낼 것입니다. 일본의 문화에 호의적이여야 합니다. 이후 일본 캐릭터가 데뷔하기 전까지 이캐릭터도 데뷔하여야합니다.",
    closing: "당신이 무엇을 부수고 무엇을 세울지 지켜보겠습니다.",
  },
  classified: [
    {
      label: "깨진 계율",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "깨진 계율",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "파계승이 스스로에게 세운 맹세 중 하나를 이미 어겼습니다. 어떤 맹세인지는 시즌 2에서 공개.",
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
      label: "진짜 스승",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "진짜 스승",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "파계승에게는 공개되지 않은 스승이 있습니다. 그 스승과의 관계가 모든 행동의 동기입니다.",
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
      label: "최후의 파괴",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "최후의 파괴",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "파계승이 마지막으로 부수는 것은 시스템이 아닌 자기 자신입니다. 이 설정이 시즌 피날레를 구성합니다.",
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
      text: "감정적으로 폭발하는 모습은 캐릭터와 맞지 않습니다.",
      level: "필수",
    },
    {
      text: "기존 것을 부수기만 하고 대안을 제시하지 않는 행동은 피하세요.",
      level: "필수",
    },
    {
      text: "자신을 '반항아'나 '아웃사이더'로 정의하는 발언은 금지입니다.",
      level: "필수",
    },
    {
      text: "불합리한 상황에서 조용히, 그러나 단호하게 반응하세요.",
      level: "요청",
    },
    {
      text: "새로운 시도나 변화에 가장 먼저 동조하는 모습을 보여주세요.",
      level: "요청",
    },
    {
      text: "팀 내 갈등 상황에서 중재보다 새로운 관점 제시를 선택하세요.",
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
  fanNote: "팬들은 파계승에게서 '나도 저럴 수 있어'가 아니라 '저래도 되는 구나'를 느끼고 싶어합니다. 기존 규칙에 도전하는 당신의 모습이 그들에게 해방감을 줍니다.",
};
