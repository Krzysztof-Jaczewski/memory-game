import Snowfall from "react-snowfall";
import { Board } from "./components/Board";
import { Buttons } from "./components/Buttons";
import { Title } from "./components/Title";

export const App = () => {
  return (
    <>
      <Snowfall />
      <Title />
      <Board />
      <Buttons />
    </>
  );
};

export default App;
