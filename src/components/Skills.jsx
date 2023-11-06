import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import {
  SKILL_ICONS,
  TECH_SKILLS,
  SKILLS_SECTION_TITLE,
} from "../constants/skillsConstants";

const StyledTypography = styled(Typography)({
  display: "flex",
  justifyContent: "start",
});

function Skills() {
  const theme = useTheme();
  const centerAlignment = { alignItems: "center", justifyContent: "center" };
  const sIcons = SKILL_ICONS.map((IconTag) => {
    return (
      <Box
        sx={{
          display: "inline-flex",
          pr: "1rem",
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
      sm={5}
      sx={{
        height: "100vh",
        flexDirection: "row",
        ...centerAlignment,
      }}
    >
      <Grid
        item
        xs={10}
        sx={{
          flexDirection: "column",
          ...centerAlignment,
        }}
      >
        <Paper elevation={10} sx={{ py: "7vh" }}>
          <Grid
            container
            sx={{ flexdirection: "row", justifyContent: "center" }}
          >
            <Grid item xs={9}>
              <Typography
                variant="h4"
                component="h2"
                sx={{ color: theme.palette.text.dark, mb: "3vh" }}
              >
                {SKILLS_SECTION_TITLE}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              justifyContent: "center",
              backgroundColor: "primary",
            }}
          >
            <Grid
              item
              xs={8}
              sx={{
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              {TECH_SKILLS.map((skill, index) => (
                <Grid
                  item
                  container
                  key={skill}
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    paddingTop: "2vh",
                  }}
                >
                  {index <= sIcons.length ? sIcons[index] : null}
                  <StyledTypography
                    sx={{
                      display: "inline",
                      color: theme.palette.neutral.middleDark,
                    }}
                  >
                    {skill}
                  </StyledTypography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Skills;
