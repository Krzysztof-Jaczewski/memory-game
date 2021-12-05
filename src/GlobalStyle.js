import { createGlobalStyle } from "styled-components";
import lights from "./lights.png";
export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
  margin: 0;
}

button {
  cursor: pointer;
}

body {
  height: 90vh;
  font-family: 'Lato', sans-serif;
  background-image: url(${lights}),linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,0,8,1) 84%, rgba(8,8,172,1) 100%, rgba(0,212,255,1) 100%);
  background-size: 100% 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
`;
