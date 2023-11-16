import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Fragment } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";
import Privacy from "./components/Privacy";
import Imprint from "./components/Imprint";
import theme from "./utils/theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="imprint" element={<Imprint />} />
    </Route>
  )
);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
