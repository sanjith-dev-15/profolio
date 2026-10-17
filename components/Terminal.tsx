"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Seg = [text: string, cls?: string];

// Illustrative run of the document-extraction pipeline (sample values).
const lines: Seg[][] = [
  [["$ ", "p"], ["extract ", "cmd"], ["--file ", "dim"], ["balance_sheet_FY24.pdf", "str"]],
  [["› parsing 14 pages · model ", "dim"], ["claude", "key"], [" · fallback ", "dim"], ["gemini", "key"]],
  [["› extracting financials, directors, shareholding…", "dim"]],
  [["{", "punc"]],
  [['  "form"', "key"], [": ", "punc"], ['"AOC-4"', "str"], [",", "punc"]],
  [['  "revenue"', "key"], [": ", "punc"], ["48210000", "num"], [",", "punc"]],
  [['  "net_profit"', "key"], [": ", "punc"], ["-1240000", "neg"], [",", "punc"]],
  [['  "equity_shares"', "key"], [": ", "punc"], ["100000", "num"], [",", "punc"]],
  [['  "directors_found"', "key"], [": ", "punc"], ["3", "num"], [",", "punc"]],
  [['  "ready_for"', "key"], [": [", "punc"], ['"MGT-7"', "str"], [", ", "punc"], ['"AOC-4"', "str"], ["]", "punc"]],
  [["}", "punc"]],
  [["✓ validated · draft Director's Report generated", "ok"]],
];

export default function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const delay = n >= lines.length ? 4000 : n === 0 ? 700 : n < 3 ? 650 : 230;
    const t = setTimeout(() => setN((v) => (v >= lines.length ? 0 : v + 1)), delay);
    return () => clearTimeout(t);
  }, [n, inView]);

  return (
    <div ref={ref} className="term">
      <div className="term-bar">
        <span className="tdot r" />
        <span className="tdot y" />
        <span className="tdot g" />
        <span className="term-title mono">ai-extractor — node</span>
      </div>
      <div className="term-body mono">
        {lines.slice(0, n).map((segs, i) => (
          <div key={i} className="term-line">
            {segs.map(([t, c], j) => (
              <span key={j} className={c ? `c-${c}` : undefined}>
                {t}
              </span>
            ))}
          </div>
        ))}
        <span className="caret" />
      </div>
      <div className="term-foot mono">sample run · Claude + Gemini extraction pipeline</div>
    </div>
  );
}
