import { State } from '../../types/users/State';
import { Action } from '../../types/Action';

const initialState: State = {
  user: undefined,
};

const userReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SIGN_UP':
      return {
        ...state,
        user: action.payload,
      };
    case 'SIGN_IN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: undefined,
      };

    default:
      return state;
  }
};

export default userReducer;
