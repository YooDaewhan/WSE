/* ──────────────────────────────────────────
   포스포라 미카 — 프로필 서술 텍스트

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
  quote: "소중한 것들을 지켜야만 해.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/mika.png, mika-2.png, mika-3.png, mika-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "주저하지 마라. 내가 너와 함께하니까",
    "담대해져. 시련이 결코 너를 이기지 못하도록 할게.",
    "고개 들어. 넌 이 정도로 지지 않아.",
    "두려워하지 마라. 내가 있잖아.",
    "할 수 있다. 내가 봤으니까 확실해.",
    "똑바로 서. 넌 생각보다 훨씬 강하니까.",
    "오늘의 너, 꽤 멋있었다. 기억해 둬.",
  ],
  shortBio:
    "필사적으로 앞으로 나아가지만 뭘 위해서, 어딜 보며 나아가는지 잊어버렸어.",
  partnerDesc:
    "이만과 합의하지 말라. 스스로 한계와 합의하지말라, 스스로 실패와 협의하지말라.",
  birthplaceDesc:
    "새로 태어난 도시에서 자랐다. 천천히 만들어지는 것의 가치를 누구보다 잘 아는 사람.",

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
    "천계의 빛은 너무 밝아서 누구를 지키려 했는지는 빛 속에서 하얗게 바래 버렸다. 무엇을 위해 날아올랐는지는 잊었지만, 날개는 여전히 앞을 향하고 있다. 그녀가 잊어버린 이름을 부르는 이는, 이제 밤하늘에만 남아 있다.",
  hiddenStory:
    "포스포라 미카의 느림은 선택이 아니다. 한때 너무 빨리 달렸다가 크게 다쳤다. 그 이후로 속도를 잃었고, 잃은 속도를 '철학'으로 바꾸었다. 빛은 서두르지 않는다고 말하지만, 사실 서두를 수가 없는 것이다. 그리고 그것이 오히려 맞는 방향이었다는 걸 — 지금은 안다. 상처가 가르쳐준 리듬. 포스포라 미카는 자신의 빛이 원래부터 있던 게 아니라, 부서진 자리에서 새어나온 것임을 조용히 알고 있다.",
};
