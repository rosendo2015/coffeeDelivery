import {createGlobalStyle} from 'styled-components'
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}
body{
    background: ${({theme})=>theme.COLORS.base_background};
    color: ${({theme})=>theme.COLORS.base_text};
    -webkit-font-smoothing: antialiased;
}
a{
    text-decoration: none;
}
button, a{
    cursor: pointer;
}
body, button, input, textarea{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
} 
button:hover, a:hover{
   filter: brightness(0.9);
}
`