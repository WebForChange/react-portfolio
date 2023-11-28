import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Portrait from "./Portrait";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Footer from "./Navigation/Footer";

export default function Home() {
  const theme = useTheme();

  return (
    <Grid container justifyContent="center">
      <Portrait />
      <Skills />
      {/* <Portfolio /> */}
      <Footer />
    </Grid>
  );
}
