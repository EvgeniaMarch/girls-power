import React, { useEffect } from 'react';
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

  const dispatch = useDispatch();

  const logOut = (): void => {
    fetch('/api/auth/logout')
      .then((res) => res.json())
      .then(() => dispatch({ type: 'LOG_OUT' }));
  };

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
            <li>Привет, {user.login}!</li>
            <li>
              <NavLink to="/home">Главная страница</NavLink>
            </li>
            <li>
              <Link onClick={logOut} to="/home">
                Выйти
              </Link>
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
        <Outlet />
      </div>
    </nav>
  );
}

export default Nav;
