import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type ImageCarouselProps = {
  images: string[];
  className?: string;
  objectPosition?: string;
  intervalMs?: number;
  scaleOnHover?: boolean;
};

export default function ImageCarousel({
  images,
  className = "",
  objectPosition = "center",
  intervalMs = 5000,
  scaleOnHover = false,
}: ImageCarouselProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const slides = images.length > 0 ? images : [];

  useEffect(() => {
    if (reduceMotion || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, reduceMotion, slides.length]);

  if (slides.length === 0) return null;

  const mediaClass = `absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${
    scaleOnHover ? "group-hover:scale-105 group-focus-visible:scale-105" : ""
  }`;

  if (slides.length === 1 || reduceMotion) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <img
          className={mediaClass}
          style={{ objectPosition }}
          src={slides[0]}
          alt=""
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <AnimatePresence mode="sync">
        <motion.img
          key={slides[index]}
          className={mediaClass}
          style={{ objectPosition }}
          src={slides[index]}
          alt=""
          aria-hidden
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
    </div>
  );
}
