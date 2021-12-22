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

  return (
    <>
      {status !== "chooseDifficulty" && (
        <Button
          type="newGame"
          task={() => dispatch(changeStatus("chooseDifficulty"))}
        >
          New Game
        </Button>
      )}
      {status === "chooseDifficulty" && (
        <Difficulty>
          <Button task={() => dispatch(startNewGame(6))}>
            Beginner
          </Button>
          <Button
            type="advanced"
            task={() => dispatch(startNewGame(4))}
          >
            Advanced
          </Button>
          <Button
            type="expert"
            task={() => dispatch(startNewGame(0))}
          >
            Expert
          </Button>
        </Difficulty>
      )}
    </>
  );
};
