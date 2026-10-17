"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useState } from "react";
import { experience } from "@/lib/data";
import { GlowCard, Reveal, SectionHead } from "./ui";

function Rich({ text }: { text: string }) {
  return <>{text.split(/\*\*(.+?)\*\*/g).map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : p))}</>;
}

export default function Experience() {
  const [tab, setTab] = useState(0);
  const group = experience.groups[tab];

  return (
    <section id="experience">
      <div className="container">
        <SectionHead n="03" kicker="experience" title="Where I've been shipping." />
        <Reveal>
          <GlowCard className="exp">
            <div className="exp-head">
              <div className="exp-logo display">N</div>
              <div className="exp-title">
                <h3 className="display">{experience.role}</h3>
                <div className="exp-company">
                  {experience.company} · {experience.location}
                </div>
              </div>
              <div className="exp-date mono">
                <span className="pulse" /> {experience.period}
              </div>
            </div>

            <div className="tabs" role="tablist">
              {experience.groups.map((g, i) => (
                <button
                  key={g.label}
                  role="tab"
                  aria-selected={tab === i}
                  className={`tab ${tab === i ? "on" : ""}`}
                  onClick={() => setTab(i)}
                >
                  {tab === i && <motion.span layoutId="tab-pill" className="tab-pill" />}
                  <span className="tab-label">{g.label}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.ul
                key={group.label}
                className="bullets"
                initial="hide"
                animate="show"
                exit="hide"
                variants={{ show: { transition: { staggerChildren: 0.06 } }, hide: {} }}
              >
                {group.bullets.map((b) => (
                  <motion.li
                    key={b}
                    variants={{ hide: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.3 }}
                  >
                    <Rich text={b} />
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>

            <div className="filings">
              <span className="filings-label mono">filings automated →</span>
              {experience.filings.map((f) => (
                <span key={f} className="filing mono">
                  <FileText size={14} /> {f}
                </span>
              ))}
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
