/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#666666",
      highlight: "#4eb2a6", // a8fff5
      dark: "#f3c316",
    },
    secondary: {
      main: "#E6B917",
      background: "#fff7cc",
      alt: "#fad054",
      darkGold: "#CCB129",
    },
    tertiary: {
      main: "#A3A3A3",
      background: "#A3A3A3",
      highlight: "#F8F8F8",
    },
    text: {
      main: "#403d39",
      dark: "#0a0a0a",
      alt: "#807160",
      link: "#ffffff",
      muted: "#ffffff",
    },
    neutral: {
      main: "#ffffff",
      middleDark: "#666666",
    },
    background: {
      main: "#ffffff",
      darkMode: "#ffffff",
    },
    surface: {
      main: "#fff7cc",
      dark: "#D9BE6C",
    },
    highlight: {
      main: "#ffffff",
    },
    border: { main: "#FFD500", alt: "#ffffff" },
  },
  typography: {
    h5: {
      fontSize: "2rem",
      color: "#333333",
      marginBottom: "1.7rem",
      letterSpacing: "0.05rem",
    },
  },
});

export default theme;
