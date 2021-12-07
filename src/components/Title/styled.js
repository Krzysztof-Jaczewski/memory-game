import styled from "styled-components";

export const StyledTitle = styled.h1`
  color: red;
  font-size: clamp(22px, 4vw, 36px);
  margin: 0;
  white-space: nowrap;
  padding: 0 8px;
`;

export const Header = styled.header`
  font-size: clamp(22px, 4vw, 36px);
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  margin-top: 80px;
`;
