"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
const MotionContext = createContext({ paused: false, toggle: () => {} });
export const useExperience = () => useContext(MotionContext);
export default function Experience({
  children,
}: {
  children: React.ReactNode;
}) {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const m = matchMedia("(prefers-reduced-motion: reduce)");
    setPaused(m.matches);
    const change = () => setPaused(m.matches);
    m.addEventListener("change", change);
    return () => m.removeEventListener("change", change);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "playing";
  }, [paused]);
  return (
    <MotionContext.Provider
      value={{ paused, toggle: () => setPaused((v) => !v) }}
    >
      <MotionConfig reducedMotion={paused ? "always" : "user"}>
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  );
}
