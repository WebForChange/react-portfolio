/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#fefaec", width: "100vw", mt: "4rem" }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          mt: "15px",
          mb: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item style={{ paddingTop: "0px" }}>
          <NavLink to="/privacy" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "#403d39" }}>Privacy Policy</Typography>
          </NavLink>
        </Grid>
        <Grid item style={{ paddingTop: "0px" }}>
          <NavLink to="/imprint" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "#403d39" }}>Imprint</Typography>
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  );
}
