/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import { Box } from "@mui/material";
import Portrait from "./Portrait";
import Footer from "./Navigation/Footer";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Portrait />
      <Footer />
    </Box>
  );
}
