"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import Terminal from "./Terminal";
import { GithubIcon, LinkedinIcon } from "./ui";

const words = ["AI backends.", "Android apps.", "document pipelines.", "release automation."];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
});

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <header id="top" className="hero container">
      <div className="hero-copy">
        <motion.div className="status" {...fadeUp(0.1)}>
          <span className="pulse" /> Product Developer @ Nigo Compliance
        </motion.div>

        <h1 className="hero-title display">
          <motion.span className="hi mono" {...fadeUp(0.2)}>
            Hi, I&apos;m
          </motion.span>
          <span className="name" aria-label={profile.name}>
            {profile.name.split("").map((c, idx) => (
              <motion.span
                key={idx}
                aria-hidden
                className={c === "B" ? "name-accent" : undefined}
                initial={{ opacity: 0, y: 50, rotate: 10 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.3 + idx * 0.05, type: "spring", stiffness: 240, damping: 18 }}
              >
                {c === " " ? " " : c}
              </motion.span>
            ))}
          </span>
          <motion.span className="builds" {...fadeUp(0.8)}>
            I build{" "}
            <span className="rotator">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[i]}
                  className="grad"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {words[i]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.span>
        </h1>

        <motion.p className="lead" {...fadeUp(0.95)}>
          I build AI pipelines that read financial statements and corporate documents and turn them into
          structured, filing-ready data. I also ship Android apps with React Native, Expo and native Kotlin modules.
        </motion.p>

        <motion.div className="actions" {...fadeUp(1.1)}>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <Mail size={18} /> Get in touch
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon /> GitHub
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon /> LinkedIn
          </a>
        </motion.div>

        <motion.div className="hero-meta" {...fadeUp(1.25)}>
          <span>
            <MapPin size={15} /> {profile.location}
          </span>
          <span>
            <Sparkles size={15} /> Open to opportunities
          </span>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="float-chip chip-a mono">
          <span className="chip-dot" style={{ background: "var(--amber)" }} /> Claude API
        </div>
        <div className="float-chip chip-b mono">
          <span className="chip-dot" style={{ background: "var(--violet)" }} /> Gemini API
        </div>
        <Terminal />
      </motion.div>

      <a href="#about" className="scroll-hint mono" aria-label="Scroll to about">
        <ArrowDown size={14} /> scroll
      </a>
    </header>
  );
}
