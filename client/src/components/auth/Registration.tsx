import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../auth/Login.css';

function Registration(): JSX.Element {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPasswordMistake, setShowPasswordMistake] = useState(false);
  const [showLoginMistake, setShowLoginMistake] = useState(false);
  const [showEmailMistake, setShowEmailMistake] = useState(false);
  const [showEmptyMistake, setShowEmptyMistake] = useState(false);

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
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

    if (data.id) {
      dispatch({ type: 'SIGN_UP', payload: data });
      navigate('/home');
      return;
    }
    if (data.message === 'Пароли не совпадают') {
      setShowPasswordMistake(true);
      return;
    }
    if (data.message === 'Пользователь с таким логином уже существует') {
      setShowLoginMistake(true);
      return;
    }
    if (data.message === 'Пользователь с таким адресом электронной почты уже существует') {
      setShowEmailMistake(true);
      return;
    }
    if (data.message === 'Заполните все поля') {
      setShowEmptyMistake(true);
      return;
    }
  };

  return (
    <form onSubmit={onHandleSubmit} className="container form-login">
      <label htmlFor="login">Введи логин</label>
      <input className="input" value={login} onChange={(e) => setLogin(e.target.value)} id="login" type="login" />
      <label htmlFor="email">Введи почту</label>
      <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" />

      <label htmlFor="password">Введи пароль</label>
      <input className="input" value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" />
      <label htmlFor="password2">Повтори пароль</label>
      <input className="input" value={password2} onChange={(e) => setPassword2(e.target.value)} id="password2" type="password2" />

      <button type="submit" className="btn-ok">
        Зарегистрироваться
      </button>

      {showPasswordMistake && <div style={{ color: 'red' }}>Пароли не совпадают</div>}
      {showLoginMistake && <div style={{ color: 'red' }}>Пользователь с таким логином уже существует</div>}
      {showEmailMistake && <div style={{ color: 'red' }}>Пользователь с таким адресом электронной почты уже существует</div>}
      {showEmptyMistake && <div style={{ color: 'red' }}>Заполните все поля</div>}
    </form>
  );
}

export default Registration;
