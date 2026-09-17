import Image from "next/image";
import Link from "next/link";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import CornerMark from "@/components/CornerMark";

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
        <CornerMark className="absolute top-6 right-6 z-10 hidden sm:block" />
        <div className="container-max relative z-10 px-6 pb-16 md:px-12 md:pb-24">
          <h1
            className="max-w-4xl text-5xl font-bold text-white md:text-7xl"
            style={{ fontFamily: "var(--font-display)", lineHeight: 0.96, letterSpacing: "-0.01em" }}
          >
            {dict.hero.headlineLead} <em style={{ fontStyle: "italic", fontWeight: 600 }}>{dict.hero.headlineEmphasis}</em>
          </h1>
          <p className="mt-7 max-w-xl text-base md:text-lg" style={{ color: "#DCE3EC" }}>
            {dict.hero.lead}
          </p>
          <p className="eyebrow mt-4" style={{ color: "#8DA0BE" }}>
            {dict.hero.locations}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link href={`/${locale}/portfolio`} className="btn-primary">
              {dict.hero.ctaPortfolio} <span aria-hidden>↗</span>
            </Link>
            <Link href={`/${locale}/contact`} className="btn-text text-white">
              {dict.hero.ctaContact} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-200)" }}>
        <div className="container-max px-6 md:px-12">
          <p className="eyebrow">{dict.process.title}</p>
          <h2
            className="mt-4 max-w-2xl text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            {dict.process.headlineLead}{" "}
            <em style={{ fontStyle: "italic", fontWeight: 600 }}>{dict.process.headlineEmphasis}</em>
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
            <Link href={`/${locale}/portfolio`} className="btn-text" style={{ color: "var(--walnut-600)" }}>
              {dict.portfolioTeaser.cta} <span aria-hidden>→</span>
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
        <div className="container-max grid gap-6 px-6 md:grid-cols-[1fr_1fr] md:items-center md:gap-4 md:px-12">
          <div className="relative aspect-[4/5] w-full max-w-[480px] mx-auto md:mx-0">
            <Image
              src="/images/team/rodrigo-vielmo-moura-retrato.jpg"
              alt="Rodrigo Vielmo Moura"
              fill
              className="portrait-fade object-cover object-top"
            />
            <div className="portrait-scrim absolute inset-0 pointer-events-none" />
          </div>
          <div>
            <p className="eyebrow" style={{ color: "#C98F5C" }}>
              {dict.aboutTeaser.title}
            </p>
            <p className="mt-4 max-w-xl text-base md:text-lg" style={{ color: "#F5F1E8" }}>
              {dict.aboutTeaser.body}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {dict.aboutTeaser.credentials.map((c) => (
                <li key={c} className="eyebrow" style={{ color: "#8DA0BE" }}>
                  {c}
                </li>
              ))}
            </ul>
            <Link href={`/${locale}/about`} className="btn-text mt-8" style={{ color: "#F5F1E8" }}>
              {dict.aboutTeaser.cta} <span aria-hidden style={{ color: "#C98F5C" }}>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
