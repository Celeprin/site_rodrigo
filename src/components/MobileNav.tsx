"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import LocaleSwitcher from "./LocaleSwitcher";

export default function MobileNav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
      >
        <span
          className="block h-px w-5 transition-transform"
          style={{ background: "var(--ink)", transform: open ? "translateY(3px) rotate(45deg)" : "none" }}
        />
        <span
          className="block h-px w-5 transition-transform"
          style={{ background: "var(--ink)", transform: open ? "translateY(-3px) rotate(-45deg)" : "none" }}
        />
      </button>

      {open && (
        <div
          className="absolute inset-x-0 top-full flex flex-col gap-5 border-t px-6 py-6"
          style={{ background: "var(--surface-100)", borderColor: "var(--line)" }}
        >
          <nav className="flex flex-col gap-4" aria-label="Principal">
            <Link href={`/${locale}`} onClick={() => setOpen(false)} className="text-base" style={{ color: "var(--ink)" }}>
              {dict.nav.home}
            </Link>
            <Link href={`/${locale}/portfolio`} onClick={() => setOpen(false)} className="text-base" style={{ color: "var(--ink)" }}>
              {dict.nav.portfolio}
            </Link>
            <Link href={`/${locale}/about`} onClick={() => setOpen(false)} className="text-base" style={{ color: "var(--ink)" }}>
              {dict.nav.about}
            </Link>
            <Link href={`/${locale}/contact`} onClick={() => setOpen(false)} className="text-base" style={{ color: "var(--ink)" }}>
              {dict.nav.contact}
            </Link>
          </nav>
          <LocaleSwitcher locale={locale} />
        </div>
      )}
    </div>
  );
}
