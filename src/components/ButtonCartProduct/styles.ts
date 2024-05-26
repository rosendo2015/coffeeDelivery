import styled from "styled-components";

export const ButtonCardProductContainer = styled.button`
display: flex;
align-items: center;
justify-content: center;

background-color: ${({theme})=>theme.COLORS.brand_purple};
color: ${({theme})=>theme.COLORS.base_white};

border: none;
padding: 13px;

border-radius: 6px;
font-weight: 500;




&:disabled{
    opacity: 0.5;
}
`