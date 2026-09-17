import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import LocaleSwitcher from "./LocaleSwitcher";
import MobileNav from "./MobileNav";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-sm"
      style={{ borderColor: "var(--line)", background: "var(--header-bg)" }}
    >
      <div className="container-max relative flex items-center justify-between px-6 py-4 md:px-12">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/images/logo/logo-mark-navy.png"
            alt="Rodrigo Vielmo Studio"
            width={28}
            height={33}
            priority
          />
          <span
            className="hidden text-sm font-semibold sm:inline"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            Rodrigo Vielmo Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex md:gap-8" aria-label="Principal">
          <Link href={`/${locale}`} className="text-sm" style={{ color: "var(--ink)" }}>
            {dict.nav.home}
          </Link>
          <Link href={`/${locale}/portfolio`} className="text-sm" style={{ color: "var(--ink)" }}>
            {dict.nav.portfolio}
          </Link>
          <Link href={`/${locale}/about`} className="text-sm" style={{ color: "var(--ink)" }}>
            {dict.nav.about}
          </Link>
          <Link href={`/${locale}/contact`} className="text-sm" style={{ color: "var(--ink)" }}>
            {dict.nav.contact}
          </Link>
          <LocaleSwitcher locale={locale} />
        </nav>

        <MobileNav locale={locale} dict={dict} />
      </div>
    </header>
  );
}
