import { useState, useMemo } from "react";
import { Main, MainContainer, FooterContainer } from "./Modules.styles";
import { Kino } from "../entites/kino/ui/KinoTimeline";
import { Sport } from "../entites/sport/ui/SportTimeline";
import { Technologies } from "../entites/technologies/ui/TechnologiesTimeline";
import { SliderEvent } from "../feature/SliderEvent";
import { CircleLines } from "../shared/ui/CircleLines";
import { Literature } from "../entites/literature/ui/LiterstureTimeline/Literature";
import { Science } from "../entites/science/ui/ScienceTimeline/Science";
import { KinoEventList } from "../feature/kino/ui/KinoEventList";
import { LiteratireEventList } from "../feature/literature/ui/LiterstireEventList";
import { ScienceEventList } from "../feature/science/ui/ScinceEventList";
import { SportEventList } from "../feature/sport/ui/SportEventList";
import { TechnologiesEventList } from "../feature/techonologies/ui/TechnologiesEventList";
import { DotsLayer } from "../shared/ui/ModuleDot";

const SLIDER_MAP = {
  1: TechnologiesEventList,
  2: SportEventList,
  3: KinoEventList,
  4: ScienceEventList,
  5: LiteratireEventList
} as const;

const TIME_LINE_MAP: Record<number, React.ReactNode> = {
  1: <Technologies />,
  2: <Sport />,
  3: <Kino />,
  4: <Science />,
  5: <Literature />
} as const;

export const HistoryDatties: React.FC = () => {
  const total = Object.keys(SLIDER_MAP).length;
  const [activeIndex, setActiveIndex] = useState(1);

  const sliders = useMemo(() => {
    return Object.entries(SLIDER_MAP).map(([index, Component]) => ({
      index: Number(index),
      element: <Component key={index} />,
    }));
  }, []);

  return (
    <Main>
      <DotsLayer
        dots={5}
        radius={265}
        center={265}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex} />
      <CircleLines />
      <MainContainer>
        {TIME_LINE_MAP[activeIndex]}
      </MainContainer>
      <FooterContainer>
        <SliderEvent
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          total={total}
          sliders={sliders}
        />
      </FooterContainer>
    </Main>
  );
};