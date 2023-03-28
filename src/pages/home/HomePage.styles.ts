import { Box } from "@mui/material";
import styled from "@emotion/styled/macro";
import { flexCenter, maxWidth } from "../../globalStyle";
import { IJumbotronWrap } from "../../interfaces/jumbotron.interface";

export const Hero = styled(Box)<IJumbotronWrap>`
  min-height: calc(100vh);
  ${flexCenter}
  flex-direction: ${(props) =>
    props.lg === "true" ? "row-reverse" : "column"};
  justify-content: center;
  margin: 64px auto 0 auto;
  padding: 20px;
  position: relative;
  max-width: ${`${maxWidth}px`};
  width: 100%;
`;
