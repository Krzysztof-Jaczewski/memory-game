import { useSelector } from "react-redux";
import { easy, hard, medium } from "../../parameters";
import { getScoreFromLocalStorage } from "../../scoreLocalStorage";
import { selectTurns } from "../gameSlice";
import { Header, ScoreBoard, Text } from "./style";

export const Score = () => {
  const turns = useSelector(selectTurns);

  return (
    <ScoreBoard>
      <Header>Score</Header>
      <Text>current score: {turns}</Text>
      <Header>Your Best Scores</Header>
      <Text>
        {easy}: {getScoreFromLocalStorage(easy)}
      </Text>
      <Text>
        {medium}: {getScoreFromLocalStorage(medium)}
      </Text>
      <Text>
        {hard}: {getScoreFromLocalStorage(hard)}
      </Text>
    </ScoreBoard>
  );
};
