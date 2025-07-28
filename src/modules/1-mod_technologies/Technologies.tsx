import { CircleLines } from "../../shared/ui/circleWithLines"
import { Periods } from "../../shared/ui/periods"
import { TitleHistoricalData } from "../../shared/ui/titleHistoricalData"
import { FooterContainer,  Main, MainContainer, PeriodsContainer } from "./Technologies.styles"
import { TechnologiesEventList } from "./TechnologiesEventList"

export const Technologies: React.FC = () => {


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
            <TechnologiesEventList />
            </FooterContainer>
        </Main>
    )
}