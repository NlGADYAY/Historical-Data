import { CircleLines } from "../../shared/ui/circleWithLines"
import { Periods } from "../../shared/ui/periods"
import { TitleHistoricalData } from "../../shared/ui/titleHistoricalData"
import { Main, MainContainer, PeriodsContainer, FooterContainer } from "../Modules.styles"
import { LiteratureEventList } from "./LiteratureEventList"

export const Literature: React.FC = () => {

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
                <LiteratureEventList />
            </FooterContainer>
        </Main>
    )
}