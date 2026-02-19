import homeBg from "../assets/home-bg.jpg";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-16">
      {/* Dark gradient fallback behind blur */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-teal-950/90 to-slate-900/95"
        aria-hidden
      />

      {/* Blur layer: full-screen blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url(${homeBg})`,
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      {/* Sharp hexagon "window": reference geometry — vw sizing + rotate/skew/scale */}
      <div
        className="absolute left-1/2 top-1/2 overflow-hidden opacity-70 lg:w-[38vw] lg:h-[25vw] w-[40vw] h-[27vw] min-w-[280px] min-h-[180px]"
        style={{
          transform:
            "translate(-50%, -50%) rotate(-30deg) skewY(30deg) scaleX(0.7) scaleY(1.3)",
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <div
          className="absolute w-[100vmax] h-[100vmax] left-1/2 top-1/2 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${homeBg})`,
            transform:
              "translate(-50%, -50%) rotate(30deg) skewY(-30deg) scaleX(1.428) scaleY(0.769)",
          }}
          aria-hidden
        />
      </div>

      {/* Headline: two parts around the hexagon */}
      <div className="relative z-10 flex flex-col md:flex-row md:flex-wrap items-center justify-center min-h-[calc(100vh-4rem)] px-6 gap-2 md:gap-4">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl italic font-light text-white drop-shadow-[0_0_40px_rgba(0,0,0,0.5)] md:mr-[-0.15em]">
          Where visions
        </h1>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl italic font-light text-white drop-shadow-[0_0_40px_rgba(0,0,0,0.5)] md:ml-[-0.15em]">
          are forged.
        </h1>
      </div>
    </main>
  );
}
