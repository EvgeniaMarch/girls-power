import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardList from '../cards/CardList';
import Nav from '../nav/Nav';

import './App.css';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Login from '../auth/Login';
import Registration from '../auth/Registration';

function App(): JSX.Element {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
