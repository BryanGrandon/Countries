import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/:name",
    element: <div>Name</div>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
