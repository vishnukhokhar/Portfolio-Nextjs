import React, { useEffect, useRef } from "react";
import planeScene from "../assets_3d_portfolio/assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
const Plane = ({ isRotating, ...props }) => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, birdRef);
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
