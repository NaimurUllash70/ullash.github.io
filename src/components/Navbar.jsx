import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    try { 
      return localStorage.getItem("theme") === "dark"; 
    } catch { 
      return false; 
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="sticky top-0 z-40 bg-white/60 dark:bg-slate-900/70 backdrop-blur-md px-6 py-4 border-b dark:border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="text-xl font-semibold">Naimur</h2>

        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded-md border dark:border-slate-600"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
