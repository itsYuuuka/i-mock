import { Group } from "three";
import { RefObject, Dispatch, SetStateAction, Suspense } from "react";
import { PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import Model from "./iPhone";
import { Html } from "@react-three/drei";

interface ModelViewProps {
  index: number;
  groupRef: RefObject<Group>;
  gsapType: string;
  controlRef: RefObject<unknown>;
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
      className={`border-2 border-red-500 w-full h-full
        ${index === 2} ? 'right-[-100%] : '' `}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <Suspense
  fallback={
    <Html>
      <div>Loading...</div>
    </Html>
  }
>
  <Model />
</Suspense>
    </View>
  );
};

export default ModelView;
