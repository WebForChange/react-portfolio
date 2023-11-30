import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SOFT_SKILLS_TITLE } from "../constants/skillsConstants";

function SoftSkills() {
  const theme = useTheme();

  return (
    <Grid
      container
      item
      xs={10}
      sm={7}
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        mb: "4rem",
      }}
    >
      {/* Title */}
      <Typography variant="h5" component="h2" sx={{ display: "flex" }}>
        {SOFT_SKILLS_TITLE}
      </Typography>
    </Grid>
  );
}

export default SoftSkills;
