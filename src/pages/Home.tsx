import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import homeBg from "../assets/home-bg.jpg";

const CLIP_RECTANGLE =
  "polygon(25% 0%, 75% 0%, 75% 100%, 25% 100%, 25% 100%, 25% 0%)";
const CLIP_HEXAGON =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const HEXAGON_PTS = [
  [50, 0],
  [100, 25],
  [100, 75],
  [50, 100],
  [0, 75],
  [0, 25],
];
const FULL_RECT_PTS = [
  [50, -10],
  [110, -10],
  [110, 110],
  [50, 110],
  [-10, 110],
  [-10, -10],
];

const DURATION = 3.2;
const EASE_SMOOTH: [number, number, number, number] = [0.33, 0.66, 0.5, 1];

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function interpolateClipPath(t: number): string {
  const pts = HEXAGON_PTS.map((hex, i) => {
    const full = FULL_RECT_PTS[i];
    return `${lerp(hex[0], full[0], t)}% ${lerp(hex[1], full[1], t)}%`;
  });
  return `polygon(${pts.join(", ")})`;
}

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const [animationDone, setAnimationDone] = useState(false);

  const windowControls = useAnimation();
  const innerControls = useAnimation();
  const blurControls = useAnimation();
  const gradientControls = useAnimation();
  const textControls = useAnimation();
  const overlayControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Phase 1: initial morph animation */
  useEffect(() => {
    overlayControls.start({
      opacity: 0,
      transition: { duration: 1.6, ease: EASE_SMOOTH, delay: 0.2 },
    });

    windowControls
      .start({
        clipPath: [CLIP_RECTANGLE, CLIP_RECTANGLE, CLIP_HEXAGON],
        opacity: [0, 0.65, 0.7],
        transition: {
          duration: DURATION,
          times: [0, 0.38, 1],
          ease: EASE_SMOOTH,
        },
      })
      .then(() => setAnimationDone(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Phase 2: scroll-driven expansion */
  useMotionValueEvent(scrollYProgress, "change", (scrollP) => {
    if (!animationDone) return;

    const raw = Math.min(1, Math.max(0, scrollP / 0.8));
    const v = easeInOutCubic(raw);

    const outerSx = lerp(0.7, 10, v);
    const outerSy = lerp(1.3, 10, v);

    windowControls.set({
      clipPath: interpolateClipPath(v),
      opacity: lerp(0.7, 1, v),
      rotate: lerp(-30, 0, v),
      skewY: lerp(30, 0, v),
      scaleX: outerSx,
      scaleY: outerSy,
    });

    innerControls.set({
      rotate: lerp(30, 0, v),
      skewY: lerp(-30, 0, v),
      scaleX: 1 / outerSx,
      scaleY: 1 / outerSy,
    });

    blurControls.set({ opacity: 1 - v });
    gradientControls.set({ opacity: 1 - v });
    textControls.set({ opacity: Math.max(0, 1 - v * 2.5), y: -v * 80 });
  });

  return (
    <main ref={containerRef} className="relative" style={{ height: "200vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Full-screen clear image (revealed as blur/gradient fade on scroll) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homeBg})` }}
          aria-hidden
        />

        {/* Dark gradient fallback behind blur */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-teal-950/90 to-slate-900/95"
          animate={gradientControls}
          aria-hidden
        />

        {/* Blur layer */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: `url(${homeBg})`, filter: "blur(40px)" }}
          animate={blurControls}
          aria-hidden
        />

        {/* Full-screen dark overlay: fades out at start */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none z-[1]"
          initial={{ opacity: 1 }}
          animate={overlayControls}
          aria-hidden
        />

        {/* Window: starts dark as rectangle, morphs to hexagon, then expands on scroll */}
        <motion.div
          className="absolute left-1/2 top-1/2 overflow-hidden lg:w-[38vw] lg:h-[25vw] w-[40vw] h-[27vw] min-w-[280px] min-h-[180px] z-[2]"
          initial={{
            clipPath: CLIP_RECTANGLE,
            opacity: 0,
            rotate: -30,
            skewY: 30,
            scaleX: 0.7,
            scaleY: 1.3,
            x: "-50%",
            y: "-50%",
          }}
          animate={windowControls}
        >
          <motion.div
            className="absolute w-[100vmax] h-[100vmax] left-1/2 top-1/2 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${homeBg})` }}
            initial={{
              rotate: 30,
              skewY: -30,
              scaleX: 1.428,
              scaleY: 0.769,
              x: "-50%",
              y: "-50%",
            }}
            animate={innerControls}
          />
        </motion.div>

        {/* Headline */}
        <motion.div
          className="relative z-10 flex flex-col md:flex-row md:flex-wrap items-center justify-center min-h-screen px-6 gap-2 md:gap-4"
          animate={textControls}
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl italic font-light text-white drop-shadow-[0_0_40px_rgba(0,0,0,0.5)] md:mr-[-0.15em]">
            Where visions
          </h1>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl italic font-light text-white drop-shadow-[0_0_40px_rgba(0,0,0,0.5)] md:ml-[-0.15em]">
            are forged.
          </h1>
        </motion.div>
      </div>
    </main>
  );
}
