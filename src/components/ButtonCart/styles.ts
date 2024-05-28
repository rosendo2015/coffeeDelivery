import styled from "styled-components";

export const ButtonContainer = styled.button`
display: flex;
align-items: center;
justify-content: center;

background-color: ${({theme})=>theme.colors["brand-yellow-light"]};

border: none;
padding: 13px;

border-radius: 6px;
font-weight: 500;
color: ${({theme})=>theme.colors["brand-yellow-dark"]};



&:disabled{
    opacity: 0.5;
}
`