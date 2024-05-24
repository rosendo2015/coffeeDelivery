import styled from "styled-components";
export const Container = styled.div`
width: 100%;

display: flex;
flex-direction: column;
main{
    margin-top: 80px;
}
.top h1{
    font-family: "Varela Round", sans-serif;
    font-weight: 600;
    line-height: 130%;
    max-width: 588px;
    font-size: 35px;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.COLORS.base_title};
    text-shadow: 2px 2px 3px ${({ theme }) => theme.COLORS.base_hover};
    
}
.top p{
    margin-bottom: 1rem;
    max-width: 588px;
    font-size: 1rem;
    line-height: 130%;
    color: ${({ theme }) => theme.COLORS.base_subtitle};
    text-shadow: 2px 2px 3px ${({ theme }) => theme.COLORS.base_hover};
}
.wrapperList{
    display: flex;    
    gap: 2rem;
    margin-top: 76px;
}
.wrapperList div.itemList:nth-child(1),
.wrapperList div.itemList:nth-child(2){
    display: flex;
    align-items: center;    
    gap: 1rem;
    margin-bottom: 1rem;
}

.itemList span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 8px;
    background: ${({ theme }) => theme.COLORS.brand_yellow_dark};
}
.itemList span svg{
    color: ${({ theme }) => theme.COLORS.base_white};
}
.itemList p{
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.base_subtitle};

}

.topMain{
    padding: 32px 160px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

>img{
    min-width: 476px;
    height: 360px;
}
` 