/* ──────────────────────────────────────────
   데아(미정) — 프로필 서술 텍스트

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
     n번째 대사 = n번째 포즈 이미지 (/images/members/akak.png, akak-2.png, akak-3.png, akak-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "조금도 상처 받지 않게하겠어.",
    "조금도 상처 받지 않게하겠어.",
    "조금도 상처 받지 않게하겠어.",
    "조금도 상처 받지 않게하겠어.",
  ],
  shortBio: "당신이 상처받지 않게합니다. 아스모데우스",
  partnerDesc: "악악이 가장 어두운 곳으로 내려갈 때 함께 있는 작은 빛.",
  birthplaceDesc: "깊은 산속, 탄광의 도시에서 태어났다. 가장 어두운 곳에서 가장 단단한 것이 나온다는 걸 안다.",

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
  fullBio: "악악은 5기의 가장 깊은 그림자다. 빛이 닿지 않는 곳을 도맡아 처리하며, 다른 멤버들이 빛날 수 있도록 어둠 속에서 뒷받침한다. 어둠이 없으면 빛도 없다는 진리를 몸소 증명하는 존재. 눈에 띄지 않지만 가장 필수적인 멤버.",
  hiddenStory: "악악은 빛을 본 적이 있다. 딱 한 번, 아주 잠깐. 그래서 어둠을 선택한 것이다. 빛 속에 있으면 모든 게 보인다 — 자신의 결함도, 두려움도, 빈 곳도. 어둠 안에서는 아무것도 보이지 않는다. 그게 편했다. 그림자로 사는 것은 도망이 아니라 보호였다. 악악이 가끔 빛나는 화면 앞에 멍하니 앉아있을 때 — 아마도 그 한 번의 빛을 기억하는 것일 테다.",
};
