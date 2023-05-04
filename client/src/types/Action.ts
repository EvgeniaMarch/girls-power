import { Card } from './cards/Cards';

export type Action = { type: 'cards/initialCards'; payload: Card[] };
