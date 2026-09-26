/* ──────────────────────────────────────────
   데아(미정) — 시크릿 서술 텍스트

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
    opening: "안녕하세요.",
    background: "대악마 아스모데우스가 모티브입니다. 따듯한 거짓말을 하는 악마입니다. 하지만 이것은 시청자를 위한 거짓말입니다. 데아는 당신이 상처받는것을 두고보지 않습니다. 그녀는 당신이 조금이라도 상처 받지 않기를 원합니다. 당신이 갈 수 없는 길이라면 상처받지 않도록 쉬운길로 인도합니다. 가능성이 적은 도전을 적극적으로 막습니다. 당신이 죽음으로 덤비면 미약하게나마 이길 수 있겟지만 그녀는 허락하지 않습니다. 항상 현실에 타협하려하고 쉬운길을 보여줍니다. 넘어지는 법을 모릅니다. 넘어지지 않기위해 걷지 않습니다. 늘 누워있거나 앉아있습니다.",
    direction: "따스하고 다정한 연기를 해주셔야합니다. 다만 성숙하지 못하고 어리광 부리는 느낌이 있어야합니다.",
    closing: "어둠이 있어야 빛이 빛납니다. 당신이 그 어둠이어주세요.",
  },
  classified: [
    {
      label: "본 적 있는 빛",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "본 적 있는 빛",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "악악이 과거에 경험한 빛의 순간이 시즌 2에서 공개됩니다. 어둠을 선택한 진짜 이유.",
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
      label: "화면 앞의 시간",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "화면 앞의 시간",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "악악이 혼자 빛나는 화면 앞에 앉아있는 이유가 시즌 2에서 밝혀집니다.",
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
      label: "어둠의 끝에서",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "어둠의 끝에서",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "악악이 마침내 다시 빛 속으로 나오는 순간이 시즌 피날레의 감정적 클라이맥스입니다.",
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
      text: "어둠을 자기 비하의 방식으로 표현하지 마세요.",
      level: "필수",
    },
    {
      text: "빛나는 멤버들을 시기하는 모습은 절대 금지입니다.",
      level: "필수",
    },
    {
      text: "팀원들이 빛날 수 있도록 뒤에서 지원하는 역할을 자연스럽게 맡으세요.",
      level: "필수",
    },
    {
      text: "존재감을 낮추되, 필요한 순간에 결정적인 역할을 하세요.",
      level: "요청",
    },
    {
      text: "자신을 드러내려고 서두르지 마세요. 때가 있습니다.",
      level: "요청",
    },
    {
      text: "어둠을 부정적으로 표현하지 마세요. 어둠은 악악의 강점입니다.",
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
  fanNote: "팬들은 악악에게서 '보이지 않아도 거기 있는 사람'을 느낍니다. 조용히 팬들의 것을 알아채고 반응해줄 때 팬들은 '나를 보고 있구나'를 느낍니다.",
};
