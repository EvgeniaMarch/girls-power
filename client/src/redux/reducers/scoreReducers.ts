import { Action } from '../../types/Action';
import { State } from '../../types/score/State';

const initialState: State = { score: 0 };

export const scoreReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'GET_SCORE':
      return { ...state, score: action.payload.score };
    case 'ADD_SCORE':
      console.log(action.payload);
      return { ...state, score: state.score + action.payload };

    default:
      return state;
  }
};
