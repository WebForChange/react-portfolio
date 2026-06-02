/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#fefaec", width: "100vw", mt: "4rem" }}
    >
      <Box
        sx={{
          display: "flex",
          mt: "15px",
          mb: "30px",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <NavLink to="/privacy" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "#403d39" }}>Privacy Policy</Typography>
        </NavLink>
        <NavLink to="/imprint" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "#403d39" }}>Imprint</Typography>
        </NavLink>
      </Box>
    </Box>
  );
}
