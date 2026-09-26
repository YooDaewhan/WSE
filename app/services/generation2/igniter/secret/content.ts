/* ──────────────────────────────────────────
   이그나이터 — 시크릿 서술 텍스트

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
    opening: "합격을 진심으로 축하드립니다. 당신의 에너지가 오디션장에 들어온 순간부터 심사위원 전원이 같은 생각을 했습니다.",
    background: "이그나이터는 2기 스타터팩의 시동을 거는 역할입니다. 팀의 에너지 원천이자 시작점. 불꽃이라는 이미지는 강렬하지만 동시에 섬세합니다. 너무 크면 다 태워버리고, 너무 작으면 꺼집니다. 그 균형을 유지하는 점화자를 만들고 싶었습니다.",
    direction: "에너지는 높되, 산만하지 않아야 합니다. 집중된 열정. 팀원에게 에너지를 '전달'하는 사람입니다. 자신이 타오르는 것보다 상대방에게 불씨를 옮기는 장면을 더 자연스럽게 연기하세요. 혼자 빛나는 것보다 함께 빛나는 것에 더 기뻐하는 모습.",
    closing: "당신이 붙인 불꽃이 팀 전체를 밝히길 기대합니다.",
  },
  classified: [
    {
      label: "꺼진 불꽃",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "꺼진 불꽃",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "이그나이터는 한 번 완전히 꺼진 적이 있습니다. 그 경험이 현재의 열정을 만든 동력입니다. 시즌 2에서 그 순간이 공개됩니다.",
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
      label: "첫 점화 대상",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "첫 점화 대상",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "이그나이터가 MCM에서 처음으로 불꽃을 옮긴 멤버는 예상 밖의 인물입니다.",
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
      label: "불완전연소",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "불완전연소",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "이그나이터의 에너지는 무한하지 않습니다. 고갈 직전의 모습이 시즌 2 중반부에 묘사될 예정.",
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
      text: "독단적인 행동은 피하세요. 이그나이터는 혼자 타지 않습니다.",
      level: "필수",
    },
    {
      text: "다른 멤버의 빛을 가리는 언행은 절대 금지입니다.",
      level: "필수",
    },
    {
      text: "팀 활동에서 항상 먼저 손을 드세요. 시작하는 사람이 되세요.",
      level: "필수",
    },
    {
      text: "다른 멤버들의 작은 성과도 크게 칭찬하고 응원하세요.",
      level: "요청",
    },
    {
      text: "번아웃된 모습을 오래 지속하지 마세요. 빠르게 회복하는 모습을 보여주세요.",
      level: "요청",
    },
    {
      text: "지칠 때도 공개적으로 '다시 시작하는' 모습을 보여주세요.",
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
  fanNote: "팬들은 이그나이터를 보며 자신도 시작할 용기를 얻습니다. 당신의 시작하는 모습, 도전하는 모습 하나하나가 누군가에게는 첫 번째 불씨가 됩니다.",
};
