/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import { Box, Typography } from "@mui/material";
import ownerConstants from "../constants/ownerConstants";
import { styled } from "@mui/system";

const StyledBodyParagraph = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  paddingTop: "15px",
});

export default function Imprint() {
  return (
    <Box
      component="article"
      aria-label="imprint page"
      sx={{
        display: "flex",
        height: "100vh",
        py: "40px",
        justifyContent: "center",
        backgroundColor: "#fefaec",
      }}
    >
      <Box sx={{ width: { xs: "83%", sm: "66%", md: "50%", lg: "41%" } }}>
        <Typography
          variant="h4"
          component="h1"
          aria-label="imprint title"
          sx={{
            display: "flex",
            lineHeight: "2",
            pt: "4px",
            justifyContent: "center",
          }}
        >
          {ownerConstants.IMPRINT_TITLE}
        </Typography>

        <StyledBodyParagraph variant="body" aria-label="owner name">
          {ownerConstants.OWNER_NAME}
        </StyledBodyParagraph>

        <StyledBodyParagraph variant="body" aria-label="owner address">
          {ownerConstants.OWNER_ADDRESS}
        </StyledBodyParagraph>
        <StyledBodyParagraph variant="body" aria-label="owner location">
          {ownerConstants.OWNER_LOCATION}
        </StyledBodyParagraph>
        <StyledBodyParagraph variant="body" aria-label="owner email">
          {ownerConstants.OWNER_EMAIL}
        </StyledBodyParagraph>
        <StyledBodyParagraph variant="body" aria-label="owner phone">
          {ownerConstants.OWNER_PHONE}
        </StyledBodyParagraph>
      </Box>
    </Box>
  );
}
