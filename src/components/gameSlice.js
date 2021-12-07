import { createSlice, nanoid } from "@reduxjs/toolkit";
import cardBack from "./SingleCard/images/cardBack.jpg";
import { cardsArray } from "./SingleCard/cardsArray";

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
    cardImages: cardsArray,
  },
  reducers: {
    startNewGame: (state, { payload: value }) => {
      const shuffledCards = state.cardImages
        .slice(value)
        .concat(state.cardImages.slice(value))
        .sort(() => Math.random() - 0.5)
        .map((card) => ({
          src: card.src,
          matched: false,
          id: nanoid(),
        }));

      if (value === 6) {
        state.difficulty = "beginner";
      }
      if (value === 4) {
        state.difficulty = "advanced";
      }
      if (value === 0) {
        state.difficulty = "expert";
      }

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
      state.cards.map((card) => {
        if (card.src === srcOne) return (card.matched = true);
        if (card.src === srcTwo) return (card.matched = true);
        else return card;
      });
    },

    setDisableTrue: (state) => {
      state.disable = true;
    },
  },
});
export const {
  startNewGame,
  handleChoice,
  resetChoice,
  updateCards,
  setDisableTrue,
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
