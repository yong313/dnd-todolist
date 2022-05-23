import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle` 
  ${reset}
    html {
      font-size: 14px;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    ::-webkit-scrollbar {
      display: none;
    }
    input, textarea {
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input {
      border: none;
      outline: none;
      background: transparent;
      transition: all 0.35s ease;
    }
    input:focus {
      background-color: #404df7;
      color: #fff;
    }
    input::placeholder {
      color: #7f7f7f;
    }
    input:focus::placeholder {
      color: #fff;
    }
    input:not(:focus) {
      background-color: #fff;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    textarea {
      width: 100% !important;
      border: none;
      resize: none;
      outline: none;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      transition: all 0.35s ease;
    }
    
    textarea:focus {
      background-color: #404df7;
      color: #fff;
    }
    textarea::placeholder {
      color: #7f7f7f;
    }
    textarea:focus::placeholder {
      color: #fff;
    }
    textarea:not(:focus) {
      background-color: #fff;
    }
`;

export default GlobalStyles;
