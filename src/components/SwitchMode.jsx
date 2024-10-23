import React, { useEffect, useState } from "react";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";

const SwitchMode = ({ show }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme) {
      const lastTheme = localStorage.getItem("theme");
      document.documentElement.classList.add(lastTheme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`${show} bg-primary text-xl p-4 text-dark rounded-full shadow-md transition-all duration-1000 lg:fixed lg:top-5 lg:right-5`}
    >
      {theme === "light" ? (
        <AiOutlineSun className="transition-all duration-1000 delay-150" />
      ) : (
        <AiOutlineMoon className="transition-all duration-1000 delay-150" />
      )}
    </button>
  );
};

export default SwitchMode;
