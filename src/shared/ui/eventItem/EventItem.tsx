import {
  EventData,
  EventDescription,
  EventItemConteiner,
} from "./EventItem.styled";

type TEventItem = {
  data: number;
  description: string;
};

export const EventItem: React.FC<TEventItem> = ({ data, description }) => {
  return (
    <EventItemConteiner>
      <EventData>{data}</EventData>
      <EventDescription>{description}</EventDescription>
    </EventItemConteiner>
  );
};
