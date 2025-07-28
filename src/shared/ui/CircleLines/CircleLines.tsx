import { CircleContainer, Circle, Dot } from "./CircleLines.styles";

type TCircleLines = {
  dots: number;
  radius: number;
  center: number;
};

export const CircleLines: React.FC<TCircleLines> = ({
  dots = 6,
  radius = 265,
  center = 265,
}) => {
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
