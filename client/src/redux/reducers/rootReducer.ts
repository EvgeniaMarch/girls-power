import { combineReducers } from 'redux';
import { cardsReducer } from './cardsreducers';

export const rootReducer = combineReducers({
  cards: cardsReducer,
});
