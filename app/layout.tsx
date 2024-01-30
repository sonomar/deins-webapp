import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { TfiAlignJustify } from "react-icons/tfi";
import Header from "./components/Header";

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
        <Header />
        <div className="drawer header">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex justify-between">
            <label htmlFor="my-drawer">
              <TfiAlignJustify size={30} />
            </label>
            {children}
          </div>
          <NavBar />
        </div>
      </body>
    </html>
  );
}
