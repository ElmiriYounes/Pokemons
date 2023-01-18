import React, { FC, useState } from "react";
import { variantButton } from "../../datas/variants";
import { IButton } from "../../interfaces/button.interface";
import { ButtonTemplate } from "./Button.styles";

const Button: FC<IButton> = (props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <ButtonTemplate
      variant={"contained"}
      sx={props.sx}
      variants={variantButton}
      animate={hovered ? "hover" : "exit"}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      // whileHover={"hover"}
    >
      {props.children}
    </ButtonTemplate>
  );
};

export default Button;
