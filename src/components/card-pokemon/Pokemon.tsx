import React, { FC, useEffect, useRef, useState } from "react";
import { IPokemon } from "src/interfaces/pokemon.interface";
import {
  BackgroundIcon,
  Characteristic,
  CharacteristicIcons,
  Header,
  Image,
  ImageWrap,
  Label,
  Name,
  PokemonCard,
  PokemonCardGrid,
  TypeIcon,
} from "./Pokemon.style";
import { typesPokemon } from "../../datas/pokemons";
import Button from "../button/Button";
import { useMediaQuery } from "@mui/material";
import { lgMediaQuery } from "src/responsive/responsive";
import AOS from "aos";
import { Theme } from "@mui/material";
import { useTheme } from "@mui/material";

const Pokemon: FC<IPokemon> = ({ pokemon, setOpenModal, setPokemon }) => {
  const lg: boolean = useMediaQuery(lgMediaQuery);
  const theme: Theme = useTheme();
  const pokemonCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // pokemonCardRef.current?.offsetTop! - window.innerHeight < -134
    window.scrollY >
    pokemonCardRef.current?.offsetTop! - window.innerHeight + 120
      ? pokemonCardRef.current?.classList.add("aos-animate")
      : pokemonCardRef.current?.classList.remove("aos-animate");
  }, [pokemon, theme]);

  return (
    <PokemonCardGrid item xs={12} sm={6} md={4} lg={3}>
      <PokemonCard
        ref={pokemonCardRef}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        backgroundgradient={
          (typesPokemon as any)[pokemon.types[0].toLowerCase()]
            .backgroundGradient
        }
        theme={theme}
      >
        <Header>
          <Name variant="body2">{pokemon.name}</Name>
          <TypeIcon>
            {(typesPokemon as any)[pokemon.types[0].toLowerCase()].icon}
          </TypeIcon>
        </Header>

        <ImageWrap>
          <Image src={pokemon.image} alt={pokemon.name} />
        </ImageWrap>

        <BackgroundIcon>
          <img
            src={
              (typesPokemon as any)[pokemon.types[0].toLowerCase()]
                .backgroundIcon
            }
            alt={pokemon.types[0]}
          />
        </BackgroundIcon>

        <Button
          sx={{
            margin: "20px auto 0 auto",
            backgroundColor: `rgba(0, 0, 0, 0.6) !important`,
            fontWeight: "bold",
          }}
          setOpenModal={setOpenModal}
          setPokemon={setPokemon}
          pokemon={pokemon}
        >
          Know more
        </Button>
      </PokemonCard>
    </PokemonCardGrid>
  );
};

export default Pokemon;
