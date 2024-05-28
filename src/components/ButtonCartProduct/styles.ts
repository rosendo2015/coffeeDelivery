import styled from "styled-components";

export const ButtonCardProductContainer = styled.button`
display: flex;
align-items: center;
justify-content: center;

background-color: ${({theme})=>theme.colors["brand-purple"]};
color: ${({theme})=>theme.colors["base-white"]};

border: none;
padding: 13px;

border-radius: 6px;
font-weight: 500;




&:disabled{
    opacity: 0.5;
}
`