"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <a href="#top" className="nav-logo display" onClick={() => setOpen(false)}>
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
      <button
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={24} /> : <Menu size={26} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={active === id ? "on" : ""} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a href="#contact" className="btn btn-grad" onClick={() => setOpen(false)}>
              Let&apos;s talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
