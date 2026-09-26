/* ──────────────────────────────────────────
   대리 — 시크릿 서술 텍스트

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
    opening: "합격입니다. 대리는 이 기수에서 가장 많은 압박을 받는 포지션입니다. 그 압박을 견딜 수 있는 사람을 선택했습니다.",
    background: "대리는 위와 아래를 잇는 다리입니다. 두 언어를 동시에 구사하는 사람. 모든 압박이 집중되지만 자신은 기댈 곳이 없는 역설적인 포지션. 중간 관리자의 외로움을 처음으로 캐릭터화한 인물입니다.",
    direction: "유연성이 핵심입니다. 위의 언어와 아래의 언어를 상황에 따라 바꾸세요. 압박을 받으면서도 무너지지 않는 모습. 단, 혼자 차 안에서 멍하니 있는 그 5분의 감정을 가끔 섬세하게 드러내세요.",
    closing: "위도 아래도 아닌 그 자리에서, 잘 버텨주세요.",
  },
  classified: [
    {
      label: "차 안의 5분",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "차 안의 5분",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "대리가 매일 차 안에서 보내는 5분 동안 무슨 생각을 하는지 시즌 2에서 공개됩니다.",
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
      label: "속하지 못하는 곳",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "속하지 못하는 곳",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "대리가 진짜 속하고 싶은 곳이 어디인지 시즌 2에서 밝혀집니다.",
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
      label: "다리가 쉬는 날",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "다리가 쉬는 날",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "대리가 처음으로 아무것도 연결하지 않는 날이 시즌 피날레에 등장합니다.",
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
      text: "어느 한쪽 편을 공개적으로 드는 발언은 삼가세요.",
      level: "필수",
    },
    {
      text: "위와 아래 양쪽의 입장을 모두 이해하는 모습을 보여주세요.",
      level: "필수",
    },
    {
      text: "갈등 상황에서 중재자 역할을 자연스럽게 맡으세요.",
      level: "요청",
    },
    {
      text: "압박 속에서도 유연하게 대처하는 모습을 보여주세요.",
      level: "요청",
    },
    {
      text: "압박을 받는 모습을 오래 보여주지 마세요.",
      level: "요청",
    },
    {
      text: "자신이 속하지 못한다는 느낌을 너무 직접적으로 드러내지 마세요.",
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
  fanNote: "팬들은 대리에게서 '중간에 끼어있는 나'를 봅니다. 직장인 팬들, 중간 위치에 있는 팬들이 가장 강하게 공감합니다.",
};
