import React, { useState, useEffect } from "react";
export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = savedTheme || (userPrefersDark ? "dark" : "light");

      setTheme(initialTheme);
      document.documentElement.classList.add(initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Update state
    setTheme(newTheme);

    // Toggle class instead of replacing
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);

    // Save preference
    localStorage.setItem("theme", newTheme);
    };

    return (
        <div className="switch-container fixed top-4 right-4 z-1">
            <label className="switch" id="theme-toggle">
                <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                />
                <span className="slider round"></span>
            </label>
        </div>
    );
}