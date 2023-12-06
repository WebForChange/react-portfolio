import React from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";

export default function CarouselItem(props) {
  const theme = useTheme();
  const item = props.item;

  return (
    <Box component="article" sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex", maxWidth: "85%", flexDirection: "column" }}>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: "1.2rem", mb: "0.1rem" }}
        >
          {item.title}
        </Typography>
        <Link
          href={item.source}
          variant="body1"
          sx={{ marginBottom: "0.5rem" }}
        >
          Source Code
        </Link>
        <Typography align="justify">{item.description}</Typography>
      </Box>
    </Box>
  );
}
