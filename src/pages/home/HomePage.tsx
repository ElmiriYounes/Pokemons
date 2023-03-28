import React, { useEffect } from "react";
import { Hero } from "./HomePage.styles";
import Hooh from "../../components/ho-oh/Hooh";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import { lgMediaQuery } from "../../responsive/responsive";
import useMediaQuery from "@mui/material/useMediaQuery";
import CurvesLines from "../../components/background-svg-curves/CurvesLines";

const HomePage = () => {
  const lg: boolean = useMediaQuery(lgMediaQuery);

  return (
    <Hero lg={String(lg)}>
      <CurvesLines />
      <Hooh />
      <Jumbotron />
    </Hero>
  );
};

export default HomePage;
