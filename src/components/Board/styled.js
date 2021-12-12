import styled, { css } from "styled-components";

export const MainContent = styled.main`
  max-width: 660px;
  margin: 0 auto 40px;
  padding: 0 30px;
  z-index: 1;
  ${({ expert }) =>
    expert &&
    css`
      max-width: 1000px;
    `}
`;

export const StyledBoard = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  position: relative;
  @media (max-width: 667px) {
    gap: 8px;
  }
  ${({ expert }) =>
    expert &&
    css`
      grid-template-columns: repeat(6, 1fr);
      gap: 16px;
    `}
`;

export const Turns = styled.p`
  text-align: center;
  padding: 16px;
  color: rgb(255, 0, 0);
  font-size: clamp(22px, 4vw, 36px); ;
`;
