import { useState, useMemo } from "react";
import { KinoEventList } from "../../entites/kino/KinoEventList";
import { SportEventList } from "../../entites/sport/SporteventList";
import { TechnologiesEventList } from "../../entites/technologies/TechnologiesEventList";
import { Selector, SliderCounter } from "./SliderEvent.styles";

const AllSliders = {
  1: TechnologiesEventList,
  2: SportEventList,
  3: KinoEventList,
};



const formatNumber = (num: number, total: number) =>
  num.toString().padStart(total >= 10 ? 2 : 1, "0");

export const SliderEvent: React.FC = () => {
  const total = Object.keys(AllSliders).length;
  const [activeIndex, setActiveIndex] = useState(1); // Индексация с 1

  const sliders = useMemo(() => {
    return Object.entries(AllSliders).map(([index, Component]) => ({
      index: Number(index),
      element: <Component key={index} />,
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveIndex(Number(e.target.value));
  };

  return (
    <div>
      <SliderCounter>
        <Selector value={activeIndex} onChange={handleChange}>
          {Array.from({ length: total }).map((_, i) => {
            const value = i + 1;
            return (
              <option key={value} value={value}>
                {formatNumber(value, total)}
              </option>
            );
          })}
        </Selector>
        /{formatNumber(total, total)}
      </SliderCounter>

      {sliders.map(({ index, element }) =>
        index === activeIndex ? (
          <div key={index}>{element}</div>
        ) : null
      )}
    </div>
  );
};
