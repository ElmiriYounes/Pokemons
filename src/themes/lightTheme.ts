import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";
import { globalTypography } from "../globalStyle";

export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#eee",
    },
  },
  typography: {
    ...globalTypography,
    body1: {
      color: "rgba(0, 0, 0, 0.6)",
    },
  },
});
