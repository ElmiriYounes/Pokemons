import { Theme } from "@mui/material";

export interface ISearchWrap {
  theme: Theme;
}

export interface ISearchBar {
  pokemons?: any[];
  setPokemons?: (pokemons: any[]) => void;
  handleChange?: (
    event: React.ChangeEvent<unknown> | undefined,
    newPage: number
  ) => void;
  filter?: string;
  setSearched: (s: string) => void;
}
