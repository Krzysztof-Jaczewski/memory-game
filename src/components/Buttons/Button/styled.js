import styled from "styled-components";

export const ButtonLabel = styled.div`
  width: 200px;
  height: 50px;
  display: block;
  margin: 0 auto 0px;
  padding: 10px;
  position: relative;
  z-index: 1;

  @media (max-width: 500px) {
    transform: scale(0.6);
  }

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
    width: 10%;
    top: 100%;
    right: 20%;
  }
  &:nth-child(4) {
    width: 15%;
    top: 90%;
    right: 28%;
  }
  &:nth-child(5) {
    width: 8%;
    top: 100%;
    right: 40%;
  }
  &:nth-child(6) {
    width: 15%;
    top: 22%;
    right: -5%;
  }
`;

export const Difficulty = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 40px;

  @media (max-width: 787px) {
    gap: 60px;
    grid-auto-flow: row;
  }
`;
