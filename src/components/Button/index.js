import { useDispatch } from "react-redux";
import { startNewGame } from "../gameSlice";
import { ButtonLabel, Image, StyledButton } from "./styled";
import SnowCap from "./images/snowCap.svg";
import SnowPile from "./images/snowPile.svg";
import Icecle from "./images/icicle.svg";
export const Button = () => {
  const dispatch = useDispatch();

  return (
    <ButtonLabel onClick={() => dispatch(startNewGame())}>
      <Image src={SnowCap} alt="Snow" />
      <Image src={SnowPile} alt="Snow" />
      <Image src={Icecle} alt="Icicle" />
      <Image src={Icecle} alt="Icicle" />
      <StyledButton>New Game</StyledButton>
    </ButtonLabel>
  );
};
