/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import { Typography, Box } from "@mui/material";
import Link from "@mui/material/Link";
import { safeHttpsUrlOrNull } from "../utils/urlUtils";

export default function CarouselItem(props) {
  const project = props.item;
  const sourceHref = safeHttpsUrlOrNull(project.source);
  const liveHref = safeHttpsUrlOrNull(project.livePage);

  return (
    <Box
      aria-label="portfolio project"
      component="article"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          maxWidth: { xs: "60%", sm: "85%" },
          flexDirection: "column",
        }}
      >
        <Typography
          aria-label="project title"
          variant="subtitle1"
          sx={{
            fontSize: "1.2rem",
            mb: "0.1rem",
          }}
        >
          {project.title}
        </Typography>
        {sourceHref ? (
          <Link
            aria-label="source code"
            href={sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="body1"
            sx={{
              marginBottom: "0.5rem",
            }}
          >
            Website / Source Code
          </Link>
        ) : (
          <Typography
            aria-label="source code unavailable"
            variant="body1"
            sx={{ marginBottom: "0.5rem" }}
          >
            Website / Source Code (link unavailable)
          </Typography>
        )}
        {liveHref ? (
          <Link
            aria-label="live demo"
            href={liveHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="body2"
            display="block"
            sx={{ marginBottom: "0.5rem" }}
          >
            Live demo
          </Link>
        ) : null}
        <Typography aria-label="project description" align="justify">
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
}
