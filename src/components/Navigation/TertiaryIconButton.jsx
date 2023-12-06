/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import React from "react";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";

export default function TertiaryIconButton(props) {
  const theme = useTheme();

  const CustomIconButton = styled(IconButton)({
    "&:hover": {
      backgroundColor: theme.palette.tertiary.highlight,
    },
  });

  return (
    <CustomIconButton
      sx={{
        border: `2px solid ${theme.palette.tertiary.main}`,
        backgroundColor: theme.palette.neutral.main,
        color: theme.palette.tertiary.main,
      }}
    >
      {props.children}
    </CustomIconButton>
  );
}
