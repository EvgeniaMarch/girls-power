import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Card } from '../../types/cards/Cards';
import './CardItem.css';

function CardItem({ card }: { card: Card }): JSX.Element {
  const [answer, setAnswer] = useState('');
  const [modal, setModal] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [result, setResult] = useState('');
  const handleAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event?.target.value);
  };

  const handleCheckAnswer = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const hadleShowAnswer = () => {
    if (answer === card.answer) {
      console.log(answer, card.answer);

      setResult('Верно!');
      console.log(result);
    } else {
      setResult(`Ошибка! Правильный ответ ${card.answer}`);
      console.log(result);
    }
    setCheckAnswer(true);
    setAnswer('');
  };

  const handleModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <div className="main-container">
      <div>
        {/* <div className="cards-topics" style={{ color: 'black' }}>
          {card.title}
        </div> */}
      </div>

      {!modal && (
        <button className="waves-effect waves-light btn-large score-btns" onClick={handleModal}>
          {card.score}
        </button>
      )}
      {modal && (
        <div>
          <h3>{`Вопрос за ${card.score}`}</h3>
          <div>{card.question}</div>
          <div className="row">
            <div className="input-field col s6">
              <form onSubmit={handleCheckAnswer}>
                <input id="answer" type="text" className="validate" placeholder="Ваш ответ" value={answer} onChange={(event) => handleAnswer(event)} />
                <label className="active" htmlFor="answer">
                  Введите ответ
                </label>
                <button className="waves-effect waves-light btn-small" onClick={hadleShowAnswer}>
                  Проверить ответ
                </button>
              </form>
            </div>
          </div>

          {checkAnswer && (
            <>
              <div>{`${result}`}</div>
              <div>
                <button className="waves-effect waves-light btn-small" onClick={handleModal}>
                  Закрыть
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CardItem;
