import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--navy-900)", color: "#F5F1E8" }}>
      <div className="container-max grid gap-10 px-6 py-16 md:grid-cols-3 md:px-12 md:py-20">
        <div className="flex flex-col gap-4">
          <Image src="/images/logo/logo-mark-white.png" alt="Rodrigo Vielmo Studio" width={32} height={38} />
          <p className="text-sm" style={{ color: "#B9C2CF" }}>
            {dict.footer.tagline}
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm" aria-label="Navegação">
          <Link href={`/${locale}`}>{dict.nav.home}</Link>
          <Link href={`/${locale}/portfolio`}>{dict.nav.portfolio}</Link>
          <Link href={`/${locale}/about`}>{dict.nav.about}</Link>
          <Link href={`/${locale}/contact`}>{dict.nav.contact}</Link>
        </nav>

        <div className="flex flex-col gap-2 text-sm" style={{ color: "#B9C2CF" }}>
          <a href="mailto:rodrigovielmostudio@gmail.com">rodrigovielmostudio@gmail.com</a>
          <a href="tel:+5555999492899">+55 55 99949-2899</a>
          <a href="https://instagram.com/rodrigovielmo_studio" target="_blank" rel="noreferrer">
            @rodrigovielmo_studio
          </a>
        </div>
      </div>

      <div
        className="container-max flex flex-col gap-2 border-t px-6 py-6 text-xs md:flex-row md:items-center md:justify-between md:px-12"
        style={{ borderColor: "rgba(255,255,255,0.12)", color: "#8D9DB3" }}
      >
        <span>
          © {year} Rodrigo Vielmo Studio. {dict.footer.rights}
        </span>
      </div>
    </footer>
  );
}
