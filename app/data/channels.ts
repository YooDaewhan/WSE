/* 치지직 채널 ID — chzzk.naver.com/{채널ID} 주소의 32자리 값.
   여기 넣은 멤버만 메인 빌딩 안내도에 ON AIR 표시가 뜹니다. */
export const chzzk: Record<string, string> = {
  // intern: "0123456789abcdef0123456789abcdef",
};

/* 채널 ID를 넣기 전, 개발 서버(npm run dev)에서만 쓰는 가짜 방송 상태.
   기수마다 마지막 멤버 한 명만 빼고 전원 방송 중으로 보입니다. 배포 빌드에는 나오지 않습니다. */
export const demo = process.env.NODE_ENV === "development" && !Object.keys(chzzk).length;
