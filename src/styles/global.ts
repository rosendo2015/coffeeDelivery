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
button:hover, a:hover{
   filter: brightness(0.9);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
-webkit-appearance: none;
margin: 0;
}
input[type="number"]{
    -moz-appearance: textfield;
}
`