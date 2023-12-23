/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { AiOutlineMail } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import IMAGES from "../assets/Images";
import ownerConstants from "../constants/ownerConstants";
import PrimaryIconButton from "./Navigation/PrimaryIconButton";

const CustomIconButton = (props, link) => {
  return (
    <Grid item sx={{ px: "0.35rem" }}>
      <a target="_top" rel="noopener noreferrer" href={link}>
        <PrimaryIconButton>{props.children}</PrimaryIconButton>
      </a>
    </Grid>
  );
};

export default function Portrait() {
  const theme = useTheme();

  const centerAlignment = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box
      component="section"
      aria-label="portrait section"
      sx={{ display: "flex", width: "100vw" }}
    >
      <Grid
        item
        container
        xs={12}
        sx={{
          ...centerAlignment,
          height: "100dvh",
        }}
      >
        <Grid
          item
          container
          xs={12}
          md={3}
          sx={{
            ...centerAlignment,
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "12rem",
              height: "12rem",
            }}
          >
            <Avatar
              component={Paper}
              elevation={3}
              src={IMAGES.portrait}
              aria-label="owner portrait image"
              alt="Tonio Suessdorf full-stack web developer professional portrait"
              sx={{
                width: "100%",
                height: "100%",
                border: `1px solid ${theme.palette.border.main}`,
              }}
            />
            <Box
              sx={{
                position: "relative",
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                flexShrink: "0",
                width: "14rem",
                height: "80%",
                top: "1rem",
                left: "2rem",
              }}
            >
              <Typography
                align="center"
                variant="body1"
                component="h2"
                aria-label="owner name"
                sx={{
                  color: theme.palette.text.dark,
                  letterSpacing: "2px",
                }}
              >
                {ownerConstants.OWNER_NAME}
              </Typography>
              <Typography
                variant="body2"
                aria-label="owner short description"
                sx={{
                  color: theme.palette.text.alt,
                }}
              >
                {ownerConstants.SHORT_DESC}
              </Typography>
              <Typography
                variant="body2"
                aria-label="owner long description"
                sx={{
                  mt: "0.7rem",
                  color: theme.palette.text.alt,
                }}
              >
                {ownerConstants.LONG_DESC}
              </Typography>
            </Box>
          </Box>

          <Typography
            align="center"
            aria-label="owner name"
            sx={{
              display: { sx: "flex", md: "none" },
              mt: "4vh",
              color: theme.palette.text.dark,
              letterSpacing: "2px",
            }}
          >
            {ownerConstants.OWNER_NAME}
          </Typography>
          <Typography
            aria-label="owner short description"
            sx={{
              display: { sx: "flex", md: "none" },
              color: theme.palette.text.alt,
            }}
          >
            {ownerConstants.SHORT_DESC}
          </Typography>

          {/* Icon Buttons */}
          <Grid
            container
            sx={{
              ...centerAlignment,
              width: "100%",
              mt: "4vh",
              mb: "6vh",
            }}
          >
            <CustomIconButton
              aria-label="email owner"
              link="mailto:test@example.com"
            >
              <AiOutlineMail style={{ fontSize: "1.5rem" }} />
            </CustomIconButton>

            <CustomIconButton
              aria-label="github"
              link="https://github.com/WebForChange?tab=repositories"
            >
              <FiGithub style={{ fontSize: "1.5rem" }} />
            </CustomIconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
