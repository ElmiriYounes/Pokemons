export interface IModal {
  opened: boolean;
  setOpenModal: (open: boolean) => void;
  pokemon: any;
  setPokemon: (pokemon: any) => void;
}
