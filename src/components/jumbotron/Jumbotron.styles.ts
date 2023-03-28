import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { IJumbotronWrap } from "../../interfaces/jumbotron.interface";

export const Desc = styled(Typography)({
  paddingBottom: "50px",
});

export const Title = styled(Typography)({});

export const JumbotronWrap = styled(Box)<IJumbotronWrap>((props) => ({
  position: "relative",
  padding: props.lg === "true" ? "50px 50px 50px 0" : "50px 0",
  maxWidth: "800px",
  textAlign: props.lg === "true" ? "left" : "center",
}));
