import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <section className="section min-h-[70vh]">
      <div className="container-max px-6 md:px-12">
        <h1
          className="text-3xl md:text-5xl"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--ink)" }}
        >
          {dict.contact.title}
        </h1>
        <p className="mt-4 max-w-xl text-base" style={{ color: "var(--ink-muted)" }}>
          {dict.contact.lead}
        </p>

        <dl className="mt-12 flex flex-col gap-8 max-w-md">
          <div className="border-t pt-6" style={{ borderColor: "var(--line)" }}>
            <dt className="eyebrow">{dict.contact.emailLabel}</dt>
            <dd className="mt-2">
              <a
                href="mailto:rodrigovielmostudio@gmail.com"
                className="text-xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--navy-900)" }}
              >
                rodrigovielmostudio@gmail.com
              </a>
            </dd>
          </div>
          <div className="border-t pt-6" style={{ borderColor: "var(--line)" }}>
            <dt className="eyebrow">{dict.contact.phoneLabel}</dt>
            <dd className="mt-2">
              <a
                href="tel:+5555999492899"
                className="text-xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--navy-900)" }}
              >
                +55 55 99949-2899
              </a>
            </dd>
          </div>
          <div className="border-t pt-6" style={{ borderColor: "var(--line)" }}>
            <dt className="eyebrow">{dict.contact.instagramLabel}</dt>
            <dd className="mt-2">
              <a
                href="https://instagram.com/rodrigovielmo_studio"
                target="_blank"
                rel="noreferrer"
                className="text-xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--navy-900)" }}
              >
                @rodrigovielmo_studio
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
