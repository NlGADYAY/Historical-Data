import { ArrowLeftBlue } from "@shared/icons/ArrowLeftBlue";
import { ArrowRightBlue } from "@shared/icons/ArrowRightBlue/ArrowRightBlue";
import { TemplateEventList } from "@shared/ui/Template/Template";


const events = [
  {
    data: 1987,
    description: "Хищник/Predator, США (реж. Джон Мактирнан)",
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
];

export const KinoEventList: React.FC = () => {
  return (
    <TemplateEventList
      events={events}
      leftButtonContent={<ArrowLeftBlue  />}
      rightButtonContent={<ArrowRightBlue />}
    />
  );
};
