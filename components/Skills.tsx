import { Code, Database, GitBranch, Map as MapIcon, Server, Smartphone, Sparkles } from "lucide-react";
import { skillGroups } from "@/lib/data";
import { GlowCard, Reveal, SectionHead } from "./ui";

const icons = {
  ai: Sparkles,
  backend: Server,
  mobile: Smartphone,
  lang: Code,
  data: Database,
  maps: MapIcon,
  devops: GitBranch,
} as const;

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHead n="02" kicker="skills" title="The toolkit." />
        <div className="bento">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.key];
            return (
              <Reveal key={g.key} delay={(i % 3) * 0.08} className={`bento-item b-${g.key}`}>
                <GlowCard className="skill">
                  <div className="skill-icon">
                    <Icon size={20} />
                  </div>
                  <h3 className="display">{g.title}</h3>
                  <p>{g.blurb}</p>
                  <div className="tags">
                    {g.items.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
