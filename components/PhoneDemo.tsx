"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bell, MapPin, Navigation } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Map canvas size in px; the user dot walks PATH toward PIN.
const W = 244;
const H = 330;
const PIN = { x: 150, y: 132 };
const PATH: [number, number][] = [
  [24, 318],
  [24, 252],
  [150, 252],
  [150, 132],
];
const SEGS = PATH.slice(1).map((p, i) => Math.hypot(p[0] - PATH[i][0], p[1] - PATH[i][1]));
const TOTAL = SEGS.reduce((a, b) => a + b, 0);

const RADII = [
  { label: "200 m", r: 32 },
  { label: "500 m", r: 56 },
  { label: "1 km", r: 86 },
];

const DURATION = 6500;
const PAUSE = 2600;

function pointAt(d: number) {
  for (let i = 0; i < SEGS.length; i++) {
    if (d <= SEGS[i] || i === SEGS.length - 1) {
      const t = Math.min(1, d / SEGS[i]);
      const [x0, y0] = PATH[i];
      const [x1, y1] = PATH[i + 1];
      return { x: x0 + (x1 - x0) * t, y: y0 + (y1 - y0) * t };
    }
    d -= SEGS[i];
  }
  return { x: PIN.x, y: PIN.y };
}

export default function PhoneDemo() {
  const [ri, setRi] = useState(1);
  const [pos, setPos] = useState({ x: PATH[0][0], y: PATH[0][1] });
  const [arrived, setArrived] = useState(false);
  const start = useRef<number | null>(null);
  const r = RADII[ri].r;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPos({ x: PIN.x, y: PIN.y + r - 8 });
      setArrived(true);
      return;
    }
    let raf = 0;
    start.current = null;
    const tick = (now: number) => {
      if (start.current === null || now - start.current > DURATION + PAUSE) start.current = now;
      const t = Math.min(1, (now - start.current) / DURATION);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const p = pointAt(eased * TOTAL);
      setPos(p);
      setArrived(Math.hypot(p.x - PIN.x, p.y - PIN.y) <= r);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [r]);

  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-status mono">
          <span>9:41</span>
          <span>● ● ●</span>
        </div>
        <div className="phone-header">
          <span className="display">GeoTask</span>
          <span className="reminder-chip mono">
            <Bell size={11} /> Buy groceries · {RADII[ri].label}
          </span>
        </div>

        <div className="map" style={{ width: W, height: H }}>
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden>
            <rect width={W} height={H} fill="#0d1015" />
            <g fill="#151a22">
              <rect x="38" y="8" width="98" height="60" rx="6" />
              <rect x="164" y="8" width="36" height="60" rx="6" />
              <rect x="38" y="92" width="98" height="74" rx="6" />
              <rect x="38" y="180" width="98" height="58" rx="6" />
              <rect x="164" y="92" width="36" height="146" rx="6" />
              <rect x="164" y="266" width="36" height="56" rx="6" />
            </g>
            <rect x="38" y="266" width="98" height="56" rx="6" fill="rgba(74,222,128,0.10)" />
            <path d="M226 92 C 240 120, 244 180, 244 240 L 244 92 Z" fill="rgba(96,165,250,0.12)" />
            <g stroke="#202733" strokeWidth="10" strokeLinecap="round">
              <line x1="0" y1="80" x2={W} y2="80" />
              <line x1="0" y1="252" x2={W} y2="252" />
              <line x1="24" y1="0" x2="24" y2={H} />
              <line x1="150" y1="0" x2="150" y2={H} />
              <line x1="214" y1="0" x2="214" y2={H} />
            </g>
            <polyline
              points={PATH.map((p) => p.join(",")).join(" ")}
              fill="none"
              stroke="rgba(94,234,212,0.55)"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
            <text x="160" y="124" fill="#5d6472" fontSize="9" fontFamily="monospace">
              FreshMart
            </text>
          </svg>

          <motion.div
            className={`fence ${arrived ? "hit" : ""}`}
            style={{ left: PIN.x, top: PIN.y }}
            animate={{ width: r * 2, height: r * 2 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
          />
          <div className="fence-pulse" style={{ left: PIN.x, top: PIN.y, width: r * 2, height: r * 2 }} />
          <div className="pin" style={{ left: PIN.x, top: PIN.y }}>
            <MapPin size={22} />
          </div>
          <div className="me" style={{ left: pos.x, top: pos.y }} />

          <AnimatePresence>
            {arrived && (
              <motion.div
                className="arrival"
                initial={{ y: -24, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="arrival-ic">
                  <Navigation size={14} />
                </div>
                <div>
                  <strong>You&apos;ve arrived near FreshMart</strong>
                  <span>Reminder: buy groceries &amp; milk</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="phone-bar" />
      </div>

      <div className="radius-ctl">
        <span className="mono">geofence radius</span>
        <div className="seg">
          {RADII.map((x, i) => (
            <button key={x.label} className={i === ri ? "on" : ""} onClick={() => setRi(i)}>
              {i === ri && <motion.span layoutId="seg-pill" className="seg-pill" />}
              <span className="seg-label">{x.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
