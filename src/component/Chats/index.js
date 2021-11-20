import { useEffect, useCallback } from 'react';
import './Chats.css';
import { MessegeList } from '../MessegeList/MessegeList';
import { Form } from '../Form/Form';
import { ChatList } from '../ChatList';
import { Navigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../../store/messages/actions';

  export const Chats = ()=> {
    const dispatch = useDispatch()
    const arrayMes = useSelector(state=> state.messages)
  const { chatId } = useParams();
  const handleSendMessage = useCallback((newMessege) => {
    //setArrayMes((prevArrayMes) => ({...prevArrayMes, [chatId]: [...prevArrayMes[chatId], newMessege]}))
    console.log(chatId, newMessege)
    dispatch(addMessages(chatId, newMessege))
}, arrayMes, chatId)

  useEffect(()=>{
    if (arrayMes[chatId]?.length > 0 && 
        arrayMes[chatId][arrayMes[chatId]?.length-1].autor === "Вы"){
        const newMessege = {id: Math.random()*1000, autor:'Бот', text: "Cообщение"}
        dispatch(addMessages(chatId, newMessege))
      }
  },arrayMes, chatId)

  if (!arrayMes[chatId]){
    return <Navigate replace to="/chats"/>
  }

  return (
    <div className="App">
      <div className='container'>
      <div className="messegBox">
      <ChatList />
      <div className = "messeges">
        <MessegeList messeges= {arrayMes[chatId]}/>
        </div>
      </div> 
      <Form onSendMessage={handleSendMessage}/>
      </div>
    </div>
  );
}

export default Chats;
