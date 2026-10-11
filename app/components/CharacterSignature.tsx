"use client";
import { motion } from "framer-motion";
import { useExperience } from "./Experience";
import { directions } from "../data/art-direction";
export default function CharacterSignature({
  slug,
  moment,
}: {
  slug: string;
  moment: number;
}) {
  const d = directions[slug];
  const { paused } = useExperience();
  const symbols: Record<string, string[]> = {
    celebrator: ["♪", "♫", "♬"],
    clover: ["♧", "✧", "◇"],
    sugar: ["S", "0084", "7291"],
    naesi: ["密", "書", "策"],
    dokkaebi: ["鬼", "?", "!"],
    titi: ["☾", "☽", "☾"],
    lucy: ["羽", "☁", "羽"],
    mika: ["✧", "✦", "☀"],
    coco: ["◐", "◑", "◒"],
  };
  const labels: Record<string, string> = {
    navigator: "어디로든, 함께",
    igniter: "다시 한 번, 점화",
    celebrator: "오늘도 축하할 순간",
    helldiver:
      moment % 3 === 0 && moment > 0
        ? "너에게로 강하 중"
        : `이름을 불러줘 · ${moment % 3} / 3`,
    anchor: "흔들려도, 여기",
    painkiller: "천천히 숨을 고르세요",
    clover: "작은 행운 수집 중",
    sugar: "SWEET / HANDLE WITH CARE",
    holder: "놓치지 않을게",
    intern: "첫 번째 임무",
    sawon: "오늘도 이상 없음",
    daeri: "서로를 잇는 중",
    bujang: "마지막 방어선",
    titi: "조금만 더, 여기",
    lucy: "날개도 쉬는 시간이 필요해",
    mika: "담대하게, 앞으로",
    coco: "응답이 도착했습니다",
    honggildong: "동에 번쩍, 서에 번쩍",
    naesi: "한 수 앞에서",
    dokkaebi: "다음은 아무도 몰라",
    pagyeseung: "아직, 아침을 기다리며",
    alba: "오늘도 생존",
    pyeondori: "24 HOURS / OPEN",
    ddalbae: "정해진 경로 없음",
    pyegeubibyeong: "다시 한 걸음",
  };
  return (
    <div className={`character-signature signature-${d.effect}`}>
      <div className="signature-art" aria-hidden="true">
        {slug === "navigator" ? (
          <motion.div
            className="mini-compass"
            animate={{ rotate: paused ? 0 : moment * 137 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <span>↑</span>
          </motion.div>
        ) : slug === "anchor" ? (
          <motion.div
            className="mini-tide"
            animate={{ rotate: paused ? 0 : moment * 180 }}
            transition={{ duration: 1.4 }}
          >
            <span>≈</span>
            <span>≈</span>
          </motion.div>
        ) : symbols[slug] ? (
          <div className="signature-symbols">
            {symbols[slug].map((s, i) => (
              <motion.span
                key={`${moment}-${i}`}
                initial={{ opacity: 0.2, y: paused ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: paused ? 0 : i * 0.12 }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        ) : (
          <div className="signature-bars">
            {Array.from({ length: 12 }, (_, i) => (
              <motion.i
                key={i}
                animate={{
                  height: paused ? 18 : 8 + ((i * 7 + moment * 13) % 31),
                  opacity: (i + moment) % 3 === 0 ? 0.35 : 0.9,
                }}
                transition={{ duration: 0.6, delay: paused ? 0 : i * 0.035 }}
              />
            ))}
          </div>
        )}
      </div>
      <span aria-live={slug === "helldiver" ? "polite" : "off"}>
        {labels[slug]}
      </span>
    </div>
  );
}
