/* ARENA — 버튜버 대전 · 인기투표 · 특별 초대석 (준비 중)
   투표 기능(하루 1 토큰) 붙이기 전, 콘텐츠 후보만 모아둔 곳.
   홀로라이브 · 버튜버 씬에서 반응 좋았던 포맷을 WSE식으로 옮김
   video = 참고한 원본(또는 클립) 유튜브 ID — 썸네일에만 씀 (링크 없음). 없으면 이모지로 대신함 */
export const formats: { id: string; video?: string; emoji: string; label: string; origin: string; body: string }[] = [
  {
    id: "meeting",
    emoji: "☕",
    label: "아침 회의",
    origin: "WSE 사내 회의",
    body: "참여는 자유, 대신 참여하면 참여비가 있어요. 1주일간 어떤 콘텐츠를 할지, 같이 할 사람이 있는지, 요즘은 어떤 게 유행인지, 특별하거나 재미있는 일이 있는지 모여서 이야기하는 형식적인 자리입니다. 사장님 고로시 같은 재미있는 일이 생깁니다. 각자 방송을 켜도, 안 켜도 좋아요. 특수회원은 사장님 또는 매니저 계정으로 켜진 방송으로 입장할 수 있어요.",
  },
  {
    id: "sports",
    video: "Mm1m0E-yqe4",
    emoji: "🏁",
    label: "WSE 대운동회",
    origin: "hololive 運動会",
    body: "기수별 팀을 짜서 마인크래프트 경주·활쏘기·보물찾기 등 종목을 릴레이로 겨룹니다. 종목과 팀장을 시청자 투표로 정해요.",
  },
  {
    id: "court",
    emoji: "⚖️",
    label: "WSE 법원",
    origin: "WSE 오리지널",
    body: "냉장고 푸딩 실종 같은 멤버 간 분쟁을 재판으로 가립니다. 검사·변호인·증인은 멤버가, 배심원은 시청자가 맡아 투표로 판결해요.",
  },
  {
    id: "press",
    emoji: "📸",
    label: "기자회견",
    origin: "WSE 오리지널",
    body: "방송 사고 다음 날 열리는 공식 해명 기자회견. 시청자가 기자가 되어 질문을 보내고, 가장 날카로운 질문을 투표로 뽑아 답합니다.",
  },
  {
    id: "hearing",
    emoji: "🏛️",
    label: "청문회",
    origin: "WSE 오리지널",
    body: "새 직책 후보를 앉혀 놓고 하는 인사청문회. 과거 방송 클립이 증거로 제출되고, 임명 동의 여부는 시청자 투표로 결정합니다.",
  },
  {
    id: "kart",
    video: "i9LftU0-VK4",
    emoji: "🏎️",
    label: "카트 · 테트리스 컵",
    origin: "Holo Mario Kart / Tetris 99 대회",
    body: "토너먼트 대진을 공개하고 매 라운드 승부 예측 투표. 연습 방송부터 결승까지 시즌제로 굴립니다.",
  },
  {
    id: "quiz",
    video: "nfpyqh93RoA",
    emoji: "❓",
    label: "멤버 상식 퀴즈쇼",
    origin: "hololive 퀴즈 합방",
    body: "서로의 설정·과거 방송 클립으로 퀴즈. 오답 1위는 다음 대전에 강제 출전.",
  },
];
