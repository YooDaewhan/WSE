/* ──────────────────────────────────────────
   네비게이터 — 프로필 서술 텍스트

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
  quote: "남들이 만들어 둔 지도에 네가 가고 싶은 곳이 나와 있어?",
  /* 히어로 대사·포즈 — 카드를 누를 때마다 다음 대사로 넘어갑니다.
     n번째 대사 = n번째 포즈 이미지 (/images/members/navigator.png, navigator-2.png, navigator-3.png, navigator-4.png)
     포즈 이미지가 없으면 기본 이미지가 나옵니다. */
  lines: [
    "길 잃은 거 아냐! 처음 와 본 거지!",
    "늦긴 뭐가 늦어, 우리 약속한 데도 없잖아!",
    "폭풍을 피해 갈 길은 있어. 근데 피해갈 생각은 없어.",
    "준비됐어, 알버트? …좋아, 가자!",
    "틀린 길 같은 건 없어. 아직 안 가 본 길만 있지!",
    "오..., 너 방금 길 찾았어? 대단한데..! 이제 네가 앞장설래?",
  ],
  shortBio:
    "그럼에도 길을 자주 확인해야 합니다. 가끔은 길을 안내하고 있는 당신을 발견할 테니까요.",
  partnerDesc:
    "바보새 알버트. 네비게이커가 어깨에 올려두고 다니는 비둘기입니다. 평소 무슨생각을 하는지 알 수 없습니다. 공원에서 자주 보입니다.",
  birthplaceDesc:
    "도시의 가장 밑부분에 자리한, 갈 곳 없는 자들의 거리. 모든 도시에서 쫓겨나거나 도망친 사람들이 모여 만들어진 낙오지구입니다. 도시의 오·폐수가 흐르는 관을 따라, 조그마한 공간마다 사람들이 머물며 하나의 도시가 생겨났습니다. 관은 얼기설기 얽혀 있어, 지도가 없다면 빠져나올 수 없습니다. 사람들은 늘 힘들고 배고프지만, 서로를 도우며 살아갑니다. 언젠가 햇볕이 들 그날을 상상하면서요.",

  /* 파트너 설정 — 그림/이름 클릭 시 뜨는 팝업. 자유롭게 고치고 늘리세요 */
  partnerLore: [
    { image: "/images/starterpack/lore/navigator-partner-albert.webp", emoji: "✨", title: "바보새 알버트", body: "내용을 채워주세요." },
    { image: "/images/starterpack/lore/navigator-partner-albert-2.webp", emoji: "✨", title: "내려다보는 알버트", body: "내용을 채워주세요." },
  ],

  /* 출생지 설정 — 그림/이름 클릭 시 뜨는 팝업. 자유롭게 고치고 늘리세요 */
  birthplaceLore: [
    { logo: "/images/starterpack/lore/mousepeace-logo.svg", image: ["/images/starterpack/lore/mousepeace-company.webp"], emoji: "📍", title: "해가 들지 않는 곳", body: "도시라고 부르기도 민망한 곳. 마우스피스는 그저 도시의 폐수가 흘러나가는 하수도입니다. 이끼 낀 회색 시멘트 벽, 천장을 뒤덮은 녹슨 파이프, 이음새마다 새어 나오는 물과 증기. 집이라 해봐야 관과 관 사이에 덧댄 철판과 나무 상자가 전부입니다.\n\n이곳엔 햇빛이 닿지 않습니다. 빛이라곤 군데군데 걸린 희미한 등불과, 저 위 하수구 창살 틈으로 새어 드는 한 줄기 빛뿐. 여기서 나고 자란 아이들은 아직 한 번도 진짜 태양을 본 적이 없습니다." },
    { image: ["/images/starterpack/lore/mousepeace-logo.png", "/images/starterpack/lore/mousepeace-staff.webp", "/images/starterpack/lore/mousepeace-staff-bright.webp"], emoji: "📍", title: "묻지 않는 사람들", body: "이곳에 온 사람들에겐 저마다 사연이 있습니다. 하지만 마우스피스에선 아무도 그것을 묻지 않습니다. 하루하루가 생존인 곳에서 과거는 중요하지 않으니까요.\n\n대신 국 한 그릇을 나눠 먹고, 새는 관을 함께 막고, 길 잃은 아이는 먼저 본 사람이 집까지 데려다줍니다. 가진 건 없어도 정만큼은 어느 도시보다 끈끈한 사람들. 어디에도 속하지 못한 그들에게, 이곳은 유일하게 평화로운 곳입니다." },
  ],
  fullBio:
    "네비게이터는 사실 길 찾기에는 재능이 없습니다. 지도도 볼 줄 모르고요. 원래라면 이그나이터가 되었을 아이입니다. 어째서인지 네비게이터로 선택되었지만, 운명이 이렇게 만든 데에는 분명 이유가 있을테지요. 하지만 걱정하지 마세요. 네비게이터의 굳은 마음은 길을 잃지 않습니다. 늘 새로운 길로 나아갑니다. 물론 그 길이 평탄할지는 가 봐야 알 수 있을 것 같습니다.",
  hiddenStory:
    "네비게이터는 한 번 완전히 길을 잃었다. MCM 합류 직전, 어느 도시의 골목에서 사흘을 헤맸다. GPS도, 지도도 없이. 그 사흘이 그를 나침반으로 만들었다. 지금도 그는 새로운 장소에 가면 의도적으로 길을 잃는다. 방향을 잃어본 사람만이 진짜 방향을 줄 수 있다는 것을 — 그는 그 골목에서 배웠다. 그 도시 이름은 아직도 밝히지 않는다.",
};
