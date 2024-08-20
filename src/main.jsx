import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import { CountriesContextProvider } from "./context/countries-context";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:name",
    element: <div>Name</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountriesContextProvider>
      <RouterProvider router={router} />
    </CountriesContextProvider>
  </StrictMode>
);
