type FullBleedMediaProps = {
  src: string;
  poster?: string;
  className?: string;
  objectPosition?: string;
  overlay?: boolean;
  scaleOnHover?: boolean;
};

export default function FullBleedMedia({
  src,
  poster,
  className = "",
  objectPosition = "center",
  overlay = true,
  scaleOnHover = false,
}: FullBleedMediaProps) {
  const isVideo = /\.(mp4|webm|mov)(\?|$)/i.test(src);
  const mediaClass = `absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${
    scaleOnHover ? "group-hover:scale-105 group-focus-visible:scale-105" : ""
  }`;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {isVideo ? (
        <video
          className={mediaClass}
          style={{ objectPosition }}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      ) : (
        <img
          className={mediaClass}
          style={{ objectPosition }}
          src={src}
          alt=""
          aria-hidden
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
