import { useEffect, useRef, useState } from "react";
import { Dot, DotWrapper } from "./DotsLayer.styles";
import gsap from "gsap";

type TDotsLayer = {
  dots?: number;
  radius?: number;
  center?: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const ACTIVE_ZONE_DEG = -60;

export const DotsLayer: React.FC<TDotsLayer> = ({
  dots = 5,
  radius = 265,
  center = 265,
  activeIndex,
  setActiveIndex,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const rotateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 320);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rotateToActive = (index: number) => {
    if (isMobile || !rotateRef.current) return;

    const anglePerDot = 360 / dots;
    const targetAngle = anglePerDot * (index - 1);
    const rotateTo = ACTIVE_ZONE_DEG - targetAngle;

    gsap.to(rotateRef.current, {
      rotate: rotateTo,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const handleClick = (index: number) => {
    rotateToActive(index);
    setActiveIndex(index);
  };

  const dotsArray = Array.from({ length: dots });

  useEffect(() => {
    rotateToActive(activeIndex);
  }, [activeIndex, isMobile]);

  return isMobile ? (
    <DotWrapper>
      {dotsArray.map((_, i) => (
        <Dot
          key={i}
          isActive={activeIndex === i + 1}
          onClick={() => handleClick(i + 1)}
        >
          {activeIndex === i + 1 && <span>{i + 1}</span>}
        </Dot>
      ))}
    </DotWrapper>
  ) : (
      <DotWrapper ref={rotateRef}>
        {dotsArray.map((_, i) => {
          const angle = (2 * Math.PI * i) / dots;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);

          return (
            <Dot
              key={i}
              isActive={activeIndex === i + 1}
              style={{ left: `${x}px`, top: `${y}px` }}
              onClick={() => handleClick(i + 1)}
            >
              {activeIndex === i + 1 && <span>{i + 1}</span>}
            </Dot>
          );
        })}
      </DotWrapper>
  );
};
