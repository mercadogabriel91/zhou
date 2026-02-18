import { useState } from "react";

const navLinks = ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"];

export default function Navbar() {
  const [dark, setDark] = useState(true);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-neutral-950/80 backdrop-blur-sm border-b border-white/5">
      {/* Logo */}
      <a href="/">
        <img
          src="/src/assets/yin-yang.png"
          alt="Logo"
          className="h-6 w-6 object-contain invert"
        />
      </a>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[11px] uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="hidden md:inline-flex text-[11px] uppercase tracking-widest text-white/80 border border-white/30 hover:border-white/60 hover:text-white px-4 py-2 rounded-full transition-colors duration-200"
        >
          Book a Call
        </a>

        {/* Theme toggle */}
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
          className="w-8 h-[2px] bg-white/50 hover:bg-white transition-colors duration-200 relative"
        >
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
    </header>
  );
}
