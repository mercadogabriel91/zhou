import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zhou-line px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Link
            to="/"
            className="font-serif text-2xl font-light tracking-wide text-zhou-text"
          >
            {t("nav.brand")}
          </Link>
          <p className="mt-2 text-sm tracking-wide text-zhou-muted">
            {t("footer.tagline")}
          </p>
        </div>
        <p className="text-xs tracking-widest text-zhou-muted uppercase">
          © {year} Espacio Zhou — {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
