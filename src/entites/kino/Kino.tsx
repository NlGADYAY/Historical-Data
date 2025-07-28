import { CircleLines } from "../../shared/ui/CircleLines"
import { Periods } from "../../shared/ui/Periods"
import { TitleHistoricalData } from "../../shared/ui/TitleHistoricalData"
import { Main, MainContainer, PeriodsContainer, FooterContainer } from "../../modules/Modules.styles"
import { KinoEventList } from "./KinoEventList"

export const Kino: React.FC = () => {

    return (
        <Main>
            <CircleLines dots={0} radius={0} center={0} />
            <MainContainer>
                <TitleHistoricalData />
                <PeriodsContainer>
                    <Periods dataBefore={2015} dataAfter={2022} />
                </PeriodsContainer>
            </MainContainer>
            <FooterContainer>
                <KinoEventList />
            </FooterContainer>
        </Main>
    )
}