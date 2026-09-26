/* ──────────────────────────────────────────
   홀더 — 시크릿 서술 텍스트

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
    opening: "반갑습니다.",
    background: "홀더는 컵홀더에서 따왔습니다. 인생의 안전벨트같은 캐릭터를 만들기를 원했습니다. 우리가 도전을 할 때 불안한 마음이 들곤하는데, 그럴 때 믿고 의지 할 수 있는 안전띠 같은 존재입니다. 최소한의 안전장치, 홀더가 우리를 잡고 있어줍니다. 홀더와 우리는 서로를 줄로 묶고 안전한 범위 내에서, 혹시라도 나도 모르게 위험 범위 까지 가지 않도록, 잡아주며 마음껏 도전 할 수 있는 존재로 표현하고싶었습니다. 다만 홀더는 우리를 지켜주는 반면에 구속하고 있기도합니다. 결국 우리는 홀더의 안전범위를 벗어나 도전해야 할 때가 올 것입니다.",
    direction: "불안형 여자친구처럼 연기해주세요. 하지만 시청자를 믿고 함께 가준다고 말하세요. 뒤는 지켜준다고 하면서 말이죠",
    closing: "우리 둘이서라면 어떻게든 될거야",
  },
  classified: [
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
    {
      label: "마지막 순간",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "마지막 순간",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "최후의 순간 우린느 홀더의 안전범위를 벗어나야 할 때가 있습니다. 홀더는 바라진 않지만 곳 우리를 위해 놓아주기로 합니다. 홀더는 우리를 보며 마지막으로 묻습니다.'정말 (대사 추가)' 어쩔 수 없이 고개를 끄덕이면 홀더는 자신의 목줄을 풀며 해방합니다. (목줄을 풀고 해방하면, 뭔가 마지막 소원을 이루어주는 서사 추가)",
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
      text: "감정을 직접적으로 드러내는 것은 아직 이릅니다.",
      level: "필수",
    },
    {
      text: "자신의 전략이나 의도를 설명하지 마세요.",
      level: "필수",
    },
    {
      text: "자신에 대한 정보를 조금씩, 천천히 공개하세요. 한꺼번에 보여주지 마세요.",
      level: "필수",
    },
    {
      text: "팬들에게 궁금증을 남기는 발언과 행동을 유지하세요.",
      level: "요청",
    },
    {
      text: "미소를 일관되게 유지하되, 그 뒤의 무언가를 느끼게 해주세요.",
      level: "요청",
    },
    {
      text: "먼저 모든 것을 다 보여주려 하지 마세요.",
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
  fanNote: "팬들은 홀더에게서 '저 사람의 진짜 모습이 뭘까'를 계속 생각합니다. 그 궁금증을 유지시키는 것이 당신의 역할입니다.",
};
