import { PeriodsContainer } from "../../../../modules/Modules.styles"
import { Periods } from "../../../../shared/ui/Periods"
import { TitleHistoricalData } from "../../../../shared/ui/TitleHistoricalData"

export const Technologies: React.FC = () => {


    return (
            <div>
                <TitleHistoricalData />
                <PeriodsContainer>
                    <Periods dataBefore={2015} dataAfter={2022} />
                </PeriodsContainer>
            </div>
    )
}