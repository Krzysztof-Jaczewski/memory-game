import { createGlobalStyle } from "styled-components";
import lights from "./lights.png";
import stars from "./stars.jpg";
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
  font-family: 'Lato', sans-serif;
  background-image: url(${lights}), url(${stars});
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

`;
