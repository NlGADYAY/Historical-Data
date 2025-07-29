import { useState, useMemo } from "react";
import { Main, MainContainer, FooterContainer } from "./Modules.styles";
import { Kino } from "../entites/kino/ui/KinoTimeline";
import { Sport } from "../entites/sport/ui/SportTimeline";
import { Technologies } from "../entites/technologies/ui/TechnologiesTimeline";
import { CircularTimeline } from "../feature/CircularTimeline";
import { KinoEventList } from "../feature/kino/ui/KinoEventList";
import { SliderEvent } from "../feature/SliderEvent";
import { SportEventList } from "../feature/sport/ui/SportEventList";
import { TechnologiesEventList } from "../feature/techonologies/ui/TechnologiesEventList";
import { CircleLines } from "../shared/ui/CircleLines";
import { ScienceEventList } from "../feature/science/ui/ScinceEventList";
import { LiteratireEventList } from "../feature/literature/ui/LiterstireEventList";
import { Literature } from "../entites/literature/ui/LiterstureTimeline/Literature";
import { Science } from "../entites/science/ui/ScienceTimeline/Science";

const AllSliders = {
  1: TechnologiesEventList,
  2: SportEventList,
  3: KinoEventList,
  4: ScienceEventList,
  5: LiteratireEventList
};

const AllTimeline: Record<number, React.FC> = {
  1: Technologies,
  2: Sport,
  3: Kino,
  4: Science,
  5: Literature
};

export const HistoryDatties: React.FC = () => {
  const total = Object.keys(AllSliders).length;
  const [activeIndex, setActiveIndex] = useState(1);

  const sliders = useMemo(() => {
    return Object.entries(AllSliders).map(([index, Component]) => ({
      index: Number(index),
      element: <Component key={index} />,
    }));
  }, []);

  return (
    <Main>
      <CircleLines dots={6} radius={265} center={265} />
      <MainContainer>
        <CircularTimeline
          activeIndex={activeIndex}
          Component={AllTimeline[activeIndex]}
        />
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
