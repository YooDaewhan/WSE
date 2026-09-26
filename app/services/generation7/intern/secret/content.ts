/* ──────────────────────────────────────────
   인턴 — 시크릿 서술 텍스트

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
    background: "막내캐릭터입니다. 하지만 원가 짬이 느껴짐",
    direction: "배우는 척하되, 이미 알고 있는 눈빛이 가끔 보여야 합니다. 막내의 겸손함과 경험자의 내공이 동시에 느껴지도록. 성장할 때마다 주변이 놀라게 만드세요.",
    closing: "처음이 아니지만 처음처럼. 그것이 인턴의 진짜 시작입니다.",
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
          body: "육군 대위, 테러집단 아지트 침투 작전에서, 부상당한 동료를 버리지 못하고 구하려다, 적의 폭탄에 무너지는 건물에 깔려 두개골, 왼쪽 어깨, 오른쪽 다리 파손.",
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
      text: "처음부터 너무 많은 것을 보여주지 마세요. 단계적으로.",
      level: "필수",
    },
    {
      text: "성장 속도를 보여주는 것이 핵심입니다. 매번 발전하는 모습을.",
      level: "필수",
    },
    {
      text: "선배 멤버들에게 배우는 자세를 보여주되, 자신의 실력도 자연스럽게 드러내세요.",
      level: "요청",
    },
    {
      text: "막내지만 팀에 기여하는 순간들을 만들어가세요.",
      level: "요청",
    },
    {
      text: "선배들 앞에서 자신의 경험을 드러내는 것은 아직 이릅니다.",
      level: "권고",
    },
    {
      text: "막내 이미지에 갇히지 마세요. 언제든 돌파할 준비를 하세요.",
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
  fanNote: "팬들은 인턴에게서 '성장을 보는 재미'를 느낍니다. 당신이 단계적으로 발전하는 모습을 지켜보는 것 자체가 팬들에게 큰 즐거움입니다.",
};
