"use client";
import { createContext, useState, useEffect, Dispatch, SetStateAction } from "react";


interface IThemeContextType {
  theme: string;
  changeTheme: (theme:string) => string;
}

export const ThemeContext = createContext<IThemeContextType>({
  theme: "dark",
  changeTheme: () => "dark"
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>("dark");
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);

    return () => {
      console.log("theme loaded");
    };

  }, []);

  if (!isMounted) {
    return <>Loading...</>;
  }

  const changeTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    return theme;
  };
  return (
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
  );
};
