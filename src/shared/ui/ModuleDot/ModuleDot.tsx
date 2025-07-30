import React from "react";
import { Dot } from "./ModuleDot.styles";

type ModuleDotProps = {
  x: number;
  y: number;
  index: number;
  isActive?: boolean;
  onClick?: (index: number) => void;
};

export const ModuleDot: React.FC<ModuleDotProps> = ({
  x,
  y,
  index,
  isActive,
  onClick,
}) => {
  return (
    <Dot
      style={{ left: `${x}px`, top: `${y}px` }}
      isActive={isActive}
      onClick={() => onClick?.(index)}
    >
      {isActive && index}
    </Dot>
  );
};
