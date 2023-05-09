import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../../redux/store';
import './Nav.css';

function Nav(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.user);

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(user?.login);
  // }, [user, navigate]);

  const { score } = useSelector((store: RootState) => store.score);

  const dispatch = useDispatch();

  const logOut = (): void => {
    fetch('/api/auth/logout')
      .then((res) => res.json())
      .then(() => dispatch({ type: 'LOG_OUT' }));
  };
  const btn = document.querySelector('.fifnishButn');

  const handleFinishGame = () => {
    console.log('working');

    fetch(`/api/main`, {
      method: 'PUT',
      body: JSON.stringify({
        score,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  // adsContainer.addEventListener('click', async (event) => {
  //
  //   if (event.target.classList.contains('edit-ad-ok')) {
  //     const button = event.target;
  //     const adCard = button.closest('.ad-card');

  //     const form = adCard.querySelector('.edit-card');

  //     const { id } = adCard.dataset;
  //     const response = await fetch(`/api/ads/${id}`, {
  //       method: 'PUT',
  //       body: JSON.stringify({
  //         title: form.title.value,
  //         image: form.image.value,
  //         price: form.price.value,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     const { html } = await response.json();

  //     // заменяем старую карточку на новую
  //     adCard.outerHTML = html;
  //   }
  // });

  return (
    <nav>
      <div className="nav-wrapper pink darken-3">
        {user ? (
          <ul className="nav__menu">
            <li>
              <NavLink to="/home">
                <img
                  className="logo"
                  src="https://www.pngmart.com/files/21/Girl-Power-Logo-PNG-File.png"
                  alt="pic"
                />
              </NavLink>
            </li>
            <li className="hello">
              Привет, {user.login}! Твой счет: {score}
            </li>

            <li>
              <NavLink to="/home">Главная страница</NavLink>
            </li>

            <li>
              <Link onClick={logOut} to="/home">
                Выйти
              </Link>
            </li>
            <li>
              <button onClick={handleFinishGame} className="fifnishButn">
                Закончить игру
              </button>
            </li>
          </ul>
        ) : (
          <ul className="nav__menu">
            <li>
              <NavLink to="/">
                <img
                  className="logo"
                  src="https://www.pngmart.com/files/21/Girl-Power-Logo-PNG-File.png"
                  alt="pic"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/home">Главная страница</NavLink>
            </li>
            <li>
              <NavLink to="/login">Войти</NavLink>
            </li>
            <li>
              <NavLink to="/register">Зарегистрироваться</NavLink>
            </li>
          </ul>
        )}
      </div>
      <Outlet />
    </nav>
  );
}

export default Nav;
