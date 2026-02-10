"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import ScrollSection from "../components/ScrollSection";
import SliderNav from "../components/SliderNav";

const sections = [
  {
    title: "Design with Purpose",
    description: "Create stunning experiences that captivate your audience. Every pixel matters, every interaction tells a story worth remembering.",
    color: "bg-gradient-to-br from-violet-500 to-indigo-600",
    reverse: false,
  },
  {
    title: "Build Something Great",
    description: "Turn your boldest ideas into reality. Our tools and frameworks give you the power to ship faster and build better products.",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
    reverse: true,
  },
  {
    title: "Scale Without Limits",
    description: "As your vision grows, so does your infrastructure. Seamless scaling, rock-solid performance, zero compromise on quality.",
    color: "bg-gradient-to-br from-emerald-500 to-teal-600",
    reverse: false,
  },
  {
    title: "Connect & Collaborate",
    description: "Bring your team together in perfect harmony. Real-time tools, shared workspaces, and seamless communication built for the modern era.",
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
    reverse: true,
  },
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-violet-400 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-400 rounded-full opacity-20 blur-3xl" />
        <div
          className="absolute w-64 h-64 bg-indigo-400 rounded-full opacity-10 blur-3xl"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        />

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 text-sm font-semibold rounded-full mb-6">
              ✨ Welcome to WSE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            Build the future{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              together
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A modern platform designed to help you create, scale, and deliver extraordinary digital experiences effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold text-lg rounded-full shadow-xl shadow-violet-200 hover:shadow-violet-300 hover:scale-105 transition-all">
              Get Started Free
            </button>
            <button className="px-8 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold text-lg rounded-full hover:bg-gray-50 hover:scale-105 transition-all shadow-sm">
              Watch Demo →
            </button>
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Slider Navigation */}
      <section className="px-6 py-12 bg-white">
        <SliderNav items={sections} current={currentSlide} onChange={setCurrentSlide} />
      </section>

      {/* Region Characters Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[1, 2, 3, 4].map((char, i) => (
            <div key={char} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <ScrollSection
                title={`Character ${char}`}
                description={sections[currentSlide].description}
                color={sections[currentSlide].color}
                reverse={i % 2 !== 0}
                index={i}
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA Banner */}
      <section className="py-32 px-6 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-white mb-6">Ready to get started?</h2>
          <p className="text-violet-200 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of teams already building amazing things with WSE.
          </p>
          <button className="px-10 py-4 bg-white text-violet-700 font-bold text-lg rounded-full shadow-2xl shadow-black/20 hover:scale-105 transition-all">
            Start for Free →
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
