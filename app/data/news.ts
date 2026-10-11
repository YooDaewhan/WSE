export type NewsCategory = "공지" | "뉴스" | "굿즈";
export const news: { slug: string; category: NewsCategory; title: string; body: string[] }[] = [
  {
    slug: "shop-coming-soon",
    category: "굿즈",
    title: "WSE 공식 굿즈 샵, 오픈을 준비하고 있습니다.",
    body: [
      "WSE의 이야기를 일상에서도 만날 수 있도록, 공식 굿즈를 선보일 공간을 준비하고 있습니다.",
      "현재는 상품을 판매하지 않습니다. 상품 구성, 가격, 판매 일정은 확정되는 대로 이곳에서 안내하겠습니다.",
      "좋아하는 마음이 오래 머물 수 있는 물건으로 찾아뵙겠습니다.",
    ],
  },
];
