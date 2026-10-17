"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Work"],
  ["projects", "Projects"],
  ["education", "Education"],
] as const;

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["top", ...links.map(([id]) => id), "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <motion.nav
      className="nav"
      initial={{ y: -40, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <a href="#top" className="nav-logo display">
        SB<span>.</span>
      </a>
      <div className="nav-links">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "on" : ""}>
            {active === id && (
              <motion.span layoutId="nav-pill" className="nav-pill" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
            )}
            <span className="nav-label">{label}</span>
          </a>
        ))}
      </div>
      <a href="#contact" className="nav-cta">
        Let&apos;s talk
      </a>
    </motion.nav>
  );
}
