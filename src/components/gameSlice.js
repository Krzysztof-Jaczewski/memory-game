import { createSlice, nanoid } from "@reduxjs/toolkit";
import snowman from "./SingleCard/images/snowman.png";
import candy from "./SingleCard/images/candy.png";
import coockie from "./SingleCard/images/cookie.png";
import gift from "./SingleCard/images/gift.png";
import santa from "./SingleCard/images/santa.png";
import sock from "./SingleCard/images/sock.png";
import tree from "./SingleCard/images/tree.png";
import snowflake from "./SingleCard/images/snowflake.png";
import cardBack from "./SingleCard/images/cardBack.jpg";

const gameSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    turns: 0,
    choiceOne: null,
    choiceTwo: null,
    disabled: false,
    cardBack: { src: cardBack },
    cardImages: [
      { src: snowman },
      { src: candy },
      { src: coockie },
      { src: gift },
      { src: santa },
      { src: sock },
      { src: tree },
      { src: snowflake },
    ],
  },
  reducers: {
    startNewGame: (state) => {
      const shuffledCards = state.cardImages
        .concat(state.cardImages)
        .sort(() => Math.random() - 0.5)
        .map((card) => ({
          src: card.src,
          matched: false,
          id: nanoid(),
        }));

      state.cards = shuffledCards;
      state.turns = 0;
      state.choiceOne = null;
      state.choiceTwo = null;
    },

    handleChoice: (state, { payload: card }) => {
      state.choiceOne
        ? (state.choiceTwo = card)
        : (state.choiceOne = card);
    },

    resetChoice: (state) => {
      state.choiceTwo = null;
      state.choiceOne = null;
      state.turns += 1;
      state.disabled = false;
    },

    updateCards: (state, { payload: src }) => {
      state.cards.map((card) => {
        if (card.src === src) return (card.matched = true);
        else return card;
      });
    },
    setDisabledTrue: (state) => {
      state.disabled = true;
    },
  },
});
export const {
  startNewGame,
  handleChoice,
  resetChoice,
  updateCards,
  setDisabledTrue,
} = gameSlice.actions;

export const selectCardsState = (state) => state.cards;
export const selectCards = (state) => selectCardsState(state).cards;
export const selectTurns = (state) => selectCardsState(state).turns;
export const selectCardBack = (state) =>
  selectCardsState(state).cardBack;

export const selectChoiceOne = (state) =>
  selectCardsState(state).choiceOne;
export const selectChoiceTwo = (state) =>
  selectCardsState(state).choiceTwo;

export const selectDisabled = (state) =>
  selectCardsState(state).disabled;

export default gameSlice.reducer;
