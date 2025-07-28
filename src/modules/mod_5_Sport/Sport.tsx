import { CircleLines } from "../../shared/ui/circleWithLines"
import { Periods } from "../../shared/ui/periods"
import { TitleHistoricalData } from "../../shared/ui/titleHistoricalData"
import { Main, MainContainer, PeriodsContainer, FooterContainer } from "../Modules.styles"
import { SportEventList } from "./SporteventList"

export const Sport: React.FC = () => {

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
                <SportEventList /> 
            </FooterContainer>
        </Main>
    )
}