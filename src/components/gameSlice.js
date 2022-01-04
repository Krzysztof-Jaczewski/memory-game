import { createSlice } from "@reduxjs/toolkit";
import cardBack from "./SingleCard/images/cardBack.jpg";

const gameSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    turns: 0,
    status: "initial",
    difficulty: null,
    choiceOne: null,
    choiceTwo: null,
    disable: false,
    cardBack: { src: cardBack },
  },
  reducers: {
    setNewGame: (state, { payload: shuffledCards }) => {
      state.cards = shuffledCards;
      state.turns = 0;
      state.status = "inGame";
      state.choiceOne = null;
      state.choiceTwo = null;
    },

    changeStatus: (state, { payload: newStatus }) => {
      state.status = newStatus;
    },

    setDifficulty: (state, { payload: chosenDifficulty }) => {
      state.difficulty = chosenDifficulty;
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
      state.disable = false;
    },

    updateCards: (state, { payload: srcOne, srcTwo }) => {
      state.cards.forEach((card) => {
        if (card.src === srcOne) card.matched = true;
        if (card.src === srcTwo) card.matched = true;
      });
    },

    disableCardsClick: (state) => {
      state.disable = true;
    },
  },
});
export const {
  setNewGame,
  handleChoice,
  resetChoice,
  updateCards,
  disableCardsClick,
  changeStatus,
  setDifficulty,
} = gameSlice.actions;

export const selectCardsState = (state) => state.cards;
export const selectCards = (state) => selectCardsState(state).cards;
export const selectTurns = (state) => selectCardsState(state).turns;
export const selectStatus = (state) => selectCardsState(state).status;
export const selectDifficulty = (state) =>
  selectCardsState(state).difficulty;
export const selectCardBack = (state) =>
  selectCardsState(state).cardBack;

export const selectChoiceOne = (state) =>
  selectCardsState(state).choiceOne;
export const selectChoiceTwo = (state) =>
  selectCardsState(state).choiceTwo;

export const selectDisable = (state) =>
  selectCardsState(state).disable;

export const selectIsCardFlipped = (state, card) => {
  const choiceOne = selectChoiceOne(state);
  const choiceTwo = selectChoiceTwo(state);

  return card === choiceOne || card === choiceTwo || card.matched;
};
export const selectIsEveryCardMatched = (state) =>
  selectCards(state).every(({ matched }) => matched);

export default gameSlice.reducer;
