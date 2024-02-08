"use client";
import Link from "next/link";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import Image from "next/image";

export default function SettingsHeader() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <>
      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
        Settings
      </h2>
      
    </>
  );
}
