import React, { FC, Suspense, useRef, useEffect } from "react";
import { OrbitControls, Plane } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Hooh3D } from "./threeJS/Hooh3D";
import {
  Dragging3D,
  IconRightArrow,
  IconPointer,
  Icons,
  Scene3D,
  TextRotate,
  IconLeftArrow,
} from "./Hooh.styles";
import { useMediaQuery } from "@mui/material";
import { lgMediaQuery, smMediaQuery } from "../../responsive/responsive";
import { variantRotateMe } from "../../framer-motion/variants";

const Hooh: FC = () => {
  const lg: boolean = useMediaQuery(lgMediaQuery);
  const sm: boolean = useMediaQuery(smMediaQuery);

  return (
    <Scene3D
      zIndex={lg ? 0 : -1}
      lg={String(lg)}
      sm={String(sm)}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <Canvas
        style={{ width: "100%" }}
        camera={{ position: [0, 0, 10], fov: 90 }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 0]} intensity={1.5} />
        <Suspense fallback={null}>
          <Hooh3D />
        </Suspense>
        <OrbitControls enableZoom={false} enableRotate={lg ? true : false} />
      </Canvas>
      {lg && (
        <Dragging3D variants={variantRotateMe} animate={"scaling"}>
          <Icons>
            <IconRightArrow />
            <IconPointer />
            <IconLeftArrow />
          </Icons>
          <TextRotate>rotate me</TextRotate>
        </Dragging3D>
      )}
    </Scene3D>
  );
};

export default Hooh;
