/* ──────────────────────────────────────────
   클로버 — 시크릿 서술 텍스트

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
    opening: "합격입니다! 운이 좋으셨네요. 아니, 준비가 되어 있었겠죠.",
    background: "클로버는 불안한 우리를 도와주는 존재로 만들고 싶었습니다. 중요한일이나 도전에서 우리는 누구에게든 간절하게 빌고 싶어집니다. 그런 마음을 표현하고싶었습니다. 클로버는 행운 토끼입니다. 하지만 자신은 그것을 모르고 엄청나게 불안해합니다. 그래서 행운의 상징이라는 상징을 온몸에 붙이고다닙니다. 이것은 어떤 상징 저것은 어떤상징 온갖 말도 안되는 미신을 다 믿으며 행운을 빕니다. 마지막 순간엔 행운에 의지하는 것이 아닌 자신의 능력과 노력을 믿고 나아가는 서사를 보여줘야합니다.",
    direction: "행운아처럼 보이되, 그 이면의 노력이 가끔 보여야 합니다. 실패해도 금방 다시 일어나는 복원력을 일관되게 보여주세요. 네 잎 클로버를 만드는 사람 — 없는 것을 있게 만드는 능력을 자연스럽게 드러내세요.",
    closing: "당신의 행운이 준비에서 온다는 것을 보여주세요.",
  },
  classified: [
    {
      label: "행운 아이템",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "행운 아이템",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "의외로 이 아이템들은 효과가 확실합니다.",
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
          body: "마지막 순간엔 행운에 의지 하지 않고 자신의 능력과 노력을 믿고 나아가는 서사를 보여줘야합니다.",
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
      text: "어려운 상황에서도 빠르게 회복하는 모습을 보여주세요.",
      level: "필수",
    },
    {
      text: "자신의 성공을 순전한 운으로 돌리는 발언은 삼가세요.",
      level: "필수",
    },
    {
      text: "팀 내에서 불가능해 보이는 것을 가능하게 만드는 역할을 맡으세요.",
      level: "요청",
    },
    {
      text: "실패했을 때 오래 힘들어하는 모습을 보여주지 마세요.",
      level: "요청",
    },
    {
      text: "행운처럼 보이는 순간 뒤의 노력을 가끔 자연스럽게 드러내세요.",
      level: "권고",
    },
    {
      text: "네 잎 클로버를 찾는 사람처럼 보이지 마세요. 만드는 사람처럼.",
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
  fanNote: "팬들은 클로버에게서 '저 사람이 해냈다면 나도 할 수 있겠다'를 느낍니다. 당신의 성공이 운이 아닌 준비의 결과임을 보여줄 때 팬들에게 가장 큰 동기가 됩니다.",
};
