import { CircleLines } from "../../shared/ui/CircleLines"
import { Periods } from "../../shared/ui/Periods"
import { TitleHistoricalData } from "../../shared/ui/TitleHistoricalData"
import { Main, MainContainer, PeriodsContainer, FooterContainer } from "../Modules.styles"
import { KinoEventList } from "./KinoEventList"

export const Kino: React.FC = () => {

    return (
        <Main>
            <CircleLines />
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