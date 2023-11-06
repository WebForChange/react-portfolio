import React from "react";
import { Typography, Grid } from "@mui/material";
import constants from "../constants/constants";
import { styled } from "@mui/system";

const StyledBodyParagraph = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  paddingTop: "15px",
});

export default function Imprint() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        height: "100vh",
        py: "40px",
        justifyContent: "center",
        backgroundColor: "#fefaec",
      }}
    >
      <Grid item xs={10} sm={8} md={6} lg={5}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            display: "flex",
            lineHeight: "2",
            pt: "4px",
            justifyContent: "center",
          }}
        >
          {constants.IMPRINT_TITLE}
        </Typography>

        <StyledBodyParagraph variant="body">
          {constants.OWNER_NAME}
        </StyledBodyParagraph>

        <StyledBodyParagraph variant="body">
          {constants.OWNER_ADDRESS}
        </StyledBodyParagraph>
        <StyledBodyParagraph variant="body">
          {constants.OWNER_LOCATION}
        </StyledBodyParagraph>
        <StyledBodyParagraph variant="body">
          {constants.OWNER_EMAIL}
        </StyledBodyParagraph>
        <StyledBodyParagraph variant="body">
          {constants.OWNER_PHONE}
        </StyledBodyParagraph>
        <StyledBodyParagraph variant="body">
          {constants.OWNER_ADDRESS}
        </StyledBodyParagraph>
      </Grid>
    </Grid>
  );
}
