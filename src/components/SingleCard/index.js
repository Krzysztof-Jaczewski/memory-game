import { useSelector, useDispatch } from "react-redux";
import {
  handleChoice,
  selectCardBack,
  selectDisable,
  selectIsCardFlipped,
} from "../gameSlice";
import { CardFront, CardBack, StyledCard } from "./styled";

export const SingleCard = ({ card }) => {
  const cardBack = useSelector(selectCardBack);

  const disable = useSelector(selectDisable);
  const isCardFlipped = useSelector((state) =>
    selectIsCardFlipped(state, card)
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    if (!disable) {
      dispatch(handleChoice(card));
    }
  };

  return (
    <StyledCard>
      <CardFront
        flipped={isCardFlipped}
        src={card.src}
        alt="card front"
      />
      <CardBack
        flipped={isCardFlipped}
        disable={disable}
        src={cardBack.src}
        alt="card back"
        onClick={handleClick}
      />
    </StyledCard>
  );
};
