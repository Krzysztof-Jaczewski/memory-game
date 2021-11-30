import { useSelector, useDispatch } from "react-redux";
import {
  handleChoice,
  selectCardBack,
  selectChoiceOne,
  selectChoiceTwo,
  selectDisable,
} from "../gameSlice";
import { CardFront, CardBack, StyledCard } from "./styled";

export const SingleCard = ({ card }) => {
  const cardBack = useSelector(selectCardBack);
  const choiceOne = useSelector(selectChoiceOne);
  const choiceTwo = useSelector(selectChoiceTwo);
  const disable = useSelector(selectDisable);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!disable) {
      dispatch(handleChoice(card));
    }
  };

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
        disable={disable}
        src={cardBack.src}
        alt="card back"
        onClick={handleClick}
      />
    </StyledCard>
  );
};
