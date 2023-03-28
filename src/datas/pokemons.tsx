import {
  GiPlantSeed,
  GiPoisonBottle,
  GiFire,
  GiLibertyWing,
  GiWaterDrop,
  GiLongAntennaeBug,
  GiCircle,
  GiElectric,
  GiFairyWings,
  GiBoxingGloveSurprise,
  GiSnakeSpiral,
  GiStoneWall,
  GiHexagonalNut,
  GiSnowflake1,
  GiGhost,
  GiSeaDragon,
  GiMidnightClaw,
} from "react-icons/gi";
import { ITypesPokemon } from "src/interfaces/pokemon.interface";
import { TbPerspective } from "react-icons/tb";
import grass from "../assets/images/svg/pokemons-types/grass.svg";
import fire from "../assets/images/svg/pokemons-types/fire.svg";
import water from "../assets/images/svg/pokemons-types/water.svg";
import grassTwo from "../assets/images/svg/pokemons-types/grass_two.svg";
import poison from "../assets/images/svg/pokemons-types/poison.svg";
import fly from "../assets/images/svg/pokemons-types/fly.svg";
import electric from "../assets/images/svg/pokemons-types/electric.svg";
import ground from "../assets/images/svg/pokemons-types/ground.svg";
import fair from "../assets/images/svg/pokemons-types/fair.svg";
import fight from "../assets/images/svg/pokemons-types/fight.svg";
import psy from "../assets/images/svg/pokemons-types/psy.svg";
import rock from "../assets/images/svg/pokemons-types/rock.svg";
import steel from "../assets/images/svg/pokemons-types/steel.svg";
import ice from "../assets/images/svg/pokemons-types/ice.svg";
import ghost from "../assets/images/svg/pokemons-types/ghost.svg";
import dragon from "../assets/images/svg/pokemons-types/dragon.svg";
import dark from "../assets/images/svg/pokemons-types/dark.svg";
import normal from "../assets/images/svg/pokemons-types/normal.svg";

export const typesPokemon: ITypesPokemon = {
  grass: {
    label: "Grass",
    icon: <GiPlantSeed />,
    backgroundGradient: `radial-gradient(circle, rgba(64,179,82,1) 80%, rgba(45,128,58,1) 100%)`,
    backgroundIcon: grass,
    color: { dark: "rgba(64,179,82,1)", light: "#2c7e39" },
  },
  poison: {
    label: "Poison",
    icon: <GiPoisonBottle />,
    backgroundGradient: `radial-gradient(circle, rgba(171,107,200,1) 80%, rgba(119,73,140,1) 100%)`,
    backgroundIcon: poison,
    color: { dark: "rgba(171,107,200,1)", light: "#85549c" },
  },
  fire: {
    label: "Fire",
    icon: <GiFire />,
    backgroundGradient: `radial-gradient(circle, rgba(255,158,84,1) 80%, rgba(167,108,62,1) 100%)`,
    backgroundIcon: fire,
    color: { dark: "rgba(255,158,84,1)", light: "#d6874a" },
  },
  flying: {
    label: "Flying",
    icon: <GiLibertyWing />,
    backgroundGradient: `radial-gradient(circle, rgba(144,171,223,1) 80%, rgba(99,116,149,1) 100%)`,
    backgroundIcon: fly,
    color: { dark: "rgba(144,171,223,1)", light: "#667ba1" },
  },
  water: {
    label: "Water",
    icon: <GiWaterDrop />,
    backgroundGradient: `radial-gradient(circle, rgba(79,145,215,1) 80%, rgba(57,95,135,1) 100%)`,
    backgroundIcon: water,
    color: { dark: "rgba(79,145,215,1)", light: "#3c6da3" },
  },
  bug: {
    label: "Bug",
    icon: <GiLongAntennaeBug />,
    backgroundGradient: `radial-gradient(circle, rgba(146,194,43,1) 80%, rgba(100,133,32,1) 100%)`,
    backgroundIcon: grassTwo,
    color: { dark: "rgba(146,194,43,1)", light: "#6c8f21" },
  },
  normal: {
    label: "Normal",
    icon: <GiCircle />,
    backgroundGradient: ` radial-gradient(circle, rgba(146,155,163,1) 80%, rgba(96,102,107,1) 100%)`,
    backgroundIcon: normal,
    color: { dark: "rgba(146,155,163,1)", light: "#656b71" },
  },
  electric: {
    label: "Electric",
    icon: <GiElectric />,
    backgroundGradient: `radial-gradient(circle, rgba(244,211,57,1) 80%, rgba(182,158,44,1) 100%)`,
    backgroundIcon: electric,
    color: { dark: "rgba(244,211,57,1)", light: "#c4a92e" },
  },
  ground: {
    label: "Ground",
    icon: <TbPerspective />,
    backgroundGradient: `radial-gradient(circle, rgba(218,121,67,1) 80%, rgba(172,96,54,1) 100%)`,
    backgroundIcon: ground,
    color: { dark: "rgba(218,121,67,1)", light: "#b56337" },
  },
  fairy: {
    label: "Fairy",
    icon: <GiFairyWings />,
    backgroundGradient: `radial-gradient(circle, rgba(237,144,231,1) 80%, rgba(187,118,183,1) 100%)`,
    backgroundIcon: fair,
    color: { dark: "rgba(237,144,231,1)", light: "#b46daf" },
  },
  fighting: {
    label: "Fighting",
    icon: <GiBoxingGloveSurprise />,
    backgroundGradient: `radial-gradient(circle, rgba(207,63,107,1) 80%, rgba(158,50,83,1) 100%)`,
    backgroundIcon: fight,
    color: { dark: "rgba(207,63,107,1)", light: "#a43254" },
  },
  psychic: {
    label: "Psychic",
    icon: <GiSnakeSpiral />,
    backgroundGradient: `radial-gradient(circle, rgba(250,114,122,1) 80%, rgba(204,92,99,1) 100%)`,
    backgroundIcon: psy,
    color: { dark: "rgba(250,114,122,1)", light: "#fd5964" },
  },
  rock: {
    label: "Rock",
    icon: <GiStoneWall />,
    backgroundGradient: `radial-gradient(circle, rgba(198,184,141,1) 80%, rgba(145,135,104,1) 100%)`,
    backgroundIcon: rock,
    color: { dark: "rgba(198,184,141,1)", light: "#988d6c" },
  },
  steel: {
    label: "Steel",
    icon: <GiHexagonalNut />,
    backgroundGradient: `radial-gradient(circle, rgba(90,143,163,1) 80%, rgba(65,102,116,1) 100%)`,
    backgroundIcon: steel,
    color: { dark: "rgba(90,143,163,1)", light: "#426978" },
  },
  ice: {
    label: "Ice",
    icon: <GiSnowflake1 />,
    backgroundGradient: `radial-gradient(circle, rgba(116,207,193,1) 80%, rgba(86,157,146,1) 100%)`,
    backgroundIcon: ice,
    color: { dark: "rgba(116,207,193,1)", light: "#56988f" },
  },
  ghost: {
    label: "Ghost",
    icon: <GiGhost />,
    backgroundGradient: `radial-gradient(circle, rgba(81,105,174,1) 80%, rgba(63,79,126,1) 100%)`,
    backgroundIcon: ghost,
    color: { dark: "rgba(81,105,174,1)", light: "#42548b" },
  },
  dragon: {
    label: "Dragon",
    icon: <GiSeaDragon />,
    backgroundGradient: `radial-gradient(circle, rgba(3,109,196,1) 80%, rgba(4,81,144,1) 100%)`,
    backgroundIcon: dragon,
    color: { dark: "rgba(3,109,196,1)", light: "#00579e" },
  },
  dark: {
    label: "Dark",
    icon: <GiMidnightClaw />,
    backgroundGradient: `radial-gradient(circle, rgba(90,83,101,1) 80%, rgba(62,57,69,1) 100%)`,
    backgroundIcon: dark,
    color: { dark: "rgba(90,83,101,1)", light: "#4c4756" },
  },
};
