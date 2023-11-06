import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Portrait from "./Portrait";
import Skills from "./Skills";
import Footer from "./Navigation/Footer";

export default function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.light }}>
      <Grid container justifyContent="space-evenly">
        <Portrait />
        <Skills />
        <Footer />
      </Grid>
    </Box>
  );
}
