import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
   body{
    margin: 0;
    padding: 0;
   }
   
    *{
    box-sizing: border-box;
    }
     p,h1,h2,h3,h4{
     font-family: "Georama";
     font-weight: 300;
   }
   a{
      text-decoration: none!important;
   }
   ul {
      list-style: none;
   }
  
`
export default GlobalStyles;