import React from "react";
import { Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import privacy from "../constants/privacyConstants";

export default function Privacy() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        py: "40px",
        justifyContent: "center",
        backgroundColor: "#fefaec",
      }}
    >
      <Grid item xs={10} sm={8} md={6} lg={5}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ lineHeight: "2", pt: "4px" }}
        >
          {privacy.PRIVACY_TITLE}
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{ lineHeight: "2", pt: "4px" }}
        >
          {privacy.PRIVACY_BASICS_TITLE}
        </Typography>
        <Typography variant="body2" align="justify">
          {privacy.PRIVACY_BASICS}
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{ lineHeight: "2", pt: "4px" }}
        >
          {privacy.PRIVACY_DATA_COLLECTED_TITLE}
        </Typography>
        <Typography variant="body2" align="justify">
          {privacy.PRIVACY_DATA_COLLECTED_P1}
        </Typography>
        <List sx={{ listStyleType: "disc", ml: "20px" }}>
          {privacy.COLLECTED_DATA_LIST.map((item) => {
            return (
              <ListItem key={item} sx={{ display: "list-item", py: "2px" }}>
                <Typography variant="body2">{item}</Typography>
              </ListItem>
            );
          })}
        </List>
        <Typography variant="body2" align="justify">
          {privacy.PRIVACY_DATA_COLLECTED_P2}
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{ lineHeight: "2", pt: "4px" }}
        >
          {privacy.RIGHTS_TITLE}
        </Typography>
        <Typography variant="body2" align="justify">
          {privacy.RIGHTS}
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{ lineHeight: "2", pt: "4px" }}
        >
          {privacy.DATA_DELETION_TITLE}
        </Typography>
        <Typography variant="body2" align="justify">
          {privacy.DATA_DELETION}
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{ lineHeight: "2", pt: "4px" }}
        >
          {privacy.DISAGREE_TITLE}
        </Typography>
        <Typography variant="body2" align="justify">
          {privacy.DISAGREE}
        </Typography>
      </Grid>
    </Grid>
  );
}
