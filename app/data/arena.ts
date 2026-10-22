/* ARENA — 버튜버 대전 · 인기투표 · 특별 초대석 (준비 중)
   투표 기능(하루 1 토큰) 붙이기 전, 콘텐츠 후보만 모아둔 곳.
   홀로라이브 · 버튜버 씬에서 반응 좋았던 포맷을 WSE식으로 옮김
   video = 참고한 원본(또는 클립) 유튜브 ID — 썸네일과 링크에 씀 */
export const formats = [
  {
    id: "sports",
    video: "Mm1m0E-yqe4",
    emoji: "🏁",
    label: "WSE 대운동회",
    origin: "hololive 運動会",
    body: "기수별 팀을 짜서 마인크래프트 경주·활쏘기·보물찾기 등 종목을 릴레이로 겨룹니다. 종목과 팀장을 시청자 투표로 정해요.",
  },
  {
    id: "keidoro",
    video: "ilBnHVbKtpI",
    emoji: "🚨",
    label: "히어로즈 vs 빌런즈 경찰과 도둑",
    origin: "hololive マイクラ鯖 · ケイドロ",
    body: "히어로 진영이 빌런을 잡는 진영전. 마왕과 빌런즈 세계관 그대로 — 붙잡힌 쪽은 시청자 투표로 정한 벌칙 수행.",
  },
  {
    id: "civilization",
    video: "Km7ZZCTifcg",
    emoji: "🏛️",
    label: "시청자 문명 실험",
    origin: "Mumei Civilization",
    body: "시청자들이 NPC가 되어 서버 안에서 문명을 세웁니다. 매주 투표로 '이번 주 재앙'과 왕을 정하는 장기 프로젝트.",
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
    id: "endurance",
    video: "I1MkdJRmBP8",
    emoji: "⏳",
    label: "클리어할 때까지 내구 방송",
    origin: "Korone · Pekora 耐久配信",
    body: "깰 때까지 안 끄는 방송. 도전 게임과 실패 시 벌칙을 시청자가 투표로 고르고, 모두 함께 엔딩을 봅니다.",
  },
  {
    id: "graffiti",
    video: "ZZTScI1HWIg",
    emoji: "🎨",
    label: "그림 전언 · 가틱폰 릴레이",
    origin: "Gartic Phone 합방",
    body: "제시어를 시청자 투표로 받아 그림으로 전달. 가장 망가진 결과물은 다음 날 굿즈 스티커 후보로.",
  },
  {
    id: "utawaku",
    video: "scde6Qo3NK0",
    emoji: "🎤",
    label: "노래 릴레이 · 우타와쿠 페스",
    origin: "hololive 歌枠リレー",
    body: "멤버가 30분씩 바통을 넘기는 노래 릴레이. 듀엣 조합과 마지막 곡을 투표로 정합니다.",
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
