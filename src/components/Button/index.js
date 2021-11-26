import { useDispatch } from "react-redux";
import { startNewGame } from "../gameSlice";
import { StyledButton } from "./styled";

export const Button = () => {
  const dispatch = useDispatch();

  return (
    <StyledButton onClick={() => dispatch(startNewGame())}>
      New Game
    </StyledButton>
  );
};
