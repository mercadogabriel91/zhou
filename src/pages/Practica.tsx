import { Link, Navigate, useParams } from "react-router-dom";
import PracticeMedia from "../components/PracticeMedia";
import Reveal from "../components/Reveal";
import { useLanguage } from "../contexts/LanguageContext";
import { getPractice } from "../data/practices";

export default function Practica() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const practice = slug ? getPractice(slug) : undefined;

  if (!practice) {
    return <Navigate to="/practicas" replace />;
  }

  return (
    <main>
      <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
        <PracticeMedia practice={practice} />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-14 md:px-10 md:pb-20">
          <Reveal>
            <Link
              to="/practicas"
              className="text-[11px] tracking-[0.22em] text-zhou-muted uppercase transition-colors hover:text-zhou-text"
            >
              ← {t("practice.back")}
            </Link>
            <h1 className="mt-6 font-serif text-5xl font-light tracking-wide text-zhou-text md:text-7xl">
              {t(practice.nameKey)}
            </h1>
            <p className="mt-4 max-w-lg font-serif text-xl italic font-light text-zhou-text/90 md:text-2xl">
              {t(practice.taglineKey)}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <p className="text-base leading-relaxed text-zhou-muted md:text-lg">
              {t(practice.bodyKey)}
            </p>
            <Link
              to="/contacto"
              className="mt-12 inline-block border-b border-zhou-accent/70 pb-1 text-[11px] tracking-[0.22em] text-zhou-accent uppercase transition-colors hover:border-zhou-text hover:text-zhou-text"
            >
              {t("practice.cta")}
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
