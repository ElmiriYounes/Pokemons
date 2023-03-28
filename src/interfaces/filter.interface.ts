export interface IFilter {
  pokemons?: any[];
  setPokemons?: (pokemons: any[]) => void;
  filter?: string;
  setFilter?: (filter: string) => void;
}
