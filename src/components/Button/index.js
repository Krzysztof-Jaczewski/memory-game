import { useDispatch } from "react-redux";
import { startNewGame } from "../gameSlice";
import { ButtonLabel, Image, StyledButton } from "./styled";
import FirstsnowCap from "./images/snowCap.svg";
import SecondSnowCap from "./images/snowCap-2.svg";
import Icecle from "./images/icicle.svg";
export const Button = () => {
  const dispatch = useDispatch();

  return (
    <ButtonLabel>
      <Image src={FirstsnowCap} alt="Snow" />
      <Image src={SecondSnowCap} alt="Snow" />
      <Image src={Icecle} alt="Icicle" />
      <Image src={Icecle} alt="Icicle" />
      <StyledButton onClick={() => dispatch(startNewGame())}>
        New Game
      </StyledButton>
    </ButtonLabel>
  );
};
