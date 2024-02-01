import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { TfiAlignJustify } from "react-icons/tfi";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import ClientThemeWrapper from "./context/ClientThemeWrapper";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <Header />
            <div className="drawer header">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex justify-between">
                <label htmlFor="my-drawer">
                  <TfiAlignJustify size={30} />
                </label>
              </div>
              <NavBar />
            </div>
            {children}
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
