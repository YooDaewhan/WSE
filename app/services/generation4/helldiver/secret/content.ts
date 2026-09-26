/* ──────────────────────────────────────────
   헬다이버 — 시크릿 서술 텍스트

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
    opening: "합격입니다. 위험을 두려워하지 않는 사람을 찾는 데 오래 걸렸습니다. 아니, 정확히는 두려워하면서도 뛰어드는 사람.",
    background: "관세음 보살이 모티브입니다. 관세음보살은 이름만 외우면 소원을 이루어준다고함. 컨셉은 진명을 세번 부르면 나타나 당신을 도와주는것. 주변에 내가 힘들때 아무 이유없이 당신을 도와줄 수 있는 존재입니다. 그런존재가 있나요?(없으니까 헬다이버로 대리만족)",
    direction: "쾌활한 체육계 포니테일 옆집누나 느낌으로 연기해주세요. 호탕하게 어깨동무하며 짜샤 하는느낌으로",
    closing: "헬다이버는 정령중에 유일하게 선택되지 않는 정령입니다. -> 자신이 스스로 되는 정령입니다. 누군가가 울고있다면 아무 대가없이 지옥에라도 뛰어들수 있는사람 누군가의 헬다이버가 되어주세요.",
  },
  classified: [
    {
      label: "헬다이브",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "헬다이브",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "사람들에게 멋짐을 주세요. 누군가의 헬다이버가 되라고 자주 말해주세요.",
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
      label: "헬다이브2",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "헬다이브2",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "헬다이버의 이름을 3번 말하면 헬다이버가 강림하는 컨셉입니다. 진명을 말해주지마세요. 1주년이되어도 비밀입니다.",
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
          body: "스타터팩의 이그나이터가 절망에 빠졋을때 구하러 가는 서사가 있을수 있습니다.",
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
      text: "새로운 도전이나 시도에 가장 먼저 나서는 모습을 보여주세요.",
      level: "필수",
    },
    {
      text: "망설이거나 주저하는 모습을 길게 보여주지 마세요.",
      level: "필수",
    },
    {
      text: "다른 멤버를 위험 속으로 먼저 보내는 모습은 캐릭터에 맞지 않습니다.",
      level: "필수",
    },
    {
      text: "위험하거나 어려운 상황에서 팀을 리드하세요.",
      level: "요청",
    },
    {
      text: "뛰어든 후 결과에 대해 변명하지 마세요.",
      level: "요청",
    },
    {
      text: "착지 후 빠르게 상황을 분석하고 다음 행동을 제시하세요.",
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
  fanNote: "팬들은 헬다이버에게서 '저 사람이 먼저 가준다'는 안도감을 느낍니다. 선봉에 서는 모습이 팬들에게 보호받는 느낌을 줍니다.",
};
