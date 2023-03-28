import { Box, CircularProgress, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import CountUp from "react-countup";
import { ICounterTypes } from "src/interfaces/counter.interface";
import { CounterUpWrapper } from "./CounterTypes.style";

const CounterTypes: FC<ICounterTypes> = (props) => {
  return (
    <CounterUpWrapper>
      <CountUp
        // start={props.progress}
        end={props.progress?.()!}
        duration={1}
        useEasing={true}
      />
    </CounterUpWrapper>
  );
};

export default CounterTypes;
