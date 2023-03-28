import { Theme } from "@mui/material";
import { useTheme } from "@mui/system";
import React, { FC, useEffect } from "react";
import { ISearchBar } from "src/interfaces/search.interface";
import {
  SearchBarWrap,
  SearchBarIcon,
  SearchIconWrapper,
  SearchInput,
} from "./SearchBar.style";

const SearchBar: FC<ISearchBar> = (props) => {
  const theme: Theme = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searched: string = event.target.value;

    props.setSearched(searched);

    let pokemonsSearched: any[] = props.pokemons!.filter(
      (pokemon: any): any[] => {
        return pokemon.name.toLowerCase().includes(searched.toLowerCase());
      }
    );

    props.handleChange?.(undefined, 1);

    props.setPokemons?.([...pokemonsSearched]);
  };

  return (
    <SearchBarWrap theme={theme}>
      <SearchIconWrapper>
        <SearchBarIcon theme={theme} />
      </SearchIconWrapper>
      <SearchInput
        theme={theme}
        placeholder="pikachu…"
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
        // spellChack = enable/desable red underline of text's corrector
        spellCheck={false}
      />
    </SearchBarWrap>
  );
};

export default SearchBar;
