import React from "react";
import ReactDOM from "react-dom/client";
import contents from "../public/content.json";
import "./index.css";
import Hero from "./page/hero/Hero.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Playstation from "./page/playstation/Playstation.tsx";
import Tutorial from "./page/tutorial/Tutorial.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  ...contents.map((content, i) => ({
    path: content.url,
    element: (
      <Tutorial
        content={content.content}
        after={contents[i + 1]?.url}
        before={contents[i - 1]?.url}
      />
    ),
  })),
  {
    path: "/playstation-demo",
    element: <Playstation />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
