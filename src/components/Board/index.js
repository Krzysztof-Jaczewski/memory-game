import { useEffect } from "react";
import { MainContent, StyledBoard, Turns } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  resetChoice,
  selectCards,
  selectChoiceOne,
  selectChoiceTwo,
  selectIsEveryCardMatched,
  selectTurns,
  setDisableTrue,
  updateCards,
} from "../gameSlice";
import { SingleCard } from "../SingleCard";

export const Board = () => {
  const cards = useSelector(selectCards);
  const turns = useSelector(selectTurns);
  const choiceOne = useSelector(selectChoiceOne);
  const choiceTwo = useSelector(selectChoiceTwo);
  const isEveryCardMatched = useSelector(selectIsEveryCardMatched);
  const dispatch = useDispatch();

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      dispatch(setDisableTrue());
      if (choiceOne.src === choiceTwo.src) {
        dispatch(updateCards(choiceOne.src));
        dispatch(updateCards(choiceTwo.src));
        dispatch(resetChoice());
      } else {
        setTimeout(() => {
          dispatch(resetChoice());
        }, 1000);
      }
    }
  }, [dispatch, choiceOne, choiceTwo]);

  return (
    <MainContent>
      <Turns>Turn : {turns}</Turns>
      <StyledBoard>
        {isEveryCardMatched && "koniec gry"}
        {!isEveryCardMatched &&
          cards.map((card) => (
            <SingleCard key={card.id} card={card} />
          ))}
      </StyledBoard>
    </MainContent>
  );
};
