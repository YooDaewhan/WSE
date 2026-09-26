/* ──────────────────────────────────────────
   아자젤라(미정) — 시크릿 서술 텍스트

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
    opening: "반갑습니다.",
    background: "악마 아자젤이 모티브입니다. 아자젤은 희생양이라는 설정이 있습니다. 인간에게 지식을 준 댓가로 벌은 받느것입니다. 우리의 아자젤은 악마에서 천사가된 컨셉입니다. 본래 악마였던 아자젤라는 악마의 편안한만 안주하다 소중한 사람을 잃거나, 돌이킬수 없는 기회를 잃어 (사연 미정) 더 이상 눈먼 현실에 안주해서는 안된다는것을 깨닿고 스스로 날개를 자르고 천계로가 천사의 지위를 받습니다. 본래 악마의 편안함을 추구하던 성격에서 천사의 노력과 열정의 필요성을 어필하는 캐릭터여야합니다.",
    direction: "본성은 유약하고 쉽게 포기합니다. 하지만 그럴때마다 그래서는 안된다고 되뇌이며 스스로를 복돋는 모습을 보여주어야합니다.",
    closing: "두번 다시 그렇게 어이없이 잃어버리진 않겠어.",
  },
  classified: [
    {
      label: "선택한 순간",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "선택한 순간",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "사연미정",
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
      label: "날개 없음",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "날개 없음",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "청악은 날개가 없습니다. 천계는 고지식하기 때문에 악마를 쉽게 신뢰하지 않습니다. 악마의 날개가 뽑힌 채로 남아있습니다. 천계에서 차별과 핍박을 받지만 포기하지 않습니다. 유약한 그녀의 성격을 생각하면 의외의 일입니다. 찢어진 날개는 그녀의 단단한 의지를 보여줍니다.",
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
      text: "미정",
      level: "필수",
    },
    {
      text: "미정",
      level: "요청",
    },
    {
      text: "뒷모습을 보여달라는 요청을 최대한 거부해주세요. 어색하게 거절하면 좋습니다.",
      level: "권고",
    },
    {
      text: "이자엘라는 자신의 몸매에대한 인식이 적습니다.",
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
  fanNote: "팬들에게 당하는 우유분단한 성격일 것 같습니다.",
};
