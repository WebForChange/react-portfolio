/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";

export default function PrimaryIconButton(props) {
  const theme = useTheme();
  const { href, target, rel, disabled, children, ...rest } = props;
  const isLink = Boolean(href);

  const CustomIconButton = styled(IconButton)({
    "&:hover": {
      borderColor: theme.palette.primary.highlight,
      color: theme.palette.primary.highlight,
      backgroundColor: theme.palette.neutral.main,
    },
  });

  return (
    <CustomIconButton
      component={isLink ? "a" : "button"}
      href={isLink ? href : undefined}
      target={isLink ? target : undefined}
      rel={isLink ? rel : undefined}
      disabled={disabled}
      sx={{
        border: `3px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.neutral.main,
        color: theme.palette.primary.main,
        textDecoration: "none",
      }}
      {...rest}
    >
      {children}
    </CustomIconButton>
  );
}
