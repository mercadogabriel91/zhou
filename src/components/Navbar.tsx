import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import type { Locale } from "../i18n/types";

const links = [
  { path: "/", labelKey: "nav.home" as const },
  { path: "/practicas", labelKey: "nav.practices" as const },
  { path: "/nosotros", labelKey: "nav.about" as const },
  { path: "/contacto", labelKey: "nav.contact" as const },
];

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (next: Locale) => {
    setLocale(next);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-zhou-bg/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <NavLink
          to="/"
          className="font-serif text-xl font-light tracking-[0.08em] text-zhou-text md:text-2xl"
          onClick={() => setOpen(false)}
        >
          {t("nav.brand")}
        </NavLink>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map(({ path, labelKey }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 ${
                  isActive
                    ? "text-zhou-text"
                    : "text-zhou-muted hover:text-zhou-text"
                }`
              }
            >
              {t(labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div
            className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => switchLocale("es")}
              className={`transition-colors ${
                locale === "es"
                  ? "text-zhou-text"
                  : "text-zhou-muted hover:text-zhou-text"
              }`}
              aria-pressed={locale === "es"}
            >
              ES
            </button>
            <span className="text-zhou-line" aria-hidden>
              |
            </span>
            <button
              type="button"
              onClick={() => switchLocale("en")}
              className={`transition-colors ${
                locale === "en"
                  ? "text-zhou-text"
                  : "text-zhou-muted hover:text-zhou-text"
              }`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-px w-5 bg-zhou-text transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-zhou-text transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-6 border-t border-zhou-line bg-zhou-bg/95 px-6 py-8 md:hidden">
          {links.map(({ path, labelKey }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-serif text-3xl font-light tracking-wide ${
                  isActive ? "text-zhou-text" : "text-zhou-muted"
                }`
              }
            >
              {t(labelKey)}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
