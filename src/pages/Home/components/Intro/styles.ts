import styled from "styled-components";
import introBackgroundImg from '../../../../assets/Background.svg'

export const IntroContainer = styled.section`
width: 100%;
height: 34rem;
background: ${() => `url(${introBackgroundImg})`};
background-size: cover;
`
export const IntroContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 3.5rem;
`