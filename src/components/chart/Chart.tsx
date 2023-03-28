import React, { FC, useRef, useState, useEffect } from "react";
import { typesPokemon } from "src/datas/pokemons";
import { IChart } from "src/interfaces/chart.interface";
import {
  ChartWrapper,
  CounterType,
  IconType,
  LabelType,
  LegendWrap,
  PieChart,
  TotalPerType,
  TotalPokemons,
  TotalType,
} from "./Chart.style";
import * as echarts from "echarts";
import { Theme, Typography, useTheme, useMediaQuery } from "@mui/material";
import CountUp from "react-countup";
import { ITypePokemon } from "src/interfaces/pokemon.interface";
import { xsMediaQuery } from "src/responsive/responsive";
import { getByDefault } from "src/pages/pokemons/PokemonsPage";

const Chart: FC<IChart> = (props) => {
  const theme: Theme = useTheme();

  const xs: boolean = useMediaQuery(xsMediaQuery);

  const myChartRef = useRef<HTMLDivElement>(null);

  const [initialized, setInitialized] = useState<boolean>(false);

  const [chart, setChart] = useState<any>(null);

  // Number of pokemon by type
  const getPokemonsByType = (type: string): number => {
    return props.pokemons!.filter((pokemon: any) => {
      return pokemon.types[0].toLowerCase() === type;
    }).length;
  };

  const getData = (): any[] => {
    let data: any[] = [];

    let uniquesType: string[] = [];

    getByDefault(props.pokemons).forEach((pokemon: any) =>
      uniquesType.push(pokemon.types[0].toLowerCase())
    );

    uniquesType = Array.from(new Set(uniquesType));

    uniquesType.forEach((typePokemon: string) => {
      let numberOfPokemon: number = getPokemonsByType(typePokemon);

      data.push({
        name: typePokemon,
        value: numberOfPokemon,
        label: {
          color: (typesPokemon as any)[typePokemon].color[
            theme.palette.mode === "dark" ? "dark" : "light"
          ],
        },
        itemStyle: {
          color: (typesPokemon as any)[typePokemon].color[
            theme.palette.mode === "dark" ? "dark" : "light"
          ],
        },
      });
    });

    return data;
  };

  const option: any = {
    title: {
      // subtext: "by types",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
    },
    series: [
      {
        name: "pokemons by types",
        type: "pie",
        radius: "50%",
        data: getData(),
        label: {
          show: true,
          position: "outside",
          formatter: "{b|{b}}",
          rich: {
            b: {
              fontSize: window.innerWidth > 300 ? 14 : 8,
              fontWeight: "bold",
              lineHeight: 28,
              padding: [0, 0, 6, 0],
            },
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const handleResize = () => {
    chart.resize();

    chart.setOption({
      series: [
        {
          label: {
            rich: {
              b: {
                fontSize: window.innerWidth > 300 ? 14 : 8,
                fontWeight: "bold",
                lineHeight: 28,
                padding: [0, 0, 6, 0],
              },
            },
          },
        },
      ],
    });
  };

  useEffect(() => {
    chart !== null && window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [chart]);

  useEffect(() => {
    chart !== null && chart.setOption(option);
  }, [props.searched]);

  useEffect(() => {
    if (props.pokemons && !initialized) {
      setInitialized(true);

      // Initialize the echarts instance based on the prepared dom
      var myChart: echarts.ECharts = echarts.init(myChartRef.current!);

      // Specify the configuration items and data for the chart

      // Display the chart using the configuration items and data just specified.
      myChart.setOption(option);
      setChart(myChart);
    }
  }, [props.pokemons]);

  return (
    <ChartWrapper>
      <TotalPokemons item xs={12}>
        <Typography variant="h5">
          <CountUp
            // start={props.progress}
            end={props.pokemons!.length}
            duration={1}
            useEasing={true}
          />
        </Typography>
        <Typography marginLeft={"10px"} variant="h5">
          Pokemon{props.pokemons.length > 1 && "s"}
        </Typography>
      </TotalPokemons>

      <PieChart
        ref={myChartRef}
        sx={{
          boxShadow: {
            xs: "unset",
            sm: `0px 0px 7px ${
              theme.palette.mode === "dark"
                ? "rgb(255,255,255,0.5)"
                : "rgb(0,0,0,0.5)"
            }`,
          },
        }}
      ></PieChart>

      <LegendWrap>
        <TotalPerType>
          {Object.values(typesPokemon).map(
            (type: ITypePokemon, index: number) => (
              <TotalType key={index}>
                <IconType
                  sx={{
                    color:
                      type.color[
                        theme.palette.mode === "dark" ? "dark" : "light"
                      ],
                    opacity:
                      props.pokemons!.filter(
                        (pokemon: any) => pokemon.types[0] === type.label
                      ).length > 0
                        ? 1
                        : 0.1,
                    fontSize: xs ? "10px" : "18px",
                  }}
                >
                  {type.icon}
                </IconType>
                <LabelType
                  sx={{
                    color:
                      type.color[
                        theme.palette.mode === "dark" ? "dark" : "light"
                      ],
                    opacity:
                      props.pokemons!.filter(
                        (pokemon: any) => pokemon.types[0] === type.label
                      ).length > 0
                        ? 1
                        : 0.1,
                    fontSize: xs ? "10px" : "13px",
                  }}
                >
                  {type.label}
                </LabelType>
                <CounterType
                  sx={{
                    color:
                      type.color[
                        theme.palette.mode === "dark" ? "dark" : "light"
                      ],
                    opacity:
                      props.pokemons!.filter(
                        (pokemon: any) => pokemon.types[0] === type.label
                      ).length > 0
                        ? 1
                        : 0.1,
                    fontSize: xs ? "10px" : "13px",
                  }}
                >
                  <CountUp
                    // start={props.progress}
                    end={
                      props.pokemons!.filter(
                        (pokemon: any) => pokemon.types[0] === type.label
                      ).length
                    }
                    duration={1}
                    useEasing={true}
                  />
                </CounterType>
              </TotalType>
            )
          )}
        </TotalPerType>
      </LegendWrap>
    </ChartWrapper>
  );
};

export default Chart;
