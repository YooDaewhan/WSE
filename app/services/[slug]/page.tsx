/* ── 옛 URL 호환 ──
   /services/honggildong → /services/generation1/honggildong
   정적 라우트(generation1~7)가 우선하므로 충돌하지 않습니다. */

import { notFound, permanentRedirect } from "next/navigation";

const MOVED: Record<string, string> = {
  "honggildong": "/services/generation1/honggildong",
  "naesi": "/services/generation1/naesi",
  "dokkaebi": "/services/generation1/dokkaebi",
  "pagyeseung": "/services/generation1/pagyeseung",
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
  "cheoncheon": "/services/generation5/cheoncheon",
  "cheongak": "/services/generation5/cheongak",
  "akcheon": "/services/generation5/akcheon",
  "akak": "/services/generation5/akak",
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
  permanentRedirect(to);
}
