/*
 * Created on Wed Dec 06 2023
 *
 * Copyright (c) 2023 Tonio Suessdorf
 */

import { IconButton } from "@mui/material";

export default function PrimaryIconButton(props) {
  const { href, target, rel, disabled, children, ...rest } = props;
  const isLink = Boolean(href);

  return (
    <IconButton
      component={isLink ? "a" : "button"}
      href={isLink ? href : undefined}
      target={isLink ? target : undefined}
      rel={isLink ? rel : undefined}
      disabled={disabled}
      sx={{
        border: (theme) => `3px solid ${theme.palette.primary.main}`,
        backgroundColor: "neutral.main",
        color: "primary.main",
        textDecoration: "none",
        "&:hover": {
          borderColor: "primary.highlight",
          color: "primary.highlight",
          backgroundColor: "neutral.main",
        },
      }}
      {...rest}
    >
      {children}
    </IconButton>
  );
}
