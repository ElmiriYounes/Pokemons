import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";
import { globalTypography } from "../globalStyle";

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    body1: {
      color: "#fff",
    },
    ...globalTypography,
  },
});
