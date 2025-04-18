import { Group } from "three";
import { RefObject, Dispatch, SetStateAction } from "react";

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
    <div>
      
    </div>
  );
};

export default ModelView;