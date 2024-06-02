import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2.5rem;
margin-top: 5rem;

h1{
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
}
>section{
    display: flex;
    align-items: center;
    justify-content: space-between;

    
}
`
export const OrderDatailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    border: 1px solid ${({ theme }) => theme.colors["brand-yellow"]};
`