import { PeriodsContainer } from "../../../../modules/Modules.styles"
import { Periods } from "../../../../shared/ui/Periods"
import { TitleHistoricalData } from "../../../../shared/ui/TitleHistoricalData"
import { KinoConteiner } from "./Kino.styles"

export const Kino: React.FC = () => {

    return (
            <KinoConteiner>
                <TitleHistoricalData />
                <PeriodsContainer>
                    <Periods dataBefore={1988} dataAfter={2000} />
                </PeriodsContainer>
            </KinoConteiner>
    )
}