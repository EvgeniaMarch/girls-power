import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CardItem from './CardItem';
import { Card } from '../../types/cards/Cards';

function CardTopics(): JSX.Element {
  return (
    <div style={{ color: 'black' }}>
      <div>Великие женщины</div>
      <div>Великие неженщины</div>
      <div>Интересные факты о животных</div>
      <div>Космос</div>
      <div>Эмоджи ребусы</div>
    </div>
  );
}

export default CardTopics;
