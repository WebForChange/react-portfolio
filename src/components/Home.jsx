import React from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Portrait from "./Portrait";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Footer from "./Navigation/Footer";
import SoftSkills from "./SoftSkills";

export default function Home() {
  const theme = useTheme();

  return (
    <Grid container justifyContent="space-evenly">
      <Portrait />
      <About />
      <Skills />
      <SoftSkills />
      <Portfolio />
      <Footer />
    </Grid>
  );
}
