import { useEffect, useState } from 'react';
import { navItems, portfolio } from './data/portfolio';
import { Section } from './components/Section';


function SocialIcon({ label }: { label: string }) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes('github')) {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.98c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (normalizedLabel.includes('linkedin')) {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
      </svg>
    );
  }

  return null;
}

function Navbar() {
  const [activeSection, setActiveSection] = useState(navItems[0].href);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      const currentSection = navItems.reduce((current, item) => {
        const section = document.querySelector(item.href);

        if (section instanceof HTMLElement && section.offsetTop <= scrollPosition) {
          return item.href;
        }

        return current;
      }, navItems[0].href);

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-charcoal/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <a href="#about" className="text-sm font-semibold tracking-wide text-white">
          {portfolio.name}
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-accent text-charcoal' : 'text-gray-300 hover:bg-white/5 hover:text-accent'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
        <a
          href={portfolio.cvUrl}
          download
          className="rounded-full border border-accent/40 px-4 py-2 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent hover:text-charcoal"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-6 pt-28">
      <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative animate-fade-up">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-accent">Portfolio</p>
          <h5 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {portfolio.name}
          </h5>
          <p className="mt-5 text-xl font-medium text-accent sm:text-2xl">{portfolio.headline}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">{portfolio.intro}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={portfolio.cvUrl}
              download
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-charcoal transition hover:bg-teal-200"
            >
              Download CV
            </a>
            {portfolio.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-accent/70 hover:text-accent"
              >
                <SocialIcon label={social.label} />
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <aside className="relative animate-fade-up rounded-3xl border border-white/10 bg-panel/80 p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Academic Focus</p>
          <div className="mt-8 space-y-6">
            {['Software Development', 'Artificial Intelligence', 'Graduate Study in Canada'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-lg font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="grid gap-6">
        {portfolio.education.map((item) => (
          <article key={item.degree} className="animate-fade-up rounded-3xl border border-white/10 bg-panel p-7 shadow-glow">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">{item.degree}</h3>
                <p className="mt-2 text-lg text-accent">{item.institution}</p>
              </div>
              <p className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">{item.years}</p>
            </div>
            <p className="mt-5 max-w-3xl leading-7 text-gray-400">{item.details}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {portfolio.skills.map((group) => (
          <article key={group.title} className="animate-fade-up rounded-3xl border border-white/10 bg-panel p-6">
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-white/[0.06] px-3 py-2 text-sm text-gray-200 ring-1 ring-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map((project) => (
          <article
            key={project.title}
            className="group animate-fade-up rounded-3xl border border-white/10 bg-panel p-6 transition hover:-translate-y-1 hover:border-accent/40"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 leading-7 text-gray-400">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-accent transition group-hover:text-teal-200"
            >
              Code →
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const mailtoHref = `mailto:${portfolio.email}?subject=Master's%20Degree%20Inquiry`;

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s Connect">
      <div className="animate-fade-up rounded-3xl border border-white/10 bg-panel p-8 shadow-glow">
        <p className="max-w-2xl text-lg leading-8 text-gray-400">
          I genuinely welcome opportunities to discuss graduate research, 
          software engineering, and artificial intelligence.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a
            href={mailtoHref}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-charcoal transition hover:bg-teal-200"
          >
            mh.vali.ardabili@gmail.com
          </a>
          {portfolio.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-accent/70 hover:text-accent"
            >
              <SocialIcon label={social.label} />
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {portfolio.name}. Built with React, TypeScript, and Tailwind CSS.
      </footer>
    </div>
  );
}
