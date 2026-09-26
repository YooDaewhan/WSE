/* ──────────────────────────────────────────
   앵커 — 시크릿 서술 텍스트

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
    opening: "합격을 알립니다. 앵커는 팀에서 가장 흔들리지 않아야 하는 포지션입니다. 그 무게를 이해하시리라 믿습니다.",
    background: "앵커의 프로필은 물속으로 가라앉듯 거꾸로 되어있습니다. 하지만 자세히 보면 옷이나 머리카락의 흔들림이 평온하죠. 사실거꾸로 보이는 이유는 유저의 시선이 거꾸로이기 때문입니다. 유저는 사실 높은곳에서 투신하여 떨어지는중 앵커를 보게된것입니다. 앵커의 능력은 닻을 발에 거는것입니다. 부정적인 느낌이지만 바닥으로 떨어지는, 심해로 가라앚는 우리의 발에 닻을 묶어 반대로 즉 위로 끌어올리는 컨셉입니다.",
    direction: "무미건조한 시크하지만 귀여운타입이면 좋습니다. 설정은 시청자가 미래에 구해줄 아이입니다. 이 아이 역시 힘들어 몸을 던졋지만 시청자가 구해줬기때문에, 미래로 와서 시청자를 구하는컨셉",
    closing: "거꾸로 있는건 내가 아니라 너야",
  },
  classified: [
    {
      label: "거꾸로 있는건 내가 아니라 너야",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "거꾸로 있는건 내가 아니라 너야",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "프로필의 비밀은 앵커가 거꾸로있는것이아니라 시청자가 거꾸로있는것입니다.",
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
      label: "닻",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "닻",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "닻을 걸어 심해로 끌어들이는 부정적인 느낌이 첫인상이여야합니다. 음침한느낌",
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
          body: "1주년때 길을잃고 가라앉고있는 네비게이터를 구할 수 있습니다.",
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
      text: "과하게 감정적인 반응은 캐릭터에 맞지 않습니다.",
      level: "필수",
    },
    {
      text: "팀이 흔들릴 때 가장 먼저 안정감 있는 발언을 하세요.",
      level: "필수",
    },
    {
      text: "감정적인 상황에서도 냉정함을 유지하는 모습을 보여주세요.",
      level: "요청",
    },
    {
      text: "팀의 결정을 지지하고 실행하는 데 가장 믿음직한 모습을 보여주세요.",
      level: "요청",
    },
    {
      text: "팀 내 갈등에서 어느 한쪽 편을 드는 모습은 피하세요.",
      level: "요청",
    },
    {
      text: "존재감을 강하게 드러내려 하지 마세요. 앵커는 보이지 않아도 있는 사람입니다.",
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
  fanNote: "팬들은 앵커에게서 '저 사람은 절대 안 변할 것 같다'는 안정감을 얻습니다. 변함없는 모습, 일관된 태도가 팬들에게 가장 큰 신뢰입니다.",
};
