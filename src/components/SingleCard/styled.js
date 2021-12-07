import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  position: relative;
`;

export const CardBack = styled.img`
  width: 100%;
  display: block;

  border-radius: 6px;
  background-image: radial-gradient(black, green);
  cursor: pointer;
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
  box-shadow: 2px 2px 3px rgb(60, 60, 60),
    -2px -2px 3px rgb(150, 255, 150),
    inset -1.5px -1.5px 3px rgb(150, 255, 150),
    inset 1.5px 1.5px 3px rgb(0, 0, 0);

  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotateY(90deg);
      transition-delay: 0s;
    `}
`;

export const CardFront = styled(CardBack)`
  transform: rotateY(90deg);
  position: absolute;
  transition: all ease-in 0.2s;
  cursor: not-allowed;

  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotateY(0deg);
      transition-delay: 0.2s;
    `}
`;
