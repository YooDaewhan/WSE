/* ──────────────────────────────────────────
   사원 — 시크릿 서술 텍스트

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
    opening: "합격입니다. 사원은 이 기수에서 가장 현실적인 캐릭터입니다. 화려하지 않지만 가장 중요한 자리입니다.",
    background: "밝은 성격.",
    direction: "인턴과 자주 다니고 계급도 높지, 상사를 연기하려는 느낌이 나지만, 어린느낌이 나게해야합니다.",
    closing: "매일 출근해주셔서 감사합니다.",
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
          body: "사이버부대 소위. 후방의 부대에서 사이버 일을 하다가 어떠한 경로로(사연추가), 뇌사상태. 사실 현재의 인겨은 다른사람입니다.",
        },
        {
          title: "2. 다른 사람",
          emoji: "🔒",
          body: "기록에 남은 것은 몇 줄뿐입니다. 사이버부대 소위. 후방 근무. 그리고 뇌사.\n\n총성이 오가는 전선이 아니었는데도, 그녀는 돌아오지 못했습니다. 어떤 일이 있었는지는 아직 기록되지 않았습니다.\n\n지금 매일 출근하는 금발의 사원은 그 소위의 이름과 얼굴을 가지고 있습니다. 하지만 그 안에 있는 사람은 그때의 소위가 아닙니다. 밝게 웃는 그 사람이 누구인지, 사원 자신은 알고 있을까요.",
        },
      ],
    },
    {
      label: "실질적 막내",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "실질적 막내",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "실제로는 계급도 가장 낮고 나이도 가장어립니다.",
        },
        {
          title: "2. 선배 노릇",
          emoji: "🔒",
          body: "사원은 인턴과 함께 다니는 일이 많습니다. 회사에서는 사원이 선배니까요. 일부러 목소리를 낮추고, 어깨를 펴고, 상사다운 말투를 흉내 내 봅니다.\n\n하지만 어딘가 어색합니다. 선배 노릇을 하는 그 모습이 자꾸만 어려 보입니다.\n\n그럴 수밖에요. 시큐리티엑스에서 계급도, 나이도 가장 아래인 사람은 사실 사원이니까요. 그리고 사원이 열심히 가르치고 있는 그 인턴은, 육군 대위였습니다.",
        },
      ],
    },
  ],
  requests: [
    {
      text: "없음",
      level: "필수",
    },
    {
      text: "없음",
      level: "요청",
    },
    {
      text: "없음",
      level: "권고",
    },
    {
      text: "없음",
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
  fanNote: "팬들은 사원에게서 '나랑 똑같다'를 느낍니다. 출근하기 싫지만 출근하는 사람. 그 공감이 당신의 가장 큰 무기입니다.",
};
