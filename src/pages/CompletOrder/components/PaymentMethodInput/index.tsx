import { CreditCard } from "@phosphor-icons/react";
import { PaymentMethodInputContainer } from "./styles";

export function PaymentMethodInput() {
    return (
        <PaymentMethodInputContainer>
            <CreditCard/>
            Cartão de Crédito
        </PaymentMethodInputContainer>
    )
}