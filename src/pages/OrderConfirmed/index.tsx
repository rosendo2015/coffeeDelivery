import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDatailsContainer } from "./styles";
import Entregador from '../../assets/entragador.svg';
export function OrderConfirmed() {
    return (
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">
                    Uhu! Pedido confirmado.
                </TitleText>
                <RegularText size="l" color="subtitle">
                    Agora é só aguardar que logo o café chegará até você
                </RegularText>
            </div>
            <section>
                <OrderDatailsContainer>
                    <p>teste</p>
                    
                </OrderDatailsContainer> 
                <img src={Entregador} alt="" />
            </section>
        </OrderConfirmedContainer>
    )

}