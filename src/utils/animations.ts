import { RefObject } from "react";
import * as THREE from "three";

export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  rotationRef: RefObject<THREE.Group>,
  rotationState: RefObject<THREE.Group>,
  firstTarget: string,
  secondTarget: string,
  animationProps: gsap.TweenVars
) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState.current.rotation.y,
        duration: 1,
        ease: "power2.inOut",
    })

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: "power2.inOut",
        },
        "<"
    )
    
    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: "power2.inOut",
        },
        "<"
    )
};
