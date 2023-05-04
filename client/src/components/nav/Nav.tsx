import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function Nav(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();

  const logOut = (): void => {
    fetch('/logout')
      .then((res) => res.json())
      .then(() => dispatch({ type: 'LOG_OUT' }));
  };

  return (
    <nav>
      <div className='nav-wrapper'>
        {/* <a href='#' className='brand-logo'>
          Logo
        </a> */}

        {user && <h3>Hello, {user.name}!</h3>}
        <ul className='nav__menu'>
          <li>
            <NavLink to='/'>Главная страничка</NavLink>
          </li>

          {!user ? (
            <>
              <li>
                <NavLink to='/signin'>signIn</NavLink>
              </li>
              <li>
                <NavLink to='/signup'>signUp</NavLink>
              </li>
            </>
          ) : (
            <li>
              <Link onClick={logOut} to='/logout'>
                LogOut
              </Link>
            </li>
          )}
        </ul>
      </div>
      <Outlet />
    </nav>
  );
}

export default Nav;
