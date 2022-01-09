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
import {
  chooseDifficulty,
  easy,
  hard,
  medium,
  start,
} from "../../parameters";

export const Buttons = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  const startNewGame = (numberShorteningArray) => {
    const toShuffleArray = cardsArray.slice(numberShorteningArray);
    let difficulty = null;

    const shuffledCards = [...toShuffleArray, ...toShuffleArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        src: card.src,
        matched: false,
        id: nanoid(),
      }));

    switch (numberShorteningArray) {
      case 6:
        difficulty = easy;
        break;
      case 4:
        difficulty = medium;
        break;
      default:
        difficulty = hard;
        break;
    }

    dispatch(setNewGame(shuffledCards));
    dispatch(setDifficulty(difficulty));
  };

  return (
    <>
      {status !== chooseDifficulty && (
        <Button
          type={start}
          task={() => dispatch(changeStatus(chooseDifficulty))}
        >
          {start}
        </Button>
      )}
      {status === chooseDifficulty && (
        <Difficulty>
          <Button task={() => startNewGame(6)}>{easy}</Button>{" "}
          <Button type={medium} task={() => startNewGame(4)}>
            {medium}
          </Button>
          <Button type={hard} task={() => startNewGame()}>
            {hard}
          </Button>
        </Difficulty>
      )}
    </>
  );
};
