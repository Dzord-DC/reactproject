import React from 'react';
import { Provider } from 'react-redux';
import { Router } from './component/Router';

import { persisor, store } from './store';
import { CircularProgress } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';

export const App = ()=> {
  return (
  <div className='container'>
  <Provider store={store} >
    <PersistGate persistor={persisor} loading={<CircularProgress/>}>
    <Router />
    </PersistGate>
  </Provider>
  </div>
  )
}