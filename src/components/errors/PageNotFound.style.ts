import styled from "@emotion/styled/macro";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { flexCenter } from "src/globalStyle";

export const NotFoundImg = styled("img")`
  max-width: 500px;
  width: 100%;
`;

export const NotFoundWrap = styled(Box)`
  ${flexCenter}
  width: 100%;
  min-height: 100vh;
  padding: calc(64px + 50px) 20px 50px 20px;

  @media (max-width: 599px) {
    padding: calc(84px + 50px) 20px 50px 20px;
  }
`;
