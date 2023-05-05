import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../cards/CardList';
import Nav from '../nav/Nav';

import './App.css';
import { store } from '../../redux/store';
import Login from '../auth/Login';
import Registration from '../auth/Registration';
import * as api from './api';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .checkUser()
      .then((data) => dispatch({ type: 'GET_USER', payload: data }));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="home" element={<CardList />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
