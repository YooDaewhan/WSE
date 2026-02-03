"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Services", "Contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: "72px" }}>
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            WSE
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setActiveItem(item)}
              className="relative px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-full"
            >
              {item}
              <AnimatePresence>
                {activeItem === item && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-violet-50 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="ml-4 px-5 py-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:scale-105 transition-all"
          >
            Get Started
          </motion.button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-700 rounded transition-all" />
          <span className="block w-6 h-0.5 bg-gray-700 rounded transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-gray-700 rounded transition-all" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white border-t border-gray-100 px-6 pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => { setActiveItem(item); setMenuOpen(false); }}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-violet-600 font-medium"
              >
                {item}
              </button>
            ))}
            <button className="mt-2 w-full py-2.5 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold rounded-full">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
