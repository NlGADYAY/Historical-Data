import { useHorizontalScroll } from "../../../../shared/hooks/useHorizontalScroll";
import { EventItem } from "../../../../shared/ui/EventItem";
import { Wrapper, ScrollButtonLeft, ScrollContainer, ItemsRow, ScrollButtonRight } from "./KinoEventList.styles";

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
 const { ref, canScrollLeft, canScrollRight, scroll } = useHorizontalScroll();
  return (
    <Wrapper>
      {canScrollLeft && (
        <ScrollButtonLeft onClick={() => scroll("left")}>❮</ScrollButtonLeft>
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
        <ScrollButtonRight onClick={() => scroll("right")}>❯</ScrollButtonRight>
      )}
    </Wrapper>
  );
};
