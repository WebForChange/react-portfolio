/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import Grid from "@mui/material/Grid";
import Portrait from "./Portrait";
import Footer from "./Navigation/Footer";

export default function Home() {
  return (
    <Grid container justifyContent="space-evenly">
      <Portrait />
      <Footer />
    </Grid>
  );
}
