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
      xs={10}
      sm={8}
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
      <Typography variant="h5" component="h2" sx={{ display: "flex" }}>
        {SOFT_SKILLS_TITLE}
      </Typography>
      <article>
        <Typography align="justify" sx={{ mb: "1rem" }}>
          {SOFT_SKILLS[0]}
        </Typography>
        <Typography align="justify">{SOFT_SKILLS[1]}</Typography>
      </article>
    </Grid>
  );
}

export default SoftSkills;
