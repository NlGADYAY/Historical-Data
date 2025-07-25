import { EventData, EventDescription } from "./EventItem.styled."

type TEventItem = {
    data: number,
    description: string,
}

export const EventItem: React.FC <TEventItem> = ({data, description}) => {

    return (
        <div>
        <EventData>{data}</EventData>
        <EventDescription>{description}</EventDescription>
        </div>
    )
}