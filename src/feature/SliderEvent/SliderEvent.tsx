import { Selector, SliderCounter } from "./SliderEvent.styles";

const formatNumber = (num: number, total: number) =>
  num.toString().padStart(total >= 10 ? 2 : 1, "0");

type TSliderEvent = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  total: number;
  sliders: { index: number; element: React.ReactNode }[];
}

export const SliderEvent: React.FC<TSliderEvent> = ({
  activeIndex,
  setActiveIndex,
  total,
  sliders,
}) => {
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
        index === activeIndex ? <div key={index}>{element}</div> : null
      )}
    </div>
  );
};
