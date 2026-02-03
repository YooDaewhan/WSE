"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollSectionProps {
  title: string;
  description: string;
  color: string;
  reverse?: boolean;
  index: number;
}

const emojis = ["🌊", "🏔️", "🌅", "🌙"];

export default function ScrollSection({ title, description, color, reverse = false, index }: ScrollSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-10 py-24 px-6 max-w-6xl mx-auto ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image */}
      <motion.div
        initial={reverse ? { x: 150, opacity: 0 } : { x: -150, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        className="w-full md:w-1/2"
      >
        <div className={`relative w-full rounded-3xl overflow-hidden shadow-2xl ${color}`} style={{ aspectRatio: "4/3" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl mb-3 opacity-70">{emojis[index]}</div>
              <p className="text-white/60 text-sm font-medium tracking-widest uppercase">Image {index + 1}</p>
            </div>
          </div>
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={reverse ? { x: -150, opacity: 0 } : { x: 150, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.25 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <p className="text-xs font-bold tracking-widest uppercase text-violet-500 mb-3">Section {index + 1}</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{title}</h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-6">{description}</p>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full shadow-lg shadow-violet-200 transition-all hover:scale-105">
          Learn More <span>→</span>
        </button>
      </motion.div>
    </div>
  );
}
