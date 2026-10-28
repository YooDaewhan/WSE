/* ──────────────────────────────────────────
   이그나이터 — 프로필 서술 텍스트

   이 파일은 이 페이지 전용입니다.
   여기 있는 글만 고치면 이 페이지의 문구만 바뀝니다.
────────────────────────────────────────── */

/* image: 그림 경로(public 기준) — 비워 두면 이모지가 대신 들어갑니다 */
export type LoreItem = { emoji: string; title: string; body: string; image?: string | string[]; logo?: string };

import type { ProfileInfo } from "../../../components/StickyNotes";

export type ProfileContent = {
  info: ProfileInfo;
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
  /* 왼쪽 포스트잇 — 링크(비우면 "준비 중"), 노랑 INFO 팝업 내용. 정산 비율은 공통이라 여기 없음 */
  info: {
    links: { chzzk: "", x: "", youtube: "" },
    debut: "미정",
    profile: [["생일", "미정"], ["키", "미정"], ["좋아하는 것", "미정"]],
    contract: { fee: "미정", status: "협의 중" },
    schedule: [["월", "휴방"], ["화", "미정"], ["수", "미정"], ["목", "미정"], ["금", "미정"], ["토", "미정"], ["일", "미정"]],
    notices: ["방송 일정은 추후 공지됩니다."],
  },
  quote: "불꽃이 작다고 안뜨거운건 아니잖아.",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/igniter.png, igniter-2.png, igniter-3.png, igniter-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "준비가 안 됐다고? 준비된 사람은 원래 없어.",
    "불꽃이 작다고 안뜨거운건 아니잖아.",
    "넘어지면 어때. 불은 바닥에서도 붙거든.",
    "(손가락을 튕기며) '자, 불 붙었다.'",
    "울어? …아 진짜, 휴지 없는데. 스카잔 소매라도 써.",
    "방금 넘어진 거 아니야. 착지 연습한 거야.",
  ],
  shortBio:
    "가끔은 한 번에 불이 붙지 않을 때도 있습니다. 그럴 땐 열 번이고, 백 번이고 터뜨려서 결국 불을 붙여버립니다. 당신을요..",
  partnerDesc: "이그나이터의 첫 불씨가 꺼지지 않게 지켜주는 작은 파트너.",
  birthplaceDesc:
    "제 6도시의 D와 H구역에 영향을 끼치고 있는 탄탄한 사기업 순위 5위 기업 인시피오. 처음에는 정처없는 길거리 예술인들이 모이던 장소였지만, 하나 둘 모이면서 세력이 커져 회사처럼 되었습니다. 인시피오의 직원들은 검은 정장과 페도라를 쓰고 다니기 때문에 마피아같아 보이지만 사실은 예술인. 사실은 직원도 아닌 듯, 각자의 예술 활동을 하고있는 예술인들. 험악해 보이지만 의리 있고 친절합니다. 다른 도시보다 결집력이 높고 회사에대한 충성심이 높아보입니다.",

  /* 파트너 설정 — 그림/이름 클릭 시 뜨는 팝업. 자유롭게 고치고 늘리세요 */
  partnerLore: [
    { image: "/images/starterpack/lore/igniter-partner-1.webp", emoji: "✨", title: "설정 1", body: "내용을 채워주세요." },
    { image: "/images/starterpack/lore/igniter-partner-2.webp", emoji: "✨", title: "설정 2", body: "내용을 채워주세요." },
  ],

  /* 출생지 설정 — 그림/이름 클릭 시 뜨는 팝업. 자유롭게 고치고 늘리세요 */
  birthplaceLore: [
    { logo: "/images/starterpack/lore/incipio-logo.svg", image: ["/images/starterpack/lore/incipio-company.webp", "/images/starterpack/lore/incipio-rank-overall.svg", "/images/starterpack/lore/incipio-rank-private.svg", "/images/starterpack/lore/incipio-real-estate.svg"], emoji: "📍", title: "사기업 순위 5위 · 전체 순위 16위", body: "이 기업의 무서운 점은 무지막지한 현금 동원력입니다. 건물 수수료, 장비 대여료, 부채 등 기업이라면 당연히 있어야 할 것들이 없습니다. 가보면 붓과 종이, 물감, 심지어는 스프레이나 페인트, 고철.. 순수 사원들의 예술 작품으로 만들어지는, 원가 없는 순수 현금력이 대단합니다. 가끔은 이해할 수 없는 작품이지만 예술성을 인정받아 엄청난 돈을 벌어들입니다. 또한 예전부터 가지고 있던 부동산들의 가격이 엄청나게 뛰어올라 알짜배기 부동산도 다수 보유. 유사시 동원 가능한 현금력이 대기업 못지않습니다." },
    { image: "/images/starterpack/lore/incipio-logo.png", emoji: "📍", title: "인시피오의 수장", body: "인시피오의 수장은 바로 이그나이터의 어머니입니다. 이그나이터와 같은 은발에 수려한 외모, 그녀를 보면 이그나이터의 얼굴이 어디서 왔는지 단번에 짐작할 수 있습니다. 다만 말괄량이 딸과는 달리, 어머니는 단아하고 기품 있는 사람입니다.\n\n처음부터 회사를 세우려던 것은 아니었습니다. 그녀 역시 한 명의 예술인으로 활동하며 가난한 예술가와 도움이 필요한 사람들을 하나둘 거두었을 뿐인데, 그 수가 점점 늘어나다 보니 어쩌다 회사가 되어버린 것이죠." },
    { image: ["/images/starterpack/lore/incipio-staff.webp", "/images/starterpack/lore/incipio-staff-bright.webp"], emoji: "📍", title: "아가씨와 삼촌들", body: "인시피오의 직원들은 이그나이터를 친조카처럼 아낍니다. 위험한 짓을 하지 못하도록 경호원처럼 따라다니며 \"아가씨\"라고 부르고, 이그나이터는 그들을 \"삼촌\"이라고 부릅니다. 답답함을 못 이긴 이그나이터는 매번 도망쳐 어디선가 사고를 치지만, 그때마다 믿음직한 삼촌들이 달려와 구해줍니다. 생긴 건 험악해도, 다들 착한 사람들이랍니다." },
  ],
  fullBio:
    "시끄럽고 과격하지만 여러분들의 시작을 알리는 역할을 맡았습니다. 할 수 있는 거라곤 작은 스파크를 터트리는것이 전부지만, 그 정도로도 당신의 이야기를 시작하기에 충분합니다. 불이 약해지더라도 다시 한 번 터트리면 됩니다. 이그나이터와 함께 시작할 당신의 이야기를 기대하고 있습니다.",
  hiddenStory:
    "이그나이터가 처음 불꽃을 피운 건 혼자였다. 아무도 없는 연습실 밤 11시, 누구에게 보여줄 필요도 없이 혼자서 시작했다. 그 불꽃이 꺼지지 않도록 매일 밤 혼자 다시 켜왔다는 사실을 아는 사람은 없다. 남들에게 보이는 열정의 이면에는, 꺼질까 봐 두려운 밤들이 쌓여 있다. 점화자의 가장 큰 비밀 — 그는 자신의 불꽃이 가장 먼저 꺼질까 봐 겁난다.",
};
