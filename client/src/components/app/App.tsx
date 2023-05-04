import React from 'react';
import CardList from '../cards/CardList';

import './App.css';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <CardList />
    </Provider>
  );
}

export default App;
