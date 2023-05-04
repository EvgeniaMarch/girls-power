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

    default:
      return state;
  }
};
export default userReducer;
