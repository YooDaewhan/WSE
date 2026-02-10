"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";

interface Post {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  views: number;
}

const posts: Post[] = [
  { id: 1, category: "일반", title: "WSE 서비스 이용 문의드립니다", author: "김민수", date: "2025-01-15", views: 124 },
  { id: 2, category: "기술", title: "API 연동 관련 기술 지원 요청", author: "이서연", date: "2025-01-14", views: 89 },
  { id: 3, category: "제안", title: "새로운 기능 제안 - 다크모드 지원", author: "박지훈", date: "2025-01-13", views: 256 },
  { id: 4, category: "일반", title: "결제 관련 문의사항", author: "최유진", date: "2025-01-12", views: 67 },
  { id: 5, category: "기술", title: "데이터 마이그레이션 지원 요청", author: "정현우", date: "2025-01-11", views: 143 },
  { id: 6, category: "제안", title: "모바일 앱 출시 계획이 있나요?", author: "강소희", date: "2025-01-10", views: 312 },
  { id: 7, category: "일반", title: "팀 플랜 업그레이드 방법 안내 요청", author: "윤태영", date: "2025-01-09", views: 95 },
  { id: 8, category: "기술", title: "Webhook 설정 관련 오류 문의", author: "한지민", date: "2025-01-08", views: 178 },
  { id: 9, category: "일반", title: "서비스 이용약관 변경 관련 문의", author: "오승현", date: "2025-01-07", views: 54 },
  { id: 10, category: "제안", title: "대시보드 커스터마이징 기능 요청", author: "신예린", date: "2025-01-06", views: 201 },
];

const categories = ["전체", "일반", "기술", "제안"];

const categoryColors: Record<string, string> = {
  "일반": "bg-blue-100 text-blue-700",
  "기술": "bg-emerald-100 text-emerald-700",
  "제안": "bg-amber-100 text-amber-700",
};

export default function Contact() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchCategory = selectedCategory === "전체" || post.category === selectedCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold text-white mb-4"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-violet-200 text-lg"
          >
            궁금한 점이나 제안사항을 자유롭게 남겨주세요.
          </motion.p>
        </div>
      </section>

      {/* Board Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8"
        >
          {/* Category Tabs */}
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  selectedCategory === cat
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="검색어를 입력하세요..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 transition-all"
            />
          </div>
        </motion.div>

        {/* Table Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="hidden sm:grid grid-cols-[60px_80px_1fr_100px_100px_80px] gap-4 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider border-b-2 border-gray-200"
        >
          <span>No</span>
          <span>카테고리</span>
          <span>제목</span>
          <span>작성자</span>
          <span>날짜</span>
          <span className="text-right">조회</span>
        </motion.div>

        {/* Posts */}
        <div className="divide-y divide-gray-100">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * i }}
            >
              <Link
                href={`/contact/${post.id}`}
                className="grid grid-cols-1 sm:grid-cols-[60px_80px_1fr_100px_100px_80px] gap-2 sm:gap-4 px-5 py-4 hover:bg-violet-50/50 transition-colors group items-center"
              >
                <span className="hidden sm:block text-sm text-gray-400 font-medium">
                  {post.id}
                </span>
                <span className="hidden sm:block">
                  <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                </span>
                <span className="text-gray-800 font-medium group-hover:text-violet-600 transition-colors">
                  <span className={`sm:hidden inline-block px-2 py-0.5 text-xs font-semibold rounded-full mr-2 ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  {post.title}
                </span>
                <span className="hidden sm:block text-sm text-gray-500">{post.author}</span>
                <span className="hidden sm:block text-sm text-gray-400">{post.date}</span>
                <span className="hidden sm:block text-sm text-gray-400 text-right">{post.views}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">검색 결과가 없습니다.</p>
          </div>
        )}

        {/* Write Button */}
        <div className="flex justify-end mt-8">
          <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold rounded-full shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:scale-105 transition-all">
            글쓰기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        © 2025 WSE. All rights reserved.
      </footer>
    </main>
  );
}
