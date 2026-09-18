"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Activity, ArrowDownRight, ArrowUpRight, Globe2, Layers3, Network, Sparkles, TerminalSquare } from "lucide-react";

const projects = [
  { index: "03", name: "LlamaMind", description: "A lightweight local LLM runner that turns llama.cpp setup, authentication, LAN access, and performance tuning into one approachable workflow.", stack: ["Node.js", "llama.cpp", "Vulkan", "Local AI"], href: "https://github.com/Heygoodbye/LLamaMind", icon: TerminalSquare },
  { index: "04", name: "Open experiments", description: "Utilities, infrastructure experiments, and small ideas built to make complicated systems easier to operate.", stack: ["TypeScript", "Python", "Docker", "Automation"], href: "https://github.com/Heygoodbye?tab=repositories", icon: Layers3 },
];

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((element) => observer.observe(element));
    const move = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("pointermove", move); };
  }, []);

  return (
    <main>
      <div className="cursor-glow" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="HeyGoodbye, back to top"><span>HG</span><strong>HeyGoodbye</strong></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#resume">Resume</a>
          <a href="https://github.com/Heygoodbye" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-meta reveal"><span><i /> Independent developer</span><span>Building from the system layer up</span></div>
        <div className="hero-title" aria-label="Hey Goodbye"><div className="word word-hey">HEY</div><div className="word word-goodbye">GOODBYE<span>.</span></div></div>
        <div className="hero-bottom reveal">
          <p>I design and build practical software across <em>Windows networking</em>, local AI, and developer tooling.</p>
          <a className="circle-link" href="#work" aria-label="See selected work"><ArrowDownRight size={28} /></a>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><div>
        <span>WINDOWS SOFTWARE</span><b>✦</b><span>SYSTEMS TOOLING</span><b>✦</b><span>LOCAL AI</span><b>✦</b><span>USEFUL INTERFACES</span><b>✦</b>
        <span>WINDOWS SOFTWARE</span><b>✦</b><span>SYSTEMS TOOLING</span><b>✦</b><span>LOCAL AI</span><b>✦</b><span>USEFUL INTERFACES</span><b>✦</b>
      </div></div>

      <section className="work-section" id="work">
        <div className="section-label reveal"><span>01 — Selected work</span><p>Products made to solve real friction, not fill a grid.</p></div>
        <article className="featured-project reveal">
          <div className="project-copy">
            <div className="project-heading"><span>01 / Flagship</span><Image src="/netroute-logo.png" width={54} height={54} alt="NetRoute logo" /></div>
            <h2>NetRoute</h2>
            <p>Per-application internet routing for Windows. Assign a game to Ethernet, downloads to a phone hotspot, and a browser to Wi-Fi—at the same time, without a VPN.</p>
            <ul className="project-tags" aria-label="NetRoute technologies"><li>C#</li><li>WPF</li><li>Windows Service</li><li>Networking</li></ul>
            <a className="text-link" href="https://netroute.heygoodbye.xyz" target="_blank" rel="noreferrer">View the project <ArrowUpRight size={17} /></a>
          </div>
          <a className="project-visual" href="https://github.com/Heygoodbye/NetRoute" target="_blank" rel="noreferrer" aria-label="Open NetRoute project">
            <div className="window-bar"><i /><i /><i /><span>NETROUTE / DASHBOARD</span></div>
            <Image src="/netroute-dashboard.png" width={1714} height={969} sizes="(max-width: 900px) 94vw, 58vw" alt="NetRoute application dashboard showing network adapters and routing rules" priority />
            <span className="visual-badge"><Network size={16} /> Built for Windows</span>
          </a>
        </article>

        <article className="featured-project byedata-project reveal">
          <div className="project-copy">
            <div className="project-heading"><span>02 / Windows utility</span><span className="project-heading-icon"><Activity size={24} /></span></div>
            <h2>ByeData</h2>
            <p>Live download and upload totals, placed directly on the Windows taskbar. ByeData stays quiet during fullscreen apps and keeps a readable daily history of every session.</p>
            <ul className="project-tags" aria-label="ByeData technologies"><li>C#</li><li>WinForms</li><li>Windows</li><li>Networking</li></ul>
            <a className="text-link" href="https://heygoodbye.github.io/ByeData-website/" target="_blank" rel="noreferrer">View the project <ArrowUpRight size={17} /></a>
          </div>
          <a className="project-visual byedata-visual" href="https://heygoodbye.github.io/ByeData-website/" target="_blank" rel="noreferrer" aria-label="Open ByeData project website">
            <div className="window-bar"><i /><i /><i /><span>BYEDATA / USAGE</span></div>
            <Image src="/byedata-app.png" width={572} height={553} sizes="(max-width: 900px) 94vw, 50vw" alt="ByeData application showing session network usage and settings" />
            <span className="visual-badge"><Activity size={16} /> Lives on the taskbar</span>
          </a>
        </article>

        <div className="project-list">
          {projects.map(({ index, name, description, stack, href, icon: Icon }) => (
            <a className="project-row reveal" href={href} target="_blank" rel="noreferrer" key={name}>
              <span className="project-index">{index}</span><span className="project-icon"><Icon size={24} /></span>
              <span className="project-info"><strong>{name}</strong><small>{description}</small></span>
              <span className="row-stack">{stack.slice(0, 2).join(" · ")}</span><ArrowUpRight className="row-arrow" size={24} />
            </a>
          ))}
        </div>
      </section>

      <section className="resume-section" id="resume">
        <div className="section-label reveal"><span>02 — Resume</span><p>A product-minded developer with a bias for useful, shippable software.</p></div>
        <div className="resume-grid">
          <div className="resume-intro reveal">
            <span className="tiny-label">PROFILE</span><h2>I turn technical constraints into tools people can actually use.</h2>
            <p>My work moves between low-level networking, desktop products, local AI, and the interfaces that make those systems understandable.</p>
            <a className="resume-github" href="https://github.com/Heygoodbye" target="_blank" rel="noreferrer"><TerminalSquare size={19} /> github.com/Heygoodbye</a>
          </div>
          <div className="resume-details reveal">
            <div className="resume-block"><span className="tiny-label">SELECTED EXPERIENCE</span><div className="resume-entry"><div><strong>Independent software developer</strong><small>Product design & engineering</small></div><span>Present</span></div><p>Building NetRoute, ByeData, LlamaMind, and focused tools that simplify complex systems.</p></div>
            <div className="resume-block"><span className="tiny-label">CAPABILITIES</span><ul className="skills-list"><li><Sparkles size={16} /> Product engineering</li><li><Network size={16} /> Windows & networking</li><li><TerminalSquare size={16} /> Local AI tooling</li><li><Globe2 size={16} /> Web interfaces</li></ul></div>
            <div className="resume-block"><span className="tiny-label">TECHNOLOGIES</span><p className="tech-line">C# · WPF · TypeScript · Python · Node.js · Docker · Git · Windows Services</p></div>
          </div>
        </div>
      </section>

      <footer>
        <div><span>Have a difficult idea?</span><h2>Say hey before<br />you say goodbye.</h2></div>
        <a className="footer-link" href="https://github.com/Heygoodbye" target="_blank" rel="noreferrer">Let&apos;s connect <ArrowUpRight size={24} /></a>
        <div className="footer-bottom"><span>© 2026 HeyGoodbye</span><span>Designed & built with intent.</span></div>
      </footer>
    </main>
  );
}
