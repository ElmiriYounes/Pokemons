import React, { FC, useState } from "react";
import { RxValueNone } from "react-icons/rx";
import { MdCategory } from "react-icons/md";
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
} from "react-icons/tb";
import {
  FilterIcon,
  FilterIconWrap,
  FilterLabel,
  FilterMenuItem,
  FilterSelect,
  FilterWrapper,
} from "./Filter.style";
import { SelectChangeEvent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { stylesSelectFilter } from "src/make-styles/makeStyles";
import { IFilter } from "src/interfaces/filter.interface";

const Filter: FC<IFilter> = (props) => {
  const useStyles: any = makeStyles(stylesSelectFilter);

  const classes = useStyles();

  const filters: any[] = [
    { value: "none", icon: <RxValueNone /> },
    { value: "cat", icon: <MdCategory /> },
    { value: "asc", icon: <TbSortAscendingLetters /> },
    { value: "desc", icon: <TbSortDescendingLetters /> },
  ];

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ): void => {
    props.setFilter?.(String(event.target.value));
  };

  return (
    <FilterWrapper>
      <FilterIconWrap>
        <FilterIcon />
      </FilterIconWrap>
      <FilterLabel>Filter:</FilterLabel>
      <FilterSelect
        value={props.filter}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "label" }}
        className={classes.select}
        MenuProps={{ disableScrollLock: true }}
      >
        {filters.map((filter, index) => (
          <FilterMenuItem key={index} value={filter.value}>
            {filter.icon}
          </FilterMenuItem>
        ))}
      </FilterSelect>
    </FilterWrapper>
  );
};

export default Filter;
