import styled from "styled-components";

export const Difficulty = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 40px;

  @media (max-width: 787px) {
    gap: 20px;
    grid-auto-flow: row;
  }
`;
