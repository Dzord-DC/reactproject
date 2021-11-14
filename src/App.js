import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChatList } from './component/ChatList';
import Chats from './component/Chats';
import { Home } from './component/Home';
import { Profile } from './component/Profile';
import { store } from './store';


export const App = ()=> (
  <div className='container'>
  <Provider store={store}>
  <BrowserRouter>
  <ul>
    <li>
      <Link to="/"> Home</Link>
    </li>
    <li>
      <Link to="/profel"> Profel</Link>
    </li>
    <li>
      <Link to="/chats">Chats</Link>
    </li>
  </ul>

  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/profel" element={<Profile />}/>
    <Route path="chats">
      <Route index element={<ChatList/>}/> 
      <Route path=":chatId" element={<Chats/>}/>  
    </Route>
    <Route path="*" element={<h2>404</h2>}/>
  </Routes>
  </BrowserRouter>
  </Provider>
  </div>
)