import './Chats.css';
import { MessegeList } from '../MessegeList/MessegeList';
import { Form } from '../Form/Form';
import { ChatList } from '../ChatList';
import { Navigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageWithReply } from '../../store/messages/actions';
import { selectMessages } from '../../store/messages/selector';

  export const Chats = ()=> {
    const { chatId } = useParams();   
    const arrayMes = useSelector(selectMessages)
    const dispatch = useDispatch()
 
  const handleSendMessage = (newMessege) => {
    dispatch(addMessageWithReply(chatId, newMessege))
}

 /* useEffect(()=>{
    if (arrayMes[chatId]?.length > 0 && 
        arrayMes[chatId][arrayMes[chatId]?.length-1].autor === "Вы"){
        const newMessege = {id: Math.random()*1000, autor:'Бот', text: "Cообщение"}
        //dispatch(addMessages(chatId, newMessege))
        handleSendMessage(newMessege)
      }
  },[chatId, arrayMes])*/

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
