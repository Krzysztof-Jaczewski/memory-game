import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  selectStatus,
  setNewGame,
  changeStatus,
  setDifficulty,
} from "../gameSlice";
import { Button } from "./Button";
import { Difficulty } from "./styled";
import { cardsArray } from "../SingleCard/cardsArray";

export const Buttons = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  const startNewGame = (numberShorteningArray) => {
    const cardsArrays = cardsArray.slice(numberShorteningArray);
    let difficulty = null;

    const shuffledCards = [...cardsArrays, ...cardsArrays]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        src: card.src,
        matched: false,
        id: nanoid(),
      }));

    switch (numberShorteningArray) {
      case 6:
        difficulty = "beginner";
        break;
      case 4:
        difficulty = "advanced";
        break;
      default:
        difficulty = "expert";
        break;
    }

    dispatch(setNewGame(shuffledCards));
    dispatch(setDifficulty(difficulty));
  };

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
          <Button task={() => startNewGame(6)}>Beginner</Button>{" "}
          <Button type="advanced" task={() => startNewGame(4)}>
            Advanced
          </Button>
          <Button type="expert" task={() => startNewGame(0)}>
            Expert
          </Button>
        </Difficulty>
      )}
    </>
  );
};
