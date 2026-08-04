import { Link } from "react-router-dom";
import FullBleedMedia from "../components/FullBleedMedia";
import Reveal from "../components/Reveal";
import { useLanguage } from "../contexts/LanguageContext";
import { practices } from "../data/practices";

export default function Practicas() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="px-6 pt-32 pb-16 md:px-10 md:pt-40 md:pb-20">
        <Reveal>
          <h1 className="font-serif text-5xl font-light tracking-wide text-zhou-text md:text-7xl">
            {t("practices.title")}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zhou-muted md:text-lg">
            {t("practices.subtitle")}
          </p>
        </Reveal>
      </section>

      <section>
        {practices.map((practice, index) => (
          <Link
            key={practice.slug}
            to={`/practicas/${practice.slug}`}
            className="group relative block h-[55vh] min-h-[320px] overflow-hidden border-t border-zhou-line"
          >
            <FullBleedMedia
              src={practice.media}
              poster={practice.poster}
              objectPosition={practice.objectPosition}
              scaleOnHover
            />
            <div className="relative z-10 flex h-full flex-col justify-end px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10">
              <Reveal delay={index * 0.04}>
                <div>
                  <p className="text-[11px] tracking-[0.22em] text-zhou-accent uppercase">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 font-serif text-4xl font-light tracking-wide text-zhou-text md:text-6xl">
                    {t(practice.nameKey)}
                  </h2>
                  <p className="mt-3 max-w-md text-sm text-zhou-muted md:text-base">
                    {t(practice.taglineKey)}
                  </p>
                </div>
              </Reveal>
              <span className="mt-6 text-[11px] tracking-[0.22em] text-zhou-text uppercase transition-transform duration-500 group-hover:translate-x-1 md:mt-0">
                {t("practices.view")} →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
