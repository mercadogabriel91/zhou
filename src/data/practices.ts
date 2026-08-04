import chinaVideo from "../assets/china.mp4";
import homeBg from "../assets/home-bg.png";
import koiVideo from "../assets/koi.mp4";
import type { TranslationKey } from "../i18n/types";

export type PracticeSlug = "yoga" | "pilates" | "taichi";

export type Practice = {
  slug: PracticeSlug;
  nameKey: TranslationKey;
  taglineKey: TranslationKey;
  bodyKey: TranslationKey;
  media: string;
  poster: string;
  objectPosition: string;
};

export const practices: Practice[] = [
  {
    slug: "yoga",
    nameKey: "practice.yoga.name",
    taglineKey: "practice.yoga.tagline",
    bodyKey: "practice.yoga.body",
    media: koiVideo,
    poster: homeBg,
    objectPosition: "center",
  },
  {
    slug: "pilates",
    nameKey: "practice.pilates.name",
    taglineKey: "practice.pilates.tagline",
    bodyKey: "practice.pilates.body",
    media: chinaVideo,
    poster: homeBg,
    objectPosition: "center 40%",
  },
  {
    slug: "taichi",
    nameKey: "practice.taichi.name",
    taglineKey: "practice.taichi.tagline",
    bodyKey: "practice.taichi.body",
    media: koiVideo,
    poster: homeBg,
    objectPosition: "center 60%",
  },
];

export function getPractice(slug: string): Practice | undefined {
  return practices.find((p) => p.slug === slug);
}
