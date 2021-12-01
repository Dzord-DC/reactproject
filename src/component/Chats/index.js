import './Chats.css';
import { MessegeList } from '../MessegeList/MessegeList';
import { Form } from '../Form/Form';
import { ChatList } from '../ChatList';
import { Navigate, useParams } from 'react-router';
import { push } from 'firebase/database';
import {  getChatMsgsListById } from '../../services/firebase';
import { useCallback } from 'react';

  export const Chats = ({msgs})=> {
    const { chatId } = useParams();   
    const handleSendMessage = useCallback((newMessege) => {
    push(getChatMsgsListById(chatId), newMessege)
},[chatId])

  if (!msgs[chatId]){
    return <Navigate replace to="/chats"/>
  }
 console.log(msgs)
  return (
    <div className="App">
      <div className='container'>
      <div className="messegBox">
      <ChatList />
      <div className = "messeges">
        <MessegeList messeges= {msgs[chatId]}/>
        </div>
      </div> 
      <Form onSendMessage={handleSendMessage}/>
      </div>
    </div>
  );
}

export default Chats;
