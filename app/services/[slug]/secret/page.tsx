/* ── 옛 URL 호환 ──
   /services/honggildong/secret → /services/generation1/honggildong/secret */

import { notFound, permanentRedirect } from "next/navigation";

const MOVED: Record<string, string> = {
  "honggildong": "/services/generation1/honggildong",
  "naesi": "/services/generation1/naesi",
  "dokkaebi": "/services/generation1/dokkaebi",
  "hoteisenji": "/services/generation1/hoteisenji",
  "igniter": "/services/generation2/igniter",
  "navigator": "/services/generation2/navigator",
  "celebrator": "/services/generation2/celebrator",
  "alba": "/services/generation3/alba",
  "pyeondori": "/services/generation3/pyeondori",
  "ddalbae": "/services/generation3/ddalbae",
  "pyegeubibyeong": "/services/generation3/pyegeubibyeong",
  "helldiver": "/services/generation4/helldiver",
  "anchor": "/services/generation4/anchor",
  "painkiller": "/services/generation4/painkiller",
  "mika": "/services/generation5/mika",
  "coco": "/services/generation5/coco",
  "lucy": "/services/generation5/lucy",
  "titi": "/services/generation5/titi",
  "sugar": "/services/generation6/sugar",
  "holder": "/services/generation6/holder",
  "clover": "/services/generation6/clover",
  "intern": "/services/generation7/intern",
  "sawon": "/services/generation7/sawon",
  "daeri": "/services/generation7/daeri",
  "bujang": "/services/generation7/bujang",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const to = MOVED[slug];
  if (!to) notFound();
  permanentRedirect(`${to}/secret`);
}
