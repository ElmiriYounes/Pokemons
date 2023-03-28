import styled from "@emotion/styled/macro";
import { Box, Grid, Typography } from "@mui/material";
import { flexCenter } from "src/globalStyle";

export const CounterType = styled(Typography)``;

export const LabelType = styled(Typography)`
  padding: 0 5px;
`;

export const IconType = styled(Box)``;

export const TotalType = styled(Box)`
  ${flexCenter};
  margin-top: 20px;
  width: 120px;
`;

export const TotalPerType = styled(Box)`
  ${flexCenter};
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const TotalPokemons = styled(Grid)`
  ${flexCenter};
  margin-bottom: 20px;
`;

export const LegendWrap = styled(Grid)`
  width: 100%;
  ${flexCenter};
  flex-direction: column;
  margin-top: 20px;
`;

export const PieChart = styled(Box)`
  width: 100% !important;
  max-width: 500px !important;
  height: 400px;
  ${flexCenter};
  margin: 0 auto;
  border-radius: 20px;

  @media (max-width: 599px) {
    height: 200px;
  }
`;

export const ChartWrapper = styled(Box)`
  margin: 0 auto;
`;
