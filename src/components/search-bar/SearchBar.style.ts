import styled from "@emotion/styled/macro";
import { InputBase } from "@mui/material";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { flexCenter } from "src/globalStyle";
import { ISearchWrap } from "src/interfaces/search.interface";

export const SearchInput = styled(InputBase)`
  width: calc(12ch + 47px);
  padding: 0 5px 0 47px;
  transition: all 0.2s linear;
`;

export const SearchBarIcon = styled(SearchIcon)`
  font-size: 27px;
`;

export const SearchIconWrapper = styled(Box)`
  ${flexCenter}
  padding: 0 10px;
  position: absolute;
  left: 0;
  pointer-events: none;
`;

export const SearchBarWrap = styled(Box)<ISearchWrap>`
  position: relative;
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme.palette.mode === "dark" ? "rgb(255,255,255, 0.15)" : ""};
  border: ${(props) =>
    props.theme.palette.mode === "dark" ? "" : "2px solid"};
  width: min-content;
  ${flexCenter}

  &:hover {
    background-color: ${(props) =>
      props.theme.palette.mode === "dark" ? "rgb(255,255,255, 0.2)" : ""};
  }

  &:focus-within ${SearchInput} {
    width: calc(16ch + 47px);
  }
  /* [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  }, */
`;
