import { Card } from './cards/Cards';
import { User } from './users/User';
import { Score } from './score/Score';

export type Action =
  | { type: 'cards/initialCards'; payload: Card[] }
  | { type: 'GET_USER'; payload: User }
  | { type: 'SIGN_UP'; payload: User }
  | { type: 'SIGN_IN'; payload: User }
  | { type: 'LOG_OUT' }
  | { type: 'GET_SCORE'; payload: Score }
  | { type: 'ADD_SCORE'; payload: number }
  | { type: 'UP_SCORE'; payload: Score }
  | { type: 'UPDATE_SCORE' };
