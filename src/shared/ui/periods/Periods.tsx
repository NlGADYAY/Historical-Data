import { PeriodAfter, PeriodBefore } from "./Periods.styles";

type TPeriods = {
  dataBefore: number;
  dataAfter: number;
};

export const Periods: React.FC<TPeriods> = ({ dataBefore, dataAfter }) => {
  return (
    <div>
      <PeriodBefore>{dataBefore}</PeriodBefore>
      <PeriodAfter>{dataAfter}</PeriodAfter>
    </div>
  );
};
