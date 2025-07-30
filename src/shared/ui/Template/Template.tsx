import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { ArrowRightBlue } from "../../icons/ArrowRightBlue/ArrowRightBlue";
import { EventItem } from "../EventItem";
import { TEventItem } from "../EventItem/EventItem";
import { Wrapper, ScrollButtonLeft, ScrollContainer, ItemsRow, ScrollButtonRight } from "./TemplateEventList.styles";


type TTemplateEventList = {
  events: TEventItem[];
  leftButtonContent?: React.ReactNode;
  rightButtonContent?: React.ReactNode;
};

export const TemplateEventList: React.FC<TTemplateEventList> = ({
  events,
  leftButtonContent = "❮",
  rightButtonContent = <ArrowRightBlue />,
}) => {
  const { ref, canScrollLeft, canScrollRight, scroll } = useHorizontalScroll();

  return (
    <Wrapper>
      {canScrollLeft && (
        <ScrollButtonLeft onClick={() => scroll("left")}>
          {leftButtonContent}
        </ScrollButtonLeft>
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
        <ScrollButtonRight onClick={() => scroll("right")}>
          {rightButtonContent}
        </ScrollButtonRight>
      )}
    </Wrapper>
  );
};