/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import React from "react";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";

export default function PrimaryIconButton(props) {
  const theme = useTheme();

  const CustomIconButton = styled(IconButton)({
    "&:hover": {
      backgroundColor: theme.palette.primary.highlight,
    },
  });

  return (
    <CustomIconButton
      sx={{
        border: `2px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.neutral.main,
        color: theme.palette.primary.main,
      }}
    >
      {props.children}
    </CustomIconButton>
  );
}
