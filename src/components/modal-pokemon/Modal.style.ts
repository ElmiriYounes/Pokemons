import styled from "@emotion/styled/macro";
import {
  Box,
  Theme,
  Typography,
  Grid,
  CircularProgress,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import { flexCenter, maxWidth } from "src/globalStyle";

export const Type = styled(Box)`
  ${flexCenter}
  padding: 16px 50px;
  border-radius: 5px;
  margin: 20px;
  color: white;
  font-size: 25px;
`;

export const Types = styled(Stack)`
  ${flexCenter}
`;

export const CircularProgressBar = styled(CircularProgress)`
  position: absolute;

  .MuiCircularProgress-circle {
    transition: 1s;
  }
`;

export const CircularLabel = styled(Typography)`
  padding-bottom: 5px;

  @media (max-width: 600px) {
    font-size: 11px !important;
    text-align: center;
  }
`;

export const Circular = styled(Box)`
  ${flexCenter};
  flex-direction: column;
  position: relative;
  font-size: 30px;
  width: 125px;
  height: 125px;

  @media (max-width: 600px) {
    width: 62px;
    height: 62px;

    & * {
      font-size: 14px !important;
      text-align: center;
    }
  }
`;

export const CircularWrap = styled(Grid)`
  ${flexCenter};
  padding: 50px 0 30px 0;
  width: 100%;
  max-width: 800px;
`;

export const PokemonImg = styled("img")`
  position: absolute;
  background-color: white;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  object-fit: contain;
  border-radius: 20px;
`;

export const PokemonImgPapper = styled(Box)`
  position: absolute;
  width: calc(100% + 50px);
  height: calc(100% + 50px);
  z-index: -1;
  border-radius: 20px;
`;

export const PokemonImgWrap = styled(Grid)`
  ${flexCenter}
  position: relative;
  border-radius: 20px;
`;

export const GridWrap = styled(Grid)`
  ${flexCenter}
`;

export const PokemonWrapper = styled(Grid)`
  margin: calc(20px + 48px + 20px) auto 0 auto;
  max-width: ${`${maxWidth}px`};
  position: relative;

  @media (max-width: 599px) {
    margin: calc(20px + 0px + 20px) auto 0 auto;
  }
`;

export const HamburgerClose = motion(styled(Box)`
  position: absolute;
  top: calc(-48px - 20px);
  left: 20px;
`);

export const ModalPokemon = motion(styled(Box)`
  background-color: ${(props) =>
    (props.theme as Theme).palette.background.default};
  top: 63px;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 999;
  overflow: auto;
  padding: 50px 0;

  @media (max-width: 599px) {
    top: 84px;
  }
`);
