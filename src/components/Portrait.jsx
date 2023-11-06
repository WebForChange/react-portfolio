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
    <Grid item xs={12} sm={5} md={4} lg={3} xl={2} height="100vh">
      <Grid
        container
        sx={{
          height: "100%",
          flexDirection: "row",
          ...centerAlignment,
        }}
      >
        <Grid
          item
          xs={9}
          sx={{
            flexDirection: "column",
            ...centerAlignment,
          }}
        >
          <Paper
            elevation={10}
            sx={{ pt: "6vh", backgroundColor: theme.palette.neutral.main }}
          >
            <Grid
              container
              sx={{
                height: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid item xs={7}>
                <Avatar
                  component={Paper}
                  elevation={3}
                  src={IMAGES.portrait}
                  alt="Tonio Suessdorf"
                  sx={{
                    width: "100%",
                    height: "100%",
                    border: `1px solid ${theme.palette.border.main}`,
                  }}
                />
              </Grid>

              {/* Name and short description */}
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
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
