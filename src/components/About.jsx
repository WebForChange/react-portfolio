import React from "react";
import { Grid, Typography } from "@mui/material";
import ownerConstants from "../constants/ownerConstants";

const About = () => {
  return (
    <Grid
      container
      item
      xs={9}
      sm={7}
      lg={4}
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        mb: "4rem",
      }}
    >
      <Typography variant="h5" component="h2">
        {ownerConstants.ABOUT_TITLE}
      </Typography>
      <Typography align="justify">
        {ownerConstants.ABOUT_PROFESSIONAL}
      </Typography>
      <Typography align="justify" sx={{ pt: "1rem" }}>
        {ownerConstants.ABOUT_PERSON}
      </Typography>
    </Grid>
  );
};

export default About;
