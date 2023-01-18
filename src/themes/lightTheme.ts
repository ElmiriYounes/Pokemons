import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";

export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#eee",
    },
  },
  typography: {
    body1: {
      color: "rgba(0, 0, 0, 0.6)",
    },
    h1: { color: "#1976D2", fontWeight: 600 },
    fontFamily: `"Roboto", sans-serif`,
    fontSize: 18,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
