import React, { useRef } from "react";
import { EventItem } from "../../shared/ui/eventItem";
import styled from "styled-components";

export const ScrollWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 10px;
  width: 1000px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollItem = styled.div`
  flex: 0 0 auto;
  min-width: 150px;
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScrollButton = styled.button`
  padding: 8px 12px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  background-color: #333;
  color: white;
  border: none;

  &:hover {
    background-color: #555;
  }
`;

const events = [
  {
    data: 2015,
    description:
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
  },
  {
    data: 2016,
    description:
      "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
  },
  {
    data: 2017,
    description:
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
  },
  {
    data: 2018,
    description:
      "SpaceX запустила первую миссию с повторным использованием всех ступеней ракеты Falcon 9",
  },
    {
    data: 2018,
    description:
      "SpaceX запустила первую миссию с повторным использованием всех ступеней ракеты Falcon 9",
  },
    {
    data: 2018,
    description:
      "SpaceX запустила первую миссию с повторным использованием всех ступеней ракеты Falcon 9",
  },
    {
    data: 2018,
    description:
      "SpaceX запустила первую миссию с повторным использованием всех ступеней ракеты Falcon 9",
  },
      {
    data: 2018,
    description:
      "SpaceX запустила первую миссию с повторным использованием всех ступеней ракеты Falcon 9",
  },
      {
    data: 2018,
    description:
      "SpaceX запустила первую миссию с повторным использованием всех ступеней ракеты Falcon 9",
  },
      {
    data: 2018,
    description:
      "SpaceX запустила первую миссию с повторным использованием всех ступеней ракеты Falcon 9",
  },
  
];

export const TechnologiesEventList: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const offset = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -offset : offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollWrapper>
      <ScrollButton onClick={() => scroll("left")}>←</ScrollButton>

      <ScrollContainer ref={scrollRef}>
        {events.map((event, index) => (
          <EventItem
            key={index}
            data={event.data}
            description={event.description}
          />
        ))}
      </ScrollContainer>

      <ScrollButton onClick={() => scroll("right")}>→</ScrollButton>
    </ScrollWrapper>
  );
};
