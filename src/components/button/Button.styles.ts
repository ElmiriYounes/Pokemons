import { Button } from "@mui/material";
import styled from "@emotion/styled/macro";
import { motion } from "framer-motion";

export const ButtonTemplate = motion(styled(Button)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #1976d2;
  color: white;
`);
