import { MapPinLine } from "@phosphor-icons/react";
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompletOrderFormContainer, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";

export function CompletOrderForm() {
    const { colors } = useTheme()
    return (
        <CompletOrderFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete seu pedido
            </TitleText>
            <FormSectionContainer>
                <SectionTitle
                    title="Endereço de Entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                    icon={
                        <MapPinLine size={22} color={colors["brand-yellow-dark"]} />
                    }
                />
                <AddressForm />
            </FormSectionContainer>
        </CompletOrderFormContainer>
    )
}