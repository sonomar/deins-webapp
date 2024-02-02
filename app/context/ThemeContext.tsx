"use client";
import { createContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import { MetaMaskProvider } from "@metamask/sdk-react";


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

  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host, // using the host constant defined above
    },
  };

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
    <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </MetaMaskProvider>
  );
};
