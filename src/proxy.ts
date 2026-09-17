import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/locales";

export const config = {
  matcher: ["/:path*"],
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage.split(",")[0]?.split("-")[0]?.toLowerCase() ?? "";
  const locale = isLocale(preferred) ? preferred : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}
