import styled from "@emotion/styled/macro";
import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/material";
import { css, Theme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { flexCenter, maxWidth } from "src/globalStyle";

export const ScrollToTop = motion(styled(Box)`
  position: fixed;
  bottom: 0;
  right: 20px;
  font-size: 45px;

  & > * {
    cursor: pointer;
    color: ${(props) =>
      css`
        ${(props.theme as Theme).palette.primary.main}
      `};
  }
`);

export const Counters = styled(Stack)`
  margin-top: 50px;
`;

export const PaginationWrapper = styled(Box)`
  min-width: max-content;
  margin: 0 auto;
`;

export const PokemonsHeaderItem = styled(Grid)``;

export const PokemonsHeader = styled(Grid)`
  padding: 50px 16px 0 16px;
`;

export const Pokemons = styled(Grid)`
  width: 100%;
  padding-bottom: 50px;
`;

export const PokemonsContainer = styled(Grid)`
  max-width: ${`${maxWidth}px`};
`;
