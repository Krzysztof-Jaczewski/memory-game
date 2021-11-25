import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  position: relative;
`;

export const CardBack = styled.img`
  width: 100%;
  display: block;
  border: 2px solid white;
  border-radius: 6px;
  background-image: linear-gradient(green, black);
  cursor: pointer;
  transition: all ease-in 0.3s;
  transition-delay: 0.3s;

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
  transition: all ease-in 0.3s;
  cursor: not-allowed;

  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotateY(0deg);
      transition-delay: 0.3s;
    `}
`;
