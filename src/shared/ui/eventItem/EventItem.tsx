import {
  EventData,
  EventDescription,
  EventItemConteiner,
} from "./EventItem.styled";

export type TEventItem = {
  data: number;
  description: string;
  faded?: boolean
};

export const EventItem: React.FC<TEventItem> = ({ data, description, faded }) => {
  return (
    <EventItemConteiner>
      <EventData>{data}</EventData>
      <EventDescription>{description}</EventDescription>
    </EventItemConteiner>
  );
};
