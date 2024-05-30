import styled from "styled-components";

export const InputStyleContainer = styled.input`
width: 100%;

height: 2.65rem;
border-radius: 4px;
border: 1px solid ${({theme})=>theme.colors["base-button"]};
background: ${({theme})=>theme.colors["base-input"]};
transition: 0.4s;

&:focus{

    border-color: 1px solid ${({theme})=>theme.colors["brand-yellow-dark"]};
}
color: ${({theme})=>theme.colors["base-text"]};
font-size: 0.75rem;
padding: 0.75rem;

&:placeholder{
    
}

`