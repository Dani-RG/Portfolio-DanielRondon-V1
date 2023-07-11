import React from "react";
import { Canvas } from "@react-three/fiber";
import Blob from "./Blob";

const ThreeScene = () => {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
      <Blob />
    </Canvas>
  )
};

export default ThreeScene;
