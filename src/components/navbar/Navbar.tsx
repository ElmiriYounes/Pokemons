import { useState, FC } from "react";
import { Fade, useTheme, useMediaQuery } from "@mui/material";
import { Divide as HamburgerIcon } from "hamburger-react";
import { navItems } from "../../datas/navbar";
import {
  DrawerWrap,
  Hamburger,
  Item,
  Logo,
  MaterialUISwitch,
  Nav,
  OnDesktop,
  OnMobile,
  Papper,
} from "./Navbar.styles";
import logo from "../../assets/images/logo_pokemon.png";
import { INavbar } from "../../interfaces/navbar.interfaces";
import Drawer from "./Drawer";
import { smMediaQuery, xsMediaQuery } from "../../responsive/responsive";
import { Theme } from "@mui/system";

const Navbar: FC<INavbar> = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme: Theme = useTheme();
  const xs: boolean = useMediaQuery(xsMediaQuery);
  const sm: boolean = useMediaQuery(smMediaQuery);

  const handleToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Nav xs={String(xs)}>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>

      {/* On desktop */}
      <OnDesktop xs={String(xs)}>
        {navItems.map((item, index) => (
          <Item key={index}>{item.label}</Item>
        ))}
        <MaterialUISwitch
          onClick={props.toggleMode}
          checked={theme.palette.mode === "dark"}
        />
      </OnDesktop>

      {/* On mobile */}
      <OnMobile sm={String(sm)}>
        <Hamburger
          mobileopen={String(mobileOpen)}
          onClick={handleToggle}
          aria-label="open drawer"
        >
          <HamburgerIcon toggled={mobileOpen} />
        </Hamburger>

        <Fade in={mobileOpen} timeout={{ exit: 1000 }}>
          <DrawerWrap xs={String(xs)}>
            <Drawer
              toggleMode={props.toggleMode}
              mobileOpen={mobileOpen}
              handleToggle={handleToggle}
            />
            {mobileOpen && <Papper onClick={handleToggle} />}
          </DrawerWrap>
        </Fade>
      </OnMobile>
    </Nav>
  );
};

export default Navbar;
