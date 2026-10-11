import { content as dawn } from "../services/generation1/content";
import { content as starter } from "../services/generation2/content";
import { content as heroes } from "../services/generation3/content";
import { content as rescue } from "../services/generation4/content";
import { content as equinox } from "../services/generation5/content";
import { content as stimulus } from "../services/generation6/content";
import { content as security } from "../services/generation7/content";

// Public team stories remain authored in each generation's content.ts.
export const chapters = [
  {
    id: 1,
    story: dawn,
    english: "BEFORE THE DAWN",
    symbol: "黎",
    color: "#d6b18c",
    shade: "#312324",
    atmosphere: "dawn",
    invitation: "가장 먼저 어둠을 건너는 이야기",
    words: ["긴 밤", "첫 발자국", "새벽"],
  },
  {
    id: 2,
    story: starter,
    english: "THE FIRST ADVENTURE",
    symbol: "✦",
    color: "#c8e5ab",
    shade: "#273b32",
    atmosphere: "journey",
    invitation: "첫 모험의 동반자를 만나는 이야기",
    words: ["불꽃", "방향", "축하"],
  },
  {
    id: 3,
    story: heroes,
    english: "AGAINST ALL ODDS",
    symbol: "↑",
    color: "#dbe59b",
    shade: "#343826",
    atmosphere: "underdog",
    invitation: "질 거라던 자리에서 다시 일어나는 이야기",
    words: ["바닥", "반격", "역전"],
  },
  {
    id: 4,
    story: rescue,
    english: "WHEN YOU CALL",
    symbol: "+",
    color: "#f2b495",
    shade: "#462b24",
    atmosphere: "rescue",
    invitation: "가장 어두운 순간, 당신에게 닿는 이야기",
    words: ["위기", "응답", "구원"],
  },
  {
    id: 5,
    story: equinox,
    english: "BETWEEN DAY & NIGHT",
    symbol: "◐",
    color: "#cfbde9",
    shade: "#332c45",
    atmosphere: "equinox",
    invitation: "낮과 밤이 당신을 두고 다투는 이야기",
    words: ["천사", "인간", "악마"],
  },
  {
    id: 6,
    story: stimulus,
    english: "A SWEET LITTLE RISK",
    symbol: "S",
    color: "#f1b6cb",
    shade: "#422b37",
    atmosphere: "sweet",
    invitation: "달콤함의 끝을 선택하는 이야기",
    words: ["달콤함", "위험", "선택"],
  },
  {
    id: 7,
    story: security,
    english: "ALWAYS BY YOUR SIDE",
    symbol: "⌑",
    color: "#a8d2e1",
    shade: "#203641",
    atmosphere: "security",
    invitation: "물들기 쉬운 마음을 지키는 이야기",
    words: ["경호", "하트", "보호"],
  },
];
