import { stats } from "@/lib/data";
import { CountUp, GlowCard, Reveal, SectionHead } from "./ui";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHead n="01" kicker="about" title="Engineer by training, builder by habit." />
        <div className="about-grid">
          <Reveal className="about-text">
            <p className="about-big display">
              I turn messy financial documents into <span className="grad">structured, filing-ready data</span>, and
              ideas into Android apps people use every day.
            </p>
            <p>
              At <strong>Nigo Compliance</strong> I build the AI backend that reads balance sheets and corporate
              records with Claude and Gemini and drafts statutory filings like MGT-7, AOC-4 and Director&apos;s Reports.
            </p>
            <p>
              On mobile I work in React Native, Expo and TypeScript. When JavaScript isn&apos;t enough I write native
              Kotlin modules, along with background tasks, geofencing, Firebase sync and automated release pipelines.
            </p>
            <p>
              I started in mechanical engineering before moving to computer science, and I still care most about
              software that keeps working in production.
            </p>
          </Reveal>
          <div className="stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <GlowCard className="stat">
                  <div className="stat-n display">
                    <CountUp to={s.n} suffix={s.suffix} />
                  </div>
                  <div className="stat-l">{s.label}</div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
