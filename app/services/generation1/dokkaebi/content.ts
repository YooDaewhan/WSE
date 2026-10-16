/* ──────────────────────────────────────────
   도깨비(미정) — 프로필 서술 텍스트

   이 파일은 이 페이지 전용입니다.
   여기 있는 글만 고치면 이 페이지의 문구만 바뀝니다.
────────────────────────────────────────── */

export type LoreItem = { emoji: string; title: string; body: string };

export type ProfileContent = {
  quote: string;
  lines: string[];
  shortBio: string;
  partnerDesc: string;
  birthplaceDesc: string;
  partnerLore: LoreItem[];
  birthplaceLore: LoreItem[];
  fullBio: string;
  hiddenStory: string;
};

export const content: ProfileContent = {
  quote: "날이 좋아서..",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다. 조심하세요 다정함도 홀림이에요
     n번째 대사 = n번째 포즈 이미지 (/images/members/dokkaebi.png, dokkaebi-2.png, dokkaebi-3.png, dokkaebi-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "봄이 왔다 해도 아직 너에게는 이르다.",
    "네가 웃으니 꽆이 피는 것 같구나.",
    "한 번만 더 웃어주겠느냐.",
    "네가 잠든 동안 나는 여기 있겠다.",
    "머리에 꽃잎이 앉았구나.",
    "천천히 오너라.",
    "탈을 쓴 나를 보더라도 기억해다오.",
    "꿈에서도 너를 지키마.",
  ],
  shortBio: "오래전 도깨비",
  partnerDesc: "낡은 부지깽이의 주인.",
  birthplaceDesc:
    "호수와 산이 어우러진 자연 속에서 자유분방한 영혼이 자라났다.",

  /* 파트너 설정 — 그림/이름 클릭 시 뜨는 팝업. 자유롭게 고치고 늘리세요 */
  partnerLore: [
    { emoji: "✨", title: "설정 1", body: "내용을 채워주세요." },
    { emoji: "✨", title: "설정 2", body: "내용을 채워주세요." },
    { emoji: "✨", title: "설정 3", body: "내용을 채워주세요." },
  ],

  /* 출생지 설정 — 그림/이름 클릭 시 뜨는 팝업. 자유롭게 고치고 늘리세요 */
  birthplaceLore: [
    { emoji: "📍", title: "설정 1", body: "내용을 채워주세요." },
    { emoji: "📍", title: "설정 2", body: "내용을 채워주세요." },
    { emoji: "📍", title: "설정 3", body: "내용을 채워주세요." },
  ],
  fullBio:
    "도깨비에게 뿔이 달려있을 거라고 생각하나요? 저도 그런 줄로만 알았어요.  갓 쓰고 도포 입은 선비가 다정하게 말을 걸어온다면 조심하세요. 친절하고 다정해서 예상치 못하게 마을을 놓죠. 또 미소는 얼마나 밝은지, 의심조차 못했어요. ",
  hiddenStory:
    "도깨비가 가장 예측하지 못하는 것은 바로 자기 자신이다. 그는 잠들기 전 매일 일기를 쓰는데, 다음 날 아침 읽어보면 자신이 쓴 것 같지 않다고 느낀다. 어떤 날은 무섭도록 냉정하고, 어떤 날은 아이처럼 무너진다. 그 어떤 예측도 틀리지 않는 와일드카드가 유일하게 틀리는 예측이 있다면 — 내일의 자신이 어떤 모습일지다. 어쩌면 예측 불가는 강함이 아니라, 스스로도 모르는 두려움의 다른 이름일지 모른다.",
};
