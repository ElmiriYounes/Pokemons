import { Theme } from "@emotion/react";
import { CSSObject } from "@emotion/styled/macro";
import { GlobalStyles } from "@mui/material";

export const GlobalStyle: JSX.Element = (
  <GlobalStyles
    styles={{
      "*": {
        letterSpacing: "1px !important",
        padding: "0",
        margin: "0",
        boxSizing: "border-box",
      },
      html: { overflowX: "hidden", width: "100%", height: "100%" },
      body: { width: "100%", height: "100%" },
      a: {
        color: "inherit",
        textDecoration: "inherit",
      },
    }}
  />
);

export const flexCenter: CSSObject = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const maxWidth: number = 1600;

export const globalTypography: any = {
  h1: { color: "#1976D2", fontWeight: 600 },
  fontFamily: `"Roboto", sans-serif`,
  fontSize: 18,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
};
