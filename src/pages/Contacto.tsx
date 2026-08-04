import { useState, type FormEvent } from "react";
import Reveal from "../components/Reveal";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contacto() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
      <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <h1 className="font-serif text-5xl font-light tracking-wide text-zhou-text md:text-7xl">
            {t("contact.title")}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-zhou-muted md:text-lg">
            {t("contact.lead")}
          </p>

          <dl className="mt-14 space-y-8">
            <div>
              <dt className="text-[11px] tracking-[0.22em] text-zhou-accent uppercase">
                {t("contact.location")}
              </dt>
              <dd className="mt-2 text-sm text-zhou-muted">
                {t("contact.location.value")}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.22em] text-zhou-accent uppercase">
                {t("contact.hours")}
              </dt>
              <dd className="mt-2 text-sm text-zhou-muted">
                {t("contact.hours.value")}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <p className="font-serif text-2xl font-light italic text-zhou-text md:text-3xl">
              {t("contact.success")}
            </p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <label className="block">
                <span className="text-[11px] tracking-[0.22em] text-zhou-muted uppercase">
                  {t("contact.name")}
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-3 w-full border-b border-zhou-line bg-transparent py-3 text-zhou-text outline-none transition-colors focus:border-zhou-accent"
                />
              </label>
              <label className="block">
                <span className="text-[11px] tracking-[0.22em] text-zhou-muted uppercase">
                  {t("contact.email")}
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-3 w-full border-b border-zhou-line bg-transparent py-3 text-zhou-text outline-none transition-colors focus:border-zhou-accent"
                />
              </label>
              <label className="block">
                <span className="text-[11px] tracking-[0.22em] text-zhou-muted uppercase">
                  {t("contact.message")}
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-3 w-full resize-none border-b border-zhou-line bg-transparent py-3 text-zhou-text outline-none transition-colors focus:border-zhou-accent"
                />
              </label>
              <button
                type="submit"
                className="border-b border-zhou-accent/70 pb-1 text-[11px] tracking-[0.22em] text-zhou-accent uppercase transition-colors hover:border-zhou-text hover:text-zhou-text"
              >
                {t("contact.submit")}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </main>
  );
}
