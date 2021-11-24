import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./components/gameSlice";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
