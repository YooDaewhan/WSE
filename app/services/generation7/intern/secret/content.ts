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
          title: "2. 무너지는 건물",
          emoji: "🔒",
          body: "테러집단의 아지트로 들어가는 침투 작전이었습니다. 철수 신호가 떨어졌을 때, 동료 한 명이 쓰러져 일어나지 못하고 있었습니다.\n\n지휘관으로서의 판단은 분명했습니다. 남은 대원들을 데리고 빠져나가는 것. 하지만 대위는 그 동료를 두고 갈 수 없었습니다. 몸을 돌려 다시 안으로 들어갔습니다.\n\n그리고 적의 폭탄이 터졌습니다. 건물이 무너져 내렸고, 대위는 그 아래에 깔렸습니다. 두개골, 왼쪽 어깨, 오른쪽 다리. 군인으로서의 삶은 그곳에서 끝났습니다.",
        },
        {
          title: "3. 다시, 처음부터",
          emoji: "🔒",
          body: "재기불능이라는 판정을 받은 몸은 기계화 장비로 대체되었습니다. 어디까지 복원이 가능한지 확인하는 실험. 그녀는 그 실험의 대상체가 되었습니다.\n\n그리고 지금, 시큐리티엑스의 가장 막내 자리에서 하얀 장갑을 낀 손을 들어 인사합니다. \"첫 출근 잘 부탁드리겠습니다.\"\n\n아무도 묻지 않았고, 그녀도 말하지 않았습니다. 다만 배우는 척하는 그 눈빛 뒤에는, 이미 한 번 작전을 지휘해 본 사람의 조용한 확신이 남아 있습니다.",
        },
      ],
    },
    {
      label: "가장 높은 계급",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "가장 높은 계급",
          emoji: "🔒",
          body: "시큐리티엑스의 직급은 군대의 계급 순이 아닙니다. 회사에서 가장 낮은 인턴이, 사실은 가장 높은 계급이었을지도 모릅니다.",
        },
        {
          title: "2. 인턴과 대위",
          emoji: "🔒",
          body: "사원은 오늘도 선배 노릇을 합니다. 서류는 이렇게 정리하는 거야, 보고는 이렇게 올리는 거야. 인턴은 고개를 끄덕이며 받아 적습니다.\n\n사원의 계급은 소위. 부장님은 상사. 그리고 인턴은 육군 대위였습니다.\n\n언젠가 계급이 밝혀지는 날, 사무실의 공기는 조금 묘해질 것입니다. 그날까지 인턴은 막내의 얼굴로, 아무것도 모르는 척 웃고 있을 뿐입니다.",
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
  fanNote: "팬들은 인턴에게서 '성장을 보는 재미'를 느낍니다. 당신이 단계적으로 발전하는 모습을 지켜보는 것 자체가 팬들에게 큰 즐거움입니다.",
};
