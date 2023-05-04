import { combineReducers } from 'redux';
import { cardsReducer } from './cardsreducers';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  cards: cardsReducer,
  user: userReducer,
});
