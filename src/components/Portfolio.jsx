/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import React, { useState } from "react";
import { Typography, Box, Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Carousel } from "react-responsive-carousel";
import "./portfolio.css";
import CarouselItem from "./CarouselItem";
import {
  CAROUSEL_ITEMS,
  PORTFOLIO_SECTION_TITLE,
} from "../constants/portfolioConstants";

const centerAlignment = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % CAROUSEL_ITEMS.length);
  };

  const handlePrevious = () => {
    setActiveIndex(
      (activeIndex - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length
    );
  };

  const CustomIconButton = styled(IconButton)({
    "&:hover": {
      backgroundColor: theme.palette.primary.highlight,
    },
  });

  return (
    <Grid
      container
      item
      component="section"
      aria-label="portfolio section"
      xs={11}
      sm={9}
      md={6}
      lg={5}
      sx={{ justifyContent: "center", mt: "2rem" }}
    >
      <Grid
        aria-label="portfolio back button"
        item
        sm={1}
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <CustomIconButton onClick={handlePrevious}>
          <ArrowBackIosNewIcon
            sx={{
              fontSize: { xs: "2.3rem", md: "2.4rem", lg: "2.3rem" },
              color: theme.palette.text.alt,
            }}
          />
        </CustomIconButton>
      </Grid>

      {/* Carousel Container */}
      <Grid
        container
        item
        xs={10}
        sm={9}
        sx={{
          flexDirection: "column",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          aria-label="portfolio section title"
          item
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: "100%",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: theme.palette.text.main,
              maxWidth: "100%",
              mb: "1rem",
            }}
          >
            {PORTFOLIO_SECTION_TITLE}
          </Typography>
        </Grid>

        <Grid
          aria-label="portfolio projects carousel"
          item
          sx={{
            ...centerAlignment,
          }}
        >
          <Carousel
            style={{ maxWidth: "100%" }}
            maxWidth={"100%"}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            selectedItem={activeIndex}
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
            emulateTouch={true}
            onChange={(index) => {
              setActiveIndex(index);
            }}
          >
            {CAROUSEL_ITEMS.map((item) => (
              <CarouselItem key={item.title} item={item} />
            ))}
          </Carousel>
        </Grid>

        <Grid
          aria-label="portfolio position indicator buttons"
          container
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "100%",
            mt: "2rem",
            ...centerAlignment,
          }}
        >
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              ...centerAlignment,
            }}
          >
            <RadioGroup
              value={activeIndex}
              name="controlled-radio-buttons-group"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                ...centerAlignment,
              }}
              onChange={(event) => {
                setActiveIndex(parseInt(event.target.value, 10));
              }}
            >
              {CAROUSEL_ITEMS.map((item, index) => (
                <FormControlLabel
                  aria-label={`button project ${index + 1}`}
                  sx={{ mx: "1.2vw" }}
                  control={<Radio size="small" />}
                  value={index.toString()}
                  key={item.title}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Grid
        aria-label="portfolio forward button"
        item
        md={1}
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <CustomIconButton onClick={handleNext}>
          <ArrowForwardIosIcon
            sx={{
              fontSize: { xs: "2.3rem", md: "2.4rem", lg: "2.3rem" },
              color: theme.palette.text.alt,
            }}
          />
        </CustomIconButton>
      </Grid>
    </Grid>
  );
}
