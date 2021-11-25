import styled from "styled-components";

export const MainContent = styled.main`
  max-width: 660px;
  min-height: 100px;
  margin: 40px auto;
  padding: 0 60px;
`;

export const StyledBoard = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
