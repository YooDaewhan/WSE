/* ──────────────────────────────────────────
   알바(미정) — 시크릿 서술 텍스트

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
    opening: "합격입니다.",
    background: "알바는 고깃집알바입니다. 토도로키 쇼토가 모티브입니다. 설거지와 숯갈이 불과 얼음. 알바썰만이 준비해주세요 짠내나게해주세요",
    direction: "추후추가",
    closing: "시청자들이 공감되게 추후추가",
  },
  classified: [
    {
      label: "추후추가",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "추후추가",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "MCM 합류 전 한 달의 기록이 시즌 2에서 공개됩니다. 아무에게도 말하지 않았던 시간.",
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
      label: "추후추가",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "추후추가",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "추후추가",
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
      label: "변신",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "변신",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "토도로키 쇼토가 모티브입니다. 설거지와 숯갈이",
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
      text: "어떤 상황에서도 포기하지 않는 모습을 보여주세요.",
      level: "필수",
    },
    {
      text: "자신을 비하하는 발언은 삼가세요. 알바는 자기 비하를 하지 않습니다.",
      level: "필수",
    },
    {
      text: "팀의 궂은일을 마다하지 않는 모습을 자연스럽게.",
      level: "요청",
    },
    {
      text: "화려함을 추구하는 모습은 캐릭터와 맞지 않습니다.",
      level: "요청",
    },
    {
      text: "불평이나 하소연을 공개적으로 길게 이어가지 마세요.",
      level: "요청",
    },
    {
      text: "도움을 요청하는 것도 강함의 일부임을 가끔 보여주세요.",
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
  fanNote: "팬들은 알바에게서 '나랑 같은 사람'을 느낍니다. 완벽하지 않아도, 화려하지 않아도 매일 살아가는 모습이 그들에게 가장 큰 위로입니다.",
};
