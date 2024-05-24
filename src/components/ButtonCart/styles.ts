import styled from "styled-components";

export const ButtonContainer = styled.button`
display: flex;
align-items: center;
justify-content: center;

background-color: ${({theme})=>theme.COLORS.brand_yellow_light};
color: ${({theme})=>theme.COLORS.BACKGROUND_800};

border: none;
padding: 13px;

border-radius: 6px;
font-weight: 500;
color: ${({theme})=>theme.COLORS.brand_yellow_dark};



&:disabled{
    opacity: 0.5;
}
`