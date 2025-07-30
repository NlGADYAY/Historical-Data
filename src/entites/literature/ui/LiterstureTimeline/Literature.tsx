import { PeriodsContainer } from "../../../../modules/Modules.styles"
import { Periods } from "../../../../shared/ui/Periods"
import { TitleHistoricalData } from "../../../../shared/ui/TitleHistoricalData"
import { LiteratureConteiner } from "./Literature.styles"


export const Literature: React.FC = () => {

    return (
            <LiteratureConteiner>
                <TitleHistoricalData />
                <PeriodsContainer>
                    <Periods dataBefore={1988} dataAfter={2000} />
                </PeriodsContainer>
            </LiteratureConteiner>
    )
}