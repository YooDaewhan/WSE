import { chzzk } from "../../data/channels";

/* 지금 방송 중인 멤버 slug 목록. 치지직 응답은 60초 캐시합니다. */
export const revalidate = 60;
export async function GET() {
  const live = await Promise.all(
    Object.entries(chzzk).map(async ([slug, id]) => {
      try {
        const res = await fetch(`https://api.chzzk.naver.com/polling/v2/channels/${id}/live-status`, {
          headers: { "User-Agent": "Mozilla/5.0" },
          next: { revalidate: 60 },
        });
        const { content } = await res.json();
        return content?.status === "OPEN" ? slug : null;
      } catch {
        return null;
      }
    }),
  );
  return Response.json(live.filter(Boolean));
}
