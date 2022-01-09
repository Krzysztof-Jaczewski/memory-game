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
  disableCardsClick,
  updateCards,
} from "../gameSlice";
import { SingleCard } from "../SingleCard";
import { Score } from "../Score";
import {
  getScoreFromLocalStorage,
  saveScoreInLocalStorage,
} from "../../scoreLocalStorage";
import {
  chooseDifficulty,
  gameOver,
  hard,
  inGame,
  noScore,
} from "../../parameters";

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
      dispatch(disableCardsClick());
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
    if (status === inGame && isEveryCardMatched) {
      dispatch(changeStatus(gameOver));
      const bestScore = getScoreFromLocalStorage(difficulty);
      if (turns < bestScore || bestScore === noScore)
        saveScoreInLocalStorage(turns, difficulty);
    }
  }, [dispatch, isEveryCardMatched, status, turns, difficulty]);

  return (
    <MainContent expert={difficulty === hard}>
      <Turns>Turn : {turns}</Turns>
      <StyledBoard expert={difficulty === hard}>
        {status === gameOver && <Score />}
        {status !== chooseDifficulty &&
          cards.map((card) => (
            <SingleCard key={card.id} card={card} />
          ))}
      </StyledBoard>
    </MainContent>
  );
};
