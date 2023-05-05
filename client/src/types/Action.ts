import { Card } from './cards/Cards';
import { User } from './users/User';

export type Action =
  | { type: 'cards/initialCards'; payload: Card[] }
  | { type: 'GET_USER'; payload: User }
  | { type: 'SIGN_UP'; payload: User }
  | { type: 'SIGN_IN'; payload: User }
  | { type: 'LOG_OUT' };
