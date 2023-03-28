import styled from "@emotion/styled/macro";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { flexCenter } from "src/globalStyle";

export const NotFound = styled(Typography)`
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
`;

export const Image = styled("img")`
  width: 100%;
  margin-right: 15px;
`;

export const FourLetter = styled(Typography)`
  font-size: 150px;
`;

export const ImageWrap = styled(Box)`
  max-height: 192px;
  width: 100%;
  ${flexCenter}
  margin: 20px auto 0 auto;

  & svg {
    padding-right: 10px;
    min-width: 100px;
    max-width: 140px;
  }
`;

export const Sorry = styled(NotFound)`
  color: #f3184e;
  margin-top: inherit;
  font-size: 35px;
`;

export const Pokemon404Wrap = styled(Box)`
  padding: 50px;
`;
