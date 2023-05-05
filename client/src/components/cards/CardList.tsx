import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CardItem from './CardItem';
import { Card } from '../../types/cards/Cards';
import CardTopics from './CardTopics';
import './CardItem.css';

function CardList(): JSX.Element {
  const dispatch = useDispatch();
  const { cards } = useSelector((store: RootState) => store.cards);

  useEffect(() => {
    fetch('http://localhost:4000/api/main')
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        dispatch({ type: 'cards/initialCards', payload: result });
      });
  }, []);

  return (
    <div className='main'>
      <CardTopics />
      <div className='all-btns'>
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
