import { useDispatch, useSelector } from "react-redux";
import {
  selectStatus,
  startNewGame,
  changeStatus,
} from "../gameSlice";
import { Button } from "./Button";
import { Difficulty } from "./styled";

export const Buttons = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  console.log(status);
  return (
    <>
      {status !== "chooseDifficulty" && (
        <Button
          type="newGame"
          role={() => dispatch(changeStatus("chooseDifficulty"))}
        >
          New Game
        </Button>
      )}
      {status === "chooseDifficulty" && (
        <Difficulty>
          <Button role={() => dispatch(startNewGame(6))}>
            Beginner
          </Button>
          <Button
            type="advanced"
            role={() => dispatch(startNewGame(4))}
          >
            Advanced
          </Button>
          <Button
            type="expert"
            role={() => dispatch(startNewGame(0))}
          >
            Expert
          </Button>
        </Difficulty>
      )}
    </>
  );
};
