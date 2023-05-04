import { User } from '../users/User';
import { Action } from '../Action';

export type State = {
  user: User | undefined;
};

export type ContextState = {
  state: State;
  dispatch: (value: Action) => void;
};
