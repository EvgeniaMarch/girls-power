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
  const [disableBtns, setDisableBtns] = useState(false);
  const dispatch = useDispatch();
  const { score } = useSelector((store: RootState) => store.score);
  const handleAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event?.target.value);
  };

  const handleCheckAnswer = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const hadleShowAnswer = () => {
    if (answer === card.answer) {
      console.log(answer, card.answer);
      dispatch({ type: 'ADD_SCORE', payload: +card.score });
      // fetch
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
    setDisableBtns(true);
  };
  return (
    <div className="main-container">
      <div>
        {/* <div className="cards-topics" style={{ color: 'black' }}>
          {card.title}
        </div> */}
      </div>

      {!modal && (
        <div className="buttons-Container">
          <button className="waves-effect waves-light btn-large score-btns pink lighten-2" onClick={handleModal} disabled={disableBtns}>
            {card.score}
          </button>
        </div>
      )}
      {modal && (
        <>
          <div className="buttons-Container">
            <button className="waves-effect waves-light btn-large score-btns pink lighten-2" onClick={handleModal} disabled={disableBtns}>
              {card.score}
            </button>
          </div>
          <div className="card">
            <h3>{`Вопрос за ${card.score}`}</h3>
            <div>{card.question}</div>

            <div className="1">
              <div className="input-field col s6">
                <form onSubmit={handleCheckAnswer}>
                  <input id="answer" type="text" className="validate input" placeholder="Ваш ответ" value={answer} onChange={(event) => handleAnswer(event)} />
                  <label className="active" htmlFor="answer"></label>
                  <button className="waves-effect waves-light btn-small btn-ok-card" onClick={hadleShowAnswer}>
                    Проверить ответ
                  </button>
                </form>
              </div>
            </div>

            {checkAnswer && (
              <>
                <div>{`${result}`}</div>
                <div>
                  <button className="waves-effect waves-light btn-small btn-ok-card" onClick={handleModal}>
                    Закрыть
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default CardItem;
