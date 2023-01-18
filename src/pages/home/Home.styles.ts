import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { flexCenter } from "../../globalStyle";

export const Hero = styled(Box)`
  min-height: calc(100vh - 64px);
  ${flexCenter}
  flex-direction: column;
  margin-top: 64px;
  padding: 0 16px;
  position: relative;
`;
