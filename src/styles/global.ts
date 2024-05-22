import {createGlobalStyle} from 'styled-components'
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: "Roboto", sans-serif;
    background: ${({theme})=>theme.COLORS.BACKGROUND_800};
    color: ${({theme})=>theme.COLORS.base_title};
}
a{
    text-decoration: none;
}
button, a{
    cursor: pointer;
    filter: 0.2s;
}
button:hover, a:hover{
   filter: brightness(0.9);
}
`