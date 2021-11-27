import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Api } from '../API';
import { ChatList } from '../ChatList';
import Chats from '../Chats';
import { Home } from '../Home';
import { PrivateRoute } from '../PrivateRoute';
import { Profile } from '../Profile';
import { PublicRoute } from '../PublicRoute';

export const Router = () => (
    <BrowserRouter>
  <ul>
    <li>
      <Link to="/"> Home</Link>
    </li>
    <li>
      <Link to="/profel"> Profel</Link>
    </li>
    <li>
      <Link to="/API"> API</Link>
    </li>
    <li>
      <Link to="/chats">Chats</Link>
    </li>
  </ul>

  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/profel" element={<PrivateRoute><Profile /></PrivateRoute>}/>
    <Route path="/API" element={<Api />}/>
    <Route path="chats">
      <Route index element={
        <ChatList />}/> 
      <Route path=":chatId" element={
       <PrivateRoute> <Chats /></PrivateRoute>}/>  
    </Route>
    <Route path="*" element={<h2>404</h2>}/>
  </Routes>
  </BrowserRouter>
)