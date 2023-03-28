import { Box } from "@mui/material";
import styled from "@emotion/styled/macro";
import { IJumbotronWrap } from "../../interfaces/jumbotron.interface";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { flexCenter } from "../../globalStyle";
import { motion } from "framer-motion";

export const TextRotate = styled(Box)`
  color: rgb(255, 255, 255, 0.7);
`;

const arrowsStyles = { fontSize: "40px", color: "rgb(255, 255, 255, 0.7)" };
export const IconRightArrow = styled(FaLongArrowAltLeft)`
  ${arrowsStyles}
`;

export const IconLeftArrow = styled(FaLongArrowAltRight)`
  ${arrowsStyles}
`;

export const IconPointer = styled(PanToolAltIcon)`
  font-size: 80px;
  color: rgb(255, 255, 255, 0.7);
`;

export const Icons = styled(Box)`
  ${flexCenter}
`;

export const Dragging3D = motion(styled(Box)`
  ${flexCenter};
  flex-direction: column;
  position: absolute;
  bottom: 20px;
  width: 170px;
  margin-left: calc(50% - 85px);
  pointer-events: none;
`);

export const Scene3D = styled(Box)<IJumbotronWrap>`
  width: 100%;
  max-width: 700px;
  min-width: 250px;
  height: ${(props) =>
    props.lg === "true" ? "700px" : props.sm === "true" ? "500px" : "350px"};
  margin-top: ${(props) => (props.lg === "true" ? "0" : "50px")};
  position: relative;
  cursor: grab;
  z-index: ${(props) => props.zIndex};
  transition: all 0.3s;
  border-radius: 20px;
  background-color: #1976d2;

  &:active {
    cursor: grabbing;
  }
`;
