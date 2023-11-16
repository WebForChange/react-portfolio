import React, { useState } from "react";
import { Typography, Box, Grid, Paper, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Radio from "@mui/material/Radio";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselItem from "./CarouselItem";
import {
  CAROUSEL_ITEMS,
  PORTFOLIO_SECTION_TITLE,
} from "../constants/portfolioConstants";

const centerAlignment = { alignItems: "center", justifyContent: "center" };

export default function Portfolio() {
  const [position, setPosition] = useState(0);
  const theme = useTheme();

  const handleMoveLeft = () => {
    console.debug("Move Left, position: ", position);
    setPosition(position - 1);
  };

  const handleMoveRight = () => {
    console.debug("Move Right, position: ", position);
    setPosition(position + 1);
  };

  return (
    <Grid
      item
      container
      xs={12}
      sm={6}
      sx={{
        height: "100vh",
        flexDirection: "row",
        ...centerAlignment,
      }}
    >
      {/* Back Button */}
      <Grid
        item
        xs={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <IconButton onClick={handleMoveRight}>
          <ArrowBackIosNewIcon
            sx={{
              fontSize: "2.4rem",
              color: theme.palette.primary.main,
            }}
          />
        </IconButton>
      </Grid>

      <Grid
        item
        container
        xs={9}
        sx={{
          maxHeight: "75vh",
          flexDirection: "column",
          ...centerAlignment,
        }}
      >
        <Grid
          container
          item
          xs={9}
          sx={{ flexDirection: "column", ...centerAlignment }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ pb: "3vh", color: theme.palette.text.main }}
          >
            {PORTFOLIO_SECTION_TITLE}
          </Typography>

          <Grid
            sx={{
              maxHeight: "80vh",
              overflow: "hidden",
              ...centerAlignment,
            }}
          >
            {/* Carousel items */}
            <Box
              style={{
                display: "flex",
                transform: `translateX(${
                  (position * 100) / CAROUSEL_ITEMS.length
                }%)`,
                transition: "transform 0.5s ease",
                height: "100%",
                width: "300%",
                overflow: "hidden",
              }}
            >
              {CAROUSEL_ITEMS.map((item) => (
                <CarouselItem key={item.title} item={item} />
              ))}
            </Box>

            <Grid>
              {/* Radio buttons indicating position in the carousel */}
              <Grid>
                {CAROUSEL_ITEMS.map((item, index) => {
                  return (
                    <IconButton
                      key={item.title}
                      onClick={() => {
                        updateIndex(index);
                      }}
                    >
                      <Radio />
                    </IconButton>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={1}>
        <IconButton onClick={handleMoveLeft}>
          <ArrowForwardIosIcon
            sx={{ fontSize: "2.4rem", color: theme.palette.primary.main }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
}
