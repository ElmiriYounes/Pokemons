import { Box } from "@mui/material";
import { styled } from "@mui/system";

interface IScene3D {
  zIndex?: number;
}

export const Scene3D = styled(Box)<IScene3D>((props) => ({ theme }) => ({
  width: "100%",
  maxWidth: "700px",
  height: "500px",
  margin: "0 auto",
  position: "relative",
  cursor: "grab",
  zIndex: props.zIndex,
  transition: "all .3s",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgb(0,0,0, 0.04)"
        : "rgb(255,255,255, 0.04)",
  },
}));
