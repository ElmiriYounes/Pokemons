import React from "react";
import { Hero } from "./Home.styles";
import Hooh from "../../components/threeJS/Hooh";
import Jumbotron from "../../components/jumbotron/Jumbotron";

const Home = () => {
  return (
    <Hero>
      <Hooh />
      <Jumbotron />
    </Hero>
  );
};

export default Home;
