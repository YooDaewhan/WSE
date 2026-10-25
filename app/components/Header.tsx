"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useExperience } from "./Experience";
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { paused, toggle } = useExperience();
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.dataset.theme === "dark"), []);
  const flipTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("wse-theme", next ? "dark" : "light");
    } catch {}
  };
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        본문으로 이동
      </a>
      <header className="wse-header">
        <Link className="wordmark" href="/" aria-label="WSE 홈">
          wse<span>✳</span>
        </Link>
        <span className="header-caption">
          WE START EVENING
          <br />
          VIRTUAL TALENT COLLECTIVE
        </span>
        <nav
          aria-label="주 메뉴"
          className={open ? "main-nav is-open" : "main-nav"}
          id="main-navigation"
        >
          {[
            ["/", "HOME"],
            ["/about", "ABOUT"],
            ["/services", "CAST"],
            ["/news", "NEWS"],
            ["/shop", "SHOP"],
            ["/contact", "CONNECT"],
          ].map(([href, label]) => (
            <Link
              aria-current={
                (href === "/" ? pathname === href : pathname.startsWith(href))
                  ? "page"
                  : undefined
              }
              href={href}
              key={href}
            >
              <span>{label}</span>
              <sup>↗</sup>
            </Link>
          ))}
        </nav>
        <button
          className="motion-toggle"
          onClick={toggle}
          aria-pressed={paused}
          aria-label={paused ? "애니메이션 재생" : "애니메이션 일시정지"}
        >
          {paused ? "▷" : "Ⅱ"}
          <span>MOTION</span>
        </button>
        <button
          className="motion-toggle"
          onClick={flipTheme}
          aria-pressed={dark}
          aria-label={dark ? "밝은 화면으로" : "어두운 화면으로"}
        >
          {dark ? "☀" : "☾"}
          <span>{dark ? "DAY" : "NIGHT"}</span>
        </button>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        >
          {open ? "닫기 ×" : "메뉴 +"}
        </button>
      </header>
    </>
  );
}
