/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SOFT_SKILLS, SOFT_SKILLS_TITLE } from "../constants/skillsConstants";

function SoftSkills() {
  const theme = useTheme();

  return (
    <Grid
      container
      item
      component="section"
      aria-label="soft skills section"
      xs={11}
      sm={9}
      md={7}
      lg={5}
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        px: "2rem",
        mb: "4rem",
      }}
    >
      <Typography
        aria-label="soft skills title"
        variant="h5"
        component="h2"
        sx={{ display: "flex" }}
      >
        {SOFT_SKILLS_TITLE}
      </Typography>
      <article aria-label="soft skills">
        <Typography align="justify" sx={{ mb: "1rem" }}>
          {SOFT_SKILLS[0]}
        </Typography>
        <Typography align="justify">{SOFT_SKILLS[1]}</Typography>
      </article>
    </Grid>
  );
}

export default SoftSkills;
