import React, { FC } from "react";
import { variantPulse } from "src/framer-motion/variants";
import { motion } from "framer-motion";
import {
  BackgroundIcon,
  Header,
  ImageWrap,
  Name,
  PokemonCard,
  PokemonCardGrid,
  TypeIcon,
} from "../card-pokemon/Pokemon.style";
import { Theme } from "@mui/material";
import { useTheme } from "@mui/material";

const PulsePokemon: FC = () => {
  const theme: Theme = useTheme();

  const pokebolPulse: JSX.Element = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 60 60"
    >
      <g transform="matrix(1.08194 0 0 1.09453 -1.667 -2.035)">
        <ellipse
          cx="29.268"
          cy="29.268"
          fill="#EBEBEB"
          fillOpacity="0"
          rx="26.804"
          ry="26.496"
        ></ellipse>
        <clipPath id="_clip1">
          <ellipse cx="29.268" cy="29.268" rx="26.804" ry="26.496"></ellipse>
        </clipPath>
        <g clipPath="url(#_clip1)">
          <motion.path
            variants={variantPulse}
            animate={"pulse"}
            fill={
              theme.palette.mode === "dark"
                ? "rgb(255,255,255,0.1)"
                : "rgb(0,0,0,.1)"
            }
            d="M-11.707 3.543H-5.083000000000001V17.792H-11.707z"
            transform="matrix(8.37209 0 0 1.92358 99.555 -4.956)"
          ></motion.path>
          <path
            fill={
              theme.palette.mode === "dark"
                ? "rgb(255,255,255,0.1)"
                : "rgb(0,0,0,0.1)"
            }
            d="M-11.476 21.104H-1.7710000000000008V28.805999999999997H-11.476z"
            transform="matrix(5.71429 0 0 3.55862 67.119 -45.833)"
          ></path>
        </g>
      </g>
      <ellipse
        cx="-4.698"
        cy="8.164"
        fill={
          theme.palette.mode === "dark" ? "rgb(255,255,255,0)" : "rgb(0,0,0,0)"
        }
        rx="3.62"
        ry="3.081"
        transform="matrix(2.48617 0 0 2.92125 41.68 6.15)"
      ></ellipse>
      <motion.ellipse
        variants={variantPulse}
        animate={"pulse"}
        fill={
          theme.palette.mode === "dark"
            ? "rgb(255,255,255,0.1)"
            : "rgb(0,0,0,.1)"
        }
        cx="-4.698"
        cy="8.164"
        rx="3.62"
        ry="3.081"
        transform="matrix(1.79557 0 0 2.10979 38.436 12.775)"
      ></motion.ellipse>
    </svg>
  );

  return (
    <PokemonCardGrid item xs={12} sm={6} md={4} lg={3}>
      <PokemonCard
        backgroundgradient={""}
        sx={{
          border: "none !important",
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgb(255,255,255,.1)"
              : "rgb(0,0,0,.1)",
        }}
      >
        <Header>
          <Name
            variants={variantPulse}
            animate={"pulse"}
            sx={{
              height: "38px",
              width: "100px",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgb(255,255,255,0.1) !important"
                  : "rgb(0,0,0,.1) !important",
            }}
          />
          <TypeIcon
            variants={variantPulse}
            animate={"pulse"}
            sx={{
              height: "35px",
              width: "35px",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgb(255,255,255,0.1) !important"
                  : "rgb(0,0,0,.1) !important",
            }}
          />
        </Header>

        <ImageWrap
          sx={{
            border: "none !important",
            width: "150px !important",
            margin: "0 auto",
          }}
        >
          {pokebolPulse}
        </ImageWrap>
      </PokemonCard>
    </PokemonCardGrid>
  );
};

export default PulsePokemon;
