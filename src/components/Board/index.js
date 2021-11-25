import { MainContent, StyledBoard } from "./styled";
import { useSelector } from "react-redux";
import { selectCards, selectTurns } from "../gameSlice";
import { SingleCard } from "../SingleCard";

export const Board = () => {
  const cards = useSelector(selectCards);
  const turns = useSelector(selectTurns);

  console.log(cards, turns);
  return (
    <MainContent>
      <StyledBoard>
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </StyledBoard>
    </MainContent>
  );
};
