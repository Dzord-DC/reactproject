import { onValue } from '@firebase/database';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import { auth, messagesRef } from '../../services/firebase';
import { signIn, signOut } from '../../store/profile/actions';
=======
>>>>>>> dz
import { Api } from '../API';
import { ChatList } from '../ChatList';
import Chats from '../Chats';
import { Home } from '../Home';
import { PrivateRoute } from '../PrivateRoute';
import { Profile } from '../Profile';
import { PublicOutlet } from '../PublicRoute';
import { SignUp } from '../SignUp';

export const Router = () => {
  const dispatch = useDispatch()
  const [msgs, setMsgs] = useState({})

  useEffect(()=> {
   const unsubscribe = auth.onAuthStateChanged((user)=>{
      if (user) {
        dispatch(signIn())
      } else {
        dispatch(signOut())
      }
    })
    return unsubscribe
  },[])

  useEffect(() => {
    onValue(messagesRef, (snapshot)=> {
      const newMsgs = {}

      snapshot.forEach((chatMsgsSnap)=>{
        newMsgs[chatMsgsSnap.key] = Object.values(chatMsgsSnap.val().messagesList || {});
        console.log(newMsgs)
      })
      setMsgs(newMsgs)
    })
  },[])
return(
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
<<<<<<< HEAD
    <Route path="/" element={<PublicOutlet />}>
      <Route path="" element={<Home />}/>
    </Route>
    <Route path="/signup" element={<PublicOutlet />}>
      <Route path="" element={<SignUp />}/>
    </Route>
    <Route path="/profel" element={<PrivateRoute><Profile /></PrivateRoute>}/>
=======
    <Route path="/" element={<Home />}/>
    <Route path="/profel" element={<Profile />}/>
>>>>>>> dz
    <Route path="/API" element={<Api />}/>
    <Route path="chats">
      <Route index element={
        
        <PrivateRoute><ChatList /></PrivateRoute>}/> 
      <Route path=":chatId" element={
       <PrivateRoute> <Chats msgs={msgs}/></PrivateRoute>}/>  
    </Route>
    <Route path="*" element={<h2>404</h2>}/>
  </Routes>
  </BrowserRouter>
)}