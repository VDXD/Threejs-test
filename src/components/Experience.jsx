import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";

export const Experience = ({ animation }) => {
  // const { animation } = useControls({
  //   animation: {
  //     value: "Typing",
  //     options: ["Typing", "Falling", "Standing"],
  //   },
  // });
  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />

      <group position-y={-1}>
        {/* <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        /> */}
        <Avatar animation={animation} position={[0, 0.3, 0]} />

        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} />

        {/* <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh> */}
      </group>
    </>
  );
};
