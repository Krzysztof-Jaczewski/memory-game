import styled from "styled-components";
// import { ReactComponent as Snow } from "./images/snowCap.svg";
// import { ReactComponent as Ice } from "./images/icicle.svg";

export const ButtonLabel = styled.label`
  width: 200px;
  height: 50px;
  display: block;
  margin: 0 auto 0px;
  padding: 10px;
  position: relative;
  &:hover {
    filter: brightness(120%);
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  background-color: darkred;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  color: white;
  z-index: -1;
  border: 1px solid darkred;
  box-shadow: 2px 2px 3px rgb(60, 60, 60),
    -2px -2px 3px rgb(255, 150, 150),
    inset -1.5px -1.5px 3px rgb(255, 150, 150),
    inset 1.5px 1.5px 3px rgb(0, 0, 0);
  &:hover {
    box-shadow: 2px 2px 3px rgb(60, 60, 60),
      -2px -2px 3px rgb(255, 150, 150);
  }
  &:active {
    box-shadow: 2px 2px 3px rgb(60, 60, 60),
      -2px -2px 3px rgb(255, 150, 150),
      inset -1.5px -1.5px 3px rgb(255, 150, 150),
      inset 1.5px 1.5px 3px rgb(0, 0, 0);
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 50%;
  top: 2%;
  right: 43%;

  &:nth-child(2) {
    width: 30%;
    right: -5%;
  }
  &:nth-child(3) {
    width: 15%;
    top: 90%;
    right: -6%;
  }
  &:nth-child(4) {
    width: 10%;
    top: 100%;
    right: 5%;
  }
`;
