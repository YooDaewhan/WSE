/* ── 옛 URL 호환 ──
   /services/generation/1 → /services/generation1 */

import { notFound, permanentRedirect } from "next/navigation";

const MOVED: Record<string, string> = {
  "1": "/services/generation1",
  "2": "/services/generation2",
  "3": "/services/generation3",
  "4": "/services/generation4",
  "5": "/services/generation5",
  "6": "/services/generation6",
  "7": "/services/generation7",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const to = MOVED[id];
  if (!to) notFound();
  permanentRedirect(to);
}
