import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { CountriesContextProvider } from "./context/countries-context";
import Home from "./pages/home";
import Country from "./pages/country";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:name",
    element: <Country />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountriesContextProvider>
      <RouterProvider router={router} />
    </CountriesContextProvider>
  </StrictMode>
);
