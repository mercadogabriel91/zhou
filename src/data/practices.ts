import homeBg from "../assets/home-bg.png";
import taichiVideo from "../assets/tai-chi.mp4";
import type { TranslationKey } from "../i18n/types";

/**
 * Drop stills into src/assets/practices/{yoga,pilates}/ and import them here.
 * Until then, home-bg.png stands in so the carousel path is wired and cheap.
 */
// import yoga1 from "../assets/home-bg.png";
// Yoga images
import yoga1 from "../assets/practices/yoga/yoga-1.jpg";
import yoga2 from "../assets/practices/yoga/yoga-2.jpg";
import yoga3 from "../assets/practices/yoga/yoga-3.jpg";
import yoga4 from "../assets/practices/yoga/yoga-4.jpg";

export type PracticeSlug = "yoga" | "pilates" | "taichi";

type PracticeBase = {
  slug: PracticeSlug;
  nameKey: TranslationKey;
  taglineKey: TranslationKey;
  bodyKey: TranslationKey;
  poster: string;
  objectPosition: string;
};

export type Practice =
  | (PracticeBase & {
      mediaKind: "video";
      src: string;
    })
  | (PracticeBase & {
      mediaKind: "carousel";
      images: string[];
    });

export const practices: Practice[] = [
  {
    slug: "yoga",
    nameKey: "practice.yoga.name",
    taglineKey: "practice.yoga.tagline",
    bodyKey: "practice.yoga.body",
    mediaKind: "carousel",
    images: [yoga1, yoga2, yoga3, yoga4],
    poster: homeBg,
    objectPosition: "center",
  },
  {
    slug: "pilates",
    nameKey: "practice.pilates.name",
    taglineKey: "practice.pilates.tagline",
    bodyKey: "practice.pilates.body",
    mediaKind: "carousel",
    images: [yoga1],
    poster: homeBg,
    objectPosition: "center 40%",
  },
  {
    slug: "taichi",
    nameKey: "practice.taichi.name",
    taglineKey: "practice.taichi.tagline",
    bodyKey: "practice.taichi.body",
    mediaKind: "video",
    src: taichiVideo,
    poster: homeBg,
    objectPosition: "center 60%",
  },
];

export function getPractice(slug: string): Practice | undefined {
  return practices.find((p) => p.slug === slug);
}
