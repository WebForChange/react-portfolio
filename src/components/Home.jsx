import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Portrait from "./Portrait";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Footer from "./Navigation/Footer";
import ScrollDownButton from "./ScrollDownButton";
import SoftSkills from "./SoftSkills";

export default function Home() {
  const theme = useTheme();

  return (
    <Grid container justifyContent="space-evenly">
      {/* <Box
        style={{
          position: "absolute",
          bottom: "5%",
        }}
      >
        <ScrollDownButton />
      </Box> */}
      <Portrait />
      <About />
      <Skills />
      {/* <SoftSkills /> */}
      {/* <Portfolio /> */}
      <Footer />
    </Grid>
  );
}
