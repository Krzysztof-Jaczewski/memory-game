import { useDispatch } from "react-redux";
import { shuffleCards } from "../gameSlice";
import { StyledButton } from "./styled";

export const Button = () => {
  const dispatch = useDispatch();

  return (
    <StyledButton onClick={() => dispatch(shuffleCards())}>
      New Game
    </StyledButton>
  );
};
