import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Sanjith B</span>
          <span className="mono">Built with Next.js · Hosted on Vercel</span>
        </div>
      </footer>
    </>
  );
}
