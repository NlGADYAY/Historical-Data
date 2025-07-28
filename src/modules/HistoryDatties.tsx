import { CircularTimeline } from "../feature/CircularTimeline"
import { SliderEvent } from "../feature/SliderEvent"

export const HistoryDatties: React.FC = () => {

    return (
        <div>  
            <CircularTimeline /> 
            <SliderEvent />
        </div>
    )
}