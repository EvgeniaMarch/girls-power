import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../../redux/store";
import "./Nav.css";

function Nav(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();

  const logOut = (): void => {
    fetch("/api/auth/logout")
      .then((res) => res.json())
      .then(() => dispatch({ type: "LOG_OUT" }));
  };

  return (
    <nav>

      <div className='nav-wrapper pink darken-3'>
        {/* <a href='#' className='brand-logo'>
          Logo
        </a> */}

        {user && <h3>Привет, {user.login}!</h3>}
        <ul className='nav__menu'>
          <li>
            <NavLink to='/'>
              <img
                className='logo'
                src='https://www.pngmart.com/files/21/Girl-Power-Logo-PNG-File.png'
                alt='pic'
              />
            </NavLink>
          </li>
          <li>
            <NavLink to='/'>Главная страница</NavLink>
          </li>

          {!user ? (
            <>
              <li>
                <NavLink to='/login'>Войти</NavLink>
              </li>
              <li>
                <NavLink to='/register'>Зарегистрироваться</NavLink>
              </li>
            </>
          ) : (
            <li>
              <Link onClick={logOut} to='/logout'>


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
      </div>
      <Outlet />
    </nav>
  );
}

export default Nav;
