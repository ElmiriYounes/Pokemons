import { FC } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import { navItems } from "../../datas/navbar";
import { MaterialUISwitch } from "./Navbar.styles";
import { INavbar } from "../../interfaces/navbar.interfaces";
import { Link } from "react-router-dom";

const Drawer: FC<INavbar> = (props) => {
  const theme = useTheme();

  return (
    <Slide direction="left" in={props.mobileOpen} mountOnEnter unmountOnExit>
      <Box
        component="div"
        sx={{
          textAlign: "center",
          width: "80%",
          height: "100%",
          backgroundColor: theme.palette.mode === "dark" ? "#222222" : "white",
          color: "black",
          position: "absolute",
          right: "0",
          paddingTop: "64px",
        }}
      >
        <Divider />
        <List sx={{ "& a": { width: "100%" } }}>
          {navItems.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              onClick={props.handleToggle}
              alignItems="center"
            >
              <Link key={index} to={item.path}>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    color: "#1976D2",
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{
                      textAlign: "center",
                      color: "#1976D2",
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
          <ListItem
            alignItems="center"
            sx={{ margin: "0 auto", width: "min-content" }}
          >
            <ListItemIcon>
              <MaterialUISwitch
                onClick={props.toggleMode}
                checked={theme.palette.mode === "dark"}
              />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </Slide>
  );
};

export default Drawer;
