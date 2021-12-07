import { useDispatch, useSelector } from "react-redux";
import {
  selectStatus,
  startNewGame,
  changeStatus,
} from "../gameSlice";
import {
  ButtonLabel,
  Image,
  StyledButton,
  Difficulty,
} from "./styled";
import FirstsnowCap from "./images/snowCap.svg";
import SecondSnowCap from "./images/snowCap-2.svg";
import Icecle from "./images/icicle.svg";
import SideSnow from "./images/sideSnow.svg";

export const Button = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  return (
    <>
      {status !== "chooseDifficulty" && (
        <ButtonLabel>
          <Image src={FirstsnowCap} alt="Snow" />
          <Image src={SecondSnowCap} alt="Snow" />
          <StyledButton
            onClick={() => dispatch(changeStatus("chooseDifficulty"))}
          >
            New Game
          </StyledButton>
        </ButtonLabel>
      )}
      {status === "chooseDifficulty" && (
        <Difficulty>
          <ButtonLabel>
            <Image src={FirstsnowCap} alt="Snow" />
            <StyledButton onClick={() => dispatch(startNewGame(6))}>
              Beginner
            </StyledButton>
          </ButtonLabel>
          <ButtonLabel>
            <Image src={FirstsnowCap} alt="Snow" />
            <Image src={SecondSnowCap} alt="Snow" />
            <Image src={Icecle} alt="Icicle" />
            <StyledButton onClick={() => dispatch(startNewGame(4))}>
              Advanced
            </StyledButton>
          </ButtonLabel>
          <ButtonLabel>
            <Image src={FirstsnowCap} alt="Snow" />
            <Image src={SecondSnowCap} alt="Snow" />
            <Image src={Icecle} alt="Icicle" />
            <Image src={Icecle} alt="Icicle" />
            <Image src={Icecle} alt="Icicle" />
            <Image src={SideSnow} alt="SideSnow" />
            <StyledButton onClick={() => dispatch(startNewGame(0))}>
              Expert
            </StyledButton>
          </ButtonLabel>
        </Difficulty>
      )}
    </>
  );
};
