import Snowfall from "react-snowfall";
import { Audio } from "./components/Audio";
import { Board } from "./components/Board";
import { Buttons } from "./components/Buttons";
import { Title } from "./components/Title";

export const App = () => {
  return (
    <>
      <Audio />
      <Snowfall />
      <Title />
      <Board />
      <Buttons />
    </>
  );
};

export default App;
