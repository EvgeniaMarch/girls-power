import { combineReducers } from 'redux';
import { cardsReducer } from './cardsreducers';
import userReducer from './userReducer';
import { scoreReducer } from './scoreReducers';

export const rootReducer = combineReducers({
  cards: cardsReducer,
  user: userReducer,
  score: scoreReducer,
});
