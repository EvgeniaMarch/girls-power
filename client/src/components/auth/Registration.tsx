import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Registration(): JSX.Element {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHandleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/api/auth/register', {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ login, email, password, password2 }),
    });
    const data = await res.json();
    console.log(data);
    dispatch({ type: 'SIGN_UP', payload: data });
    navigate('/home');
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="login">Введи логин</label>
      <input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        id="login"
        type="login"
      />
      <label htmlFor="email">Введи почту</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        type="email"
      />

      <label htmlFor="password">Введи пароль</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
      />
      <label htmlFor="password2">Повтори пароль</label>
      <input
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        id="password2"
        type="password2"
      />

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default Registration;
