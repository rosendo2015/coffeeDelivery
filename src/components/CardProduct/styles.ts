import styled from "styled-components"

export const CardProductContainer = styled.div`
width: 256px;
height: 310px;

border-radius: 6px 36px 6px 36px;

background-color: ${({theme})=>theme.COLORS.base_card};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

>img{
    margin-top: -190px;
    width: 120px;
    height: 120px;
}
.wrapperPreco{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

`