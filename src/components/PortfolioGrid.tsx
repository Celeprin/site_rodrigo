"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { projects, type ProjectCategory } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

type Filter = "all" | ProjectCategory;

export default function PortfolioGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const options: { key: Filter; label: string }[] = [
    { key: "all", label: dict.portfolio.filters.all },
    { key: "residential", label: dict.portfolio.filters.residential },
    { key: "commercial", label: dict.portfolio.filters.commercial },
  ];

  return (
    <div>
      <div className="mb-10 flex gap-6 border-b" style={{ borderColor: "var(--line)" }}>
        {options.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setFilter(opt.key)}
            className="pb-3 text-sm"
            style={{
              color: filter === opt.key ? "var(--ink)" : "var(--ink-muted)",
              fontWeight: filter === opt.key ? 600 : 400,
              borderBottom: filter === opt.key ? "2px solid var(--walnut-600)" : "2px solid transparent",
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>
    </div>
  );
}
