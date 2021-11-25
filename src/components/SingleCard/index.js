import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleChoice,
  resetChoice,
  selectCardBack,
  selectChoiceOne,
  selectChoiceTwo,
  updateCards,
} from "../gameSlice";
import { CardFront, CardBack, StyledCard } from "./styled";

export const SingleCard = ({ card }) => {
  const cardBack = useSelector(selectCardBack);
  const choiceOne = useSelector(selectChoiceOne);
  const choiceTwo = useSelector(selectChoiceTwo);
  const dispatch = useDispatch();

  const handleClick = (card) => {
    dispatch(handleChoice(card));
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        dispatch(updateCards(choiceOne.src));
        dispatch(updateCards(choiceTwo.src));
        dispatch(resetChoice());
        console.log("brawo");
      } else {
        console.log("źle");
        setTimeout(() => {
          dispatch(resetChoice());
        }, 1000);
      }
    }
  }, [dispatch, choiceOne, choiceTwo]);

  return (
    <StyledCard>
      <CardFront
        flipped={
          card === choiceOne || card === choiceTwo || card.matched
        }
        src={card.src}
        alt="card front"
      />
      <CardBack
        flipped={
          card === choiceOne || card === choiceTwo || card.matched
        }
        src={cardBack.src}
        alt="card back"
        onClick={() => handleClick(card)}
      />
    </StyledCard>
  );
};
