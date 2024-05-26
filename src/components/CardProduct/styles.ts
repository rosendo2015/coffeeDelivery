import styled from "styled-components"

export const CardProductContainer = styled.div`
width: 256px;
height: 310px;

border-radius: 6px 36px 6px 36px;
padding: 20px;
background-color: ${({ theme }) => theme.COLORS.base_card};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 0.1rem;
text-align: center;
margin-top: 54px;
>img{
    margin: -3rem 0 12px 0;
    width: 120px;
    height: 120px;
 
    
}
.wrapperTag{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom: 1rem;
}
h3{
    margin-bottom: 8px;
}
.wrapperPrice{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;  
    margin-top: 33px;
}
.QTDItem{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 4px 6px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.base_button};
}
.wrapperPrice p {
    color: var(--Base-Text, #574F4D);
text-align: left;
/* Text/Regular S */
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 18.2px */

}
.wrapperPrice strong {
    font-family: "Baloo 2";
font-size: 24px;
font-style: normal;
font-weight: 800;
line-height: 130%;
}
.QTDItem{
padding: 8px;
}
.QTDItem button{
display: flex;
align-items: center;
justify-content: center;
    width: 14px;
    height: 14px;
    background: transparent;
    font-size: 2rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.brand_purple};
}
`