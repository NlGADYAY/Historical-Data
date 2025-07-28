import { useState } from "react";
import { CircleContainer, Circle } from "./CircleLines.styles";


export const CircleLines: React.FC = () => {
  const [dots, setDots] = useState(2)

  

  return (
    <CircleContainer>
      <Circle />
    </CircleContainer>
  )
}