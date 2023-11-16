import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e6bf00",
      highlight: "#fffbe6",
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
});

export default theme;
