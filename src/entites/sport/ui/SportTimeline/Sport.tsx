import { PeriodsContainer } from "../../../../modules/Modules.styles"
import { Periods } from "../../../../shared/ui/Periods"
import { TitleHistoricalData } from "../../../../shared/ui/TitleHistoricalData"

export const Sport: React.FC = () => {

    return (
            <div>
                <TitleHistoricalData />
                <PeriodsContainer>
                    <Periods dataBefore={2010} dataAfter={2015} />
                </PeriodsContainer>
            </div>
    )
}