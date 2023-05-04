import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Card } from '../../types/cards/Cards';

function CardItem(card: Card): JSX.Element {
  return (
    <>
      <div>
        <div className="cards-topics">{card.title}</div>
      </div>
      <button>{card.score}</button>
      <div>{card.question}</div>
      <div></div>
      <div>{card.answer}</div>
    </>
  );
}

export default CardItem;
