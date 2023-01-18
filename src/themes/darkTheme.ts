import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    body1: {
      color: "#fff",
    },
    h1: { color: "#1976D2", fontWeight: 600 },
    fontFamily: `"Roboto", sans-serif`,
    fontSize: 18,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
