/* ──────────────────────────────────────────
   편돌이(미정) — 시크릿 서술 텍스트

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
    opening: "합격을 알립니다.",
    background: "히어로즈는 시청자들을 투영한 캐릭터입니다. 진부하고 가난한연기해주세요. 머리나쁜연기해주세요 추후추가",
    direction: "가난 서사 필요합니다. 알바 썰 많이알아두세요. 추후추가",
    closing: "당신이 매일 그 자리에 있어주는 것만으로도 충분합니다. 추후추가",
  },
  classified: [
    {
      label: "야간 카운터",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "야간 카운터",
          emoji: "🔒",
          body: "편돌이의 1화는 편의점 야간 알바생입니다. 영웅이라 부르기엔 너무 평범하고, 조금 모자라고, 꽤 가난한 사람. 이 이야기는 거기서 시작합니다.",
        },
        {
          title: "2. 새벽 세 시의 편의점",
          emoji: "🔒",
          body: "새벽 세 시. 형광등 소리만 웅웅거리는 편의점에 손님은 없습니다.\n\n편돌이는 유통기한이 지난 도시락을 폐기 바구니에 담다가, 하나를 슬쩍 계산대 밑으로 내려놓습니다. 오늘 저녁입니다.\n\n아까 거스름돈을 잘못 내줘서 손님한테 한 소리 들었습니다. 이번 달 시급을 머릿속으로 계산해 보다가, 그만둡니다. 계산할수록 초라해지니까요.\n\n그래도 내일 밤 열 시가 되면, 편돌이는 또 이 카운터 뒤에 서 있을 겁니다.",
        },
      ],
    },
    {
      label: "결말 스포 주의",
      emoji: "🔒",
      /* 이 챕터의 페이지들 — 모달에서 화살표로 넘깁니다. 더 붙이려면 여기에 추가 */
      pages: [
        {
          title: "결말 스포 주의",
          emoji: "🔒",
          body: "편돌이의 이야기가 어떻게 끝나는지는 이미 정해져 있습니다. 결국 이깁니다.",
        },
        {
          title: "2. 그 장면을 보려고",
          emoji: "🔒",
          body: "\"마치 삼류 청춘만화 같은 전개네요.\"\n\"응. 우린 그걸 보려고 보는 거잖아.\"\n\n별 볼 일 없고 찌질했던 주인공이 마지막에 시원하게 한 방 먹이는 이야기. 결말은 누구나 압니다. 그래도 끝까지 보는 이유는 하나입니다. 이 힘없고 나약한 주인공이 어떻게 마지막에 한 방을 먹이는지, 그 장면을 보기 위해서.\n\n편돌이가 그 한 방을 어디서, 어떻게 날리는지는 아직 봉인되어 있습니다.",
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
          body: "편돌이의 변신 모습은 지적인 프로그래머 같은 영웅입니다.",
        },
        {
          title: "2. 로그인",
          emoji: "🔒",
          body: "바코드를 찍던 손가락이 키보드 위에 올라가면, 전혀 다른 속도로 움직이기 시작합니다.\n\n포스기 화면 대신 검은 터미널이 열리고, 계산대 뒤의 야간 알바생은 사이버전의 영웅이 됩니다. 일상복에서 영웅 모드로 넘어가는 그 순간이 변신의 핵심입니다.\n\n변신 시퀀스는 시즌 2 '히어로 변신' 컨텐츠에서 공개됩니다.",
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
  fanNote: "팬들은 편돌이에게서 '항상 거기 있어줄 것 같은 사람'을 느낍니다. 꾸준한 활동, 변함없는 태도가 팬들에게 가장 큰 안정감입니다.",
};
