/* ──────────────────────────────────────────
   티티 — 프로필 서술 텍스트

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
  quote: "조금도 상처 받지 않게하겠어.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/titi.png, titi-2.png, titi-3.png, titi-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "조금도 상처 받지 않게하겠어.",
    "저런, 세상이 너에게 너무 많은 걸 바라네. 나는 네가 웃기만 하면 되는데.",
    "어머, 오늘도 아무것도 못 했다고? 누나랑 있었잖니.",
    "상처받지 않는 길이 없다면, 가지 않아도 돼.",
    "포기한 게 아니야. 안 가기로 한 거지. 그렇지?",
    "옳지. 오늘도 잘 버텼네. 기특해라.",
    "내일 하자. 내일도 안 하면 모레 하고.",
  ],
  shortBio: "당신이 상처받지 않게합니다. 티아마트 발레나 '티티' 데 아비소",
  partnerDesc: "티티가 가장 어두운 곳으로 내려갈 때 함께 있는 작은 빛.",
  birthplaceDesc:
    "깊은 산속, 탄광의 도시에서 태어났다. 가장 어두운 곳에서 가장 단단한 것이 나온다는 걸 안다.",

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
    "티티는 5기의 가장 깊은 그림자다. 빛이 닿지 않는 곳을 도맡아 처리하며, 다른 멤버들이 빛날 수 있도록 어둠 속에서 뒷받침한다. 어둠이 없으면 빛도 없다는 진리를 몸소 증명하는 존재. 눈에 띄지 않지만 가장 필수적인 멤버.",
  hiddenStory:
    "티티는 빛을 본 적이 있다. 딱 한 번, 아주 잠깐. 그래서 어둠을 선택한 것이다. 빛 속에 있으면 모든 게 보인다 — 자신의 결함도, 두려움도, 빈 곳도. 어둠 안에서는 아무것도 보이지 않는다. 그게 편했다. 그림자로 사는 것은 도망이 아니라 보호였다. 티티가 가끔 빛나는 화면 앞에 멍하니 앉아있을 때 — 아마도 그 한 번의 빛을 기억하는 것일 테다.",
};
