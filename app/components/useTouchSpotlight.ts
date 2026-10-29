import { useEffect } from "react";

/* 터치 기기엔 hover가 없다 — 화면 가운데 띠에 들어온 카드에 is-in을 붙여 hover 효과를 대신 */
export default function useTouchSpotlight(selector: string) {
  useEffect(() => {
    if (!matchMedia("(hover: none)").matches) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-in", e.isIntersecting)),
      { rootMargin: "-48% 0px -48% 0px" },
    );
    document.querySelectorAll(selector).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
