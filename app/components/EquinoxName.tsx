import { equinoxNames } from "../data/equinox-names";

export function EquinoxName({ slug }: { slug: string }) {
  const name = equinoxNames[slug];
  return <span className="eq-name-lockup"><span className="eq-name-en" lang="en">{name.en}</span><span className="eq-name-ja" lang="ja">{name.ja}</span></span>;
}

export function EquinoxNameDrift({ slug }: { slug: string }) {
  const name = equinoxNames[slug];
  return <div className="eq-name-drift" aria-hidden="true"><div className="eq-name-track">{[0, 1].map(copy => <span className="eq-name-repeat" key={copy}><span>{name.en}</span><i>✦</i><span lang="ja">{name.ja}</span><i>✦</i></span>)}</div></div>;
}

export function EquinoxTypeField({ slug, korean }: { slug: string; korean: string }) {
  const name = equinoxNames[slug];
  const rows = [
    [{ text: name.en, lang: "en" }, { text: "EQUINOX", lang: "en" }],
    [{ text: korean, lang: "ko" }, { text: "光と影", lang: "ja" }, { text: "BETWEEN DAY & NIGHT", lang: "en" }],
    [{ text: name.ja, lang: "ja" }, { text: name.en, lang: "en" }, { text: "이퀴녹스", lang: "ko" }],
  ];
  return <div className="eq-type-field" aria-hidden="true">{rows.map((words, row) => <div className={`eq-type-row eq-type-row-${row + 1}`} key={row}><div className="eq-type-track">{[0, 1].map(copy => <div className="eq-type-cycle" key={copy}>{words.map(word => <span lang={word.lang} key={word.lang + word.text}>{word.text}<i>✦</i></span>)}</div>)}</div></div>)}</div>;
}
