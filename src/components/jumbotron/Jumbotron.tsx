import React, { FC, useEffect } from "react";
import { lgMediaQuery, xsMediaQuery } from "../../responsive/responsive";
import Button from "../button/Button";
import { useMediaQuery } from "@mui/material";
import { Desc, JumbotronWrap, Title } from "./Jumbotron.styles";
import { Link } from "react-router-dom";

const Jumbotron: FC = () => {
  const xs: boolean = useMediaQuery(xsMediaQuery);
  const lg: boolean = useMediaQuery(lgMediaQuery);

  return (
    <JumbotronWrap
      lg={String(lg)}
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <Title variant="h1" fontSize={xs ? "54px" : lg ? "100px" : "74px"}>
        Gotta Catch ’Em All
      </Title>
      <Desc variant="body1">
        This is a website using React and GraphQL to show the basic pokemons.
      </Desc>

      <Link to="/pokemons">
        <Button sx={{ margin: lg ? "unset" : "0 auto" }}>Get Started</Button>
      </Link>
    </JumbotronWrap>
  );
};

export default Jumbotron;
