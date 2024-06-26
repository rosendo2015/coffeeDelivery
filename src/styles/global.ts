import {createGlobalStyle} from 'styled-components'
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}
body{
    background: ${({theme})=>theme.colors['base-background']};
    color: ${({theme})=>theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
}
a{
    text-decoration: none;
}
button, a{
    cursor: pointer;
}
body, button, input, textarea{
    font-family: ${({theme})=>theme.fonts.regular};
    font-weight: 400;
    font-size: ${({theme})=>theme.textSizes['text-regular-m']};
} 

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
-webkit-appearance: none;
margin: 0;
}
input[type="number"]{
    -moz-appearance: textfield;
}
::-webkit-scrollbar{
    width: 0.4rem;
}
::-webkit-scrollbar-track{
    background: ${({theme})=>theme.colors['base-button']};
}
::-webkit-scrollbar-thumb{
    border-radius: 2rem;
    background: ${({theme})=>theme.colors['brand-purple']};
}
`