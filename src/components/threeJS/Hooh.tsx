import React, { FC, Suspense } from "react";
import { OrbitControls, Plane } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Hooh3D } from "./Hooh3D";
import { Scene3D } from "./Hooh.styles";
import { useMediaQuery } from "@mui/material";
import { lgMediaQuery } from "../../responsive/responsive";

const Hooh: FC = () => {
  const lg: boolean = useMediaQuery(lgMediaQuery);

  return (
    <Scene3D zIndex={lg ? 0 : -1}>
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
        <OrbitControls
          enableZoom={lg ? true : false}
          enableRotate={lg ? true : false}
        />
      </Canvas>
    </Scene3D>
  );
};

export default Hooh;
