import React from "react";
import { Grid, Typography } from "@mui/material";
import ownerConstants from "../constants/ownerConstants";

const About = () => {
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
      <Typography variant="h5" component="h2">
        {ownerConstants.ABOUT_TITLE}
      </Typography>
      <article>
        <Typography variant="body1" align="justify">
          {ownerConstants.ABOUT_PROFESSIONAL}
        </Typography>
        <Typography variant="body1" align="justify" sx={{ pt: "1rem" }}>
          {ownerConstants.ABOUT_PERSON}
        </Typography>
      </article>
    </Grid>
  );
};

export default About;
