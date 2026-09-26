/* ──────────────────────────────────────────
   홍길동 — 시크릿 서술 텍스트

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
    opening: "합격을 진심으로 축하드립니다. 중책을 맡기게 되어 감사하면서도 죄송합니다.",
    background: "이름에서 예상 가시다시피 홍길동은 흑인 홍길동이 모티브입니다. [유쾌한 흑인], [홍길동], [기가차드] 인종차별 논란이 있을것같아 우선 피부색은변경하지 않았습니다. 인종차별 논란이 없다면 [흑길동]이라는 이름 을 사용 할 것입니다. 흑길동은 어려서 홍판서에게 입양되었습니다. 홍판서는 사실 대범한 인물이라 흑길동을 차별없이 키웠으나 사회의 분위기상 어쩔수 없이 호부호형을 못하게 했습니다. 다행히도 흑길동은 그런 홍판서덕에 긍적적이며 굳세게 자랐습니다. 홍길동은 신분과 인종 차별을 극복하였습니다. 우리 연기자 께서 해주 셔야 할것은 이런 세상에 지지 않고 역경과 고난을 이겨내 결국 왕이 되는 모습을 보여주셔야합니다.",
    direction: "방송중엔 한국말이 익숙 하지 않은 외국인 발음을 의도해주셔야 합니다. 가끔 영어 또는 콩글리시를 사용하여 웃음을 주면 좋습니다. 또한 긴급한 상황이나 당황했을때 유창한 한국어가 나와도 재미있을 것 같습니다. 또한 모티브가 기가차드 이기때문에 시청자들의 고민이나 힘든점을 잘 보고 있다가 가끔은 진지하면서도 유쾌하게 상담해주셨으면 좋겠습니다. 홍길동전에서 아시다시피 형을 형이라 부르지 못하기때문에 형을 bro 라고 부릅니다.",
    closing: "[흑길동] 캐릭터는 기수중 가장 어려운 난이도를 가지고 있습니다. 영어와 흑인개그를 적절히 사용해야하고, 무겁지 않으면서 센스있는 명언도 날려줘야합니다. 밈 또한 많이 알아야합니다.",
  },
  classified: [
    {
      label: "탄생 비화",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "탄생 비화",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "사실 홍판서가 흑길동을 입양하게된것은 아직 미정이지만 흑길동의 부모를 홍판서가 죽이거나 노예로 팔거나 했는데 나중에 흑길동을 발견하여 연민에 의해 그를 거둔것입니다.",
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
      text: "항상 인종차별 이슈에 각별히 주의해야합니다.",
      level: "필수",
    },
    {
      text: "없음",
      level: "요청",
    },
    {
      text: "노래를 해야한다면 신나는 흑인 음악쪽이 어떨지",
      level: "권고",
    },
    {
      text: "어눌한 발음에 중간중안 영어를 섞거나 쌈@뽕, 쌍너메거 같은 밈을 잘 사용해주세요.",
      level: "권고",
    },
    {
      text: "미정",
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
  fanNote: "[기가차드] 처럼 시청자들의 고민을 재치있게 해결해주면 좋겟습니다.]",
};
