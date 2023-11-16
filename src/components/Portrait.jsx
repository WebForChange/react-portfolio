import React from "react";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { AiOutlineMail } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import IMAGES from "../assets/Images";
import constants from "../constants/constants";
import PrimaryIconButton from "./Navigation/PrimaryIconButton";

export default function Portrait() {
  const theme = useTheme();

  const centerAlignment = { alignItems: "center", justifyContent: "center" };

  return (
    <Grid
      item
      container
      xs={12}
      sm={5}
      md={4}
      lg={3}
      xl={2}
      height="100vh"
      sx={{
        flexDirection: "column",
        ...centerAlignment,
      }}
    >
      <Avatar
        component={Paper}
        elevation={3}
        src={IMAGES.portrait}
        alt="Tonio Suessdorf"
        sx={{
          width: "12rem",
          height: "12rem",
          border: `1px solid ${theme.palette.border.main}`,
        }}
      />

      <Typography
        align="center"
        sx={{
          mt: "4vh",
          color: theme.palette.text.dark,
          letterSpacing: "2px",
        }}
      >
        {constants.OWNER_NAME}
      </Typography>
      <Typography sx={{ color: theme.palette.text.alt }}>
        {constants.SHORT_DESC}
      </Typography>

      {/* Icon Buttons */}
      <Grid
        container
        spacing={1.5}
        sx={{
          width: "100%",
          mt: "1.5vh",
          pb: "6vh",
          ...centerAlignment,
        }}
      >
        <Grid item>
          <a
            target="_top"
            rel="noopener noreferrer"
            href="mailto:test@example.com"
          >
            <PrimaryIconButton>
              <AiOutlineMail style={{ fontSize: "1.3rem" }} />
            </PrimaryIconButton>
          </a>
        </Grid>

        <Grid item>
          <a
            target="_top"
            rel="noopener noreferrer"
            href="https://github.com/thoiar"
          >
            <PrimaryIconButton>
              <FiGithub style={{ fontSize: "1.3rem" }} />
            </PrimaryIconButton>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
