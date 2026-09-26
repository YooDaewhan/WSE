/* ──────────────────────────────────────────
   도깨비(미정) — 시크릿 서술 텍스트

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
    opening: "도깨비는 지옥을 기어올라온 무시무시한 복수귀입니다.",
    background: "큰키, 수려한 외모, 호탕한 성격을 가진 전형적인 훈남형의 뿔이 없는 한국형 도깨비 입니다. 매게채는 '부지깽이' 입니다. 도깨비는 가난한 집안에서 태어났지만 강한 힘과 실력으로 무관이 되어 벼슬길에 나가게됩니다. 하지만 권력에 눈이 멀어 가난하던 시절 자신만을 아껴주었던 누나를 파렴치한 관리에게 시집 가게합니다. 이후 그 관리와 적이되어 관리를 사형시키고 그 가족들을 노비로 만듭니다. 그과정에서 자신의 누나도 노예가 되었지만 성공을 위해 그것을 못본척합니다. 그의 누나는 온갖고생을하며 딸을 낳았지만 비참하게 죽게되고 그녀의 딸 역시 종살이를 면치 못합니다. 도깨비는 죄책감과 후회로 그녀의 자손들을 지키기로 맹세합니다. 맹세때문에 죽은 후에도 지옥에서 기어나와 맹세를 지키려고합니다. 다만 처음엔 지옥에서 나온 부작용으로 기억을 잃고 악귀로서 이승을 떠돕니다, 그녀의 후손인 아이의 피로 부지깽이에 깃들게 되어, 도깨비로 현현합니다.",
    direction: "스윗하게연기해주세요.",
    closing: "드라마의 공유처럼 스윗하게연기해주세요. 미형의 캐릭터이며, 능글맞은 성격을 연기해야합니다. 여심저격 목표",
  },
  classified: [
    {
      label: "복수귀",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "복수귀",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "겉모습은 스윗한 신사, 선비지만 사실은 복수귀입니다. 한달에 1주일, 복수귀의 모습으로 방송해야합니다. 첫 방송 이후 아무 공지 없이 복수귀로 방송을 켜게 됩니다. 눈치껏 잘 해명해주세요.",
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
      label: "검의 달인",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "검의 달인",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "지옥을 거꾸로올라올만큼 강한 악귀입니다. 하지만 매우 추악하게 생겻음. 탈을 쓰고 킨타쿤테, 그리고 캔파치의 만해 해방을 참고하여 팔다리는 얇은 거미에 거대한칼을 든 기괴한모습",
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
      label: "스윗하고도",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "스윗하고도",
          emoji: "🔒",
          image: "", /* 예: "/images/page-1.png" */
          body: "스윗하고 능글 맞은 모습을 연기하지만 사실은 죄책감으로 누이의 자손을 찾아 지키기 위해 지옥을 올라온 것입니다. 무의식적으로 누이의 자손을 찾는데 집착해야하고, 그녀를 위해서 모든것을 바치며 집착합니다.",
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
      text: "일관된 루틴을 공개적으로 보여주지 마세요. 예측 가능성을 깨세요.",
      level: "필수",
    },
    {
      text: "팬들의 예상을 주기적으로 뒤집어주세요. 패턴이 생기면 깨세요.",
      level: "요청",
    },
    {
      text: "진지한 순간을 너무 오래 유지하지 마세요.",
      level: "요청",
    },
    {
      text: "자신의 행동에 대해 설명을 요구받으면 더 혼란스러운 대답으로 응하세요.",
      level: "권고",
    },
    {
      text: "다른 멤버들과의 케미에서 예상치 못한 조합을 먼저 시도해보세요.",
      level: "권고",
    },
    {
      text: "스스로 '와일드카드'라는 말을 직접 하지 마세요.",
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
  fanNote: "팬들은 도깨비에게서 예측할 수 없는 즐거움을 원합니다. 그들이 '다음엔 뭘 할까'를 기대하게 만드는 것이 당신의 역할입니다.",
};
