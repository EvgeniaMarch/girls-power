import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [showMistake, setShowMistake] = useState(false);
  const [showOtherMistake, setShowOtherMistake] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onHandleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    });

    const data = await res.json();
    console.log(data);
    if (data.id) {
      dispatch({ type: 'SIGN_IN', payload: data });
      navigate('/home');
      return;
    }
    if (
      data.message === 'Нет такого пользователя, либо пароль не соответствует'
    ) {
      setShowMistake(true);
      return;
    }
    if (data.message === 'Заполните все поля') {
      setShowOtherMistake(true);
      return;
    }
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="login">Логин</label>
      <input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        id="login"
        type="login"
      />
      <label htmlFor="password">Пароль</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
      />

      <button type="submit">Авторизироваться</button>

      {showMistake && (
        <div>Нет такого пользователя, либо пароль не соответствует</div>
      )}
      {showOtherMistake && <div>Заполните все поля</div>}
    </form>
  );
}

export default Login;
