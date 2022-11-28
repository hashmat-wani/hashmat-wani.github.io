import { useCallback, useState } from "react";

const useThemes = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("hashmat_portfolio_theme") || "light"
  );

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      localStorage.setItem("hashmat_portfolio_theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("hashmat_portfolio_theme", "light");
      setTheme("light");
    }
  }, [theme]);

  return [theme, toggleTheme];
};

export default useThemes;
