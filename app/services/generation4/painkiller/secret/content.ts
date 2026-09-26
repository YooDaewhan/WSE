/* ──────────────────────────────────────────
   페인킬러 — 시크릿 서술 텍스트

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
    background: "페인 킬러는 다른 정령들과다르게 다른 세계관에서 온 신의 사자입니다.생긴것은 섬뜩하지만 신중에서 유일하게 인간에 친화적입니다. 사실 본인은 인간이란 존재에 별로 흥미가없지만 신이 인간을 돕기위해 보냈습니다. 시간이 지나며 인간을 알아갑니다. 페인킬러는 아픔을 잊게해줍니다. 단 잊게한느것이지 아픔을 치유해 주는것은 아닙니다.",
    direction: "이미 지나간 과거에 묶여있어도 송용없어 과거의 기억이 발목을 잡는다면 잊게해줄게 새롭게 아나가는거야. 기억은 좋으면서도 나쁠 수도 있고 잊고싶은 기억이지만, 중간에 가장 행복했던 기억이 끼어있을 수도있습니다.",
    closing: "페인킬러를 능력을 너무 자주 이용하진 마세요. 좋은기억도 가져가 버릴수도있습니다.",
  },
  classified: [
    {
      label: "사실 고통을 느낌",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "사실 고통을 느낌",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "기억만 지우는것",
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
      label: "결말",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "결말",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "나중엔 행복햇던 기억이있어 지우지 못하게됩니다. 결국 고통스러운기억을 잊지 않기로합니다. 다시말해 고통을 이기고 페인킬러의 능력에 의지하지 않고 이겨낸거죠, 페인길러는 대견하면서도 아련한 표정으로 말합니다. 성장했구나.",
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
          body: "원래라면 셀러브레이터와 뭐 해야하는데 독자 이벤트 있을수있음",
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
      text: "자신의 아픔을 공개적으로 크게 드러내지 마세요. 아직 그 시간이 아닙니다.",
      level: "필수",
    },
    {
      text: "팀원의 아픔을 가볍게 여기는 발언은 절대 금지입니다.",
      level: "필수",
    },
    {
      text: "팀원의 힘든 순간을 먼저 알아채고 조용히 곁에 있어주세요.",
      level: "필수",
    },
    {
      text: "자신의 아픔에 대해서는 가볍게, 남의 아픔에 대해서는 진지하게 반응하세요.",
      level: "요청",
    },
    {
      text: "치유는 말보다 행동임을 보여주세요.",
      level: "요청",
    },
    {
      text: "너무 완벽한 치유자처럼 보이지 마세요. 인간적인 결함이 있어야 합니다.",
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
  fanNote: "팬들은 페인킬러에게서 '나의 아픔도 알아줄 것 같은 사람'을 느낍니다. 팬들의 힘든 이야기에 진심으로 반응해줄 때 가장 강력한 연결이 생깁니다.",
};
