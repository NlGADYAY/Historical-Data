import { useEffect, useRef, useState } from "react";
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
  const [currentRotate, setCurrentRotate] = useState(0);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (isMobile || screenWidth <= 400 || !rotateRef.current) {
      gsap.set(rotateRef.current, { rotate: 0 }); 
      setCurrentRotate(0);
      return;
    }

    const anglePerDot = 360 / dots;
    const targetAngle = anglePerDot * (activeIndex - 1);
    const rotateTo = rotateZoneDeg - targetAngle;

    gsap.to(rotateRef.current, {
      rotate: rotateTo,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: () => {
        setCurrentRotate(rotateTo);
      },
    });

    setCurrentRotate(rotateTo);
  }, [activeIndex, isMobile, dots, rotateZoneDeg]);

  return { rotateRef, currentRotate };
};
