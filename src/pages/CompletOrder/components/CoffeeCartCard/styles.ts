import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;

border-bottom: 3px solid ${({theme})=>theme.colors["base-button"]};
padding: 1.5rem;
margin-bottom: 1.25rem;
>div{
display: flex;
align-items: center;
gap: 1.5rem;
img{
width: 4rem;
height: 4rem;
}
}
> p{
    font-weight: 700;
    align-self: flex-start;
}
`
export const ActionsContainer = styled.div`
margin-top: 0.5rem;
height: 2rem;
display: flex;
align-items: center;
gap: 0.5rem;

>div{
    max-width: 4.5rem;
    height: 100%;
}
`
export const RemoveButtonContainer = styled.button`
display: flex;
align-items: center;
gap: 0.25rem;
color: ${({theme})=>theme.colors["base-text"]};
font-size: 0.7rem;
height: 100%;
border: none;
background: ${({theme})=>theme.colors["base-button"]};
padding: 0 0.5rem;
border-radius: 6px;
transition: 0.4s;
svg{
    color: ${({theme})=>theme.colors["brand-purple"]};
}
&:hover{
    background: ${({theme})=>theme.colors["base-hover"]};
}
`