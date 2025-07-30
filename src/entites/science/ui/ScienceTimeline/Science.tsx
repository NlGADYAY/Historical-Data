import { PeriodsContainer } from "../../../../modules/Modules.styles"
import { Periods } from "../../../../shared/ui/Periods"
import { TitleHistoricalData } from "../../../../shared/ui/TitleHistoricalData"
import { ScinceComteiner } from "./Science.styles"

export const Science: React.FC = () => {

    return (
            <ScinceComteiner>
                <TitleHistoricalData />
                <PeriodsContainer>
                    <Periods dataBefore={1988} dataAfter={2000} />
                </PeriodsContainer>
            </ScinceComteiner>
    )
}