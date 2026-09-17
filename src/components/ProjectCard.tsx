import Image from "next/image";
import type { Locale } from "@/lib/i18n/locales";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <figure className="group flex flex-col gap-3">
      <div className="relative aspect-[4/5] overflow-hidden" style={{ background: "var(--surface-200)" }}>
        <Image
          src={project.image}
          alt={`${project.label[locale]} — ${project.place}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <figcaption className="flex items-baseline justify-between gap-3">
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "18px", color: "var(--ink)" }}>
          {project.label[locale]}
        </span>
        <span className="text-sm whitespace-nowrap" style={{ color: "var(--ink-muted)" }}>
          {project.place}
        </span>
      </figcaption>
    </figure>
  );
}
