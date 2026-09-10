import homeBg from "../assets/home-bg.png";
import taichiVideo from "../assets/tai-chi.mp4";
import type { TranslationKey } from "../i18n/types";

/**
 * Drop stills into src/assets/practices/{yoga,pilates}/ and import them here.
 * Until then, home-bg.png stands in so the carousel path is wired and cheap.
 */
// Yoga images
import yoga1 from "../assets/practices/yoga/yoga-1.jpg";
import yoga2 from "../assets/practices/yoga/yoga-2.jpg";
import yoga3 from "../assets/practices/yoga/yoga-3.jpg";
// Special events images
import event1 from "../assets/practices/special-events/shi-feng.jpg"
import event2 from "../assets/practices/special-events/sukha.jpg"

export type PracticeSlug = "yoga" | "pilates" | "taichi" | "Eventos especiales";

export type PracticeImage = {
  src: string;
  /** Focal point for object-fit: cover. Lower % keeps faces nearer the top. */
  objectPosition?: string;
};

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
      images: PracticeImage[];
    });

export const practices: Practice[] = [
  {
    slug: "yoga",
    nameKey: "practice.yoga.name",
    taglineKey: "practice.yoga.tagline",
    bodyKey: "practice.yoga.body",
    mediaKind: "carousel",
    images: [
      { src: yoga1, objectPosition: "center 28%" },
      { src: yoga2, objectPosition: "center 38%" },
      { src: yoga3, objectPosition: "center 32%" },
    ],
    poster: homeBg,
    objectPosition: "center 32%",
  },
  {
    slug: "pilates",
    nameKey: "practice.pilates.name",
    taglineKey: "practice.pilates.tagline",
    bodyKey: "practice.pilates.body",
    mediaKind: "carousel",
    images: [{ src: yoga1, objectPosition: "center 28%" }],
    poster: homeBg,
    objectPosition: "center 28%",
  },
  {
    slug: "taichi",
    nameKey: "practice.taichi.name",
    taglineKey: "practice.taichi.tagline",
    bodyKey: "practice.taichi.body",
    mediaKind: "video",
    src: taichiVideo,
    poster: homeBg,
    objectPosition: "center 40%",
  },
  {
    slug: "Eventos especiales",
    nameKey: "practice.eventos-especiales.name",
    taglineKey: "practice.eventos-especiales.tagline",
    bodyKey: "practice.eventos-especiales.body",
    mediaKind: "carousel",
    images: [
      { src: event1, objectPosition: "center 24%" },
      { src: event2, objectPosition: "center 46%" },
    ],
    poster: homeBg,
    objectPosition: "center 24%",
  },
];

export function getPractice(slug: string): Practice | undefined {
  return practices.find((p) => p.slug === slug);
}
