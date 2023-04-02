import { INavItems } from "../interfaces/navbar.interfaces";

export const pathname: string = "/";

export const navItems: INavItems[] = [
  {
    label: "Home",
    path: `${pathname}`,
  },
  {
    label: "Pokemons",
    path: `${pathname}pokemons`,
  },
];
