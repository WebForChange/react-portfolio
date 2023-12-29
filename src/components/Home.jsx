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
import Footer from "./Navigation/Footer";
import SoftSkills from "./SoftSkills";
import ScrollDownButton from "./Navigation/ScrollDownButton";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setShowButton(true);
  }, []);

  return (
    <Grid container justifyContent="space-evenly">
      <Box
        style={{
          display: "flex",
          position: "absolute",
          bottom: showButton ? "2rem" : "-4rem",
          transition: "bottom 0.5s ease-in-out",
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
