import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CarouselItem(props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        // flexWrap: "nowrap",
      }}
    >
      {/* Image */}
      <Box style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            paddingBottom: "56.25%",
            overflow: "hidden",
          }}
        >
          <img
            alt={props.item.imageCredit}
            src={props.item.image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </Box>
      </Box>

      {/* Text */}
      <Box style={{ width: "100%" }}>
        <Typography style={{ width: "100%" }}>
          {props.item.description}
        </Typography>
      </Box>
    </Box>
  );
}
