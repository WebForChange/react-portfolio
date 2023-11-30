import React, { useState } from "react";
import PrimaryIconButton from "./Navigation/PrimaryIconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Paper from "@mui/material/Paper";

const ScrollDownButton = () => {
  const handleButtonClick = () => {
    // Todo
  };

  return (
    <PrimaryIconButton
      onClick={handleButtonClick}
      style={{ boxShadow: "0px 4px 5px black" }}
    >
      <ArrowDownwardIcon
        style={{
          fontSize: "2rem",
        }}
      />
    </PrimaryIconButton>
  );
};

export default ScrollDownButton;
