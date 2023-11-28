import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CarouselItem(props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        height: "60vh",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "30vh",
          overflow: "hidden",
        }}
      >
        <img
          alt={props.item.imageCredit}
          src={props.item.image}
          style={{
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
          }}
        />
      </Box>

      <Box
        style={
          {
            //   height: "30vh",
          }
        }
      >
        <Typography style={{}}>{props.item.description}</Typography>
      </Box>
    </Box>
  );
}
