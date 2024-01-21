import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useLocation } from "react-router-dom";
import content from "../../../public/content.json";

function Drawer() {
  const htmlTag = document.querySelector("html");
  const [theme, setTheme] = React.useState(htmlTag?.getAttribute("data-theme"));
  const location = useLocation();
  const path = location.pathname;

  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    htmlTag?.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <aside
        id="cta-button-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium h-full flex flex-col justify-between">
            <div className="first">
              <li className="text-xl font-bold rounded-xl my-5">
                <a href="/" className="flex items-center justify-center">
                  <img src="/zustand.ico" className="w-10" alt="" />
                </a>
              </li>
              {content.map((item) => (
                <li
                  key={item.id}
                  className={`pointer ${
                    path === item.url ? "bg-gray-200" : ""
                  }`}>
                  <a
                    className="flex items-center p-2 text-gray-500 rounded-md hover:bg-gray-100"
                    href={item.url}>
                    <span className="ml-2 text-sm">{item.title}</span>
                  </a>
                </li>
              ))}
              <div className="divider"></div>
              <li
                className={`pointer ${
                  path === "/playstation-demo" ? "bg-gray-200" : ""
                }`}>
                <a
                  className="flex items-center p-2 text-gray-500 rounded-md hover:bg-gray-100"
                  href="/playstation-demo">
                  <span className="ml-2 text-sm">Playstation Demo</span>
                </a>
              </li>
            </div>
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => handleChangeTheme()}>
              <div className="indicator">
                {theme === "light" ? (
                  <SunIcon className="h-5" />
                ) : (
                  <MoonIcon className="h-5" />
                )}
              </div>
            </button>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Drawer;
