import { ModuleDot } from "../ModuleDot/ModuleDot";
import { DotWrapper } from "./ModuleDot.styles";

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
  const dotsArray = Array.from({ length: dots });

  return (
    <DotWrapper>
      {dotsArray.map((_, i) => {
        const angle = (2 * Math.PI * i) / dots;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <ModuleDot
            key={i}
            index={i + 1}
            x={center + x}
            y={center + y}
            isActive={activeIndex === i + 1}
            onClick={setActiveIndex}
          />
        );
      })}
    </DotWrapper>
  );
};
