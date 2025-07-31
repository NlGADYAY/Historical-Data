import { useState, useEffect } from "react";
import { Dot, DotWrapper } from "./DotsLayer.styles";
import { useCircleRotation } from "./hooks/useCircleRotation";

type TDotsLayer = {
  dots?: number;
  radius?: number;
  center?: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export const DotsLayer: React.FC<TDotsLayer> = ({
  dots = 5,
  radius = 265,
  center = 265,
  activeIndex,
  setActiveIndex,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 320);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { rotateRef, currentRotate } = useCircleRotation({ dots, activeIndex, isMobile });

  const dotsArray = Array.from({ length: dots });

  return (
    <DotWrapper ref={rotateRef}>
      {dotsArray.map((_, i) => {
        const index = i + 1;
        const angle = (2 * Math.PI * i) / dots;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        const isActive = activeIndex === index;
        const isHovered = hoverIndex === index;

        const isHighlighted = !isMobile && (isActive || isHovered);

        return (
          <Dot
            key={index}
            isActive={isActive}  
            isHovered={isHovered}
            style={{ left: `${x}px`, top: `${y}px` }}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => !isMobile && setHoverIndex(index)}
            onMouseLeave={() => !isMobile && setHoverIndex(null)}
          >
            {isHighlighted && (
              <span style={{ display: "inline-block", transform: `rotate(${-currentRotate}deg)` }}>
                {index}
              </span>
            )}
          </Dot>
        );
      })}
    </DotWrapper>
  );
};

