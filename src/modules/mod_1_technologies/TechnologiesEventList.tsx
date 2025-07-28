import React, { useEffect, useRef, useState } from "react";
import { EventItem } from "../../shared/ui/eventItem";
import {
  Wrapper,
  ScrollButtonLeft,
  ScrollButtonRight,
  ItemsRow,
  ScrollContainer,
} from "./Technologiies.styles";

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
  const ref = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollWidth - el.scrollLeft > el.clientWidth + 1);
    };

    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    ref.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper>
      {canScrollLeft && (
        <ScrollButtonLeft onClick={() => scroll("left")}>←</ScrollButtonLeft>
      )}

      <ScrollContainer ref={ref}>
        <ItemsRow>
          {events.map((event, index) => (
            <EventItem
              key={index}
              data={event.data}
              description={event.description}
            />
          ))}
        </ItemsRow>
      </ScrollContainer>

      {canScrollRight && (
        <ScrollButtonRight onClick={() => scroll("right")}>→</ScrollButtonRight>
      )}
    </Wrapper>
  );
};
