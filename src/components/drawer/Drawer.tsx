import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import content from "../../../public/content.json";
import themeStore from "../../store/themeStore";

function Drawer() {
  const location = useLocation();
  const path = location.pathname;
  const theme = themeStore((state) => state.theme);
  const updateTheme = themeStore((state) => state.setTheme);
  const htmlTag = document.querySelector("html");

  useEffect(() => {
    htmlTag?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <aside
        id="cta-button-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto border-r">
          <ul className="space-y-2 font-medium h-full flex flex-col justify-between">
            <div className="first flex flex-col gap-4">
              <li className="text-xl font-bold rounded-xl my-5">
                <a href="/" className="flex items-center justify-center">
                  <img src="/zustand.ico" className="w-10" alt="" />
                </a>
              </li>
              {content.map((item) => (
                <li
                  key={item.id}
                  className={`pointer ${
                    path === item.url ? "bg-gray-200 rounded-md rounded" : ""
                  }`}>
                  <a
                    className="flex items-center p-2 text-gray-500 rounded hover:bg-gray-400  "
                    href={item.url}>
                    <span className="ml-2 text-sm">{item.title}</span>
                  </a>
                </li>
              ))}
              <div className="divider"></div>
              <li
                className={`pointer ${
                  path === "/playstation-demo" ? "bg-gray-200 rounded-md" : ""
                }`}>
                <a
                  className="flex items-center p-2 text-gray-500 rounded-md hover:bg-gray-100"
                  href="/playstation-demo">
                  <span className="ml-2 text-sm">Playstation Demo</span>
                </a>
              </li>
              <div className="divider"></div>
              <li
                className={`pointer ${
                  path === "/thanks" ? "bg-gray-200 rounded-md" : ""
                }`}>
                <a
                  className="flex items-center p-2 text-gray-500 rounded-md hover:bg-gray-100"
                  href="/thanks">
                  <span className="ml-2 text-sm">Team Rigel</span>
                </a>
              </li>
            </div>
            <div className="flex items-center">
              <button
                className="btn btn-ghost btn-circle"
                onClick={() =>
                  updateTheme(theme === "wireframe" ? "dark" : "wireframe")
                }>
                <div className="indicator">
                  {theme === "wireframe" ? (
                    <MoonIcon className="h-5" />
                  ) : (
                    <SunIcon className="h-5" />
                  )}
                </div>
              </button>
              <img src="/atmosware.png" className="h-9" alt="" />
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Drawer;
