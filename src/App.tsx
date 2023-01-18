import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { FC, useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyle } from "./globalStyle";

import Home from "./pages/home/Home";
import { darkTheme } from "./themes/darkTheme";
import { lightTheme } from "./themes/lightTheme";

const App: FC = () => {
  const [mode, setMode] = useState<string>("light");

  const toggleMode = (): void => {
    mode === "light" ? setMode((m) => "dark") : setMode((m) => "light");
  };

  return (
    <>
      <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
        <CssBaseline />

        {GlobalStyle}

        <Navbar toggleMode={toggleMode} />

        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
