import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CardItem from './CardItem';
import { Card } from '../../types/cards/Cards';
import './CardItem.css';

function CardTopics(): JSX.Element {
  return (
    <div style={{ color: 'black' }} className="topics">
      <div className="topic-item">Великие женщины</div>
      <div className="topic-item">Великие неженщины</div>
      <div className="topic-item">Интересные факты о животных</div>
      <div className="topic-item">Космос</div>
      <div className="topic-item">Эмоджи ребусы</div>
    </div>
  );
}

export default CardTopics;
