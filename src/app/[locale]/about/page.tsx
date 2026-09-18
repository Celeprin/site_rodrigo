import Image from "next/image";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <section className="section" style={{ background: "var(--navy-900)" }}>
        <div className="container-max grid gap-6 px-6 md:grid-cols-[1fr_1fr] md:items-start md:gap-4 md:px-12">
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
            <h1
              className="text-3xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#F5F1E8" }}
            >
              {dict.about.title}
            </h1>
            <p className="eyebrow mt-2" style={{ color: "#C98F5C" }}>
              {dict.about.roleLabel} — Rodrigo Vielmo Moura
            </p>
            <div className="mt-6 flex flex-col gap-5 max-w-xl">
              {dict.about.bio.map((paragraph, i) => (
                <p key={i} className="text-base" style={{ color: "#DCE3EC", lineHeight: 1.7 }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-max px-6 md:px-12">
          <div className="grid grid-cols-1 gap-10 border-t pt-12 sm:grid-cols-3" style={{ borderColor: "var(--line)" }}>
            <div>
              <h2
                className="text-lg"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--ink)" }}
              >
                {dict.about.missionTitle}
              </h2>
              <p className="mt-3 text-sm" style={{ color: "var(--ink-muted)" }}>
                {dict.about.mission}
              </p>
            </div>
            <div>
              <h2
                className="text-lg"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--ink)" }}
              >
                {dict.about.visionTitle}
              </h2>
              <p className="mt-3 text-sm" style={{ color: "var(--ink-muted)" }}>
                {dict.about.vision}
              </p>
            </div>
            <div>
              <h2
                className="text-lg"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--ink)" }}
              >
                {dict.about.valuesTitle}
              </h2>
              <p className="mt-3 text-sm" style={{ color: "var(--ink-muted)" }}>
                {dict.about.values}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
