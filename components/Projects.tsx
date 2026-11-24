"use client";

import { useEffect, useState } from "react";
import type { projects as ProjectsData } from "@/data/portfolio";
import { TechPill } from "./techIcons";

type Project = (typeof ProjectsData)[number];

export default function Projects({ items }: { items: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="project-grid">
        {items.map((p, i) => (
          <button
            key={p.title}
            className="glass project-card reveal"
            style={{ transitionDelay: `${i * 80}ms` }}
            onClick={() => setSelected(p)}
          >
            <div className="project-body">
              {(p.company ?? p.kind) && <span className="project-company">{p.company ?? p.kind}</span>}
              <h3>{p.title}</h3>
              <p className="project-sub">{p.subtitle}</p>
              <p className="project-summary">{p.summary}</p>
              <div className="tech-pills">
                {p.tags.slice(0, 5).map((t) => (
                  <TechPill key={t} name={t} small />
                ))}
              </div>
              <span className="project-more">View details →</span>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div
            className="glass modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">
              ✕
            </button>
            <p className="eyebrow">{[selected.company, selected.kind ?? (selected.company ? "Company Project" : "Project")].filter(Boolean).join(" · ")}</p>
            <h3 id="modal-title">{selected.title}</h3>
            <p className="project-sub">{selected.subtitle}</p>
            <p className="modal-summary">{selected.summary}</p>
            <ul className="bullets">
              {selected.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="tech-pills">
              {selected.tags.map((t) => (
                <TechPill key={t} name={t} small />
              ))}
            </div>
            {(selected.repo || selected.demo) && (
              <div className="modal-links">
                {selected.repo && (
                  <a className="btn btn-sm" href={selected.repo} target="_blank" rel="noreferrer">Code ↗</a>
                )}
                {selected.demo && (
                  <a className="btn btn-sm btn-glow" href={selected.demo} target="_blank" rel="noreferrer">Live ↗</a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
