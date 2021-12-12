import { useEffect } from "react";
import { MainContent, StyledBoard, Turns } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatus,
  resetChoice,
  selectCards,
  selectChoiceOne,
  selectChoiceTwo,
  selectDifficulty,
  selectIsEveryCardMatched,
  selectStatus,
  selectTurns,
  setDisableTrue,
  updateCards,
} from "../gameSlice";
import { SingleCard } from "../SingleCard";
import { Score } from "../Score";
import {
  getScoreFromLocalStorage,
  saveScoreInLocalStorage,
} from "../../scoreLocalStorage";

export const Board = () => {
  const cards = useSelector(selectCards);
  const turns = useSelector(selectTurns);
  const status = useSelector(selectStatus);
  const difficulty = useSelector(selectDifficulty);
  const choiceOne = useSelector(selectChoiceOne);
  const choiceTwo = useSelector(selectChoiceTwo);
  const isEveryCardMatched = useSelector(selectIsEveryCardMatched);
  const dispatch = useDispatch();

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      dispatch(setDisableTrue());
      if (choiceOne.src === choiceTwo.src) {
        dispatch(updateCards(choiceOne.src, choiceTwo.src));
        dispatch(resetChoice());
      } else {
        setTimeout(() => {
          dispatch(resetChoice());
        }, 1000);
      }
    }
  }, [dispatch, choiceOne, choiceTwo]);

  useEffect(() => {
    if (status === "inGame" && isEveryCardMatched) {
      dispatch(changeStatus("gameOver"));
      const bestScore = getScoreFromLocalStorage(difficulty);
      if (turns < bestScore || bestScore === "no score yet")
        saveScoreInLocalStorage(turns, difficulty);
    }
  }, [dispatch, isEveryCardMatched, status, turns, difficulty]);

  return (
    <MainContent expert={difficulty === "expert"}>
      <Turns>Turn : {turns}</Turns>
      <StyledBoard expert={difficulty === "expert"}>
        {status === "gameOver" && <Score />}
        {status !== "chooseDifficulty" &&
          cards.map((card) => (
            <SingleCard key={card.id} card={card} />
          ))}
      </StyledBoard>
    </MainContent>
  );
};
