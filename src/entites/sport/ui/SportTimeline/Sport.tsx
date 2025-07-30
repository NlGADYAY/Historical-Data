import { PeriodsContainer } from "../../../../modules/Modules.styles"
import { Periods } from "../../../../shared/ui/Periods"
import { TitleHistoricalData } from "../../../../shared/ui/TitleHistoricalData"
import { SportConteiner } from "./SportTimeline.style"

export const Sport: React.FC = () => {

    return (
            <SportConteiner>
                <TitleHistoricalData />
                <PeriodsContainer>
                    <Periods dataBefore={2010} dataAfter={2015} />
                </PeriodsContainer>
            </SportConteiner>
    )
}