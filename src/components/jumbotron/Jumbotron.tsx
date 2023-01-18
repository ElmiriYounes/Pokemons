import React, { FC } from "react";
import { lgMediaQuery, xsMediaQuery } from "../../responsive/responsive";
import Button from "../button/Button";
import { useMediaQuery } from "@mui/material";
import { Desc, JumbotronWrap, Title } from "./Jumbotron.styles";

const Jumbotron: FC = () => {
  const xs = useMediaQuery(xsMediaQuery);
  const lg = useMediaQuery(lgMediaQuery);

  return (
    <JumbotronWrap>
      <Title variant="h1" fontSize={xs ? "54px" : lg ? "100px" : "74px"}>
        Gotta Catch ’Em All
      </Title>
      <Desc variant="body1">
        Pokémon (known in Japan as Pocket Monsters) is a franchise created by
        Satoshi Tajiri in 1996.
      </Desc>

      <Button sx={{ margin: "0 auto" }}>Get Started</Button>
    </JumbotronWrap>
  );
};

export default Jumbotron;
