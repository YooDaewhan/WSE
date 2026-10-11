import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./wse.css";
import Experience from "./components/Experience";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "WSE — We Start Evening", template: "%s | WSE" },
  description:
    "서로 다른 세계에서 만나, 당신의 저녁을 함께하는 버추얼 크리에이터. WSE의 캐스트와 이야기를 만나보세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Experience>{children}</Experience>
      </body>
    </html>
  );
}
