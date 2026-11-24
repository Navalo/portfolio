"use client";

import { useState } from "react";
import type { techStack as TechStackData } from "@/data/portfolio";
import { TechPill, categoryIcons, defaultCategoryIcon } from "./techIcons";

type Group = (typeof TechStackData)[number];

export default function TechStack({ groups }: { groups: Group[] }) {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? groups : groups.filter((g) => g.title === filter);

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filter tech stack">
        {["All", ...groups.map((g) => g.title)].map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={filter === t}
            className={`filter ${filter === t ? "active" : ""}`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="tech-grid" key={filter}>
        {shown.map((g, i) => {
          const Icon = categoryIcons[g.title] ?? defaultCategoryIcon;
          return (
            <div
              key={g.title}
              className="tech-card"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="tech-head">
                <span className="tech-icon">
                  <Icon aria-hidden />
                </span>
                <div className="tech-title">
                  <h3>{g.title}</h3>
                  <p>{g.items.length} technologies</p>
                </div>
                <span className="tech-badge">{filter === "All" ? "Category" : "Filtered"}</span>
              </div>
              <div className="tech-pills">
                {g.items.map((it, j) => (
                  <span key={it} className="pill-in" style={{ animationDelay: `${i * 70 + j * 30}ms` }}>
                    <TechPill name={it} />
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
