import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  SKILL_ICONS,
  TECH_SKILLS,
  SKILLS_SECTION_TITLE,
} from "../constants/skillsConstants";

function Skills() {
  const theme = useTheme();

  const skillIcons = SKILL_ICONS.map((IconTag) => {
    return (
      <Box
        sx={{
          display: "inline-flex",
          mr: "0.5rem",
        }}
      >
        <IconTag
          style={{
            fontSize: "1.7rem",
            color: theme.palette.neutral.middleDark,
          }}
        />
      </Box>
    );
  });

  return (
    <Grid
      container
      item
      xs={12}
      sm={6}
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        mb: "4rem",
      }}
    >
      {/* Title */}
      <Typography
        variant="h6"
        component="h2"
        sx={{ display: "flex", color: theme.palette.text.dark, mb: "3vh" }}
      >
        {SKILLS_SECTION_TITLE}
      </Typography>

      {/* Skills Container  */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Skills */}
        {TECH_SKILLS.map((skill, index) => (
          <Box
            key={skill}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              mt: "2vh",
              py: "0.2rem",
              pl: "0.4rem",
              pr: "0.6rem",
              mr: "0.6rem",
              border: "1px solid",
              borderColor: theme.palette.neutral.middleDark,
              borderRadius: "3px",
            }}
          >
            {index <= skillIcons.length ? skillIcons[index] : null}
            <Typography
              sx={{
                display: "inline",
                justifyContent: "start",
                color: theme.palette.neutral.middleDark,
              }}
            >
              {skill}
            </Typography>
          </Box>
        ))}
      </Box>
    </Grid>
  );
}

export default Skills;
