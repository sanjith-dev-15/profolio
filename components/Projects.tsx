import { ArrowUpRight, Bell, Cloud, Code, Map as MapIcon, MessageSquare, Rocket, TrendingUp } from "lucide-react";
import { profile } from "@/lib/data";
import PhoneDemo from "./PhoneDemo";
import { GithubIcon, GlowCard, Reveal, SectionHead } from "./ui";

const features = [
  {
    icon: Bell,
    title: "Geofence reminders",
    text: "Background location checks with 200 m, 500 m or 1 km ranges. Guards against duplicate alerts and inaccurate GPS readings.",
  },
  {
    icon: Code,
    title: "Native Kotlin module",
    text: "Custom Expo Modules API module that shows arrival cards over other apps and runs reminders in the background.",
  },
  {
    icon: MessageSquare,
    title: "Bank SMS parser",
    text: "On-device parsing for 15+ Indian banks: amount, debit/credit, merchant, date and category, with hash-based duplicate detection.",
  },
  {
    icon: TrendingUp,
    title: "Expense dashboard",
    text: "Seven spending categories, monthly totals, daily averages, month-over-month comparison, income and balance, plus a spending calendar.",
  },
  {
    icon: MapIcon,
    title: "Maps & search",
    text: "MapLibre with OpenStreetMap services, location search, reverse geocoding and parsing of shared Google Maps links.",
  },
  {
    icon: Cloud,
    title: "Offline-first sync",
    text: "Google Sign-In and Firebase Auth, with data kept locally in AsyncStorage and synced to Cloud Firestore.",
  },
  {
    icon: Rocket,
    title: "Release automation",
    text: "GitHub Actions builds the signed APK, bumps the version code, verifies the signature, publishes the release and sends a Telegram notification.",
  },
];

const stack = ["React Native", "Expo", "TypeScript", "Kotlin", "Firebase", "Cloud Firestore", "MapLibre", "GitHub Actions"];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHead n="04" kicker="projects" title="Things I've built." />
        <Reveal>
          <GlowCard className="project">
            <div className="project-top">
              <div>
                <div className="kicker mono">featured · android</div>
                <h3 className="project-name display">
                  Geo<span className="grad">Task</span>
                </h3>
                <p className="project-sub">
                  A location-aware productivity and expense tracker with reminders that fire when you arrive somewhere,
                  plus expense tracking from bank SMS, notes and tasks.
                </p>
              </div>
              <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon /> View on GitHub <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="project-body">
              <PhoneDemo />
              <div className="features">
                {features.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="feature">
                    <div className="feature-ic">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tags project-stack">
              {stack.map((s) => (
                <span key={s} className="tag mono">
                  {s}
                </span>
              ))}
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
