"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../../../components/Header";

type RequestLevel = "필수" | "요청" | "권고" | "인식";

/* ────────────────────────────────────────────
   기수 비밀 데이터
──────────────────────────────────────────── */
const generationSecrets: Record<
  string,
  {
    id: number;
    label: string;
    teamName: string;
    tagline: string;
    emoji: string;
    gradient: string;
    directorName: string;
    directorNote: {
      date: string;
      opening: string;
      origin: string;
      direction: string;
      closing: string;
    };
    classified: {
      unlockDate: string;
      items: { label: string; content: string }[];
    };
    operations: {
      items: { text: string; level: RequestLevel }[];
      teamNote: string;
    };
  }
> = {
  /* ─────────── 0기 새벽조 ─────────── */
  "1": {
    id: 1,
    label: "0기",
    teamName: "새벽조",
    tagline: "긴 밤을 끝내 마침내",
    emoji: "🌅",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    directorName: "김선우",
    directorNote: {
      date: "2024년 3월 1일",
      opening: "안녕하세요 반갑습니다.",
      origin:
        "새벽조는 사실 저항자입니다. 신분과 세상에 맞서는 홍길동, 운명과 죽음에 맞서는 도깨비, 신분과 능력에 맞서는 내시, 국가와 세상에 맞서는 매국노 의 컨셉입니다. 사실 웃기게 말하자면 흑인,귀신,게이,매국노 pc 조합입니다. 무에서 유를 창조해야한다는것은 쉽지않음. 여러분이 해야함. 최대한의 대우 할것임. 이름의 유래는 첫시작, 뭔가 선봉대, 수색조 같은 느낌임. 자부심을 느끼고 잘해주길바람. 세상의 온갖 억까에 맞서지만 유쾌하고 꿋꿋하게 이겨나가는 모습을 보여줘야함.",
      direction:
        "빛나는 장면을 만들면 좋음. 어둠 속에서 견디는 모습, 그 자체가 이 팀의 미학입니다. 길을 걷는 동행자처럼 거리를 유지하세요. 너무 친밀해지면 '개척'의 무게가 가벼워집니다.",
      closing: "잘 부탁드립니다.",
    },
    classified: {
      unlockDate: "2025년 3월 1일",
      items: [
        {
          label: "탈락한 4번째 멤버",
          content:
            "호테이 센지 는 의도적으로 유예됩니다. 아마 무조건 논란 날것같아서 미리 올려놓고 안올린다고함. 그리고 나중에 일본인 기수 나올때 한달이나 함께 데뷔할것임.",
        },
        {
          label: "미정",
          content: "미정",
        },
        {
          label: "미정",
          content: "미정",
        },
      ],
    },
    operations: {
      items: [
        {
          text: "남자조는 19금 발언 절대 금지입니다. 최대한 자제해주세요.",
          level: "필수",
        },
        {
          text: "다른 기수와의 비교 발언은 절대 금지입니다. 0기는 비교할 대상이 없습니다.",
          level: "필수",
        },
        {
          text: "개별 활동 시에도 '새벽조'의 정체성을 잃지 않도록 컬러 톤을 유지하세요.",
          level: "요청",
        },
        {
          text: "팬들에게 '처음'의 의미를 자주 환기시키는 코멘트가 좋습니다.",
          level: "권고",
        },
        {
          text: "공식 일러스트와 굿즈는 어두운 톤을 유지합니다. 밝은 컨셉 요청은 거절될 수 있습니다.",
          level: "인식",
        },
      ],
      teamNote:
        "새벽조의 팬덤은 '같이 어둠을 건넌다'는 정서를 공유합니다. 가벼운 이벤트보다 진지하고 의미 있는 컨텐츠에 더 큰 반응이 옵니다. 1주년 이벤트는 '동이 트는 순간'을 컨셉으로 기획 중입니다.",
    },
  },
  /* ─────────── 1기 스타터팩 ─────────── */
  "2": {
    id: 2,
    label: "1기",
    teamName: "스타터팩",
    tagline: "시작하는 우리들을 위해",
    emoji: "🔥",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    directorName: "이하늘",
    directorNote: {
      date: "2024년 6월 1일",
      opening:
        "펙으로 끝나는기수는 전속기수임. 시청자들의 서포트. 시작을 잘 할수있게해줘야해요",
      origin:
        "포켓몬스터의 초반 3마리 컨셉이. 우리가 세상에 나갈때 필요한게 뭔지 생각해봣음. 시작을 도와주고 방향을 도와주고, 함께 기뻐해줄사람잇으면 좋을거같음. 어른들의 성인동화가 컨셉임. ",
      direction:
        "스타터팩은 '귀엽게' 가야 합니다. 단, 가볍게는 아닙니다. 처음 만나는 친구의 따뜻함과 첫 모험의 설렘을 동시에 표현하세요. 멤버 간 케미는 오빠/누나/동생 구도가 아닌 동등한 친구 관계를 유지하세요.",
      closing:
        "스타터팩은 새 시청자의 입구입니다. 이 팀에서 좋은 인상을 받은 사람이 다른 기수로 넘어갑니다. 게이트키퍼라는 자부심을 가져주세요.",
    },
    classified: {
      unlockDate: "2025년 6월 1일",
      items: [
        {
          label: "1주년",
          content:
            " 1주년때 보통 비하인드 스토리 열릴거임. 우리 비하인드는 세명이 각자 멋있게 성장한 미래모습임. 단 2기 때문에 좀 부정적인 컨셉 할수있음. 아직 미정임. 열정을 다  태워버린채 지옥에 주저앉은 이그나이터 -> 헬다이버, 길을 잃고 심해에 가라앉는 네비게이터 -> 앵커, 흑화한 셀러브레이터 -> 페인킬러 인데 컨셉에 어긋나서 보류",
        },
        {
          label: "미정",
          content: "미정",
        },
        {
          label: "3주년 합본",
          content:
            "1주년에 2기와 1기 스타터팩의 크로스오버 컨텐츠가 예정되어 있습니다.",
        },
      ],
    },
    operations: {
      items: [
        {
          text: "스타터팩 멤버는 다른 기수보다 팬 소통 빈도를 높게 유지해주세요.",
          level: "필수",
        },
        {
          text: "신규 시청자가 봐도 알 수 있도록 자기 캐릭터 설명을 종종 반복해주세요.",
          level: "필수",
        },
        {
          text: "멤버 간 케미는 '친구 관계'로 유지합니다. 위계 구도는 피해주세요.",
          level: "요청",
        },
        {
          text: "게임/모험 관련 컨텐츠 시 적극적으로 클리어해주세요. 우리는 포기하면 안됩니다.",
          level: "요청",
        },
        {
          text: "미정",
          level: "권고",
        },
        {
          text: "스타터팩 굿즈는 파스텔 톤 위주로 제작됩니다. 어두운 컨셉 요청은 다른 채널로.",
          level: "인식",
        },
        {
          text: "우리는 성인을 위한 동화 컨셉입니다. 야한말 가능합니다.",
          level: "인식",
        },
      ],
      teamNote:
        "스타터팩의 팬덤은 라이트하고 활발합니다. 댓글 반응이 빠른 만큼 응답도 신속해야 합니다. 팬아트 RT, 짧은 라이브, 이모지 사용 — 가벼운 소통이 잘 먹힙니다.",
    },
  },
  /* ─────────── 2기 히어로즈 ─────────── */
  "3": {
    id: 3,
    label: "2기",
    teamName: "히어로즈",
    tagline: "언더독: 히어로즈",
    emoji: "🦸",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    directorName: "박지훈",
    directorNote: {
      date: "2024년 9월 1일",
      opening:
        "히어로즈는 시청자의 자기 투영 대상으로 기획된 첫 기수입니다. 화려한 영웅이 아니라 출퇴근하는 영웅, 알바하는 영웅. '히어로'라는 단어 앞에 어떤 수식어를 붙일지가 핵심이었습니다.",
      origin:
        "'언더독이 이긴다'는 서사는 가장 오래된 클리셰지만, 그 클리셰가 살아남은 이유는 사람들이 그 이야기를 계속 필요로 하기 때문입니다. 히어로즈는 시청자 본인의 일상에 있는 '작은 영웅 순간'을 발견하게 만드는 거울 같은 팀입니다. 알바, 편돌이, 딸배, 폐급이병 — 시청자들이 자신을 투영할 수 있도록해주세요",
      direction:
        "자신의 위치를 알지만 그것이 끝이 아니라는 것을 보여주는 캐릭터들입니다. 무멘라이더 처럼, 약하지만 포기하지 않는 모습, 짠내 알바스토리좀 준비해주세요.",
      closing:
        "히어로즈의 팬은 자기 자신을 응원하는 마음으로 이 팀을 응원합니다. 그 마음을 배신하지 마세요.",
    },
    classified: {
      unlockDate: "2025년 9월 1일",
      items: [
        {
          label: "변신 시퀀스",
          content:
            "각 멤버는 시즌 2에서 '히어로 변신' 컨셉의 컨텐츠를 진행할 예정입니다. 일상복 → 영웅 모드의 시각적 전환이 핵심. 편돌이는 -> 뭔가 사이버전 잘할거같은느낌. '프로그래머 영웅', 알바는 -> 고깃집알바 설거지와 숯 '얼음불 영웅(토도로키)', 딸배는 -> 네온사인 거리를 질주하는 라이더느낌 '바람의 라이더', 폐급이병은 -> 사실 아무 반전없는게 반전 하지만 뒤에 실루엣이 3성장군 '3성장군 아들'.",
        },
        {
          label: "히어로즈 본부",
          content:
            "히어로즈 4인의 가상 본부 설정이 진행 중입니다. 컨셉은 '폐업한 동네 슈퍼 지하실'. 1주년 합방에서 처음 공개 예정.",
        },
        {
          label: "악역 도입",
          content:
            "히어로즈에는 시즌 2부터 '빌런' 캐릭터가 도입됩니다. 빌런은 다른 기수의 멤버가 게스트로 맡을 가능성이 높으며, 후보로 5기 이퀴녹스의 데아가 거론되고 있습니다.",
        },
      ],
    },
    operations: {
      items: [
        {
          text: "자신의 캐릭터 설정 직군을 비하하는 발언은 절대 금지입니다.",
          level: "필수",
        },
        {
          text: "'바닥에서 시작한 사람'의 자존감을 항상 유지해주세요.",
          level: "필수",
        },
        {
          text: "현실 알바 경험, 직장 경험을 자연스럽게 컨텐츠에 녹여주세요.",
          level: "요청",
        },
        {
          text: "팬들의 '내 이야기' 사연에 진심으로 반응해주세요.",
          level: "요청",
        },
        {
          text: "알바썰 준비 짠내로 불쌍한척.",
          level: "권고",
        },
        {
          text: "미정",
          level: "인식",
        },
      ],
      teamNote:
        "히어로즈의 팬덤은 직장인, 알바생, 학생 등 '평범한 일상을 사는' 시청자 사람들이 주축입니다. 새벽 시간대 라이브, 출근길 짧은 컨텐츠, 점심시간 한 마디 — 일상에 스며드는 컨텐츠가 강하게 반응합니다.",
    },
  },
  /* ─────────── 3기 레스큐팩 ─────────── */
  "4": {
    id: 4,
    label: "3기",
    teamName: "레스큐팩",
    tagline: "위기의 순간, 구원의 손길",
    emoji: "🪂",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    directorName: "최민준",
    directorNote: {
      date: "2024년 12월 1일",
      opening:
        "레스큐팩은 '구하러 가는 자'들의 팀입니다. 도움이 필요한 시청자가 늘어나는 시기에 맞춰 기획된, MCM에서 처음으로 명확한 정서적 기능을 가진 기수입니다.",
      origin:
        "스타터팩에서 시작을 한 후에 위기를 도와주는 컨셉임. 시작을 했다면 고난은 뒤따르는법. 그리고 일러스트가 전원 뒤집혀있음. 헬다이버는 뒤로 뛰는거고, 앵커는 떨어지고 있는 시청자의 시점에서 보는거. 페인킬러는 나중에",
      direction:
        "레스큐팩은 '구해주는 자'의 거만함이 절대 없어야 합니다. 도움은 받는 사람을 작아지게 만들면 안 됩니다. 멤버들은 자신이 강하다는 인상보다 '먼저 손을 내미는' 편안함을 보여주세요. 헬다이버는 호탕하게, 앵커는 시크하게, 페인킬러는 무미건조하게 — 톤은 다르지만 본질은 같습니다.",
      closing:
        "레스큐팩의 팬은 실제로 힘든 순간에 이 팀을 찾습니다. 그 무게를 잊지 마세요.",
    },
    classified: {
      unlockDate: "2025년 12월 1일",
      items: [
        {
          label: "헬다이버 진명",
          content:
            "헬다이버의 진명은 본인과 디렉터, 매니저 3인만 알고 있습니다. 1주년이 지나도 공개하지 않으며, '진명을 세 번 부르면 강림'이라는 설정을 유지하기 위해서입니다.",
        },
        {
          label: "앵커 시점",
          content:
            "앵커의 프로필이 거꾸로 보이는 이유는 '시청자가 거꾸로 떨어지는 중'이라는 설정 때문입니다. 이 설정은 시즌 2 첫 화에서 본인이 직접 밝힙니다. 아닌데 데뷔때 밝힐거임",
        },
        {
          label: "셀러브레이터 페인킬러",
          content: "두개라인 컨셉이좀 다름",
        },
        {
          label: "스타터팩 크로스오버",
          content:
            "헬다이버가 1기 이그나이터를 구하러 가는 서사가 시즌 2 중반부에 등장합니다. 두 기수의 첫 공식 크로스오버.",
        },
      ],
    },
    operations: {
      items: [
        {
          text: "도움받는 사람을 가르치려는 듯한 태도는 절대 금지입니다.",
          level: "필수",
        },
        {
          text: "자신의 능력을 자랑하거나 과시하는 발언은 캐릭터에 맞지 않습니다.",
          level: "필수",
        },
        {
          text: "팬의 힘든 사연에 가벼운 반응으로 답하지 마세요.",
          level: "필수",
        },
        {
          text: "구원이 필요해 보이는 다른 기수 멤버에게 먼저 손을 내미세요.",
          level: "요청",
        },
        {
          text: "정령이라는 설정을 자주 환기시켜주세요. 인간이 아닌 존재의 시각.",
          level: "요청",
        },
        {
          text: "감정적으로 무거운 컨텐츠 후에는 라이트한 컨텐츠로 균형을 맞춰주세요.",
          level: "권고",
        },
        {
          text: "레스큐팩 컬러는 노을 톤입니다. 새벽이나 정오 컬러 요청은 거절될 수 있습니다.",
          level: "인식",
        },
      ],
      teamNote:
        "레스큐팩의 팬덤은 정서적 의존도가 높습니다. 라이브 도중 팬들의 눈물 사연이 자주 등장하므로 멤버들은 사전에 정신적 준비가 필요합니다. 멤버 케어 차원에서 라이브 후 디렉터/매니저와의 1:1 디브리핑이 권장됩니다.",
    },
  },
  /* ─────────── 4기 이퀴녹스 ─────────── */
  "5": {
    id: 5,
    label: "4기",
    teamName: "이퀴녹스",
    tagline: "당신을 위해서라면",
    emoji: "🌓",
    gradient: "from-slate-600 via-gray-700 to-zinc-900",
    directorName: "정소연",
    directorNote: {
      date: "2025년 3월 1일",
      opening:
        "이퀴녹스는 MCM에서 가장 추상적인 컨셉을 시도한 기수입니다. '균형'이라는 단어를 4명의 캐릭터로 분해해 표현한 실험적 작업입니다.",
      origin:
        "원래 '빛과 그림자'라는 단순한 이름으로 출발했으나, 너무 이분법적이라는 우려가 있어 '낮과 밤이 같은 길이로 겹치는 날'이라는 의미의 이퀴녹스(Equinox)로 변경했습니다. 미카엘라(빛), 아자젤라(황혼), 루시아(폭풍), 데아(어둠) — 종교적 모티브와 자연 현상을 결합해 4인의 정체성을 만들었습니다.",
      direction:
        "이퀴녹스는 시각적 통일성이 가장 중요한 기수입니다. 그라데이션 톤(슬레이트-그레이-진크)을 모든 컨텐츠에서 유지해주세요. 멤버 간 케미는 '서로 보완하는' 관계입니다. 한 명이 빛나면 다른 한 명이 그림자로 받쳐주는 구도. 절대 한 멤버가 독주하지 않아야 합니다.",
      closing:
        "균형은 정적이지 않습니다. 끊임없이 흔들리며 유지되는 것이 진짜 균형입니다. 그 흔들림을 보여주세요.",
    },
    classified: {
      unlockDate: "2026년 3월 1일",
      items: [
        {
          label: "이름 미정 사유",
          content:
            "미카엘라/아자젤라/루시아/데아 모두 '미정' 표기로 시작한 이유는 — 본인의 정체성을 스스로 찾아가는 서사를 위해 시즌 2에서 본인이 직접 이름을 확정하는 이벤트가 예정되어 있기 때문입니다.",
        },
        {
          label: "종교적 표현 검토",
          content:
            "천사/악마 모티브는 종교적 민감성을 고려해 직접적 표현을 피하고 있습니다. 시즌 2부터는 '존재(Being)'라는 중립적 표현으로 대체될 예정.",
        },
        {
          label: "이퀴녹스 데이",
          content:
            "춘분(3/21)과 추분(9/23)에 '이퀴녹스 데이'라는 이름의 합방이 매년 진행됩니다. 4인이 동시에 출연하는 유일한 정기 이벤트.",
        },
        {
          label: "5번째 존재",
          content:
            "이퀴녹스에는 비공개 5번째 캐릭터 '에테르(Aether)'가 설정상 존재합니다. 4명의 균형을 보는 관찰자 역할. 시즌 3에서 등장 가능성이 검토되고 있습니다.",
        },
      ],
    },
    operations: {
      items: [
        {
          text: "한 멤버가 컨텐츠를 독주하는 모습은 절대 금지입니다. 항상 균형을 유지해주세요.",
          level: "필수",
        },
        {
          text: "종교적/정치적 발언은 어떤 형태로도 금지입니다. 캐릭터 컨셉상 매우 민감합니다.",
          level: "필수",
        },
        {
          text: "이퀴녹스 컬러 톤(슬레이트-그레이)을 모든 시각 자료에서 유지해주세요.",
          level: "필수",
        },
        {
          text: "다른 멤버와의 케미는 '보완 관계'로 표현해주세요. 친밀함보다 균형감.",
          level: "요청",
        },
        {
          text: "춘분/추분 일정은 어떤 일정보다 우선합니다. 스케줄 비워주세요.",
          level: "요청",
        },
        {
          text: "추상적 표현, 시적 발언이 캐릭터에 잘 어울립니다.",
          level: "권고",
        },
        {
          text: "굿즈는 흑백/모노톤 위주로 제작됩니다. 컬러풀한 컨셉 요청 거절.",
          level: "인식",
        },
      ],
      teamNote:
        "이퀴녹스의 팬덤은 조용하지만 깊습니다. 댓글 수보다 장문 후기, 팬아트, 분석글이 많이 나옵니다. 멤버는 그런 팬들의 글을 읽고 짧은 반응이라도 남기는 것이 권장됩니다. 대규모 이벤트보다 작은 의미를 만드는 컨텐츠가 효과적입니다.",
    },
  },
  /* ─────────── 5기 스팀팩 ─────────── */
  "6": {
    id: 6,
    label: "5기",
    teamName: "스팀팩",
    tagline: "달콤함 속에 숨겨진 독",
    emoji: "🍬",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    directorName: "강예린",
    directorNote: {
      date: "2025년 6월 1일",
      opening:
        "스팀팩은 4기 이퀴녹스의 무거움을 의도적으로 깬 기수입니다. 가벼움과 위험이 동시에 존재하는, MCM 첫 '양가적 매력' 시도입니다.",
      origin:
        "스타크래프트의 스팀팩 — 강해지지만 체력을 깎는 시스템 — 에서 영감을 받았습니다. 행복은 공짜가 아니다, 달콤한 것에는 대가가 있다는 정서를 캐릭터화. 슈거(달콤한 약), 홀더(쥐고 있는 자), 클로버(만들어진 행운) — 각자 다른 형태의 '쾌락-위험' 균형을 보여줍니다.",
      direction:
        "스팀팩은 '위험해 보이는' 매력입니다. 너무 안전해 보이면 컨셉이 죽습니다. 멤버들은 미소 뒤에 무언가를 숨긴 듯한 톤을 유지하세요. 밝지만 깊이를 알 수 없는 인상. 단, 실제로 부정적인 발언이나 행동은 절대 금지입니다 — 컨셉과 행동의 분리가 핵심입니다.",
      closing:
        "달콤함을 다루는 것은 가장 어려운 일입니다. 너무 진하면 거부감, 너무 옅으면 매력 상실. 그 줄타기를 즐겨주세요.",
    },
    classified: {
      unlockDate: "2026년 6월 1일",
      items: [
        {
          label: "팀 이름 변경 가능성",
          content:
            "'스팀팩'이라는 이름이 게임 용어와의 혼동을 일으킨다는 의견이 있어, 시즌 2에서 부제(서브타이틀) 추가가 검토되고 있습니다. 후보: '스팀팩 — Sweet Trap'.",
        },
        {
          label: "4번째 멤버",
          content:
            "스팀팩은 4인 체제로 확장될 가능성이 있습니다. 후보 컨셉은 '미러(Mirror) — 비추는 자'. 시즌 2 중반부 합류 예정.",
        },
        {
          label: "성인 컨셉 검토",
          content:
            "스팀팩의 '독' 컨셉을 성인향 컨텐츠로 확장하는 안이 검토됐으나, 전체 연령 채널 정책에 따라 보류. 별도 채널 개설 시 재검토.",
        },
      ],
    },
    operations: {
      items: [
        {
          text: "'위험해 보이는' 컨셉이지만 실제로 부정적인 발언/행동은 절대 금지입니다.",
          level: "필수",
        },
        {
          text: "팬에게 실제 약물, 도박, 알코올 관련 농담은 절대 하지 마세요.",
          level: "필수",
        },
        {
          text: "달콤한 톤을 일관되게 유지하세요. 갑자기 거칠어지면 컨셉이 깨집니다.",
          level: "필수",
        },
        {
          text: "팬들에게 '중독될 듯한' 매력을 주되 선을 넘지 않게 조절하세요.",
          level: "요청",
        },
        {
          text: "다른 기수와의 합방 시 '위험한 매력'으로 분위기를 환기시켜주세요.",
          level: "요청",
        },
        {
          text: "패션/메이크업은 핑크-레드 톤을 우선합니다.",
          level: "권고",
        },
        {
          text: "스팀팩 굿즈는 핑크-레드 외 컬러는 제작되지 않습니다.",
          level: "인식",
        },
      ],
      teamNote:
        "스팀팩의 팬덤은 활발하고 표현력이 강합니다. 단, 컨셉의 양가성 때문에 종종 오해가 생길 수 있으므로 멤버들은 발언 한 마디 한 마디에 신중해야 합니다. 위기 관리 매뉴얼이 다른 기수보다 엄격하게 적용됩니다.",
    },
  },
  /* ─────────── 6기 시큐리티엑스 ─────────── */
  "7": {
    id: 7,
    label: "6기",
    teamName: "시큐리티엑스",
    tagline: "조직의 질서, 철벽의 방어",
    emoji: "🛡️",
    gradient: "from-blue-600 via-sky-600 to-cyan-500",
    directorName: "오세준",
    directorNote: {
      date: "2025년 9월 1일",
      opening:
        "시큐리티엑스는 MCM에서 가장 '구조화된' 기수입니다. 직장인 팬덤을 정조준한 첫 시도이자, 위계라는 민감한 주제를 캐릭터로 풀어낸 도전적 작업입니다.",
      origin:
        "현대 직장의 4단계 위계(인턴-사원-대리-부장)를 캐릭터로 분해. 각 직급은 단순한 직급이 아닌 '인생 단계'의 메타포입니다. 인턴은 '다시 시작', 사원은 '버티는 자', 대리는 '중간에 끼인 자', 부장은 '책임지는 자'. 직장인이라면 누구나 자기 자리를 발견할 수 있는 거울 같은 팀.",
      direction:
        "시큐리티엑스는 위계를 보여주되 '갑질'로 보이면 안 됩니다. 위 직급이 아래 직급을 무시하거나 명령하는 듯한 모습은 절대 금지. 오히려 서로 존중하고 보완하는 모습이 컨셉의 핵심입니다. 회사라는 '가족이 아닌 팀'의 건강한 모습을 보여주세요.",
      closing:
        "직장인이 퇴근 후 우리 컨텐츠를 보고 위로받을 수 있다면 성공입니다. 그들에게 '저 사람도 나 같구나'를 느끼게 해주세요.",
    },
    classified: {
      unlockDate: "2026년 9월 1일",
      items: [
        {
          label: "5번째 멤버",
          content:
            "시큐리티엑스는 5번째 직급 '이사(Director)' 추가가 검토되고 있습니다. 부장보다 위, 그러나 무게는 다른 — '결정의 끝'을 상징하는 캐릭터.",
        },
        {
          label: "퇴사 시즌",
          content:
            "시즌 3에서 '퇴사' 시즌이 기획되고 있습니다. 사원 캐릭터의 퇴사 결정 — 혹은 결정하지 않는 결정 — 이 시즌 피날레의 핵심 이벤트.",
        },
        {
          label: "인턴 정체",
          content:
            "인턴이 이전에 정상에 있었다는 설정이 있습니다. 그 '이전 팀'이 사실 다른 기수의 가상 멤버였다는 트위스트가 시즌 3에서 공개될 예정.",
        },
        {
          label: "회사 이름",
          content:
            "시큐리티엑스의 가상 회사명은 'X Corporation'입니다. 회사 로고, 사훈, 사가까지 별도 제작됨. 1주년 합방에서 최초 공개 예정.",
        },
      ],
    },
    operations: {
      items: [
        {
          text: "직급을 이용한 갑질, 명령조 발언은 절대 금지입니다.",
          level: "필수",
        },
        {
          text: "특정 직장/회사를 비하하는 발언은 어떤 형태로도 금지입니다.",
          level: "필수",
        },
        {
          text: "퇴사, 이직 등 민감한 주제는 매뉴얼에 따라 신중하게 다뤄주세요.",
          level: "필수",
        },
        {
          text: "직장인 팬들의 출퇴근 시간대(7-9시, 18-20시)에 적극 활동해주세요.",
          level: "요청",
        },
        {
          text: "회사/직장 관련 컨텐츠 시 자신의 직급에 맞는 시각을 유지해주세요.",
          level: "요청",
        },
        {
          text: "복장은 비즈니스 캐주얼 톤을 우선합니다. 컬러 강조는 자제.",
          level: "권고",
        },
        {
          text: "시큐리티엑스 굿즈는 사무용품 위주로 제작됩니다(펜, 머그, 노트).",
          level: "인식",
        },
      ],
      teamNote:
        "시큐리티엑스의 팬덤은 직장인이 압도적입니다. 평일 출퇴근 시간대 트래픽이 다른 기수의 3배. 짧은 영상, 출근길 음성 컨텐츠, 점심시간 댓글 답변 — 일상에 끼어드는 컨텐츠가 강하게 반응합니다. 주말은 오히려 트래픽이 떨어지므로 휴식 권장.",
    },
  },
};

/* ════════════════════════════════════════
   섹션 컴포넌트들
════════════════════════════════════════ */

/* ── 섹션 1: 디렉터 노트 ── */
function DirectorNoteSection({
  gen,
}: {
  gen: (typeof generationSecrets)[string];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center py-24 px-6 relative"
    >
      <div className="absolute inset-0 bg-[#faf8f3] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(0,0,0,0.5) 24px, rgba(0,0,0,0.5) 25px)",
        }}
      />
      <div className="max-w-3xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-sm">
              📝
            </div>
            <span className="text-amber-800 text-sm font-bold tracking-widest uppercase">
              Section 01 — Director's Note
            </span>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className={`bg-gradient-to-r ${gen.gradient} p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">
                    MCM Internal Note
                  </p>
                  <p className="text-white text-xl font-bold">
                    {gen.label} {gen.teamName}
                  </p>
                </div>
                <div className="text-4xl opacity-80">{gen.emoji}</div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-start justify-between mb-8 pb-6 border-b border-gray-100">
                <div>
                  <p className="text-gray-400 text-xs mb-1">DATE</p>
                  <p className="text-gray-700 text-sm font-semibold">
                    {gen.directorNote.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs mb-1">DIRECTOR</p>
                  <p className="text-gray-700 text-sm font-semibold">
                    {gen.directorName} 디렉터
                  </p>
                </div>
              </div>
              <div className="space-y-8 text-gray-700 leading-[1.9]">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    기수 출범의 변
                  </p>
                  <p className="text-base">{gen.directorNote.opening}</p>
                </div>
                <div className="w-full h-px bg-gray-100" />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    기획 의도
                  </p>
                  <p className="text-base">{gen.directorNote.origin}</p>
                </div>
                <div className="w-full h-px bg-gray-100" />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    팀 운영 방향
                  </p>
                  <div className="mt-4 pl-5 border-l-4 border-gray-200">
                    <p className="text-base italic text-gray-600">
                      {gen.directorNote.direction}
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-base text-gray-500 italic">
                    {gen.directorNote.closing}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-bold text-lg">
                        {gen.directorName}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {gen.label} {gen.teamName} 담당 디렉터
                      </p>
                    </div>
                    <div
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${gen.gradient} text-white text-sm font-bold shadow`}
                    >
                      {gen.emoji} 출범
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── 섹션 2: 비밀 설정 ── */
function ClassifiedSection({
  gen,
}: {
  gen: (typeof generationSecrets)[string];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [revealed, setRevealed] = useState<number | null>(null);

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center py-24 px-6 relative bg-gray-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl ${gen.gradient} opacity-[0.06] blur-[120px]`}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>
      <div className="max-w-3xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 rounded-full bg-red-900/40 border border-red-800/40 flex items-center justify-center text-sm">
              🔐
            </div>
            <span className="text-red-400 text-sm font-bold tracking-widest uppercase">
              Section 02 — Team Classified
            </span>
          </div>
          <div className="flex items-center gap-4 mb-10 p-4 rounded-xl border border-red-900/30 bg-red-950/20">
            <div className="text-2xl">⚠️</div>
            <div>
              <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-1">
                기밀 해제 일자
              </p>
              <p className="text-white font-bold">
                {gen.classified.unlockDate}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                해당 일자 이전 무단 공개 시 계약 위반에 해당합니다.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {gen.classified.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <button
                  onClick={() => setRevealed(revealed === i ? null : i)}
                  className="w-full text-left"
                >
                  <div
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${revealed === i ? "border-gray-600 bg-gray-900" : "border-gray-800 bg-gray-900/40 hover:border-gray-700"}`}
                  >
                    <div className="flex items-center justify-between p-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-gradient-to-br ${gen.gradient} text-white shadow`}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-0.5">
                            CLASSIFIED
                          </p>
                          <p className="text-white font-bold">{item.label}</p>
                        </div>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${revealed === i ? "border-gray-500 bg-gray-700 rotate-180" : "border-gray-700 bg-gray-800"}`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                    {revealed === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5"
                      >
                        <div className="pt-4 border-t border-gray-800">
                          <p className="text-gray-300 leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-3 opacity-30">
            <div className="flex-1 h-px bg-gray-700" />
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              MCM Confidential
            </p>
            <div className="flex-1 h-px bg-gray-700" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── 섹션 3: 운영 가이드라인 ── */
const LEVEL_CONFIG: Record<
  RequestLevel,
  {
    label: string;
    sublabel: string;
    desc: string;
    bg: string;
    border: string;
    badge: string;
    badgeText: string;
    dot: string;
    icon: string;
  }
> = {
  필수: {
    label: "필수",
    sublabel: "중요도 50% 이상",
    desc: "기수 운영상 반드시 준수해야 합니다.",
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-700 border border-red-200",
    badgeText: "text-red-700",
    dot: "bg-red-500",
    icon: "🔴",
  },
  요청: {
    label: "요청",
    sublabel: "중요도 30% 이하",
    desc: "강제는 아니지만 가급적 따라주세요.",
    bg: "bg-orange-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700 border border-orange-200",
    badgeText: "text-orange-700",
    dot: "bg-orange-400",
    icon: "🟠",
  },
  권고: {
    label: "권고",
    sublabel: "중요도 15% 이하",
    desc: "추후 이벤트와 연계되니 알아두면 좋습니다.",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700 border border-blue-200",
    badgeText: "text-blue-700",
    dot: "bg-blue-400",
    icon: "🔵",
  },
  인식: {
    label: "인식",
    sublabel: "중요도 5% 이하",
    desc: "이런 운영 방침이 있구나 정도로 알아두세요.",
    bg: "bg-gray-50",
    border: "border-gray-200",
    badge: "bg-gray-100 text-gray-500 border border-gray-200",
    badgeText: "text-gray-500",
    dot: "bg-gray-300",
    icon: "⚪",
  },
};

const LEVEL_ORDER: RequestLevel[] = ["필수", "요청", "권고", "인식"];

function OperationsSection({
  gen,
}: {
  gen: (typeof generationSecrets)[string];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const grouped = LEVEL_ORDER.reduce(
    (acc, level) => {
      acc[level] = gen.operations.items.filter((item) => item.level === level);
      return acc;
    },
    {} as Record<RequestLevel, { text: string; level: RequestLevel }[]>,
  );

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center py-24 px-6 relative bg-gray-50"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr ${gen.gradient} opacity-[0.04] blur-[100px]`}
        />
      </div>

      <div className="max-w-3xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-sm">
              📋
            </div>
            <span className="text-blue-700 text-sm font-bold tracking-widest uppercase">
              Section 03 — Team Operations
            </span>
          </div>

          <div className="mb-10 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
              중요도 기준
            </p>
            <div className="grid grid-cols-2 gap-2">
              {LEVEL_ORDER.map((level) => {
                const cfg = LEVEL_CONFIG[level];
                return (
                  <div key={level} className="flex items-center gap-2">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${cfg.dot} shrink-0`}
                    />
                    <div>
                      <span className="text-xs font-bold text-gray-700">
                        {cfg.label}
                      </span>
                      <span className="text-xs text-gray-400 ml-1">
                        · {cfg.sublabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            {LEVEL_ORDER.map((level, levelIdx) => {
              const items = grouped[level];
              if (items.length === 0) return null;
              const cfg = LEVEL_CONFIG[level];

              return (
                <motion.div
                  key={level}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: levelIdx * 0.1 }}
                  className={`rounded-2xl border ${cfg.border} ${cfg.bg} overflow-hidden shadow-sm`}
                >
                  <div className="flex items-start justify-between p-5 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{cfg.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-900 font-extrabold text-base">
                            {cfg.label}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cfg.badge}`}
                          >
                            {cfg.sublabel}
                          </span>
                        </div>
                        <p className="text-gray-500 text-xs mt-0.5 leading-snug">
                          {cfg.desc}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-bold ${cfg.badgeText} shrink-0 mt-0.5`}
                    >
                      {items.length}개
                    </span>
                  </div>

                  <div className={`h-px mx-5 ${cfg.border} opacity-60`} />

                  <div className="p-5 pt-4 space-y-3">
                    {items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.45,
                          delay: levelIdx * 0.1 + i * 0.07,
                        }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`w-4 h-4 rounded-full ${cfg.dot} shrink-0 mt-0.5 opacity-70`}
                        />
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* 팀 운영 메모 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.45 }}
              className={`rounded-2xl overflow-hidden bg-gradient-to-br ${gen.gradient} p-0.5`}
            >
              <div className="rounded-[14px] bg-white p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🎯</span>
                  <h3 className="text-gray-900 font-extrabold text-lg">
                    팀 운영 메모
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {gen.operations.teamNote}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href={`/services/generation/${gen.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-700 hover:scale-105 transition-all shadow-lg"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {gen.label} {gen.teamName} 페이지로
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-500 font-semibold hover:border-gray-400 hover:text-gray-700 transition-all text-sm"
            >
              크리에이터 목록 →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   메인 페이지
════════════════════════════════════════ */
export default function GenerationSecretPage() {
  const params = useParams();
  const id = params.id as string;
  const gen = generationSecrets[id];

  if (!gen) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-950">
        <Header />
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <h1 className="text-2xl font-bold text-gray-100 mb-2">
            해당 기수의 비밀 파일을 찾을 수 없습니다
          </h1>
          <Link
            href="/services"
            className="text-violet-400 font-semibold hover:underline"
          >
            ← 목록으로
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div
        className={`bg-gradient-to-br ${gen.gradient} pt-32 pb-20 px-6 relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <Link
          href={`/services/generation/${gen.id}`}
          className="absolute top-[88px] left-6 z-50 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white hover:bg-white/20 transition-all"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          돌아가기
        </Link>
        <div className="max-w-3xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase tracking-widest">
                🔓 Unlocked — Team Secret File
              </span>
            </div>
            <div className="flex items-center gap-5 mb-6">
              <div className="text-6xl">{gen.emoji}</div>
              <div>
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest">
                  {gen.label} · 기수 비밀 파일
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                  {gen.teamName}
                </h1>
              </div>
            </div>
            <p className="text-white/70 text-lg max-w-xl">
              내부 운영자만 열람 가능한 비공개 기획 자료입니다. 외부 공유를
              금지합니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { label: "01 디렉터 노트", emoji: "📝", href: "#director" },
                { label: "02 비밀 설정", emoji: "🔐", href: "#classified" },
                { label: "03 운영 가이드", emoji: "📋", href: "#operations" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold hover:bg-white/25 transition-all"
                >
                  <span>{item.emoji}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div id="director">
        <DirectorNoteSection gen={gen} />
      </div>
      <div id="classified">
        <ClassifiedSection gen={gen} />
      </div>
      <div id="operations">
        <OperationsSection gen={gen} />
      </div>
    </main>
  );
}
