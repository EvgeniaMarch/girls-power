import { Card } from './cards/Cards';
import { User } from './users/User';

export type Action =
  | { type: 'cards/initialCards'; payload: Card[] }
  | { type: 'GET_USER'; payload: User };
