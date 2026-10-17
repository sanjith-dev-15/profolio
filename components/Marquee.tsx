const rows = [
  ["Node.js", "Express.js", "Anthropic Claude", "Google Gemini", "Prompt Engineering", "REST APIs", "PostgreSQL", "Supabase"],
  ["React Native", "Expo", "TypeScript", "Kotlin", "Firebase", "MapLibre", "GitHub Actions", "Geofencing"],
];

export default function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden>
      {rows.map((row, r) => (
        <div key={r} className={`marquee ${r ? "rev" : ""}`}>
          <div className="marquee-track">
            {[...row, ...row].map((s, i) => (
              <span key={i} className="marquee-item display">
                {s}
                <i>✦</i>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
