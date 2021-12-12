import { Board } from "./components/Board";
import { Buttons } from "./components/Buttons";
import { Title } from "./components/Title";

export const App = () => {
  return (
    <>
      <Title />
      <Board />
      <Buttons />
    </>
  );
};

export default App;
