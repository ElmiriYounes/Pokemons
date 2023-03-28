import { CSSObject } from "@emotion/react";
import { Theme } from "@mui/material";

export interface IPokemon {
  pokemon: any;
  setPokemon: (pokemon: any) => void;
  setOpenModal: (open: boolean) => void;
}

interface IColor {
  dark?: string;
  light?: string;
}

export interface ITypePokemon {
  label: string;
  icon: JSX.Element;
  backgroundGradient: string;
  backgroundIcon: string;
  color: IColor;
}

export interface ITypesPokemon {
  grass: ITypePokemon;
  poison: ITypePokemon;
  fire: ITypePokemon;
  flying: ITypePokemon;
  water: ITypePokemon;
  bug: ITypePokemon;
  normal: ITypePokemon;
  electric: ITypePokemon;
  ground: ITypePokemon;
  fairy: ITypePokemon;
  fighting: ITypePokemon;
  psychic: ITypePokemon;
  rock: ITypePokemon;
  steel: ITypePokemon;
  ice: ITypePokemon;
  ghost: ITypePokemon;
  dragon: ITypePokemon;
  dark: ITypePokemon;
}

export interface IPokemonCard {
  backgroundgradient: string;
  theme?: Theme;
}
