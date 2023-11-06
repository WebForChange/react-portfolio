import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Box className="root-layout">
      {/* <header>NavBar here?</header> */}
      <main>
        <Outlet />
      </main>
    </Box>
  );
}
