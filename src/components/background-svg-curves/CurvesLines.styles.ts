import { Box } from "@mui/material";
import styled from "@emotion/styled/macro";
import { IJumbotronWrap } from "../../interfaces/jumbotron.interface";

export const BackgroundCurves = styled(Box)<IJumbotronWrap>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  & > svg {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;
