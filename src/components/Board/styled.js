import styled from "styled-components";

export const MainContent = styled.main`
  max-width: 660px;
  margin: 0 auto 40px;
  padding: 0 60px;
`;

export const StyledBoard = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Turns = styled.p`
  text-align: center;
  padding: 16px;
  color: lightgreen;
  font-size: 3vh;
`;
