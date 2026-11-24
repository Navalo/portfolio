"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech", label: "Tech" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Nav({
  logo,
  name,
  role,
  resumeUrl,
}: {
  logo: string;
  name: string;
  role: string;
  resumeUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#home" className="logo" aria-label={`${name}, home`}>
          <span className="logo-mark" aria-hidden>{logo}</span>
          <span className="logo-text">
            <span className="logo-name">{name}</span>
            <span className="logo-role">{role}</span>
          </span>
        </a>
        <nav className={open ? "open" : ""} aria-label="Sections">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          {resumeUrl && (
            <a className="nav-resume mobile-only" href={resumeUrl} target="_blank" rel="noreferrer">
              Resume ↗
            </a>
          )}
        </nav>
        <div className="nav-actions">
          {resumeUrl && (
            <a className="btn btn-sm btn-glow desktop-only" href={resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
          )}
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
