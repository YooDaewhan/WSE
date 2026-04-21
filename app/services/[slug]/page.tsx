"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";

/* ── 전체 크리에이터 데이터 ── */
const allCreators: Record<
  string,
  {
    name: string;
    emoji: string;
    role: string;
    generation: string;
    teamName: string;
    gradient: string;
    quote: string;
    shortBio: string;
    partner: { name: string; animal: string; emoji: string; desc: string };
    birthplace: string;
    birthplaceDesc: string;
    fullBio: string;
    hiddenStory: string;
  }
> = {
  /* ── 1기 새벽조 ── */
  honggildong: {
    name: "홍길동",
    emoji: "⚔️",
    role: "Pioneer",
    generation: "1기",
    teamName: "새벽조",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    quote: "Ayo, 왓썹 bro.",
    shortBio:
      "오브콜스 형제여, 네가 말한것 처럼 세상은 불합리할지도 모르지. 하지만 그 사실을 당당하게 마주하고 삶은 이어가는건 오직 용감한 인간만이 할 수 있는 일이지. 난 네 심장보다도 가까운곳에서 널 지켜볼테니까. 기적같은 하루가 널 기다리고 있어.",
    partner: {
      name: "Bro",
      animal: "여우",
      emoji: "🦊",
      desc: "홍길동은 시청자들을 형제 라고 부릅니다.",
    },
    birthplace: "활빈당",
    birthplaceDesc:
      "(임시)대한민국의 수도 서울에서 태어나 거친 도시의 에너지를 흡수하며 성장했다. 빠르게 변화하는 환경 속에서 적응력과 개척 정신을 키웠다.",
    fullBio:
      "(임시)홍길동은 MCM의 시작과 함께한 오리지널 멤버다. 누구보다 먼저 도전했고, 누구보다 많이 실패했지만, 결코 멈추지 않았다. 그의 개척 정신은 이후 모든 기수의 기반이 되었으며, '길이 없으면 만들면 된다'는 그의 철학은 MCM의 핵심 가치가 되었다.",
    hiddenStory:
      "홍길동은 가명이다. MCM에 합류하기 전, 그는 전혀 다른 이름과 얼굴로 살고 있었다. 왜 이름을 바꿨는지, 원래 이름이 무엇인지 — 아는 사람은 단 한 명뿐이며, 그조차 입을 열지 않는다. '홍길동'이라는 이름을 선택한 이유도, 첫날 밤 무대 뒤에서 혼자 중얼거린 말도 모두 기록에 남아있지 않다. 길을 만들기 전에, 그는 먼저 자신을 지웠다.",
  },
  naesi: {
    name: "내시",
    emoji: "📜",
    role: "Strategist",
    generation: "1기",
    teamName: "새벽조",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    quote: "황송하옵니다~~~ 에예",
    shortBio: "조선을 팔도로 나눈다면 자네는 18검정도 되겠구먼",
    partner: {
      name: "내서",
      animal: "올빼미",
      emoji: "🦉",
      desc: "밤새 편지를 나르는 내시의 눈과 귀.",
    },
    birthplace: "미정",
    birthplaceDesc:
      "화성의 성곽이 둘러싼 역사의 도시에서 자랐다. 고요한 성벽 안에서 치밀한 전략적 사고를 자연스럽게 체득했다.",
    fullBio:
      "내시는 무대 위의 화려함보다 무대 뒤의 정교한 설계를 선택한 인물이다. 모든 프로젝트의 기획 단계에서 그의 손길이 닿지 않은 곳이 없으며, 팀원들이 최고의 퍼포먼스를 발휘할 수 있도록 뒤에서 모든 것을 조율한다. 조용하지만 가장 영향력 있는 존재.",
    hiddenStory:
      "내시는 동시에 두 팀을 위해 움직이고 있었다. 어느 쪽도 눈치채지 못했고, 내시 본인도 어느 순간부터 어느 쪽이 진짜 자신인지 알 수 없게 되었다. 그가 설계한 전략 중 일부는 의도적으로 실패하도록 짜여 있었다 — 누구를 위해서인지는, 지금도 알 수 없다. 내시의 서랍 속에는 한 번도 실행되지 않은 계획서가 있다. 그 마지막 줄에는 단 한 문장만 적혀있다. '이건 나를 위한 것이다.'",
  },
  dokkaebi: {
    name: "도깨비",
    emoji: "👹",
    role: "Wildcard",
    generation: "1기",
    teamName: "새벽조",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    quote: "날이 좋아서..",
    shortBio: "오래전 도깨비 ",
    partner: {
      name: "깨비",
      animal: "너구리",
      emoji: "🦝",
      desc: "도깨비의 장난에 가장 먼저 합류하는 말썽 공범.",
    },
    birthplace: "강원도 춘천시",
    birthplaceDesc:
      "호수와 산이 어우러진 자연 속에서 자유분방한 영혼이 자라났다.",
    fullBio:
      "도깨비는 이름 그대로 예측할 수 없는 존재다. 모두가 A를 예상할 때 B를 선택하고, 불가능하다고 여겨진 일을 가능하게 만드는 와일드카드. 위기 상황에서 가장 빛나는 유형.",
    hiddenStory:
      "도깨비가 가장 예측하지 못하는 것은 바로 자기 자신이다. 그는 잠들기 전 매일 일기를 쓰는데, 다음 날 아침 읽어보면 자신이 쓴 것 같지 않다고 느낀다. 어떤 날은 무섭도록 냉정하고, 어떤 날은 아이처럼 무너진다. 그 어떤 예측도 틀리지 않는 와일드카드가 유일하게 틀리는 예측이 있다면 — 내일의 자신이 어떤 모습일지다. 어쩌면 예측 불가는 강함이 아니라, 스스로도 모르는 두려움의 다른 이름일지 모른다.",
  },
  pagyeseung: {
    name: "후테이 센지",
    emoji: "🔥",
    role: "Breaker",
    generation: "1기",
    teamName: "새벽조",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    quote: "매국노 민족반역자",
    shortBio: "어이 조무래기들 모여서 뭣들하는거야. 조용히 아침이나 기다리라고",
    partner: {
      name: "조무래기",
      animal: "인간",
      emoji: "🐯",
      desc: "힘없는 민초",
    },
    birthplace: "총독부(주장)",
    birthplaceDesc: "기밀",
    fullBio: "기밀",
    hiddenStory:
      "파계승이 부순 것들 중 가장 오래된 것은 자기 자신에게 세웠던 약속이다. '절대 타협하지 않겠다'는 그 맹세는, 어느 날 밤 말없이 깨어졌다. 무엇을 위해서였는지, 그는 아직도 스스로에게 말하지 못한다. 혁명가의 가장 큰 적은 낡은 세계가 아니라, 자신이 혁명하지 못한 내면이라는 것을 그는 알고 있다. 파계(破戒) — 그가 부순 계율 중 하나는 남들 것이 아니었다.",
  },
  /* ── 2기 스타터팩 ── */
  igniter: {
    name: "이그나이터",
    emoji: "🔥",
    role: "Igniter",
    generation: "2기",
    teamName: "스타터팩",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    quote: "불꽃을 점화하는 자. 모든 시작은 여기서.",
    shortBio: "뜨거운 열정으로 팀의 엔진에 불을 붙이는 점화자.",
    partner: {
      name: "이기",
      animal: "불도롱뇽",
      emoji: "🦎",
      desc: "이그나이터의 첫 불씨가 꺼지지 않게 지켜주는 작은 파트너.",
    },
    birthplace: "대전광역시",
    birthplaceDesc:
      "대한민국의 과학 수도에서 태어나 끊임없는 실험 정신과 불꽃 같은 열정을 키웠다.",
    fullBio:
      "이그나이터는 이름 그대로 모든 것의 시작점이다. 새로운 프로젝트 앞에서 가장 먼저 불꽃을 피우는 사람. 그의 열정은 전염성이 있어서, 그가 움직이면 주변 모두가 따라 움직인다. 2기 스타터팩의 핵심 동력.",
    hiddenStory:
      "이그나이터가 처음 불꽃을 피운 건 혼자였다. 아무도 없는 연습실 밤 11시, 누구에게 보여줄 필요도 없이 혼자서 시작했다. 그 불꽃이 꺼지지 않도록 매일 밤 혼자 다시 켜왔다는 사실을 아는 사람은 없다. 남들에게 보이는 열정의 이면에는, 꺼질까 봐 두려운 밤들이 쌓여 있다. 점화자의 가장 큰 비밀 — 그는 자신의 불꽃이 가장 먼저 꺼질까 봐 겁난다.",
  },
  navigator: {
    name: "네비게이터",
    emoji: "🧭",
    role: "Navigator",
    generation: "2기",
    teamName: "스타터팩",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    quote: "방향을 잡고 길을 제시하는 항해사.",
    shortBio: "혼란 속에서도 정확한 방향을 찾아내는 나침반.",
    partner: {
      name: "알버트",
      animal: "비둘기",
      emoji: "🕊️",
      desc: "네비게이터보다 먼저 길을 정찰하고 돌아오는 전서구.",
    },
    birthplace: "인천광역시",
    birthplaceDesc:
      "바다로 나가는 관문 도시에서 자라며 항해와 방향 감각에 대한 본능을 키웠다.",
    fullBio:
      "네비게이터는 팀이 길을 잃었을 때 가장 빛나는 존재다. 목표를 설정하고, 최적의 경로를 찾아내며, 팀 전체를 올바른 방향으로 이끈다. 감정에 휘둘리지 않는 냉철한 판단력이 그의 가장 큰 무기.",
    hiddenStory:
      "네비게이터는 한 번 완전히 길을 잃었다. MCM 합류 직전, 어느 도시의 골목에서 사흘을 헤맸다. GPS도, 지도도 없이. 그 사흘이 그를 나침반으로 만들었다. 지금도 그는 새로운 장소에 가면 의도적으로 길을 잃는다. 방향을 잃어본 사람만이 진짜 방향을 줄 수 있다는 것을 — 그는 그 골목에서 배웠다. 그 도시 이름은 아직도 밝히지 않는다.",
  },
  celebrator: {
    name: "셀러브레이터",
    emoji: "🎉",
    role: "Celebrator",
    generation: "2기",
    teamName: "스타터팩",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    quote: "성공을 축하하고 에너지를 끌어올리는 분위기 메이커.",
    shortBio: "모든 순간을 축제로 만드는 에너지 폭탄.",
    partner: {
      name: "봉봉이",
      animal: "호박벌",
      emoji: "🐝",
      desc: "셀러브레이터 주변을 돌며 축하를 퍼뜨리는 달콤한 꿀벌.",
    },
    birthplace: "광주광역시",
    birthplaceDesc:
      "예향의 도시에서 자라며 사람들과 어울리고 분위기를 끌어올리는 타고난 재능을 발휘했다.",
    fullBio:
      "셀러브레이터는 팀의 사기를 책임지는 존재다. 작은 성과도 크게 축하하고, 실패한 순간에도 다시 일어설 힘을 불어넣는다. 2기의 활력소이자 영혼.",
    hiddenStory:
      "셀러브레이터는 혼자 있을 때 운다. 파티가 끝나고, 환호가 잦아들고, 문이 닫히면 — 그 자리에 남아 조용히 운다. 슬퍼서가 아니다. 그냥, 너무 오래 웃어서. 다른 사람의 기쁨을 자기 것처럼 함께 빛내주는 동안, 자신의 것은 어디에 두어야 할지 몰라서. 파티의 주인공이 가장 외로운 사람이라는 역설 — 셀러브레이터는 그걸 알지만, 내일도 풍선을 불 것이다.",
  },
  /* ── 3기 히어로즈 ── */
  alba: {
    name: "알바",
    emoji: "💼",
    role: "Hustler",
    generation: "3기",
    teamName: "히어로즈",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    quote: "어디서든 살아남는 생존왕. 현장의 달인.",
    shortBio: "어떤 상황에서든 적응하고 살아남는 궁극의 서바이버.",
    partner: {
      name: "알밤이",
      animal: "다람쥐",
      emoji: "🐿️",
      desc: "알바와 함께 이리저리 뛰어다니는 부지런한 동행.",
    },
    birthplace: "경상남도 창원시",
    birthplaceDesc:
      "산업의 중심지에서 태어나 다양한 현장 경험을 쌓으며 생존 능력을 키웠다.",
    fullBio:
      "알바는 3기 히어로즈의 생존 전문가다. 어떤 환경이든 적응하고 성과를 만들어낸다. 화려하지 않지만 가장 현실적이고 실용적인 접근 방식으로 팀에 기여한다.",
    hiddenStory:
      "알바가 가장 힘들었던 '알바'는 누군가에게 도움을 요청하는 일이었다. MCM에 오기 전, 그는 한 달 동안 끼니를 굶으면서도 아무에게도 말하지 않았다. 생존의 달인이지만 도움받는 법은 배우지 못했다. 지금도 팀원이 손을 내밀면 잠깐 굳는다. 그 0.5초의 정지 — 아무도 눈치채지 못하는 그 순간이, 알바의 가장 긴 싸움이다.",
  },
  pyeondori: {
    name: "편돌이",
    emoji: "🏪",
    role: "Keeper",
    generation: "3기",
    teamName: "히어로즈",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    quote: "365일 24시간. 멈추지 않는 편의점의 수호자.",
    shortBio: "쉬지 않고 묵묵히 자리를 지키는 든든한 존재.",
    partner: {
      name: "편순이",
      animal: "펭귄",
      emoji: "🐧",
      desc: "24시간 편의점 냉장고 옆을 지키는 단정한 카운터 지킴이.",
    },
    birthplace: "대구광역시",
    birthplaceDesc: "뜨거운 분지의 도시에서 인내심과 끈기를 배웠다.",
    fullBio:
      "편돌이는 팀에서 가장 안정적인 존재다. 누가 보지 않는 곳에서도 묵묵히 자신의 역할을 수행한다. 화려하지 않지만 그가 없으면 팀이 돌아가지 않는다.",
    hiddenStory:
      "편돌이는 가끔 사라진다. 아무 말 없이, 아무 흔적 없이. 24시간 자리를 지키는 것으로 유명하지만, 그 사이사이 아무도 모르는 1시간이 있다. 그 시간 동안 그가 어디 있는지, 무엇을 하는지 — 팀 내에서 아는 사람이 없다. CCTV를 확인해도 나오지 않는다고 한다. 편의점의 수호자는 자신만의 비밀 공간이 있다. 그곳에서 그는, 아마도 처음으로 아무것도 지키지 않는다.",
  },
  ddalbae: {
    name: "딸배",
    emoji: "🚬",
    role: "Rebel",
    generation: "3기",
    teamName: "히어로즈",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    quote: "자유로운 영혼. 틀에 얽매이지 않는 반항아.",
    shortBio: "세상의 규칙에 얽매이지 않는 자유로운 영혼.",
    partner: {
      name: "딸콩이",
      animal: "제비",
      emoji: "🐦",
      desc: "딸배 뒤에 붙어 도로 위를 함께 가르는 자유로운 동행.",
    },
    birthplace: "제주특별자치도",
    birthplaceDesc:
      "바람과 바다의 섬에서 태어나 누구의 간섭도 받지 않는 자유로운 기질을 가지게 되었다.",
    fullBio:
      "딸배는 어떤 틀에도 갇히지 않는다. 그의 자유분방함은 단순한 반항이 아니라, 기존의 방식으로는 풀 수 없는 문제를 해결하는 열쇠가 된다. 3기의 자유 정신을 대표하는 인물.",
    hiddenStory:
      "딸배는 사실 규칙을 지키고 싶었다. 누구보다 간절하게. 하지만 규칙을 지킬 자격이 있는 사람들의 세계에 자신은 없다고 느꼈고, 그렇다면 규칙 밖에 있는 게 낫겠다고 생각했다. 자유는 선택이 아니라 배제에서 시작된 것이다. 가끔 딸배는 아무도 없는 새벽에 신호등 앞에 멈춰 초록불이 켜질 때까지 기다린다. 이유를 묻지 말 것.",
  },
  pyegeubibyeong: {
    name: "폐급이병",
    emoji: "🎖️",
    role: "Survivor",
    generation: "3기",
    teamName: "히어로즈",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    quote: "바닥을 찍어본 자만이 아는 성장의 비밀.",
    shortBio: "최저점에서 시작해 누구보다 높이 올라간 성장형 인물.",
    partner: {
      name: "폐리",
      animal: "달팽이",
      emoji: "🐌",
      desc: "폐급이병과 함께 바닥부터 천천히 기어오르는 끈기의 동반자.",
    },
    birthplace: "충청북도 청주시",
    birthplaceDesc:
      "내륙 깊숙한 곳, 조용한 도시에서 묵묵히 자신만의 시간을 쌓아왔다.",
    fullBio:
      "폐급이병은 바닥에서 시작한 사람이다. 실패를 두려워하지 않는 이유는 이미 바닥을 경험했기 때문이고, 포기하지 않는 이유는 올라갈 곳밖에 남지 않았기 때문이다. 3기의 성장 서사를 상징한다.",
    hiddenStory:
      "폐급이병의 바닥은 아직 끝나지 않았을 수도 있다. 그는 매일 아침 '오늘은 올라갔나'를 확인한다. 어떤 날은 맞다. 어떤 날은 또 내려간다. 성장 서사에서 빠진 챕터가 있다 — 올라가다가 다시 떨어지는 날들. 그 날들에 그는 아무에게도 연락하지 않는다. 혼자 버틴다. 그게 습관이 되어버렸고, 그게 가장 무서운 일이라는 것을, 본인은 아직 모른다.",
  },
  /* ── 4기 레스큐팩 ── */
  helldiver: {
    name: "헬다이버",
    emoji: "🪂",
    role: "Vanguard",
    generation: "4기",
    teamName: "레스큐팩",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    quote: "내 이름을 불러줘",
    shortBio: "네가 있는곳이 지옥이라면서 어째서 주저 앉아 있는거야",
    partner: {
      name: "헬비",
      animal: "매",
      emoji: "🦅",
      desc: "헬다이버가 강하하는 곳에 먼저 도착해 있는 공중 정찰.",
    },
    birthplace: "울산광역시",
    birthplaceDesc:
      "거대한 산업 시설과 바다 사이에서 자란 그는 위험과 함께하는 삶에 익숙하다.",
    fullBio:
      "헬다이버의 이름을 세번 부르면 언제 어디서 든 당신을 구하러, 아마도? 당신위로 떨어집니다. 하하 헬다이버의 이름이 뭐냐구요? 그것은 직접 물어보세요.",
    hiddenStory:
      "헬다이버가 뛰어드는 이유는 두려움 때문이다. 두려우면 먼저 뛰어들면 사라진다는 것을 어린 시절 배웠다. 그것이 용기가 아니라 공황에 가까운 반응이라는 걸 — 그는 알고 있다. 가장 위험한 곳에 가장 먼저 들어가는 사람의 얼굴에 공포가 없어 보이는 이유는, 이미 너무 빨리 움직이기 때문에 공포를 느낄 틈이 없어서다. 멈추면 무너질 것 같아서, 그는 오늘도 뛰어든다.",
  },
  anchor: {
    name: "앵커",
    emoji: "⚓",
    role: "Anchor",
    generation: "4기",
    teamName: "레스큐팩",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    quote: "거꾸로 있는건 내가아니야. 네가 뒤집혀있는거야.",
    shortBio: "추후 수정.",
    partner: {
      name: "앵꼬",
      animal: "거북이",
      emoji: "🐢",
      desc: "앵커가 흔들릴 때 가장 먼저 자리 잡아주는 느린 단단함.",
    },
    birthplace: "전라남도 목포시",
    birthplaceDesc:
      "서남쪽 바다의 도시에서 태어나 파도에도 흔들리지 않는 닻의 정신을 체득했다.",
    fullBio:
      "앵커는 이름 그대로 팀의 닻이다. 모든 것이 흔들리고 무너질 때, 그는 절대 움직이지 않는다. 가장 조용하지만 가장 강한 멤버.",
    hiddenStory:
      "앵커가 흔들린 날이 딱 한 번 있었다. 그날 이후로 그는 앵커가 되었다. 흔들리지 않는 게 아니라, 다시는 흔들리지 않겠다고 결심한 것이다. 그날 무슨 일이 있었는지는 기록에 없다. 단 하나의 단서가 있다면 — 그의 왼쪽 손목 안쪽에 새겨진 작은 문자. 누가 물어보면 '오래된 것'이라고만 한다. 닻은 바닥에 묶여있다. 그 바닥이 무엇인지, 아무도 모른다.",
  },
  painkiller: {
    name: "페인킬러",
    emoji: "💊",
    role: "Healer",
    generation: "4기",
    teamName: "레스큐팩",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    quote: "아픔을 치유하고 다시 일어서게 만드는 존재.",
    shortBio: "아픔을 잊게해줍니다.",
    partner: {
      name: "페니",
      animal: "토끼",
      emoji: "🐰",
      desc: "페인킬러의 손끝에서 먼저 위로받는 작은 치유자.",
    },
    birthplace: "전라북도 전주시",
    birthplaceDesc:
      "맛과 정이 넘치는 도시에서 자라며 사람의 마음을 어루만지는 따뜻함을 배웠다.",
    fullBio:
      "페인킬러는 레스큐팩의 치유자다. 강함은 싸우는 것만이 아니라 다시 일어서는 것이라는 걸 몸소 보여주는 인물. 4기의 따뜻한 심장.",
    hiddenStory:
      "페인킬러는 자신의 아픔을 치료하지 않는다. 남의 상처를 매일 어루만지면서, 정작 자신의 것은 오래된 채로 놔두었다. 어떤 상처인지는 본인도 잘 모른다 — 너무 오래 방치해서 감각이 없어진 것이다. 약을 가장 잘 아는 사람이 가장 약을 안 먹는다는 것. 치유자에게 치유자가 없다는 것. 그것이 페인킬러의 유일한, 그리고 가장 오래된 통증이다.",
  },
  /* ── 5기 빛과 그림자 ── */
  cheoncheon: {
    name: "미카엘라",
    emoji: "☀️",
    role: "Light",
    generation: "5기",
    teamName: "빛과 그림자",
    gradient: "from-slate-600 via-gray-700 to-zinc-900",
    quote: "소중한 것들을 지켜야만 해.",
    shortBio:
      "필사적으로 앞으로 나아가지만 뭘 위해서, 어딜 보며 나아가는지 잊어버렸어.",
    partner: {
      name: "이만",
      animal: "'이만 하면' 의 이만",
      emoji: "🦌",
      desc: "이만과 합의하지 말라. 스스로 한계와 합의하지말라, 스스로 실패와 협의하지말라.",
    },
    birthplace: "천계",
    birthplaceDesc:
      "새로 태어난 도시에서 자랐다. 천천히 만들어지는 것의 가치를 누구보다 잘 아는 사람.",
    fullBio:
      "천천은 이름처럼 서두르지 않는다. 하지만 그가 한 번 내딛는 발걸음은 절대 헛되지 않는다. 조급함 속에서도 자신의 페이스를 잃지 않는 것, 그것이 천천의 빛이다. 5기의 방향등이자 첫 번째 빛.",
    hiddenStory:
      "천천의 느림은 선택이 아니다. 한때 너무 빨리 달렸다가 크게 다쳤다. 그 이후로 속도를 잃었고, 잃은 속도를 '철학'으로 바꾸었다. 빛은 서두르지 않는다고 말하지만, 사실 서두를 수가 없는 것이다. 그리고 그것이 오히려 맞는 방향이었다는 걸 — 지금은 안다. 상처가 가르쳐준 리듬. 천천은 자신의 빛이 원래부터 있던 게 아니라, 부서진 자리에서 새어나온 것임을 조용히 알고 있다.",
  },
  cheongak: {
    name: "아자젤라(미정)",
    emoji: "🌓",
    role: "Dusk",
    generation: "5기",
    teamName: "빛과 그림자",
    gradient: "from-slate-600 via-gray-700 to-zinc-900",
    quote: "주저 앉아 기도하는건 그만. 일어서서 걸어가야해.",
    shortBio: "회계천사. 아자젤. 더 이상 기다리지 않아.",
    partner: {
      name: "청이",
      animal: "고양이",
      emoji: "🐱",
      desc: "청악과 함께 경계 위를 오가는 양면의 동반자.",
    },
    birthplace: "마계",
    birthplaceDesc:
      "천년 고도의 빛과 그림자가 교차하는 도시. 오래된 것과 새로운 것 사이에서 균형을 배웠다.",
    fullBio:
      "청악은 맑은 하늘(청)과 악(악)의 사이에 선 인물이다. 어느 한쪽으로도 완전히 기울지 않으며, 상황에 따라 빛이 되기도 그림자가 되기도 한다. 이 이중성이야말로 5기의 핵심 테마를 가장 잘 체현하는 존재.",
    hiddenStory:
      "청악이 경계에 서 있는 건 양쪽을 모두 원하기 때문이 아니다. 어느 쪽도 선택할 수 없기 때문이다. 선이 되면 잃는 것이 있고, 악이 되면 잃는 것이 있다. 그 사이에서 그는 그냥 서 있다. 황혼은 가장 아름다운 시간이지만, 동시에 가장 짧은 시간이다. 청악은 그 황혼 위에 평생 발을 딛고 있다. 안정적인 것처럼 보이지만, 발바닥이 조금씩 타들어가고 있다는 사실을 아무도 모른다.",
  },
  akcheon: {
    name: "루시아(미정)",
    emoji: "🌓",
    role: "Storm",
    generation: "5기",
    teamName: "빛과 그림자",
    gradient: "from-slate-600 via-gray-700 to-zinc-900",
    quote: "더 이상 무리해서 스스로를 태우지마.",
    shortBio: "타락천사. 루시퍼",
    partner: {
      name: "악까",
      animal: "까마귀",
      emoji: "🐦‍⬛",
      desc: "추후추가",
    },
    birthplace: "천계",
    birthplaceDesc:
      "서해안의 거친 바람과 안개 속에서 악천후와 싸우며 자랐다. 나쁜 날씨는 그에게 일상이다.",
    fullBio:
      "악천은 폭풍 그 자체다. 모두가 피하는 최악의 상황 속으로 들어가 그 한가운데에서 답을 찾아낸다. 악조건이 그를 더 강하게 만들며, 팀이 가장 힘든 순간에 가장 믿음직한 존재가 된다.",
    hiddenStory:
      "악천은 폭풍을 두려워한다. 정확히는, 폭풍이 자신 안에서 온다는 걸 알기 때문에 두렵다. 외부의 폭풍은 다룰 수 있다. 하지만 내면에서 갑자기 몰아치는 검은 감정은 — 예보도 없고, 대피소도 없다. 악천후를 헤쳐나가는 사람이 정작 자신의 내부 기상 예보에는 속수무책이라는 아이러니. 폭풍의 눈은 고요하다. 그 고요 안에 갇혀있는 것이 진짜 폭풍보다 무섭다.",
  },
  akak: {
    name: "데아",
    emoji: "🌑",
    role: "Shadow",
    generation: "5기",
    teamName: "빛과 그림자",
    gradient: "from-slate-600 via-gray-700 to-zinc-900",
    quote: "조금도 상처 받지 않게하겠어.",
    shortBio: "당신이 상처받지 않게합니다. 아스모데우스",
    partner: {
      name: "악이",
      animal: "박쥐",
      emoji: "🦇",
      desc: "악악이 가장 어두운 곳으로 내려갈 때 함께 있는 작은 빛.",
    },
    birthplace: "마계",
    birthplaceDesc:
      "깊은 산속, 탄광의 도시에서 태어났다. 가장 어두운 곳에서 가장 단단한 것이 나온다는 걸 안다.",
    fullBio:
      "악악은 5기의 가장 깊은 그림자다. 빛이 닿지 않는 곳을 도맡아 처리하며, 다른 멤버들이 빛날 수 있도록 어둠 속에서 뒷받침한다. 어둠이 없으면 빛도 없다는 진리를 몸소 증명하는 존재. 눈에 띄지 않지만 가장 필수적인 멤버.",
    hiddenStory:
      "악악은 빛을 본 적이 있다. 딱 한 번, 아주 잠깐. 그래서 어둠을 선택한 것이다. 빛 속에 있으면 모든 게 보인다 — 자신의 결함도, 두려움도, 빈 곳도. 어둠 안에서는 아무것도 보이지 않는다. 그게 편했다. 그림자로 사는 것은 도망이 아니라 보호였다. 악악이 가끔 빛나는 화면 앞에 멍하니 앉아있을 때 — 아마도 그 한 번의 빛을 기억하는 것일 테다.",
  },
  /* ── 5기 스팀팩 ── */
  sugar: {
    name: "슈거",
    emoji: "🧂",
    role: "Sugar",
    generation: "5기",
    teamName: "스팀팩",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    quote: "행복해지는 약.. 먹어볼래?",
    shortBio:
      "달콤함으로 모든 것을 녹이는 존재. 한 번 맛보면 헤어나올 수 없다.",
    partner: {
      name: "슈크림",
      animal: "토끼",
      emoji: "🐇",
      desc: "슈거가 건네는 달콤함을 가장 먼저 받아먹는 새하얀 동반자.",
    },
    birthplace: "미정",
    birthplaceDesc:
      "가장 달콤한 것들이 모이는 곳에서 태어났다. 그 달콤함이 독이 될 수 있다는 것도, 그곳에서 배웠다.",
    fullBio:
      "슈거는 스팀팩의 중심에 있는 존재다. 달콤함은 단순한 이미지가 아니라 전략이다. 사람들을 끌어당기고, 기분을 바꾸고, 세상을 조금 더 견딜 만하게 만드는 힘. 슈거는 그 힘을 가장 잘 다루는 사람이다. 행복해지는 약처럼 — 한 번 빠지면 쉽게 나오지 못한다.",
    hiddenStory:
      "슈거는 사실 단 것을 즐기지 않는다. 달콤한 것의 끝이 어떤지 너무 잘 알기 때문이다. 설탕이 녹고 나면 남는 건 텅 빈 단맛의 흔적뿐이라는 것. 그래서 슈거는 자신의 달콤함이 누군가를 망가뜨리지 않도록 항상 조심한다. 스스로를 약이라 부르지만, 그 약이 독이 되는 용량이 얼마인지 — 누구보다 정확하게 알고 있다. 달콤함을 나눠주는 사람의 가장 쓴 비밀이다.",
  },
  /* ── 6기 슈거 ── */
  holder: {
    name: "홀더",
    emoji: "🔗",
    role: "Holder",
    generation: "6기",
    teamName: "슈거",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    quote: "내가 꽉 잡고 있으니까 걱정마. 뭐든 해보자고.",
    shortBio: "안전벨트처럼 위험에 방어",
    partner: {
      name: "홀이",
      animal: "문어",
      emoji: "🐙",
      desc: "홀더가 쥔 카드 몇 장을 몰래 같이 쥐고 있는 조력자.",
    },
    birthplace: "미정",
    birthplaceDesc:
      "가장 화려한 거리에서 자랐지만, 겉과 속이 다른 세상의 이면을 일찍 깨달았다.",
    fullBio:
      "홀더는 손에 쥔 것을 절대 쉽게 내려놓지 않는다. 모든 카드를 가지고 있지만 마지막 순간까지 보여주지 않는 것이 그의 전략이다. 달콤한 미소 뒤에 날카로운 계산이 숨어있으며, 게임의 끝에서 항상 웃는 쪽은 그다. 6기 슈거의 진정한 딜러.",
    hiddenStory:
      "홀더의 손에 쥔 카드 중 하나는 비어있다. 항상 풀 덱을 쥔 것처럼 행동하지만, 사실 가장 중요한 패 하나가 오래전에 사라졌다. 그 카드가 무엇인지는 — 본인만 안다. 게임에서 항상 이기는 이유는 그 빈 자리를 절대 들키지 않기 때문이다. 마지막에 웃는 사람의 속 안에 있는 것은 승리의 확신이 아니라, 들키지 않았다는 안도감일 수도 있다.",
  },
  clover: {
    name: "클로버",
    emoji: "🍀",
    role: "Lucky",
    generation: "6기",
    teamName: "슈거",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    quote: "세잎클로버는 행복, 네잎은 행운이래. 어떤걸로 빌어줄까?",
    shortBio: "행운의 상징이 많이 있으니까 걱정없겟지?",
    partner: {
      name: "클로리",
      animal: "무당벌레",
      emoji: "🐞",
      desc: "클로버 잎 위에 앉아 행운을 두 배로 만드는 작은 동행.",
    },
    birthplace: "미정",
    birthplaceDesc:
      "대나무 숲 사이에서 자라며, 바람에 흔들려도 부러지지 않는 유연함을 배웠다.",
    fullBio:
      "클로버는 운이 좋은 사람처럼 보이지만, 그 행운의 정체는 철저한 준비와 끈기다. 실패해도 다시 일어나는 복원력이 그를 '행운아'로 만들었다. 달콤한 외면 아래 단단한 내면을 가진 6기의 숨은 에이스.",
    hiddenStory:
      "클로버는 네 잎 클로버를 찾은 적이 없다. 세 잎짜리를 찾아서, 그 위에 잎 하나를 조심스럽게 붙인 것이다. 아무도 가까이서 보지 않았다. 행운처럼 보이는 모든 것 뒤에는 그 작은 속임수가 있었다 — 나쁜 의미가 아니다. 없는 것을 있는 것처럼 만드는 힘. 그게 진짜 클로버의 재능이다. 그리고 그게 행운보다 훨씬 단단한 것임을, 가끔 본인도 잊는다.",
  },
  /* ── 7기 시큐리티엑스 ── */
  intern: {
    name: "인턴",
    emoji: "📋",
    role: "Rookie",
    generation: "7기",
    teamName: "시큐리티엑스",
    gradient: "from-blue-600 via-sky-600 to-cyan-500",
    quote: "시작은 미약하나 그 끝은 창대하리라.",
    shortBio: "아직 배우는 중이지만, 성장 속도만큼은 누구에게도 지지 않는다.",
    partner: {
      name: "인턴이",
      animal: "햄스터",
      emoji: "🐹",
      desc: "인턴과 함께 서류 더미를 굴리는 부지런한 신입 동기.",
    },
    birthplace: "경기도 성남시",
    birthplaceDesc:
      "IT 산업의 중심지에서 자라며, 디지털 세상의 빠른 변화를 몸으로 익혔다.",
    fullBio:
      "인턴은 7기의 막내이자 가장 빠르게 성장하는 멤버다. 모든 것이 새롭고 모든 것을 배우려는 열정으로 가득하다. 경험은 부족하지만 잠재력은 무한하며, 선배들의 장점을 스펀지처럼 흡수한다. 시큐리티엑스의 미래를 상징하는 신인.",
    hiddenStory:
      "인턴은 처음부터 인턴이 아니었다. 이전에 다른 팀에서 주전이었고, 그곳을 떠나 이곳에서 다시 시작하기로 선택했다. 아무에게도 말하지 않았다. 제로에서 다시 시작하는 것이 필요했다 — 이유는 아직 말하지 않는다. 막내처럼 보이는 눈빛 뒤에, 이미 한 번 정상을 본 사람의 조용한 확신이 있다. 인턴이 가장 빠르게 성장하는 이유는, 사실 처음이 아니기 때문이다.",
  },
  sawon: {
    name: "사원",
    emoji: "💻",
    role: "Worker",
    generation: "7기",
    teamName: "시큐리티엑스",
    gradient: "from-blue-600 via-sky-600 to-cyan-500",
    quote: "묵묵히 실무를 돌리는 조직의 심장.",
    shortBio: "보이지 않는 곳에서 시스템을 유지하는 실무의 달인.",
    partner: {
      name: "사원이",
      animal: "비버",
      emoji: "🦫",
      desc: "사원 곁에서 꾸준히 조직이라는 댐을 쌓는 성실파.",
    },
    birthplace: "경기도 안양시",
    birthplaceDesc:
      "평범한 도시에서 평범하지 않은 성실함을 키웠다. 매일 같은 시간에 출근하는 것의 힘을 안다.",
    fullBio:
      "사원은 조직의 실질적인 엔진이다. 화려한 타이틀은 없지만 모든 실무가 그의 손을 거친다. 시스템이 멈추지 않는 이유, 프로젝트가 마감에 맞춰지는 이유, 그 뒤에는 항상 사원이 있다. 7기의 묵묵한 심장.",
    hiddenStory:
      "사원은 퇴사를 꿈꾼다. 매일. 출근하면서도, 일하면서도, 퇴근하면서도. 하지만 다음 날 또 출근한다. 이유를 생각해보면 — 의무도 아니고, 돈도 아니고, 어쩌면 여기 없으면 어딜 가야 할지 모르기 때문인 것 같다. 시스템이 자신 없이 멈출까 봐 두려운 건지, 아니면 시스템 없이 자신이 멈출까 봐 두려운 건지. 사원은 아직 그 질문에 답하지 못했다.",
  },
  daeri: {
    name: "대리",
    emoji: "📊",
    role: "Manager",
    generation: "7기",
    teamName: "시큐리티엑스",
    gradient: "from-blue-600 via-sky-600 to-cyan-500",
    quote: "위와 아래를 잇는 다리. 실질적 중간 허리.",
    shortBio: "현장과 경영 사이에서 양쪽의 언어를 모두 구사하는 통역가.",
    partner: {
      name: "대리미",
      animal: "수달",
      emoji: "🦦",
      desc: "대리의 중재를 매끄럽게 풀어주는 유연한 중간자.",
    },
    birthplace: "서울특별시 영등포구",
    birthplaceDesc:
      "비즈니스의 중심부에서 자라며 조직의 위계와 소통의 기술을 자연스럽게 배웠다.",
    fullBio:
      "대리는 위와 아래를 연결하는 핵심 고리다. 인턴의 아이디어를 부장의 언어로 번역하고, 부장의 전략을 현장에 적용 가능한 형태로 변환한다. 가장 많은 압박을 받으면서도 가장 유연하게 대처하는 존재. 7기의 실질적 허리.",
    hiddenStory:
      "대리는 위도 아래도 아닌 — 그 어디에도 속하지 않는다고 느낀다. 다리이기 때문에 항상 밟히고, 무게를 견디고, 자신이 지탱하는 사람들에게 결코 기댈 수 없다. 퇴근 후 혼자 차 안에서 5분을 멍하니 앉아있다. 위쪽도 아래쪽도 아닌 그 5분이 하루 중 가장 자기 자신인 시간이다. 다리는 스스로 쉴 수 없다. 그게 대리의 유일한 비밀이다.",
  },
  bujang: {
    name: "부장",
    emoji: "🏛️",
    role: "Director",
    generation: "7기",
    teamName: "시큐리티엑스",
    gradient: "from-blue-600 via-sky-600 to-cyan-500",
    quote: "결정의 무게를 아는 자. 최종 방어선.",
    shortBio: "모든 책임이 모이는 곳. 최종 결정권자이자 최후의 방패.",
    partner: {
      name: "부장님",
      animal: "곰",
      emoji: "🐻",
      desc: "부장 옆에서 결정을 지키는 조용하고 든든한 최종 방어선.",
    },
    birthplace: "서울특별시 종로구",
    birthplaceDesc:
      "권력과 역사의 도시 한복판에서 자라며, 결정의 무게와 책임의 의미를 체득했다.",
    fullBio:
      "부장은 시큐리티엑스의 최종 방어선이다. 모든 결정의 무게가 그의 어깨에 실리며, 팀이 위기에 처했을 때 최후의 판단을 내린다. 경험에서 우러나온 직관과 냉철한 분석력이 그의 무기다. 7기의 든든한 방패이자 최고 결정권자.",
    hiddenStory:
      "부장은 결정의 무게가 아니라, 결정하지 못했던 순간의 무게를 안고 산다. 가장 중요했던 순간에 내린 선택 하나가 지금도 맞았는지 틀렸는지 확신이 없다. 그 결정 이후 한 명이 팀을 떠났고, 부장은 아직도 그 이름을 기억한다. 최종 방어선은 무너지지 않았다. 하지만 방어선 안쪽, 아무도 못 보는 곳에 균열이 하나 있다. 부장은 매일 그 균열을 메운다. 혼자서.",
  },
};

/* ── 페이지 인디케이터 ── */
function PageIndicator({ current }: { current: number }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {[0, 1, 2, 3, 4].map((i) => (
        <button
          key={i}
          onClick={() => {
            document
              .getElementById(`section-${i}`)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`w-2.5 rounded-full transition-all duration-500 ${
            i === current
              ? i === 4
                ? "h-8 bg-gray-800 shadow-lg ring-2 ring-gray-400"
                : "h-8 bg-gray-800 shadow-lg"
              : i === 4
                ? "h-2.5 bg-gray-500 hover:bg-gray-600"
                : "h-2.5 bg-gray-300 hover:bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
}

/* ── 메인 페이지 ── */
export default function CreatorProfile() {
  const params = useParams();
  const slug = params.slug as string;
  const creator = allCreators[slug];

  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = container.clientHeight;
      setCurrentSection(Math.round(scrollTop / sectionHeight));
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  if (!creator) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <Header />
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            크리에이터를 찾을 수 없습니다
          </h1>
          <Link
            href="/services"
            className="text-violet-600 font-semibold hover:underline"
          >
            ← 목록으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Header />
      <PageIndicator current={currentSection} />
      <Link
        href="/services"
        className="fixed top-[88px] left-6 z-50 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full text-sm font-semibold text-gray-600 hover:text-gray-900 hover:shadow-md transition-all shadow-sm"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        목록
      </Link>

      <div
        ref={containerRef}
        className="h-screen overflow-y-auto"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {/* ══ 섹션 1: 프로필 히어로 ══ */}
        <section
          id="section-0"
          className="h-screen flex items-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${creator.gradient} opacity-[0.05]`}
          />
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-white to-transparent rounded-full opacity-20 blur-[100px]" />
          <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center">
            <div className="w-full md:w-[40%] shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div
                  className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-br ${creator.gradient} shadow-2xl`}
                  style={{ aspectRatio: "3/4" }}
                >
                  <div className="absolute inset-0 bg-white/5" />
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[120px] md:text-[160px] drop-shadow-lg">
                      {creator.emoji}
                    </div>
                  </div>
                  <div className="absolute top-6 left-6 w-14 h-14 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
                  <div className="absolute bottom-6 right-6 w-14 h-14 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-center">
                    <div className="px-4 py-2 bg-black/20 backdrop-blur-md rounded-full">
                      <p className="text-white text-sm font-bold tracking-widest uppercase">
                        {creator.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-[60%] md:pl-16 mt-10 md:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${creator.gradient} text-white text-sm font-bold shadow-lg`}
                  >
                    {creator.generation} · {creator.teamName}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-none mb-4">
                  {creator.name}
                </h1>
                <blockquote className="relative my-8">
                  <div
                    className={`absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${creator.gradient}`}
                  />
                  <p className="pl-6 text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                    &ldquo;{creator.quote}&rdquo;
                  </p>
                </blockquote>
                <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                  {creator.shortBio}
                </p>
                <div className="mt-10 flex items-center gap-2 text-gray-400">
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </motion.div>
                  <span className="text-sm font-medium">
                    스크롤하여 더 알아보기
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ 섹션 2: 파트너 ══ */}
        <section
          id="section-1"
          className="h-screen flex items-center relative overflow-hidden bg-white"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className={`absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl ${creator.gradient} rounded-full opacity-[0.05] blur-[120px]`}
            />
          </div>
          <PartnerContent creator={creator} />
        </section>

        {/* ══ 섹션 3: 출생지 ══ */}
        <section
          id="section-2"
          className="h-screen flex items-center relative overflow-hidden bg-gray-50"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className={`absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr ${creator.gradient} rounded-full opacity-[0.05] blur-[120px]`}
            />
          </div>
          <BirthplaceContent creator={creator} />
        </section>

        {/* ══ 섹션 4: 자세한 설명 ══ */}
        <section
          id="section-3"
          className="h-screen flex items-center relative overflow-hidden bg-white"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className={`absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl ${creator.gradient} rounded-full opacity-[0.05] blur-[120px]`}
            />
          </div>
          <FullBioContent creator={creator} slug={slug} />
        </section>

        {/* ══ 섹션 5: 숨겨진 이야기 ══ */}
        <section
          id="section-4"
          className="h-screen flex items-center relative overflow-hidden bg-gray-950"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div
              className={`absolute -top-60 -right-60 w-[700px] h-[700px] bg-gradient-to-bl ${creator.gradient} rounded-full opacity-[0.08] blur-[140px]`}
            />
            <div
              className={`absolute -bottom-60 -left-60 w-[600px] h-[600px] bg-gradient-to-tr ${creator.gradient} rounded-full opacity-[0.06] blur-[120px]`}
            />
          </div>
          <HiddenStoryContent creator={creator} slug={slug} />
        </section>
      </div>
    </>
  );
}

/* ── 파트너 콘텐츠 ── */
function PartnerContent({
  creator,
}: {
  creator: (typeof allCreators)[string];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="max-w-6xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
          Partner
        </p>
        <div
          className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${creator.gradient} mb-10`}
        />
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2">
            <div
              className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-br ${creator.gradient} shadow-xl`}
              style={{ aspectRatio: "4/3" }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4 drop-shadow-lg">
                    {creator.partner.emoji}
                  </div>
                  <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                    <p className="text-white text-sm font-bold tracking-widest uppercase">
                      {creator.partner.animal}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-sm font-semibold text-gray-400 mb-2">
              {creator.name}의 팬네임
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
              {creator.partner.name}
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">{creator.partner.emoji}</span>
              <span
                className={`text-base font-bold bg-gradient-to-r ${creator.gradient} bg-clip-text text-transparent`}
              >
                {creator.partner.animal}
              </span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed">
              {creator.partner.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── 출생지 콘텐츠 ── */
function BirthplaceContent({
  creator,
}: {
  creator: (typeof allCreators)[string];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="max-w-6xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
          Birthplace
        </p>
        <div
          className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${creator.gradient} mb-10`}
        />
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2">
            <div
              className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-br ${creator.gradient} shadow-xl`}
              style={{ aspectRatio: "4/3" }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-3">📍</div>
                  <p className="text-white text-3xl font-extrabold">
                    {creator.birthplace}
                  </p>
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
              {creator.birthplace}
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">{creator.emoji}</span>
              <span className="text-lg font-semibold text-gray-600">
                {creator.name}의 고향
              </span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed">
              {creator.birthplaceDesc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── 자세한 설명 콘텐츠 ── */
function FullBioContent({
  creator,
  slug,
}: {
  creator: (typeof allCreators)[string];
  slug: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="max-w-5xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
          About {creator.name}
        </p>
        <div
          className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${creator.gradient} mb-10`}
        />
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-6xl mb-4 text-center">{creator.emoji}</div>
              <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-1">
                {creator.name}
              </h3>
              <p className="text-center text-sm text-gray-400 font-semibold uppercase tracking-wider mb-5">
                {creator.role}
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">기수</span>
                  <span className="text-gray-700 font-semibold">
                    {creator.generation} {creator.teamName}
                  </span>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div className="flex justify-between">
                  <span className="text-gray-400">팬네임</span>
                  <span className="text-gray-700 font-semibold flex items-center gap-1">
                    <span>{creator.partner.emoji}</span>
                    {creator.partner.name}
                  </span>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div className="flex justify-between">
                  <span className="text-gray-400">출생지</span>
                  <span className="text-gray-700 font-semibold">
                    {creator.birthplace}
                  </span>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div className="flex justify-between">
                  <span className="text-gray-400">역할</span>
                  <span className="text-gray-700 font-semibold">
                    {creator.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              {creator.name}의 이야기
            </h2>
            <p className="text-gray-600 text-lg leading-[1.9]">
              {creator.fullBio}
            </p>
            <div
              className={`mt-10 p-6 rounded-2xl bg-gradient-to-r ${creator.gradient} relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">
                  Signature Quote
                </p>
                <p className="text-white text-xl font-bold leading-relaxed">
                  &ldquo;{creator.quote}&rdquo;
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${creator.gradient} text-white font-bold shadow-lg hover:scale-105 transition-all`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                크리에이터 목록으로
              </Link>
              <button
                onClick={() =>
                  document
                    .getElementById("section-4")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-gray-300 font-bold border border-gray-700 hover:bg-gray-800 hover:scale-105 transition-all"
              >
                <span>🔒</span>
                숨겨진 이야기
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── 숨겨진 이야기 콘텐츠 ── */
function HiddenStoryContent({
  creator,
  slug,
}: {
  creator: (typeof allCreators)[string];
  slug: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const previewText = creator.hiddenStory.slice(0, 45) + "...";

  return (
    <div ref={ref} className="max-w-4xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-300"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500">
            Hidden Story
          </p>
        </div>
        <div className="w-16 h-px bg-gray-700 mb-10" />
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/3 shrink-0">
            <div
              className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900"
              style={{ aspectRatio: "3/4" }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${creator.gradient} opacity-10`}
              />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                <div className="text-6xl grayscale opacity-60">
                  {creator.emoji}
                </div>
                <div className="px-4 py-1.5 bg-gray-800/80 rounded-full border border-gray-700">
                  <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                    {creator.name}
                  </p>
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px)",
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
              {creator.name}의{" "}
              <span className="text-gray-500">숨겨진 이야기</span>
            </h2>
            <p className="text-gray-600 text-sm font-medium mb-8">
              공개된 프로필 너머, 아무도 몰랐던 진실.
            </p>
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900/60 p-6 mb-8 overflow-hidden">
              <p
                className="text-gray-400 text-base leading-relaxed select-none"
                style={{ filter: "blur(6px)" }}
              >
                {creator.hiddenStory}
              </p>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-950/40 backdrop-blur-[1px]">
                <div className="text-center">
                  <div className="text-4xl mb-3">🔒</div>
                  <p className="text-gray-400 text-sm font-semibold">
                    잠긴 내용
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic mb-8 pl-4 border-l border-gray-700">
              &ldquo;{previewText}&rdquo;
            </p>
            <Link
              href={`/services/${slug}/secret`}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-gray-900 font-extrabold text-lg shadow-2xl shadow-white/10 hover:scale-105 hover:shadow-white/20 transition-all"
            >
              <span>🗝️</span>
              숨겨진 이야기 열기
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
