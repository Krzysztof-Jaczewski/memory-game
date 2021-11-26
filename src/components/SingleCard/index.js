import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleChoice,
  resetChoice,
  selectCardBack,
  selectChoiceOne,
  selectChoiceTwo,
  selectDisabled,
  setDisabledTrue,
  updateCards,
} from "../gameSlice";
import { CardFront, CardBack, StyledCard } from "./styled";

export const SingleCard = ({ card }) => {
  const cardBack = useSelector(selectCardBack);
  const choiceOne = useSelector(selectChoiceOne);
  const choiceTwo = useSelector(selectChoiceTwo);
  const disabled = useSelector(selectDisabled);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!disabled) {
      dispatch(handleChoice(card));
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      dispatch(setDisabledTrue());
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

  const isFlipped =
    card === choiceOne || card === choiceTwo || card.matched;

  return (
    <StyledCard>
      <CardFront
        flipped={isFlipped}
        src={card.src}
        alt="card front"
      />
      <CardBack
        flipped={isFlipped}
        disabled={disabled}
        src={cardBack.src}
        alt="card back"
        onClick={() => handleClick()}
      />
    </StyledCard>
  );
};
