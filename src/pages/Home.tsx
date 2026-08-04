import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import homeBg from "../assets/home-bg.png";
import chinaVideo from "../assets/china.mp4";
import koiVideo from "../assets/koi.mp4";
import FullBleedMedia from "../components/FullBleedMedia";
import Reveal from "../components/Reveal";
import { useLanguage } from "../contexts/LanguageContext";
import { practices } from "../data/practices";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const philosophyRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: philosophyRef,
    offset: ["start end", "end start"],
  });

  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-svh min-h-[640px] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={koiVideo}
          poster={homeBg}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-zhou-bg/50 via-zhou-bg/35 to-zhou-bg"
          aria-hidden
        />

        {!reduceMotion && (
          <motion.div
            className="absolute inset-0 z-[1] bg-zhou-bg"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.8, ease, delay: 0.15 }}
            aria-hidden
          />
        )}

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
          <div className="max-w-3xl">
            <motion.p
              className="font-serif text-5xl font-light tracking-[0.06em] text-zhou-text sm:text-6xl md:text-7xl lg:text-8xl"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.55 }}
            >
              {t("nav.brand")}
            </motion.p>
            <motion.h1
              className="mt-6 max-w-xl font-serif text-2xl font-light italic leading-snug text-zhou-text/95 sm:text-3xl md:text-4xl"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.85 }}
            >
              {t("home.headline")}
            </motion.h1>
            <motion.p
              className="mt-5 max-w-md text-sm leading-relaxed text-zhou-muted md:text-base"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 1.05 }}
            >
              {t("home.support")}
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-8"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease, delay: 1.25 }}
            >
              <Link
                to="/practicas"
                className="text-[11px] tracking-[0.22em] text-zhou-text uppercase transition-colors hover:text-zhou-accent"
              >
                {t("home.cta.practices")}
              </Link>
              <Link
                to="/contacto"
                className="border-b border-zhou-accent/60 pb-0.5 text-[11px] tracking-[0.22em] text-zhou-accent uppercase transition-colors hover:border-zhou-accent hover:text-zhou-text"
              >
                {t("home.cta.contact")}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        ref={philosophyRef}
        className="relative overflow-hidden px-6 py-28 md:px-10 md:py-40"
      >
        <motion.div
          className="absolute inset-0 opacity-40"
          style={reduceMotion ? undefined : { scale: mediaScale }}
        >
          <video
            className="h-full w-full object-cover"
            src={chinaVideo}
            poster={homeBg}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
          />
          <div className="absolute inset-0 bg-zhou-bg/80" aria-hidden />
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-3xl text-center"
          style={reduceMotion ? undefined : { y: textY }}
        >
          <Reveal>
            <h2 className="font-serif text-4xl font-light tracking-wide text-zhou-text md:text-6xl">
              {t("home.philosophy.title")}
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zhou-muted md:text-lg">
              {t("home.philosophy.body")}
            </p>
          </Reveal>
        </motion.div>
      </section>

      {/* Practices teaser */}
      <section className="border-t border-zhou-line">
        <div className="flex items-end justify-between px-6 py-12 md:px-10">
          <Reveal>
            <h2 className="font-serif text-3xl font-light tracking-wide md:text-5xl">
              {t("home.practices.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/practicas"
              className="text-[11px] tracking-[0.22em] text-zhou-muted uppercase transition-colors hover:text-zhou-text"
            >
              {t("home.practices.view")}
            </Link>
          </Reveal>
        </div>

        <div>
          {practices.map((practice, index) => (
            <Link
              key={practice.slug}
              to={`/practicas/${practice.slug}`}
              className="group relative block h-[42vh] min-h-[280px] overflow-hidden border-t border-zhou-line"
            >
              <FullBleedMedia
                src={practice.media}
                poster={practice.poster}
                objectPosition={practice.objectPosition}
                scaleOnHover
              />
              <div className="relative z-10 flex h-full items-end justify-between px-6 py-10 md:px-10">
                <Reveal delay={index * 0.05}>
                  <div>
                    <h3 className="font-serif text-4xl font-light tracking-wide text-zhou-text md:text-5xl">
                      {t(practice.nameKey)}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-zhou-muted transition-colors group-hover:text-zhou-text/80">
                      {t(practice.taglineKey)}
                    </p>
                  </div>
                </Reveal>
                <span className="text-[11px] tracking-[0.22em] text-zhou-accent uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {t("practices.view")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-32 text-center md:px-10 md:py-40">
        <Reveal>
          <h2 className="font-serif text-4xl font-light italic tracking-wide text-zhou-text md:text-6xl">
            {t("home.closing.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-zhou-muted md:text-base">
            {t("home.closing.body")}
          </p>
          <Link
            to="/contacto"
            className="mt-10 inline-block border-b border-zhou-accent/70 pb-1 text-[11px] tracking-[0.22em] text-zhou-accent uppercase transition-colors hover:border-zhou-text hover:text-zhou-text"
          >
            {t("home.closing.cta")}
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
