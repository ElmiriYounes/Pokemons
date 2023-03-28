import React, { FC, useEffect, useRef, useState } from "react";
import {
  variantHamburgerClose,
  variantModal,
} from "src/framer-motion/variants";
import { IModal } from "src/interfaces/modal.interface";
import {
  CircularProgressBar,
  GridWrap,
  HamburgerClose,
  Circular,
  CircularLabel,
  CircularWrap,
  ModalPokemon,
  PokemonImg,
  PokemonImgPapper,
  PokemonImgWrap,
  PokemonWrapper,
  Types,
  Type,
} from "./Modal.style";
import { Slant as Hamburger } from "hamburger-react";
import { Theme, useTheme, useMediaQuery, Typography } from "@mui/material";
import { typesPokemon } from "src/datas/pokemons";
import CountUp from "react-countup";
import { xsMediaQuery } from "src/responsive/responsive";
import { circularValues } from "src/datas/circular";

const Modal: FC<IModal> = ({ opened, setOpenModal, pokemon }) => {
  const [toggled, setToggled] = useState<boolean>(false);

  const [scrolling, setScrolling] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const circularRef = useRef<HTMLDivElement>(null);

  const labels: string[] = ["Types", "Weaknesses", "Resistant"];

  const [progress, setProgress] = useState<number>(0);

  const theme: Theme = useTheme();

  const xs: boolean = useMediaQuery(xsMediaQuery);

  const handleScroll = () => {
    modalRef.current?.scrollTop! >=
      circularRef.current!.offsetTop +
        (window.innerWidth < 600 ? 84 : 64) -
        window.innerHeight +
        (window.innerWidth < 600 ? 117 : 200) && setScrolling(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    modalRef.current!.scrollTop = 0;
    if (opened) {
      timer = setTimeout(() => {
        circularRef.current!.offsetTop +
          (window.innerWidth < 600 ? 84 : 64) -
          window.innerHeight <
        -117
          ? setScrolling(true)
          : modalRef.current?.addEventListener("scroll", handleScroll);
        setProgress(100);
        setToggled(true);
      }, 1000);
    } else {
      modalRef.current?.removeEventListener("scroll", handleScroll);
      setToggled(false);
      setProgress(0);
      setScrolling(false);
      clearTimeout(timer!);
    }

    return () => {
      modalRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [opened]);

  const handleToggle = () => {
    setOpenModal(false);
  };

  return (
    <ModalPokemon
      variants={variantModal}
      initial={"close"}
      animate={opened ? "open" : "close"}
      sx={{
        height: xs ? "calc(100vh - 84px)" : "calc(100vh - 64px)",
        top: xs ? "84px" : "64px",
      }}
      ref={modalRef}
    >
      {pokemon && (
        <PokemonWrapper container>
          <HamburgerClose
            variants={variantHamburgerClose}
            initial={"hidden"}
            animate={toggled ? "show" : "hidden"}
          >
            <Hamburger
              toggled={toggled}
              toggle={handleToggle}
              color={
                theme.palette.mode === "light"
                  ? theme.palette.primary.main
                  : "white"
              }
            />
          </HamburgerClose>
          <GridWrap item xs={12}>
            <Typography variant="h4" marginBottom={"50px"}>
              {pokemon.name}
            </Typography>
          </GridWrap>

          <GridWrap item xs={12}>
            <PokemonImgWrap
              boxShadow={`0 0 15px ${
                theme.palette.mode === "light"
                  ? "rgb(0,0,0,0.5)"
                  : "rgb(255,255,255,0.5)"
              }`}
              sx={{
                width: { xs: "250px", sm: "300px", lg: "400px" },
                height: { xs: "250px", sm: "300px", lg: "400px" },
                background: (typesPokemon as any)[
                  pokemon.types[0].toLowerCase()
                ].backgroundGradient,
              }}
            >
              <PokemonImg src={pokemon.image} alt={pokemon.name} />
            </PokemonImgWrap>
          </GridWrap>

          <GridWrap item xs={12}>
            <CircularWrap ref={circularRef}>
              <GridWrap container spacing={1}>
                {circularValues.map((item: any, index: number) => (
                  <GridWrap item xs={3} flexDirection={"column"} key={index}>
                    <CircularLabel>{item.label}</CircularLabel>
                    <Circular>
                      <CountUp
                        decimals={
                          item.label === "Height m" ||
                          item.label === "Weight kg"
                            ? 2
                            : 0
                        }
                        end={
                          scrolling
                            ? item.label === "Height m" ||
                              item.label === "Weight kg"
                              ? Number(
                                  pokemon![item.attribut].maximum.replace(
                                    /[^\d.;,]/g,
                                    ""
                                  )
                                )
                              : pokemon![item.attribut]
                            : 0
                        }
                        duration={1}
                        useEasing={true}
                      />
                      <CircularProgressBar
                        variant="determinate"
                        size={xs ? 62 : 125}
                        value={100}
                        thickness={2}
                        sx={{
                          color: "grey",
                        }}
                      />
                      <CircularProgressBar
                        variant="determinate"
                        size={xs ? 62 : 125}
                        value={scrolling ? progress : 0}
                        thickness={2}
                        sx={{
                          color: (typesPokemon as any)[
                            pokemon.types[0].toLowerCase()
                          ].color.light,
                        }}
                      />
                    </Circular>
                  </GridWrap>
                ))}
              </GridWrap>
            </CircularWrap>
          </GridWrap>

          <GridWrap container>
            {labels.map((label: string, index: number) => (
              <GridWrap
                container
                key={index}
                direction={"column"}
                alignSelf={"flex-start"}
              >
                <GridWrap item xs={12} sx={{ marginTop: "20px" }}>
                  {label}
                </GridWrap>

                <GridWrap item xs={12}>
                  <Types direction={"row"} flexWrap={"wrap"}>
                    {pokemon![label.toLowerCase()].map(
                      (type: any, index: number) => (
                        <Type
                          key={index}
                          sx={{
                            backgroundColor: (typesPokemon as any)[
                              type.toLowerCase()
                            ].color[theme.palette.mode],
                          }}
                        >
                          {(typesPokemon as any)[type.toLowerCase()].icon}
                        </Type>
                      )
                    )}
                  </Types>
                </GridWrap>
              </GridWrap>
            ))}
          </GridWrap>
        </PokemonWrapper>
      )}
    </ModalPokemon>
  );
};

export default Modal;
