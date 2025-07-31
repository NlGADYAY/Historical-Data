import { CircleLines } from "@shared/ui/CircleLines";
import { DotsLayer } from "feature/ModuleDot";
import { Periods } from "@shared/ui/Periods";
import { TitleHistoricalData } from "@shared/ui/TitleHistoricalData";
import { KinoEventList } from "feature/kino/ui/KinoEventList";
import { LiteratireEventList } from "feature/literature/ui/LiterstireEventList";
import { ScienceEventList } from "feature/science/ui/ScinceEventList";
import { SliderEvent } from "feature/SliderEvent";
import { SportEventList } from "feature/sport/ui/SportEventList";
import { TechnologiesEventList } from "feature/techonologies/ui/TechnologiesEventList";
import { useState, useMemo } from "react";
import { Main, MainContainer, Test, FooterContainer } from "./HistoryDatties.styles";

const SLIDER_MAP = {
  1: TechnologiesEventList,
  2: SportEventList,
  3: KinoEventList,
  4: ScienceEventList,
  5: LiteratireEventList,
} as const;

const PERIODS_DATA: any = {
  1: { before: 2015, after: 2022 },
  2: { before: 2010, after: 2015 },
  3: { before: 1988, after: 2000 },
  4: { before: 1995, after: 2005 },
  5: { before: 2001, after: 2011 },
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
        dots={total}
        radius={265}
        center={265}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <CircleLines />
      <MainContainer>
        <TitleHistoricalData />
        <Test>
        <Periods
          dataBefore={PERIODS_DATA[activeIndex].before}
          dataAfter={PERIODS_DATA[activeIndex].after}
        />
        </Test>
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
