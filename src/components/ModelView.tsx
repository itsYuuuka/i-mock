import { Group } from "three";
import { RefObject, Dispatch, SetStateAction, Suspense } from "react";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import Lights from "./Lights";
import Model from "./iPhone";
import * as THREE from "three";
import Loader from "./Loader";

interface ModelViewProps {
  index: number;
  groupRef: RefObject<Group>;
  gsapType: string;
  controlRef: RefObject<OrbitControlsImpl | null>;
  setRotationState: Dispatch<SetStateAction<number>>;
  item: {
    title: string;
    color: string[];
    img: string;
  };
  size: string;
}

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}: ModelViewProps) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => {
          if (controlRef.current) {
            setRotationState(controlRef.current.getAzimuthalAngle());
          }
        }}
        />

      <group ref={groupRef} 
      name={`${index === 1 ? "small" : "large"}`} 
      position={[0, 0, 0]}>
        <Suspense
          fallback={
            <Loader />
          }
        >
          <Model 
            scale={index === 1 ? [15, 15, 15] as [number, number, number] : [17, 17, 17] as [number, number, number]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
