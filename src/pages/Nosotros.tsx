import chinaVideo from "../assets/china.mp4";
import homeBg from "../assets/home-bg.png";
import Reveal from "../components/Reveal";
import { useLanguage } from "../contexts/LanguageContext";

const values = [
  {
    title: "about.values.health" as const,
    desc: "about.values.health.desc" as const,
  },
  {
    title: "about.values.harmony" as const,
    desc: "about.values.harmony.desc" as const,
  },
  {
    title: "about.values.balance" as const,
    desc: "about.values.balance.desc" as const,
  },
  {
    title: "about.values.peace" as const,
    desc: "about.values.peace.desc" as const,
  },
];

export default function Nosotros() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="relative min-h-[60vh] overflow-hidden px-6 pt-32 pb-20 md:px-10 md:pt-40">
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <video
            className="h-full w-full object-cover"
            src={chinaVideo}
            poster={homeBg}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-zhou-bg/75" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <h1 className="font-serif text-5xl font-light tracking-wide text-zhou-text md:text-7xl">
              {t("about.title")}
            </h1>
            <p className="mt-8 font-serif text-2xl font-light italic leading-snug text-zhou-text/90 md:text-3xl">
              {t("about.lead")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-zhou-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl space-y-8">
          <Reveal>
            <p className="text-base leading-relaxed text-zhou-muted md:text-lg">
              {t("about.body1")}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-base leading-relaxed text-zhou-muted md:text-lg">
              {t("about.body2")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-zhou-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06}>
              <h2 className="font-serif text-2xl font-light tracking-wide text-zhou-text md:text-3xl">
                {t(value.title)}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zhou-muted md:text-base">
                {t(value.desc)}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
