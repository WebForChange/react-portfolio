/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import React from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Portrait from "./Portrait";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Footer from "./navigation/Footer";
import SoftSkills from "./SoftSkills";
import ScrollDownButton from "./navigation/ScrollDownButton";
import { Box } from "@mui/material";

export default function Home() {
  const theme = useTheme();

  return (
    <Grid container justifyContent="space-evenly">
      <Box
        style={{
          display: "flex",
          position: "absolute",
          bottom: "2rem",
          zIndex: 10,
        }}
      >
        <ScrollDownButton />
      </Box>
      <Portrait />
      <About />
      <Skills />
      <SoftSkills />
      <Portfolio />
      <Footer />
    </Grid>
  );
}
