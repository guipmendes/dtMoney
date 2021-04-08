import { Container } from "./styles";

import IncomeImg from "../../assets/income.svg"
import OutcomeImg from "../../assets/outcome.svg"
import TotalImg from "../../assets/total.svg"

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <img src={IncomeImg} alt="Entradas"/>
                    <p>Entradas</p>
                </header>
                <strong>R$1.000,00</strong>
            </div>
            <div>
                <header>
                    <img src={OutcomeImg} alt="Saidas"/>
                    <p>Saídas</p>
                </header>
                <strong> - R$500,00</strong>
            </div>
            <div className='highlight-backgroud'>
                <header>
                    <img src={TotalImg} alt="Total"/>
                    <p>Total</p>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );

}