import React, { useRef } from "react";
import skyScene from "../assets_3d_portfolio/assets/3d/sky.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.5 * delta;
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
