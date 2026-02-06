"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SlideItem {
  title: string;
  description: string;
  color: string;
}

interface SliderNavProps {
  items: SlideItem[];
  current: number;
  onChange: (index: number) => void;
}

export default function SliderNav({ items, current, onChange }: SliderNavProps) {
  const prev = () => onChange((current - 1 + items.length) % items.length);
  const next = () => onChange((current + 1) % items.length);

  const getIndex = (offset: number) =>
    (current + offset + items.length) % items.length;

  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <div className="flex items-center gap-3">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all text-gray-500"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Slides Container */}
        <div className="flex-1 flex items-center gap-3 overflow-hidden">
          {/* Previous Preview */}
          <motion.div
            key={`prev-${getIndex(-1)}`}
            className="hidden sm:block w-1/4 shrink-0 cursor-pointer"
            onClick={prev}
            whileHover={{ scale: 1.03 }}
          >
            <div
              className={`rounded-xl p-3 opacity-40 hover:opacity-60 transition-opacity ${items[getIndex(-1)].color}`}
            >
              <p className="text-white text-xs font-semibold truncate">
                {items[getIndex(-1)].title}
              </p>
            </div>
          </motion.div>

          {/* Active Slide */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className={`rounded-2xl p-5 shadow-lg ${items[current].color}`}
              >
                <p className="text-white/70 text-[10px] font-bold tracking-widest uppercase mb-1">
                  {current + 1} / {items.length}
                </p>
                <h3 className="text-white font-bold text-base mb-1 truncate">
                  {items[current].title}
                </h3>
                <p className="text-white/80 text-xs leading-relaxed line-clamp-2">
                  {items[current].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Preview */}
          <motion.div
            key={`next-${getIndex(1)}`}
            className="hidden sm:block w-1/4 shrink-0 cursor-pointer"
            onClick={next}
            whileHover={{ scale: 1.03 }}
          >
            <div
              className={`rounded-xl p-3 opacity-40 hover:opacity-60 transition-opacity ${items[getIndex(1)].color}`}
            >
              <p className="text-white text-xs font-semibold truncate">
                {items[getIndex(1)].title}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all text-gray-500"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === current
                ? "bg-violet-500 w-4"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
