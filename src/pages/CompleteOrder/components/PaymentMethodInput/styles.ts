import styled, { css } from "styled-components";

export const PaymentMethodInputContainer = styled.div`
input{
    visibility: hidden;
    appearance: none;
}
input:checked + label div{
    ${({ theme }) => css`
    background: ${theme.colors["brand-purple-light"]};
    border-color: ${theme.colors["brand-purple"]};

    &:hover{
        background: ${theme.colors["brand-purple-light"]};
    }
`}
}
`

export const ContentContainer = styled.div`
background: ${({ theme }) => theme.colors["base-button"]};
color: ${({ theme }) => theme.colors["base-text"]};
display: flex;
align-items: center;
justify-content: flex-start;
gap: 0.75rem;
font-size: 0.75rem;
text-transform: uppercase;
padding: 1rem;
border-radius: 6px;
border: 1px solid ${({ theme }) => theme.colors["base-button"]};
transition: 0.4s;

> svg{
    color: ${({ theme }) => theme.colors["brand-purple"]};
}
&:hover{
    background: ${({ theme }) => theme.colors["base-hover"]};
}
user-select: none;
`