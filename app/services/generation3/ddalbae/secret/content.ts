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
          title: "2. 자격",
          emoji: "🔒",
          body: "딸배는 사실 규칙을 지키고 싶었습니다. 누구보다 간절하게.\n\n하지만 규칙을 지킬 자격이 있는 사람들의 세계에 자기 자리는 없다고 느꼈습니다. 그렇다면 차라리 규칙 밖에 있는 게 낫겠다고 생각했죠.\n\n그러니까 딸배의 자유는 선택이 아니었습니다. 밀려난 자리에서 시작된 것이었습니다.",
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
          title: "2. 빨간불",
          emoji: "🔒",
          body: "마지막 배달을 끝낸 새벽. 차 한 대 지나가지 않는 텅 빈 사거리.\n\n낮에는 콜 하나라도 더 잡으려고 달리던 딸배가, 이 시간엔 빨간불 앞에서 오토바이를 세웁니다. 아무도 보지 않는데도.\n\n초록불이 켜질 때까지, 딸배는 가만히 기다립니다. 이유는 묻지 마세요.",
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
          title: "2. 결말 스포 주의",
          emoji: "🔒",
          body: "결말은 이미 정해져 있습니다. 결국 이깁니다.\n\n규칙 밖에서만 달리던 배달 알바생이 마지막에 시원하게 한 방 먹이는 이야기. 삼류 청춘만화처럼 뻔한 전개라는 걸 모두 알지만, 우리는 그 장면을 보려고 끝까지 봅니다.\n\n그 한 방이 어떤 모습일지는 아직 봉인되어 있습니다.",
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
          body: "딸배의 변신 모습은 네온사인 거리를 질주하는 '바람의 라이더'입니다.",
        },
        {
          title: "2. 바람의 라이더",
          emoji: "🔒",
          body: "배달통을 단 낡은 오토바이, 땀에 젖은 헬멧, 거치대에서 울리는 콜 알림.\n\n그 오토바이가 네온사인으로 물든 밤거리에 들어서는 순간, 딸배는 바람이 됩니다. 일상복에서 영웅 모드로 넘어가는 그 전환이 변신의 핵심입니다.\n\n변신 시퀀스는 시즌 2 '히어로 변신' 컨텐츠에서 공개됩니다.",
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
  fanNote: "팬들은 딸배에게서 '저래도 되는구나'라는 해방감을 얻습니다. 당신의 자유로운 모습이 규칙에 지친 팬들에게 숨통을 열어줍니다.",
};
