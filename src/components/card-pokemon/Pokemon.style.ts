import styled from "@emotion/styled/macro";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { flexCenter } from "src/globalStyle";
import { IPokemonCard } from "src/interfaces/pokemon.interface";

export const CharacteristicIcons = styled(Stack)`
  flex-wrap: wrap;
`;

export const Label = styled(Typography)``;

export const Characteristic = styled(Box)`
  margin-top: 10px;
`;

export const BackgroundIcon = styled(Box)`
  ${flexCenter}
  opacity: 0.3;
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Image = styled("img")`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s ease-out;
`;

export const ImageWrap = styled(Box)`
  ${flexCenter}
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  border: 5px solid rgba(0, 0, 0, 0.6);
`;

export const TypeIcon = motion(styled(Box)`
  border-radius: 50%;
  font-size: 25px;
  padding: 5px;
  ${flexCenter}
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
`);

export const Name = motion(styled(Typography)`
  font-weight: bold;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 20px;
  border-radius: 20px;
`);

export const Header = styled(Box)`
  ${flexCenter}
  justify-content: space-between;
`;

export const PokemonCard = styled(Box)<IPokemonCard>`
  background: ${(props) => props.backgroundgradient};
  border: 5px solid rgba(0, 0, 0, 0.6);
  width: 300px;
  overflow: hidden;
  padding: 20px;
  position: relative;
  z-index: 0;
  margin: 0 16px;
  box-shadow: ${(props) =>
    props.theme.palette.mode === "dark"
      ? `0 10px 15px rgb(255,255,255,0.3)`
      : "0 10px 15px rgb(0,0,0,0.3)"};

  &:hover ${Image} {
    scale: 1.15;
  }
`;

export const PokemonCardGrid = motion(styled(Grid)`
  margin-top: 50px;
  ${flexCenter}
`);
