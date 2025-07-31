import { useEffect, useRef } from "react";
import gsap from "gsap";

type TParams = {
  dots: number;
  activeIndex: number;
  isMobile: boolean;
  rotateZoneDeg?: number;
};

export const useCircleRotation = ({
  dots,
  activeIndex,
  isMobile,
  rotateZoneDeg = -60,
}: TParams) => {
  const rotateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile || !rotateRef.current) return;

    const anglePerDot = 360 / dots;
    const targetAngle = anglePerDot * (activeIndex - 1);
    const rotateTo = rotateZoneDeg - targetAngle;

    gsap.to(rotateRef.current, {
      rotate: rotateTo,
      duration: 0.8,
      ease: "power2.out",
    });
  }, [activeIndex, isMobile, dots, rotateZoneDeg]);

  return rotateRef;
};
