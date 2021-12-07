import { useSelector } from "react-redux";
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
      <Text>Beginner: {getScoreFromLocalStorage("beginner")}</Text>
      <Text>Advenced: {getScoreFromLocalStorage("advanced")}</Text>
      <Text>Expert: {getScoreFromLocalStorage("expert")}</Text>
    </ScoreBoard>
  );
};
