import Image from "next/image";
import Link from "next/link";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const featured = projects.slice(0, 6);

  return (
    <>
      <section className="relative flex min-h-[88vh] items-end" style={{ background: "var(--navy-900)" }}>
        <Image
          src="/images/portfolio/living-santa-maria-rs.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-70"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,45,92,0.15) 0%, rgba(10,45,92,0.85) 100%)" }}
        />
        <div className="container-max relative z-10 px-6 pb-16 md:px-12 md:pb-24">
          <p className="eyebrow" style={{ color: "#C98F5C" }}>
            {dict.hero.eyebrow}
          </p>
          <h1
            className="mt-4 max-w-3xl text-4xl font-bold text-white md:text-6xl"
            style={{ fontFamily: "var(--font-display)", lineHeight: 1.08 }}
          >
            {dict.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg" style={{ color: "#DCE3EC" }}>
            {dict.hero.lead}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/portfolio`}
              className="px-6 py-3 text-sm font-medium"
              style={{ background: "#F5F1E8", color: "var(--navy-900)" }}
            >
              {dict.hero.ctaPortfolio}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="border px-6 py-3 text-sm font-medium text-white"
              style={{ borderColor: "rgba(255,255,255,0.4)" }}
            >
              {dict.hero.ctaContact}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max px-6 md:px-12">
          <blockquote
            className="max-w-2xl text-2xl md:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.25 }}
          >
            “{dict.about.mission}”
          </blockquote>
          <p className="mt-4 text-sm" style={{ color: "var(--ink-muted)" }}>
            — {dict.about.missionTitle}, {dict.hero.eyebrow.split("—")[0]?.trim()}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-200)" }}>
        <div className="container-max px-6 md:px-12">
          <p className="eyebrow">{dict.process.title}</p>
          <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {dict.process.steps.map((step, i) => (
              <div key={step.title} className="border-t pt-6" style={{ borderColor: "var(--line)" }}>
                <span className="text-sm" style={{ color: "var(--walnut-600)" }}>
                  0{i + 1}
                </span>
                <h3
                  className="mt-2 text-lg"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--ink)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: "var(--ink-muted)" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max px-6 md:px-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <p className="eyebrow">{dict.portfolioTeaser.title}</p>
            <Link href={`/${locale}/portfolio`} className="text-sm underline" style={{ color: "var(--walnut-600)" }}>
              {dict.portfolioTeaser.cta}
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--navy-900)" }}>
        <div className="container-max grid gap-10 px-6 md:grid-cols-[280px_1fr] md:items-center md:px-12">
          <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden">
            <Image
              src="/images/team/rodrigo-vielmo-moura-retrato.jpg"
              alt="Rodrigo Vielmo Moura"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow" style={{ color: "#C98F5C" }}>
              {dict.aboutTeaser.title}
            </p>
            <p className="mt-4 max-w-xl text-base md:text-lg" style={{ color: "#F5F1E8" }}>
              {dict.aboutTeaser.body}
            </p>
            <Link
              href={`/${locale}/about`}
              className="mt-6 inline-block border-b text-sm"
              style={{ color: "#F5F1E8", borderColor: "#C98F5C" }}
            >
              {dict.aboutTeaser.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
