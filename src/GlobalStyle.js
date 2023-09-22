import { createGlobalStyle } from "styled-components";
import { colorFondo, colorBlanco } from "./css/Variables";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Public Sans', sans-serif !important;
        text-decoration: none;
        color: ${colorBlanco};
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        background-color: ${colorFondo};
    }
`;

export default GlobalStyle