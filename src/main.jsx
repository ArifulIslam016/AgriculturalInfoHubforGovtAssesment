import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Rootlayout from "./App.jsx";
import HomePage from "./Pages/HomePage.jsx";
import CropDetailspage from "./Pages/CropDetailspage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },{
        path:'/cropDetails',
        Component:CropDetailspage
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
