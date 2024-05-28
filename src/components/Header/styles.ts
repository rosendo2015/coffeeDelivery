import styled from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${({theme})=>theme.colors["base-white"]};
width: 100%;
height: 105px;
padding: 32px 160px;

position: sticky;
top: 0;
left: 0;
z-index: 5;

.buttonWrapper{    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}
`