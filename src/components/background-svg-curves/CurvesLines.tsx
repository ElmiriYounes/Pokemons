import React, { FC } from "react";
import { BackgroundCurves } from "./CurvesLines.styles";
import CurvesLinesSvg from "./CurvesLinesSvg";

const CurvesLines: FC = () => {
  return (
    <BackgroundCurves>
      <CurvesLinesSvg />
    </BackgroundCurves>
  );
};

export default CurvesLines;
