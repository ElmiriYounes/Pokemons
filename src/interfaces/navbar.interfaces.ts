export interface IHamburger {
  mobileopen: string;
}

export interface INavMediaQuery {
  xs?: string;
  sm?: string;
}

export interface INavItems {
  label: string;
  path: string;
}

export interface INavbar {
  toggleMode?: () => void;
  mobileOpen?: boolean;
  handleToggle?: () => void;
}
