import { CircleLines } from "../../shared/ui/CircleLines"
import { Periods } from "../../shared/ui/Periods"
import { TitleHistoricalData } from "../../shared/ui/TitleHistoricalData"
import { FooterContainer,  Main, MainContainer, PeriodsContainer } from "../Modules.styles"
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