import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
   body{
    background: #f1f0f1;
   }
   
    *{
    box-sizing: border-box;
    padding: 0;
   margin: 0;
    }
     h1,h2,h3,h4,a{
      font-family: 'Montserrat', sans-serif;
     font-weight: 400;
   }
   p,span {
      font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: #505050;
   }
   a{
      text-decoration: none!important;
   }
   ul {
      list-style: none;
      padding: 0;
      margin: 0;
   }
  
`
export default GlobalStyles;