import { useRef } from "react";
import { gsap } from "gsap";
import React from "react";

export const useRotatingRef = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const angleRef = React.useRef(0);

  const rotateBy = (angleDelta: number) => {
    angleRef.current += angleDelta;
    console.log("Rotating to", angleRef.current);
    if (ref.current) {
      gsap.to(ref.current, {
        rotation: angleRef.current,
        duration: 1,
        ease: "power2.out",
      });
    }
  };

  return { ref, rotateBy };
};
