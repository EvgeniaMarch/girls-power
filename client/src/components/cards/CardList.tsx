import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CardItem from './CardItem';
import { Card } from '../../types/cards/Cards';

function CardList(): JSX.Element {
  const dispatch = useDispatch();
  const { cards } = useSelector((store: RootState) => store.cards);

  useEffect(() => {
    fetch('https://localhost:4000')
      .then((response) => response.json())
      .then((result) => dispatch({ type: 'cards/initialCards', payload: result }));
  }, []);

  return (
    <div>
      {cards.map((card: Card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;
