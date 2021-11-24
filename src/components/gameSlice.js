import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    turns: 0,
    cardImages: [
      { src: "./images/bell.png" },
      { src: "./images/candy.png" },
      { src: "./images/cookie.png" },
      { src: "./images/gift.png" },
      { src: "./images/santa.png" },
      { src: "./images/sock.png" },
    ],
  },
  reducers: {
    shuffleCards: (store) => {
      const shuffledCards = store.cardImages
        .concat(store.cardImages)
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));

      store.cards = shuffledCards;
    },
  },
});
export const { shuffleCards } = gameSlice.actions;

export const selectCardsState = (state) => state.cards;
export const selectCards = (state) => selectCardsState(state).cards;

export default gameSlice.reducer;
