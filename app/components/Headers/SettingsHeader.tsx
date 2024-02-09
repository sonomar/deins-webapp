"use client";

import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import React, { useState } from "react";
import Link from "next/link";

export default function SettingsHeader({children}: any) {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState(1);

  const content = [
    { title: "General", content: "This is the content of tab 1", link: "/Settings/General" },
    { title: "Web3", content: "This is the content of tab 2", link: "/Settings/Web3" },
    { title: "Permission Management", content: "This is the content of tab 3", link: "/Settings/Permissions" },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
        Settings
      </h2>
      <br></br>
      <section className="border border-gray-200 rounded p-4 mb-8">
        <ul className="flex mb-4">
          {content.map((item, index) => (
            <li
              key={index}
              className={`px-4 py-2 font-medium text-gray-700 ${
                activeTab === index + 1
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : ""
              }`}
            >
              <Link href={item.link}>
              <button onClick={() => setActiveTab(index + 1)}>
                {item.title}
              </button>
              </Link>
            </li>
          ))}
        </ul>
        <div>{content[activeTab - 1].content}</div>
        <div>{children}</div>
      </section>
    </>
  );
}
