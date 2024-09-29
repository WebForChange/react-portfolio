/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import React from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";
import Link from "@mui/material/Link";
import theme from "../utils/theme";

export default function CarouselItem(props) {
  const project = props.item;

  return (
    <Box
      aria-label="portfolio project"
      component="article"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          maxWidth: { xs: "60%", sm: "85%" },
          flexDirection: "column",
        }}
      >
        <Typography
          aria-label="project title"
          variant="subtitle1"
          sx={{
            fontSize: "1.2rem",
            mb: "0.1rem",
          }}
        >
          {project.title}
        </Typography>
        <Link
          aria-label="source code"
          href={project.source}
          variant="body1"
          sx={{
            marginBottom: "0.5rem",
          }}
        >
          Source Code
        </Link>
        <Typography aria-label="project description" align="justify">
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
}
