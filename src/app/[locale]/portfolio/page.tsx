import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionaries";
import PortfolioGrid from "@/components/PortfolioGrid";

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <section className="section">
      <div className="container-max px-6 md:px-12">
        <h1
          className="text-3xl md:text-5xl"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--ink)" }}
        >
          {dict.portfolio.title}
        </h1>
        <p className="mt-4 max-w-xl text-base" style={{ color: "var(--ink-muted)" }}>
          {dict.portfolio.lead}
        </p>

        <div className="mt-12">
          <PortfolioGrid locale={locale} dict={dict} />
        </div>
      </div>
    </section>
  );
}
