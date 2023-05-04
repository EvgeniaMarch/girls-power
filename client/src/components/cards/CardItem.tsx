import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Card } from '../../types/cards/Cards';

function CardItem({ card }: { card: Card }): JSX.Element {
  return (
    <>
      <div>
        <div className="cards-topics">{card.title}</div>
      </div>
      <button>{card.score}</button>
      <div>
        <h3>{`Вопрос за ${card.score}`}</h3>
        <div>{card.question}</div>
        <div className="row">
          <div className="input-field col s6">
            <input value="" id="answer" type="text" className="validate" placeholder="Ваш ответ" />
            <label className="active" htmlFor="answer">
              Введите ответ
            </label>
            <a className="waves-effect waves-light btn-small">Проверить ответ</a>
          </div>
        </div>
      </div>

      <div></div>
      <div>{`Правильный ответ: ${card.answer}`}</div>
    </>
  );
}

export default CardItem;