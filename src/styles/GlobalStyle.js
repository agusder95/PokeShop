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
    p{
        font-size:15px;
        font-family:'Open Sans', sans-serif;
        font-weight:400;
        @media screen and (min-width: 820px){
            font-size:20px;
        }
    }
    button{
        font-family:'Open Sans', sans-serif;
        font-weight:400;
    }
    h1{
        font-family:'Open Sans', sans-serif;
        font-weight:400;
    }
    h2{
        font-family:'Open Sans', sans-serif;
        font-weight:400;
    }
    h3{
        font-family:'Open Sans', sans-serif;
        font-weight:400;
    }
`