/* ──────────────────────────────────────────
   딸배(미정) — 시크릿 서술 텍스트

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
    opening: "합격입니다. 오디션 내내 규칙을 어긴 건 알죠? 그래서 뽑았습니다.",
    background: "딸배는 반항이 목적이 아닌 반항아입니다. 시스템에 맞지 않아서 밖에 있는 사람. 나쁜 것이 아니라 다른 것. 그 차이를 보여주는 캐릭터입니다. 자유는 의지가 아닌 어쩔 수 없음에서 시작됐지만, 그 자유를 자신의 것으로 만든 사람.",
    direction: "반항은 에너지를 낭비하지 않습니다. 딸배의 반항은 조용하고 자연스럽습니다. 큰 소리를 내지 않아도 규칙 밖에 있는 것이 느껴지도록. 자유롭지만 무책임하지 않은 것이 핵심입니다.",
    closing: "당신이 만드는 딸배의 자유가 어떤 모습일지 기대합니다.",
  },
  classified: [
    {
      label: "지키고 싶었던 규칙",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "지키고 싶었던 규칙",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "딸배가 사실 지키고 싶었던 규칙이 무엇인지 시즌 2에서 공개됩니다.",
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
      label: "새벽 신호등",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "새벽 신호등",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "딸배가 매일 새벽 혼자 하는 행동의 의미가 시즌 2에서 설명됩니다.",
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
      label: "규칙 안으로",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "규칙 안으로",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "딸배가 처음으로 스스로 규칙을 선택하는 순간이 시즌 피날레의 클라이맥스입니다.",
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
      text: "반항을 위한 반항은 하지 마세요. 이유 없는 일탈은 캐릭터를 가볍게 만듭니다.",
      level: "필수",
    },
    {
      text: "팀 전체에 피해가 되는 행동은 자유가 아닙니다.",
      level: "필수",
    },
    {
      text: "관습적인 방식 대신 자신만의 방식을 자연스럽게 선택하세요.",
      level: "요청",
    },
    {
      text: "팀 내에서 다른 의견을 낼 때 당당하게, 그러나 공격적이지 않게.",
      level: "요청",
    },
    {
      text: "다른 멤버의 방식을 공개적으로 무시하는 발언은 삼가세요.",
      level: "요청",
    },
    {
      text: "자유로운 모습 뒤의 섬세함을 가끔 드러내세요.",
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
  fanNote: "팬들은 딸배에게서 '저래도 되는구나'라는 해방감을 얻습니다. 당신의 자유로운 모습이 규칙에 지친 팬들에게 숨통을 열어줍니다.",
};
