import { NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { routes } from "../routes";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-200/80 dark:border-white/5">
      {/* Logo */}
      <NavLink to="/">
        <img
          src="/src/assets/yin-yang.png"
          alt="Logo"
          className="h-6 w-6 object-contain dark:invert"
        />
      </NavLink>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-8">
        {routes.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `text-[11px] uppercase tracking-widest transition-colors duration-200 ${
                isActive
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-900 dark:text-white/60 dark:hover:text-white"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-16 h-3 rounded-full border border-neutral-400 dark:border-white/40 bg-transparent flex items-center px-0.5 transition-colors hover:border-neutral-600 dark:hover:border-white/60"
        >
          <span
            className="block h-2 w-4 rounded-full bg-neutral-800 dark:bg-white shrink-0 transition-transform duration-200 ease-out"
            style={{ transform: isDark ? "translateX(0)" : "translateX(2.75rem)" }}
          />
        </button>
      </div>
    </header>
  );
}
