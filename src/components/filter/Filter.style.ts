import styled from "@emotion/styled/macro";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { IoFilterSharp } from "react-icons/io5";
import { flexCenter } from "src/globalStyle";

export const FilterMenuItem = styled(MenuItem)``;

export const FilterSelect = styled(Select)``;

export const FilterLabel = styled(Typography)`
  padding: 0 16px;
`;

export const FilterIcon = styled(IoFilterSharp)``;

export const FilterIconWrap = styled(Box)``;

export const FilterWrapper = styled(Box)`
  ${flexCenter}
`;
