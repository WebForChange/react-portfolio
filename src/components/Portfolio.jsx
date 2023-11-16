import React, { useState } from "react";
import { Typography, Box, Grid, Paper, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselItem from "./CarouselItem";
import {
  CAROUSEL_ITEMS,
  PORTFOLIO_SECTION_TITLE,
} from "../constants/portfolioConstants";

const centerAlignment = { alignItems: "center", justifyContent: "center" };

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
      xs={12}
      sm={6}
      sx={{
        flexDirection: "row",
        ...centerAlignment,
      }}
    >
      {/* Back Button */}
      <Grid
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
              fontSize: "2.4rem",
              color: theme.palette.primary.main,
            }}
          />
        </CustomIconButton>
      </Grid>

      {/* Carousel Items */}
      <Grid
        container
        item
        xs={10}
        height="80vh"
        sx={{ flexDirection: "column", ...centerAlignment }}
      >
        <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ color: theme.palette.text.main }}
          >
            {PORTFOLIO_SECTION_TITLE}
          </Typography>
        </Grid>

        <Grid
          item
          xs={8}
          sx={{
            maxHeight: "80vh",
            // maxWidth: "100%",
            ...centerAlignment,
          }}
        >
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            selectedItem={activeIndex}
            //   autoPlay={true}
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

        {/* Radio buttons indicating position in the carousel */}
        <Grid
          container
          item
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "row",
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

      {/* Forward Button */}
      <Grid
        item
        sm={1}
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      >
        <CustomIconButton onClick={handleNext}>
          <ArrowForwardIosIcon
            sx={{ fontSize: "2.4rem", color: theme.palette.primary.main }}
          />
        </CustomIconButton>
      </Grid>
    </Grid>
  );
}
