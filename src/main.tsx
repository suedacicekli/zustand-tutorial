import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import contents from "../public/content.json";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tutorial from "./page/tutorial/Tutorial.tsx";
import Playstation from "./page/playstation/Playstation.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
