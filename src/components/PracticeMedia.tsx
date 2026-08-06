import ImageCarousel from "./ImageCarousel";
import LazyVideo from "./LazyVideo";
import type { Practice } from "../data/practices";

type PracticeMediaProps = {
  practice: Practice;
  scaleOnHover?: boolean;
  overlay?: boolean;
};

export default function PracticeMedia({
  practice,
  scaleOnHover = false,
  overlay = true,
}: PracticeMediaProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {practice.mediaKind === "video" ? (
        <LazyVideo
          src={practice.src}
          poster={practice.poster}
          objectPosition={practice.objectPosition}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${
            scaleOnHover
              ? "group-hover:scale-105 group-focus-visible:scale-105"
              : ""
          }`}
        />
      ) : (
        <ImageCarousel
          images={practice.images}
          objectPosition={practice.objectPosition}
          scaleOnHover={scaleOnHover}
        />
      )}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-zhou-bg via-zhou-bg/45 to-zhou-bg/25"
          aria-hidden
        />
      )}
    </div>
  );
}
