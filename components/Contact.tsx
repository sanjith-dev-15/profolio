"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, Reveal } from "./ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Reveal className="contact">
          <div className="kicker mono">
            <span>06</span> / contact
          </div>
          <h2 className="contact-title display">
            Let&apos;s build something <span className="grad">useful.</span>
          </h2>
          <p>
            I&apos;m open to roles and collaborations in AI backend development and mobile apps. Email is the fastest
            way to reach me.
          </p>
          <div className="actions center">
            <button className="btn btn-primary btn-lg" onClick={copy}>
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Copied to clipboard" : profile.email}
            </button>
            <a className="btn btn-lg" href={`mailto:${profile.email}`}>
              <Mail size={18} /> Send an email
            </a>
          </div>
          <div className="socials">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
