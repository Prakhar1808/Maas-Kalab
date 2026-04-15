"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[var(--foreground)] transition-all duration-200 hover:bg-[var(--red-primary)] hover:text-white active:scale-90 sm:h-9 sm:w-9"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {!mounted ? (
        <span className="h-4 w-4 rounded-full bg-current opacity-20" />
      ) : isDark ? (
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-[1.15rem] w-[1.15rem]">
          <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zm5-5a5 5 0 11-10 0 5 5 0 0110 0zm2.25.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zm11.535-5.535a.75.75 0 00-1.06 0l-1.061 1.06a.75.75 0 001.06 1.061l1.061-1.06a.75.75 0 000-1.061zM6.586 14.474a.75.75 0 10-1.06 1.06l-1.061 1.061a.75.75 0 001.06 1.06l1.061-1.06a.75.75 0 000-1.061zm9.888 1.06a.75.75 0 00-1.06-1.06l-1.061 1.06a.75.75 0 101.06 1.061l1.061-1.06zM6.586 5.526a.75.75 0 001.06-1.06L6.586 3.404a.75.75 0 00-1.06 1.061l1.06 1.06z" />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-[1.1rem] w-[1.1rem]">
          <path fillRule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.545.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
}
