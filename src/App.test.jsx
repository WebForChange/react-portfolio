import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";
import Privacy from "./components/Privacy";
import Imprint from "./components/Imprint";
import theme from "./utils/theme";

function renderWithRouter(initialPath = "/") {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <RootLayout />
          </ThemeProvider>
        ),
        children: [
          { index: true, element: <Home /> },
          { path: "privacy", element: <Privacy /> },
          { path: "imprint", element: <Imprint /> },
        ],
      },
    ],
    { initialEntries: [initialPath] }
  );
  return render(<RouterProvider router={router} />);
}

describe("App routes", () => {
  it("renders home", () => {
    renderWithRouter("/");
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders privacy route", () => {
    renderWithRouter("/privacy");
    expect(
      screen.getByRole("heading", { level: 1, name: /Datenschutz/i })
    ).toBeInTheDocument();
  });

  it("renders imprint route", () => {
    renderWithRouter("/imprint");
    expect(
      screen.getByRole("heading", { name: /imprint/i })
    ).toBeInTheDocument();
  });
});
