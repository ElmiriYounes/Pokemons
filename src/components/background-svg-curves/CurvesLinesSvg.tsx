import React, { FC } from "react";

const CurvesLinesSvg: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="250"
      preserveAspectRatio="none"
      viewBox="0 0 1440 250"
    >
      <g fill="none" mask='url("#SvgjsMask1006")'>
        <path
          fill="url(#SvgjsLinearGradient1007)"
          d="M26 250L276 0h70.5l-250 250zM248.6 250l250-250h135l-250 250zM495.2 250l250-250h114l-250 250zM729.8 250l250-250h243l-250 250z"
        ></path>
        <path
          fill="url(#SvgjsLinearGradient1008)"
          d="M1415 250L1165 0h-64.5l250 250zM1181.4 250L931.4 0H755.9l250 250zM943.8 250L693.8 0h-120l250 250zM695.2 250L445.2 0h-333l250 250z"
        ></path>
        <path
          fill="url(#SvgjsLinearGradient1007)"
          d="M1276.617 250L1440 86.617V250z"
        ></path>
        <path
          fill="url(#SvgjsLinearGradient1008)"
          d="M0 250h163.383L0 86.617z"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1006">
          <path fill="#fff" d="M0 0H1440V250H0z"></path>
        </mask>
        <linearGradient
          id="SvgjsLinearGradient1007"
          x1="0%"
          x2="100%"
          y1="100%"
          y2="0%"
        >
          <stop offset="0" stopColor="rgba(25, 118, 210, .1)"></stop>
          <stop
            offset="0.66"
            stopColor="rgba(25, 118, 210, 1)"
            stopOpacity="0"
          ></stop>
        </linearGradient>
        <linearGradient
          id="SvgjsLinearGradient1008"
          x1="100%"
          x2="0%"
          y1="100%"
          y2="0%"
        >
          <stop offset="0" stopColor="rgba(25, 118, 210, .1)"></stop>
          <stop
            offset="0.66"
            stopColor="rgba(25, 118, 210, 1)"
            stopOpacity="0"
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CurvesLinesSvg;
