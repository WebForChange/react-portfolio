/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { RiLinkedinLine, RiRocketLine } from "react-icons/ri";
import IMAGES from "../assets/Images";
import ownerConstants from "../constants/ownerConstants";
import PrimaryIconButton from "./Navigation/PrimaryIconButton";
import EmailContactButton from "./Navigation/EmailContactButton";
import { safeProfileHrefOrNull } from "../utils/urlUtils";

const CustomIconButton = (props) => {
  const safeUrl = safeProfileHrefOrNull(props.url);
  const isMailto = safeUrl?.startsWith("mailto:");

  return (
    <Box sx={{ px: "0.35rem" }}>
      <PrimaryIconButton
        aria-label={props["aria-label"]}
        href={safeUrl ?? undefined}
        disabled={!safeUrl}
        {...(safeUrl && !isMailto
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {props.children}
      </PrimaryIconButton>
    </Box>
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
      <Box
        sx={{
          ...centerAlignment,
          width: "100%",
          height: "100dvh",
        }}
      >
        <Box
          sx={{
            ...centerAlignment,
            flexDirection: "column",
            width: { xs: "100%", md: "25%" },
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
              display: { xs: "flex", md: "none" },
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
              display: { xs: "flex", md: "none" },
              color: theme.palette.text.alt,
            }}
          >
            {ownerConstants.SHORT_DESC}
          </Typography>

          {/* Icon Buttons */}
          <Box
            sx={{
              ...centerAlignment,
              width: "100%",
              mt: "3vh",
              mb: "3vh",
            }}
          >
            <CustomIconButton
              aria-label="linkedIn"
              url="https://www.linkedin.com/in/tonio-suessdorf-942b99184/"
            >
              <RiLinkedinLine style={{ fontSize: "1.5rem" }} />
            </CustomIconButton>

            <CustomIconButton
              aria-label="Lean Solution project"
              url="https://lean-solution.vercel.app"
            >
              <RiRocketLine style={{ fontSize: "1.5rem" }} />
            </CustomIconButton>

            <EmailContactButton />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
