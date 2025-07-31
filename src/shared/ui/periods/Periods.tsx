import { AnimatedNumber } from "feature/animation/animateNumber";
import { PeriodAfter, PeriodBefore } from "./Periods.styles";

type TPeriods = {
  dataBefore: number;
  dataAfter: number;
};

export const Periods: React.FC<TPeriods> = ({ dataBefore, dataAfter }) => {
  return (
    <div>
      <PeriodBefore>
        <AnimatedNumber value={dataBefore}></AnimatedNumber>
      </PeriodBefore>
      <PeriodAfter>
        <AnimatedNumber value={dataAfter}></AnimatedNumber>
      </PeriodAfter>
    </div>
  );
};
