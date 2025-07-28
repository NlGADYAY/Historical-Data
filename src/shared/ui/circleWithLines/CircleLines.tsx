import { useEffect, useRef, useState } from "react";
import { CircleContainer, Circle, Dot } from "./CircleLines.styles";

export const CircleLines: React.FC = () => {
  const dots = 6

  const radius = 265;
  const center = 265;
  const dotsArray = Array.from({ length: dots });


  return (
    <CircleContainer>
      <Circle>
        {dotsArray.map((_, i) => {
          const angle = (2 * Math.PI * i) / dots;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);

          return (
            <Dot
              key={i}
              style={{
                left: `${x}px`,
                top: `${y}px`,
              }}
            />
          );
        })}
      </Circle>
    </CircleContainer>
  );
};
