import React from 'react';
import { Provider } from 'react-redux';
import { Router } from './component/Router';
import { store } from './store';

export const App = ()=> {
  return (
  <div className='container'>
  <Provider store={store} >
    <Router />
  </Provider>
  </div>
  )
}