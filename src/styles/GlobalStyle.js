import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        height:100vh;
    }
    h1,h2,h3,p{
        margin: 0;
        padding: 0;
    }
    ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`