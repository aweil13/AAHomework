import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  const addLoggingToDispatch = store => next => action => {
      return next(action);
  }
  const dispatch = addLoggingToDispatch(store)(dispatch);
  return Object.assign({}, store, {dispatch});

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
