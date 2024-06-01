import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export function AddressForm() {
    return (
        <AddressFormContainer>
            <Input placeholder="CEP" className="cep" type="number"/>
            <Input placeholder="Rua" className="street" type="text"/>
            <Input placeholder="Número" type="number"/>
            <Input placeholder="Complemento" className="complement" type="text"/>
            <Input placeholder="Bairro" type="text"/>
            <Input placeholder="Cidade" type="text"/>
            <Input placeholder="UF" type="text"/>
        </AddressFormContainer>
    )
}