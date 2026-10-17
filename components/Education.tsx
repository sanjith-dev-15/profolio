"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { GlowCard, Reveal, SectionHead } from "./ui";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <SectionHead n="05" kicker="education" title="Where it started." />
        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <GlowCard className="edu">
                <div className="edu-top">
                  <div className="skill-icon">
                    <GraduationCap size={20} />
                  </div>
                  <span className="mono edu-period">{e.period}</span>
                </div>
                <h3 className="display">{e.degree}</h3>
                <div className="edu-school">{e.school}</div>
                <div className="edu-place">{e.place}</div>
                <div className="edu-score">
                  <div className="edu-score-row mono">
                    <span>{e.scoreLabel}</span>
                    <strong>{e.score}</strong>
                  </div>
                  <div className="bar">
                    <motion.div
                      className="bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${e.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
