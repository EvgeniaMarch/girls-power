import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Card } from '../../types/cards/Cards';

function CardItem({ card }: { card: Card }): JSX.Element {
  const [answer, setAnswer] = useState('');
  const handleAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event?.target.value);
  };

  const handleCheckAnswer = (event: React.FormEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <div>
        <div className="cards-topics">{card.title}</div>
      </div>
      <a className="waves-effect waves-light btn-large">{card.score}</a>
      <div>
        <h3>{`Вопрос за ${card.score}`}</h3>
        <div>{card.question}</div>
        <div className="row">
          <div className="input-field col s6">
            <input id="answer" type="text" className="validate" placeholder="Ваш ответ" value={answer} onChange={(event) => handleAnswer(event)} />
            <label className="active" htmlFor="answer">
              Введите ответ
            </label>
            <a className="waves-effect waves-light btn-small" onSubmit={handleCheckAnswer}>
              Проверить ответ
            </a>
          </div>
        </div>
      </div>

      <div></div>
      <div>{`Правильный ответ: ${card.answer}`}</div>
    </>
  );
}

export default CardItem;
