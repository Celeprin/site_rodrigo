import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { locales, isLocale, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: `Rodrigo Vielmo Studio — ${dict.hero.eyebrow.split("—")[1]?.trim() ?? "Arquitetura & Interiores"}`,
    description: dict.hero.lead,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header locale={locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
