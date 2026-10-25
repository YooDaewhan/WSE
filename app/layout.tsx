import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./wse.css";
import "./dark.css";
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
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 첫 페인트 전에 저장된 테마를 걸어 깜빡임 방지. 기본은 원래 베이지(light). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("wse-theme")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`,
          }}
        />
      </head>
      <body className={inter.className}>
        <Experience>{children}</Experience>
      </body>
    </html>
  );
}
