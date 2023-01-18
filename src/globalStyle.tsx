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
      html: { overflowX: "hidden" },
    }}
  />
);

export const flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
