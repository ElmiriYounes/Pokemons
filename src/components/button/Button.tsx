import React, { FC, useState } from "react";
import { variantBounce } from "../../framer-motion/variants";
import { IButton } from "../../interfaces/button.interface";
import { ButtonTemplate } from "./Button.styles";

const Button: FC<IButton> = (props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const handleToggle = (): void => {
    setHovered((h) => !h);
  };

  return (
    <ButtonTemplate
      variant={"contained"}
      sx={props.sx}
      variants={variantBounce}
      animate={hovered ? "hover" : "exit"}
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
      onClick={() => {
        props.setOpenModal && props.setOpenModal(true);
        props.setPokemon && props.setPokemon(props.pokemon);
      }}
    >
      {props.children}
    </ButtonTemplate>
  );
};

export default Button;
