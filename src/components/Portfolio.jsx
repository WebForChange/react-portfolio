import React from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import constants from "../constants/constants";

export default function Portfolio() {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.neutral.main,
      }}
    >
      <Grid item xs={10}>
        <Paper
          elevation={10}
          sx={{
            height: "60vh",
          }}
        >
          <Typography sx={{ color: theme.palette.text.main }}>
            {constants.PORTFOLIO_SECTION_TITLE}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
