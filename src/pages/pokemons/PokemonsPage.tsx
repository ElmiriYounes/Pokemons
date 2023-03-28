import { QueryResult, useQuery } from "@apollo/client";
import { Pagination, Box, Theme, useMediaQuery, useTheme } from "@mui/material";
import React, { FC, useEffect, useState, useRef } from "react";
import Pokemon from "src/components/card-pokemon/Pokemon";
import Pokemon404 from "src/components/errors/Pokemon404";
import Filter from "src/components/filter/Filter";
import PulsePokemon from "src/components/loading/PulsePokemon";
import SearchBar from "src/components/search-bar/SearchBar";
import { GET_POKEMONS } from "src/graphql/Queries";
import { mdMediaQuery, xsMediaQuery } from "src/responsive/responsive";
import {
  PaginationWrapper,
  Pokemons,
  PokemonsContainer,
  PokemonsHeader,
  PokemonsHeaderItem,
  ScrollToTop,
} from "./PokemonsPage.style";
import Chart from "src/components/chart/Chart";
import Modal from "src/components/modal-pokemon/Modal";
import { FaArrowCircleUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { variantScrollToTop } from "src/framer-motion/variants";

export const getByDefault = (array: any[]): any[] => {
  return array.sort((a, b) =>
    a.number > b.number ? 1 : b.number > a.number ? -1 : 0
  );
};

export const getByCategories = (array: any[]): any[] => {
  return array.sort((a, b) =>
    a.types[0] > b.types[0] ? -1 : b.types[0] > a.types[0] ? 1 : 0
  );
};

export const getByAscending = (array: any[]): any[] => {
  return array.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
};

export const getByDescending = (array: any[]): any[] => {
  return array.sort((a, b) => (a.name > b.name ? -1 : b.name > a.name ? 1 : 0));
};

const PokemonsPage: FC = () => {
  const { error, data, loading }: QueryResult<any, { first: number }> =
    useQuery(GET_POKEMONS, {
      variables: { first: 151 },
    });

  const theme: Theme = useTheme();

  const [pokemons, setPokemons] = useState<any[] | undefined>(undefined);

  const [pokemon, setPokemon] = useState<any | undefined>(undefined);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [offsetTop, setOffsetTop] = useState<number>(0);

  const [scrolled, setScrolled] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);

  const items: number = 16;

  const numberOfPulse: number[] = [1, 2, 3, 4];

  const [filter, setFilter] = useState<string>("none");

  const [searched, setSearched] = useState<string>("");

  const xs: boolean = useMediaQuery(xsMediaQuery);
  const md: boolean = useMediaQuery(mdMediaQuery);

  const pokemonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      window.scrollY > 100
        ? setScrolled((s) => true)
        : setScrolled((s) => false);
    };

    if (data) {
      setPokemons([...data.pokemons]);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      setPokemons(undefined);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  useEffect(() => {
    openModal && setOffsetTop(window.scrollY);
  }, [openModal]);

  const handleChange = (
    event: React.ChangeEvent<unknown> | undefined,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const getFilter = () => {
    let pokemonsFiltered: any[] = [...pokemons!];

    switch (filter) {
      case "none":
        pokemonsFiltered = getByDefault(pokemonsFiltered);
        break;
      case "cat":
        pokemonsFiltered = getByCategories(pokemonsFiltered);
        break;
      case "asc":
        pokemonsFiltered = getByAscending(pokemonsFiltered);
        break;
      case "desc":
        pokemonsFiltered = getByDescending(pokemonsFiltered);
        break;
    }

    return [...pokemonsFiltered];
  };

  return (
    <PokemonsContainer
      margin={`calc(${xs ? "84" : "64"}px + 50px) auto 50px auto`}
    >
      {!error && !pokemons && (
        <Pokemons container spacing={0}>
          {numberOfPulse.map((n: number, index: number) => (
            <PulsePokemon key={index} />
          ))}
        </Pokemons>
      )}

      {pokemons && <Chart pokemons={pokemons} searched={searched} />}

      {pokemons && (
        <PokemonsHeader container spacing={0}>
          <PokemonsHeaderItem
            item
            xs={12}
            md={3}
            display={"flex"}
            justifyContent={md ? "flex-start" : "center"}
            alignItems={"center"}
          >
            <SearchBar
              pokemons={data.pokemons}
              setPokemons={setPokemons}
              handleChange={handleChange}
              filter={filter}
              setSearched={setSearched}
            />
          </PokemonsHeaderItem>
          <PokemonsHeaderItem
            item
            xs={12}
            md={6}
            margin={md ? "" : "30px 0"}
            overflow={"auto"}
            display={"flex"}
            alignItems={"center"}
          >
            {pokemons.length > 0 && (
              <PaginationWrapper>
                <Pagination
                  count={Math.ceil(pokemons.length / items)}
                  onChange={handleChange}
                  page={page}
                />
              </PaginationWrapper>
            )}
          </PokemonsHeaderItem>
          <PokemonsHeaderItem
            item
            xs={12}
            md={3}
            display={"flex"}
            justifyContent={md ? "flex-end" : "center"}
            alignItems={"center"}
          >
            <Filter
              filter={filter}
              setFilter={setFilter}
              pokemons={pokemons ? pokemons : []}
              setPokemons={setPokemons}
            />
          </PokemonsHeaderItem>
        </PokemonsHeader>
      )}

      {pokemons && (
        <Pokemons container spacing={0} ref={pokemonsRef}>
          {getFilter()
            .slice((page - 1) * items, items * page)
            .map((pokemon: any, index: number) => (
              <Pokemon
                key={index}
                pokemon={pokemon}
                setOpenModal={setOpenModal}
                setPokemon={setPokemon}
              />
            ))}
        </Pokemons>
      )}

      {pokemons && (
        <Modal
          opened={openModal}
          setOpenModal={setOpenModal}
          pokemon={pokemon}
          setPokemon={setPokemon}
          offsetTop={offsetTop}
        />
      )}

      {pokemons && (
        <ScrollToTop
          variants={variantScrollToTop}
          initial={"hidden"}
          animate={scrolled && !openModal ? "show" : "hidden"}
          onClick={(e: any) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <FaArrowCircleUp className="scroll-to-top-icon" />
        </ScrollToTop>
      )}

      {pokemons && pokemons!.length === 0 && <Pokemon404 />}

      {error && <div>lklk</div>}
    </PokemonsContainer>
  );
};

export default PokemonsPage;
