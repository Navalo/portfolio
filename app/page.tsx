import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import TechStack from "@/components/TechStack";
import { TechPill } from "@/components/techIcons";
import {
  profile,
  summary,
  stats,
  competencies,
  techStack,
  experience,
  projects,
  education,
  certifications,
} from "@/data/portfolio";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBase = (url: string) => (url.startsWith("/") ? basePath + url : url);

function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-header reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

function CodeCard() {
  const current = experience[0];
  return (
    <div className="glass code-card reveal">
      <div className="code-top">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="code-file">developer.cs</span>
      </div>
      <pre className="code">
        <code>
          <span className="k">public record</span> <span className="t">Developer</span>
          {"\n{\n"}
          {"  "}<span className="t">string</span> Name {"=> "}<span className="s">&quot;{profile.name}&quot;</span>;{"\n"}
          {"  "}<span className="t">string</span> Role {"=> "}<span className="s">&quot;{profile.role}&quot;</span>;{"\n"}
          {"  "}<span className="t">string</span> Company {"=> "}<span className="s">&quot;{current.company.replace(" Pty Ltd", "")}&quot;</span>;{"\n"}
          {"  "}<span className="t">string</span>[] Stack {"=> ["}{"\n"}
          {"    "}<span className="s">&quot;C#&quot;</span>, <span className="s">&quot;.NET 8&quot;</span>, <span className="s">&quot;ASP.NET Core&quot;</span>,{"\n"}
          {"    "}<span className="s">&quot;EF Core&quot;</span>, <span className="s">&quot;SQL Server&quot;</span>,{"\n"}
          {"    "}<span className="s">&quot;Angular&quot;</span>, <span className="s">&quot;Next.js&quot;</span>,{"\n"}
          {"    "}<span className="s">&quot;Azure&quot;</span>, <span className="s">&quot;AWS&quot;</span>{"\n"}
          {"  ];\n"}
          {"  "}<span className="t">int</span> YearsOfExperience {"=> "}<span className="n">6</span>;{"\n"}
          {"  "}<span className="t">bool</span> OpenToWork {"=> "}<span className="k">true</span>;{"\n"}
          {"}"}
        </code>
      </pre>
    </div>
  );
}

export default function Home() {
  const resumeUrl = profile.resumeUrl ? withBase(profile.resumeUrl) : "";
  const [first, ...rest] = profile.name.split(" ");

  return (
    <>
      <div className="bg" aria-hidden>
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="grid" />
      </div>
      <Reveal />
      <Nav logo={profile.logo} name={profile.name} role={profile.role} resumeUrl={resumeUrl} />

      <main>
        {/* ── Hero ── */}
        <section id="home" className="hero container">
          <div className="hero-text reveal">
            <span className="status">
              <span className="pulse" /> Available · {profile.status}
            </span>
            <p className="hello">Hi, I&apos;m</p>
            <h1>
              <span className="gradient-text">{first}</span>
              <br />
              <span className="surname">{rest.join(" ")}</span>
            </h1>
            <p className="hero-role">
              {profile.role} <span className="muted">· {profile.location}</span>
            </p>
            <p className="hero-headline">{profile.headline}</p>
            <p className="lead">{profile.tagline}</p>
            <div className="actions">
              <a className="btn btn-glow" href="#projects">View projects</a>
              <a className="btn" href="#contact">Get in touch</a>
              {resumeUrl && (
                <a className="btn btn-ghost" href={resumeUrl} target="_blank" rel="noreferrer">
                  Resume ↓
                </a>
              )}
            </div>
            <ul className="hero-socials">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${profile.email}`}>Email ↗</a>
              </li>
            </ul>
          </div>
          <CodeCard />
          <a href="#about" className="scroll-hint" aria-label="Scroll to About">
            <span>Scroll</span>
            <span className="mouse"><span /></span>
          </a>
        </section>

        {/* ── About ── */}
        <section id="about" className="container">
          <SectionHeader eyebrow="About Me" title="Professional Summary" />
          <div className="about-grid">
            <div className="glass about-card reveal">
              {summary.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="about-meta">
                <div>
                  <span className="meta-label">Current Role</span>
                  <span>{experience[0].role}</span>
                </div>
                <div>
                  <span className="meta-label">Company</span>
                  <span>{experience[0].company}</span>
                </div>
                <div>
                  <span className="meta-label">Location</span>
                  <span>{profile.location}</span>
                </div>
                <div>
                  <span className="meta-label">Focus</span>
                  <span>.NET · APIs · Cloud</span>
                </div>
              </div>
            </div>
            <div className="stats">
              {stats.map((s, i) => (
                <div key={s.label} className="glass stat reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                  <span className="stat-value gradient-text">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="competencies reveal">
            <h3>Core Competencies</h3>
            <ul className="chips chips-lg">
              {competencies.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Tech stack ── */}
        <section id="tech" className="container">
          <SectionHeader
            eyebrow="Tools & technologies"
            title="Tech Stack"
            intro="A practical stack I use across backend, frontend, data, cloud and delivery."
          />
          <div className="reveal">
            <TechStack groups={techStack} />
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="container">
          <SectionHeader
            eyebrow="Experience"
            title="Work Experience"
            intro="Six years of building, shipping and supporting production software."
          />
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.company} className="timeline-item reveal">
                <span className={`timeline-dot ${e.current ? "current" : ""}`} />
                <div className="glass timeline-card">
                  <div className="timeline-head">
                    <div>
                      <h3>{e.role}</h3>
                      <p className="company">{e.company}</p>
                    </div>
                    <span className={`period ${e.current ? "current" : ""}`}>{e.period}</span>
                  </div>
                  <ul className="bullets">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="tech-pills">
                    {e.tech.map((t) => (
                      <TechPill key={t} name={t} small />
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="container">
          <SectionHeader
            eyebrow="Selected work"
            title="Projects"
            intro="Things I've built and shipped — click a card to view details."
          />
          <Projects items={projects} />
        </section>

        {/* ── Education ── */}
        <section id="education" className="container">
          <SectionHeader
            eyebrow="Education"
            title="Education & Certifications"
            intro="My academic foundation and professional certification."
          />
          <div className="edu-grid">
            {education.map((ed) => (
              <div key={ed.title} className="glass edu-card reveal">
                <span className="edu-icon">🎓</span>
                <div>
                  <span className="period">{ed.period}</span>
                  <h3>{ed.title}</h3>
                  <p className="company">{ed.org}</p>
                  <p className="muted">{ed.description}</p>
                </div>
              </div>
            ))}
            {certifications.map((c) => (
              <div key={c.title} className="glass edu-card reveal">
                <span className="edu-icon">🏅</span>
                <div>
                  <span className="period">{c.period}</span>
                  <h3>{c.title}</h3>
                  <p className="company">{c.org} · {c.code}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="container">
          <SectionHeader
            eyebrow="Contact"
            title="Get in touch"
            intro="Let's connect and bring your idea to life."
          />
          <div className="contact-grid">
            <div className="contact-info reveal">
              <p className="contact-lead">Tell me about your next project or role 👋</p>
              <a className="glass contact-item" href={`mailto:${profile.email}`}>
                <span className="contact-icon">✉</span>
                <span>
                  <span className="meta-label">Email</span>
                  {profile.email}
                </span>
              </a>
              {profile.whatsapp && (
                <a className="glass contact-item" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
                  <span className="contact-icon">💬</span>
                  <span>
                    <span className="meta-label">WhatsApp</span>
                    Chat with me
                  </span>
                </a>
              )}
              {profile.socials.map((s) => (
                <a key={s.label} className="glass contact-item" href={s.url} target="_blank" rel="noreferrer">
                  <span className="contact-icon">in</span>
                  <span>
                    <span className="meta-label">{s.label}</span>
                    Connect with me
                  </span>
                </a>
              ))}
              <div className="glass contact-item">
                <span className="contact-icon">⌖</span>
                <span>
                  <span className="meta-label">Location</span>
                  {profile.location}
                </span>
              </div>
              <p className="muted small">
                <span className="pulse" /> {profile.status} · Usually replies within 24h
              </p>
            </div>
            <ContactForm email={profile.email} />
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="muted">{profile.role} · {profile.location}</p>
      </footer>
    </>
  );
}
