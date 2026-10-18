/* ──────────────────────────────────────────
   알바(미정) — 시크릿 서술 텍스트

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
    background: "알바는 고깃집알바입니다. 토도로키 쇼토가 모티브입니다. 설거지와 숯갈이 불과 얼음. 알바썰만이 준비해주세요 짠내나게해주세요",
    direction: "추후추가",
    closing: "시청자들이 공감되게 추후추가",
  },
  classified: [
    {
      label: "아무에게도 말하지 않은 한 달",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "아무에게도 말하지 않은 한 달",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "MCM 합류 전 한 달의 기록이 시즌 2에서 공개됩니다. 아무에게도 말하지 않았던 시간.",
        },
        {
          title: "2. 괜찮아요",
          emoji: "🔒",
          body: "그 한 달 동안 알바는 자주 끼니를 걸렀습니다. 고깃집에서 하루 종일 고기 굽는 냄새를 맡으면서도, 정작 자기 밥은 챙기지 못했죠.\n\n\"밥은 먹고 다니냐?\"\n\"네, 먹었어요. 괜찮아요.\"\n\n거짓말이었습니다. 어디서든 살아남는 법은 알았지만, 누군가에게 도와달라고 말하는 법은 배운 적이 없었습니다.\n\n지금도 누가 손을 내밀면, 알바는 아주 잠깐 굳습니다.",
        },
      ],
    },
    {
      label: "고깃집 알바생",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "고깃집 알바생",
          emoji: "🔒",
          body: "알바의 1화는 고깃집 알바생입니다. 숯을 갈고, 불판을 닦고, 끝없이 설거지를 하는 사람. 어디서나 흔히 보는, 조금은 짠내 나는 사람입니다.",
        },
        {
          title: "2. 마감 후",
          emoji: "🔒",
          body: "손님이 다 빠져나간 밤 열한 시. 불판 위에는 눌어붙은 기름이, 개수대에는 산처럼 쌓인 그릇이 남아 있습니다.\n\n숯불 앞에서 하루 종일 땀을 흘린 손을 이번엔 찬물에 담급니다. 뜨거웠다가, 차가웠다가. 알바의 하루는 늘 그렇게 끝납니다.\n\n옷에 밴 고기 냄새는 집에 가서 빨아도 잘 빠지지 않습니다. 그래도 알바는 내일 또 앞치마를 맵니다.",
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
          image: "", /* 예: "/images/page-1.png" */
          body: "토도로키 쇼토가 모티브입니다. 설거지와 숯갈이",
        },
        {
          title: "2. 얼음과 불",
          emoji: "🔒",
          body: "한 손엔 숯불의 열기, 다른 한 손엔 설거지물의 냉기.\n\n매일 밤 고깃집에서 번갈아 견뎌 온 뜨거움과 차가움이, 변신하는 순간 그대로 힘이 됩니다. 숯을 갈던 손에서 불꽃이, 그릇을 헹구던 손에서 얼음이 피어오르는 '얼음불 영웅'.\n\n변신 시퀀스는 시즌 2 '히어로 변신' 컨텐츠에서 공개됩니다.",
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
  fanNote: "팬들은 알바에게서 '나랑 같은 사람'을 느낍니다. 완벽하지 않아도, 화려하지 않아도 매일 살아가는 모습이 그들에게 가장 큰 위로입니다.",
};
