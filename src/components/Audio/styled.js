import styled, { css } from "styled-components";

export const AudioButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 10px;
  border-radius: 20%;
  background-color: green;

  ${({ playing }) =>
    playing &&
    css`
      background-color: red;
    `}
`;
