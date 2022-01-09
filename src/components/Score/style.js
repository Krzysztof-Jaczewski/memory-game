import styled from "styled-components";

export const ScoreBoard = styled.section`
  position: absolute;
  width: 80%;
  left: 10%;
  top: 10%;
  padding: 16px 8px;
  background-color: rgba(0, 0, 100, 0.9);
  z-index: 1;
  display: grid;
  place-items: center;
  color: red;
  font-weight: bold;
  border-radius: 20px;
  box-shadow: 6px 6px 10px rgb(0, 0, 0),
    -4px -4px 2px rgb(150, 150, 255),
    inset -2px -2px 2px rgb(150, 150, 255),
    inset 2px 2px 5px rgb(0, 0, 0);

  @media (max-width: 500px) {
    top: 12%;
    padding: 8px 4px;
  }
`;

export const Header = styled.header`
  font-size: clamp(22px, 4vw, 36px);
  padding: 16px;
  @media (max-width: 500px) {
    padding: 8px;
  }
`;

export const Text = styled.p`
  font-size: clamp(16px, 3vw, 24px);
  padding: 8px;

  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 500px) {
    padding: 4px;
  }
`;
