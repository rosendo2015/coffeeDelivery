import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
width: 40rem;
display: flex;
flex-direction: column;
gap: 0.75rem;
`
export const FormSectionContainer = styled(SectionBaseStyle)`
display: flex;
flex-direction: column;
gap: 2rem;
`
export const AddressFormContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 12.50rem 17.25rem 3.75rem;
column-gap: 0.75rem;
row-gap: 1rem;
grid-auto-flow: dense;

.cep{
    grid-column: span 3;
    max-width: 12.50rem;
}
.street{
    grid-column: span 3;
}
.complement{
    grid-column: span 2;
}
`
export const PaymentMethodOptionContainer = styled.div`

display: grid;
grid-template-columns: 1fr 1fr 1fr;
column-gap: 0.75rem;
> p {
    grid-column: span 3;
    color: ${({theme})=>theme.colors["base-error"]};
}

`