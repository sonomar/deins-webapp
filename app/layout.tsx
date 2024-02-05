import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import { TfiAlignJustify } from "react-icons/tfi";
import Header from "./components/Headers/Header";
import { ThemeProvider } from "./context/ThemeContext";
import ClientThemeWrapper from "./context/ClientThemeWrapper";

import { headers } from "next/headers";

import { cookieToInitialState } from "wagmi";

import { config } from "@/config";
import ContextProvider from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UTE Database",
  description: "made by Ankit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider initialState={initialState}>
          <ThemeProvider>
            <ClientThemeWrapper>
              <Header />
              <div className="drawer header">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex justify-between">
                  <label htmlFor="my-drawer" className="pl-3">
                    <TfiAlignJustify size={30} />
                  </label>
                </div>
                <NavBar />
              </div>
              <div className="h-screen text-center">{children}</div>
            </ClientThemeWrapper>
          </ThemeProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
