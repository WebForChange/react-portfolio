/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Box className="root-layout">
      <main>
        <Outlet />
      </main>
    </Box>
  );
}
