import { ArrowLeftGray } from "@shared/icons/ArrowLeftGray/ArrowLeftGray";
import { ArrowRightGray } from "@shared/icons/ArrowRightGray/ArrowRightGray";
import {
  SliderConteiner,
  SliderNavigate,
  Counter,
  SliderCounter,
  NavButton,
} from "./SliderEvent.styles";

const formatNumber = (num: number, total: number) =>
  num.toString().padStart(total >= 10 ? 2 : 1, "0");

type TSliderEvent = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  total: number;
  sliders: { index: number; element: React.ReactNode }[];
};

export const SliderEvent: React.FC<TSliderEvent> = ({
  activeIndex,
  setActiveIndex,
  total,
  sliders,
}) => {
  const currentSlider = sliders.find((s) => s.index === activeIndex);

  const handlePrev = () => {
    if (activeIndex > 1) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < total) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <SliderConteiner>
      <SliderNavigate>
        <Counter>
          {formatNumber(activeIndex, total)} / {formatNumber(total, total)}
        </Counter>
        <SliderCounter>
          <NavButton onClick={handlePrev} disabled={activeIndex === 1}>
            <ArrowRightGray color="#42567A" />
          </NavButton>
          <NavButton onClick={handleNext} disabled={activeIndex === total}>
            <ArrowLeftGray />
          </NavButton>
        </SliderCounter>
      </SliderNavigate>
      {currentSlider && <div>{currentSlider.element}</div>}
    </SliderConteiner>
  );
};
