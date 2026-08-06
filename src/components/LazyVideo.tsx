import { useEffect, useRef } from "react";
import { useInView } from "../hooks/useInView";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  objectPosition?: string;
  /** Play only while in view (default true). */
  pauseWhenHidden?: boolean;
};

export default function LazyVideo({
  src,
  poster,
  className = "",
  objectPosition = "center",
  pauseWhenHidden = true,
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(containerRef, { threshold: 0.25 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!pauseWhenHidden || inView) {
      const play = video.play();
      if (play) play.catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, pauseWhenHidden]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className={className}
        style={{ objectPosition }}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
    </div>
  );
}
