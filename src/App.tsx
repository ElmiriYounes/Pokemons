import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyle } from "./globalStyle";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/home/HomePage";
import { darkTheme } from "./themes/darkTheme";
import { lightTheme } from "./themes/lightTheme";
import PokemonsPage from "./pages/pokemons/PokemonsPage";
import PageNotFound from "./components/errors/PageNotFound";

const App: FC = () => {
  const [mode, setMode] = useState<string>("light");

  const toggleMode = (): void => {
    mode === "light" ? setMode((m) => "dark") : setMode((m) => "light");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />

      {GlobalStyle}

      <Router>
        <Navbar toggleMode={toggleMode} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemons" element={<PokemonsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
