import { HistoryDatties } from "modules/HistoryDatties"
import { HomeConteiner } from "./Home.styles"

export const Home: React.FC = () => {
    return (
        <HomeConteiner>
            <HistoryDatties />
        </HomeConteiner>
    )
}