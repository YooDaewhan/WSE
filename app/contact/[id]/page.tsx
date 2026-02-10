"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";

interface Post {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  views: number;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    category: "일반",
    title: "WSE 서비스 이용 문의드립니다",
    author: "김민수",
    date: "2025-01-15",
    views: 124,
    content: `안녕하세요, WSE 서비스를 이용하려고 하는데 몇 가지 궁금한 점이 있어서 문의드립니다.

1. 무료 플랜에서 제공되는 기능 범위가 어디까지인가요?
2. 팀 플랜으로 업그레이드 시 기존 데이터는 그대로 유지되나요?
3. 결제 수단은 어떤 것들이 지원되나요?

빠른 답변 부탁드립니다. 감사합니다.`,
  },
  {
    id: 2,
    category: "기술",
    title: "API 연동 관련 기술 지원 요청",
    author: "이서연",
    date: "2025-01-14",
    views: 89,
    content: `WSE API를 저희 서비스에 연동하려고 하는데, 인증 토큰 발급 과정에서 문제가 발생하고 있습니다.

환경: Node.js v20, Express 서버
에러 코드: AUTH_TOKEN_EXPIRED

공식 문서를 참고해서 진행했는데, 토큰이 발급 직후에도 만료된 것으로 표시됩니다. 혹시 서버 시간 동기화 이슈일 수 있을까요?

관련 로그를 첨부합니다. 확인 부탁드립니다.`,
  },
  {
    id: 3,
    category: "제안",
    title: "새로운 기능 제안 - 다크모드 지원",
    author: "박지훈",
    date: "2025-01-13",
    views: 256,
    content: `안녕하세요, WSE를 매일 사용하고 있는 유저입니다.

다크모드 기능이 추가되면 정말 좋을 것 같습니다. 야간에 작업할 때 눈의 피로가 상당한데, 다크모드가 있으면 훨씬 편할 것 같아요.

추가로 시스템 설정에 따라 자동으로 전환되는 기능도 함께 지원해주시면 더욱 좋겠습니다.

검토 부탁드립니다!`,
  },
  {
    id: 4,
    category: "일반",
    title: "결제 관련 문의사항",
    author: "최유진",
    date: "2025-01-12",
    views: 67,
    content: `지난달에 결제가 이중으로 처리된 것 같습니다. 확인 후 환불 처리 부탁드립니다.

결제일: 2025-01-05
결제 금액: 49,000원 (2회 결제됨)

영수증은 이메일로 전달드리겠습니다.`,
  },
  {
    id: 5,
    category: "기술",
    title: "데이터 마이그레이션 지원 요청",
    author: "정현우",
    date: "2025-01-11",
    views: 143,
    content: `기존 시스템에서 WSE로 데이터 마이그레이션을 진행하려고 합니다.

약 50만 건의 레코드를 이전해야 하는데, 대량 데이터 임포트 시 권장되는 방법이 있을까요? Batch API를 사용하면 되는지, 아니면 별도의 마이그레이션 도구가 제공되는지 궁금합니다.

또한 마이그레이션 중 서비스 다운타임이 발생하는지도 알고 싶습니다.`,
  },
  {
    id: 6,
    category: "제안",
    title: "모바일 앱 출시 계획이 있나요?",
    author: "강소희",
    date: "2025-01-10",
    views: 312,
    content: `현재 웹으로만 서비스를 이용하고 있는데, 모바일 앱 출시 계획이 있는지 궁금합니다.

이동 중에도 빠르게 확인하고 관리할 수 있으면 업무 효율이 크게 올라갈 것 같습니다. iOS와 Android 모두 지원되면 좋겠습니다.

많은 유저들이 기다리고 있을 것 같아요!`,
  },
  {
    id: 7,
    category: "일반",
    title: "팀 플랜 업그레이드 방법 안내 요청",
    author: "윤태영",
    date: "2025-01-09",
    views: 95,
    content: `현재 개인 플랜을 사용 중인데, 팀 플랜으로 업그레이드하고 싶습니다.

팀원이 5명인데, 업그레이드 시 기존 데이터와 설정이 그대로 유지되나요? 또한 팀원 초대는 어떻게 하면 되는지 자세한 안내 부탁드립니다.`,
  },
  {
    id: 8,
    category: "기술",
    title: "Webhook 설정 관련 오류 문의",
    author: "한지민",
    date: "2025-01-08",
    views: 178,
    content: `Webhook 설정 후 이벤트가 정상적으로 전달되지 않고 있습니다.

설정한 URL: https://our-service.com/webhook/wse
이벤트 타입: user.created, order.completed
응답 코드: 항상 timeout

서버 로그에는 요청 자체가 도달하지 않는 것으로 보입니다. 방화벽 설정도 확인했는데, WSE 서버 IP 대역을 화이트리스트에 추가해야 하나요?`,
  },
  {
    id: 9,
    category: "일반",
    title: "서비스 이용약관 변경 관련 문의",
    author: "오승현",
    date: "2025-01-07",
    views: 54,
    content: `최근 이용약관이 변경되었다는 이메일을 받았는데, 구체적으로 어떤 부분이 변경되었는지 요약해주실 수 있나요?

특히 데이터 보관 정책과 관련된 변경 사항이 있다면 자세히 알고 싶습니다.`,
  },
  {
    id: 10,
    category: "제안",
    title: "대시보드 커스터마이징 기능 요청",
    author: "신예린",
    date: "2025-01-06",
    views: 201,
    content: `현재 대시보드가 고정된 레이아웃으로 되어 있는데, 위젯을 자유롭게 배치하고 크기를 조절할 수 있는 커스터마이징 기능이 있으면 좋겠습니다.

각 팀마다 중요하게 보는 지표가 다르기 때문에, 드래그 앤 드롭으로 대시보드를 구성할 수 있으면 업무 효율이 크게 향상될 것 같습니다.

참고로 Notion이나 Grafana 같은 서비스의 대시보드 커스터마이징 기능을 벤치마킹하면 좋을 것 같습니다.`,
  },
];

const categoryColors: Record<string, string> = {
  "일반": "bg-blue-100 text-blue-700",
  "기술": "bg-emerald-100 text-emerald-700",
  "제안": "bg-amber-100 text-amber-700",
};

export default function ContactDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    notFound();
  }

  const currentIndex = posts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-violet-200 hover:text-white transition-colors text-sm mb-6"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              목록으로 돌아가기
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[post.category]} bg-opacity-90`}>
              {post.category}
            </span>
            <span className="text-violet-200 text-sm">{post.author}</span>
            <span className="text-violet-300 text-sm">|</span>
            <span className="text-violet-200 text-sm">{post.date}</span>
            <span className="text-violet-300 text-sm">|</span>
            <span className="text-violet-200 text-sm">조회 {post.views}</span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12"
        >
          <div className="prose prose-gray max-w-none">
            {post.content.split("\n").map((line, i) => (
              <p key={i} className={`text-gray-700 leading-relaxed ${line.trim() === "" ? "mt-4" : "mt-2"}`}>
                {line || "\u00A0"}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {nextPost && (
            <Link
              href={`/contact/${nextPost.id}`}
              className="flex items-center gap-4 px-6 py-4 hover:bg-violet-50/50 transition-colors border-b border-gray-100 group"
            >
              <span className="text-xs font-bold text-gray-400 uppercase w-16 shrink-0">다음글</span>
              <svg className="w-4 h-4 text-gray-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path d="M7 14l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-gray-700 group-hover:text-violet-600 transition-colors truncate">{nextPost.title}</span>
            </Link>
          )}
          {prevPost && (
            <Link
              href={`/contact/${prevPost.id}`}
              className="flex items-center gap-4 px-6 py-4 hover:bg-violet-50/50 transition-colors group"
            >
              <span className="text-xs font-bold text-gray-400 uppercase w-16 shrink-0">이전글</span>
              <svg className="w-4 h-4 text-gray-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path d="M7 10l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-gray-700 group-hover:text-violet-600 transition-colors truncate">{prevPost.title}</span>
            </Link>
          )}
        </motion.div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3 mt-8">
          <Link
            href="/contact"
            className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:scale-105 transition-all shadow-sm"
          >
            목록
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        © 2025 WSE. All rights reserved.
      </footer>
    </main>
  );
}
