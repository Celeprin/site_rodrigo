"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/locales";

const labels: Record<Locale, string> = { pt: "PT", en: "EN", it: "IT" };

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <nav aria-label="Idioma" className="flex items-center gap-2">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden className="text-[var(--line)]">/</span>}
          <Link
            href={`/${l}${rest ? `/${rest}` : ""}`}
            className="text-sm"
            style={{
              color: l === locale ? "var(--ink)" : "var(--ink-muted)",
              fontWeight: l === locale ? 600 : 400,
            }}
            aria-current={l === locale ? "true" : undefined}
          >
            {labels[l]}
          </Link>
        </span>
      ))}
    </nav>
  );
}
