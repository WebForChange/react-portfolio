/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import React, { useState } from "react";
import PrimaryIconButton from "./PrimaryIconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const ScrollDownButton = () => {
  const handleButtonClick = () => {
    const pageHeight = window.innerHeight;
    window.scrollBy({ left: 0, top: pageHeight - 60, behavior: "smooth" });
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      style={{
        borderRadius: "50%",
      }}
      onClick={() => {
        console.log("button clicked");
        const pageHeight = window.innerHeight;
        window.scrollBy({ left: 0, top: pageHeight, behavior: "smooth" });
      }}
    >
      <PrimaryIconButton>
        <ArrowDownwardIcon
          style={{
            fontSize: "2rem",
          }}
        />
      </PrimaryIconButton>
    </Box>
  );
};

export default ScrollDownButton;
