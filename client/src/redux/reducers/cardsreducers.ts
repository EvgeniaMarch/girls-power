import { Action } from '../../types/Action';
import { State } from '../../types/cards/State';

const initialState: State = { cards: [] };

export const cardsReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'cards/initialCards':
      return { ...state, cards: action.payload };

    default:
      return state;
  }
};
