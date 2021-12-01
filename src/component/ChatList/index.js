import { Button, List, ListItem, TextField } from "@mui/material"
import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import './ChatList.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch, useSelector } from "react-redux";
import { addChat, addChatWithFb, deleteChat, initChatsTraking } from "../../store/chat/actions";
import { addChatMessages, deleteChatMessages } from "../../store/messages/actions";
import { selectCats } from "../../store/chat/selectors";
import { onValue, set } from "@firebase/database";
import { chatsRef, getChatMsgsById, getChatRefById } from "../../services/firebase";

export const ChatList = ()=> {
    const chatList = useSelector(selectCats)
    const dispatch = useDispatch()
    const [newChatName, setNewChatName] = useState('')

    useEffect(() => {
      dispatch(initChatsTraking())
    }, [])

    const hendelChatName = (e)=>{
        setNewChatName (e.target.value)
    }
    const hendelAddchat = (e)=>{
        e.preventDefault();
        const newId ='chat' + Math.round(Math.random()*10000000);
        dispatch(addChatWithFb({id:newId,autor:newChatName}))   
        //dispatch(addChatMessages(newId))

        //set(getChatRefById(newId), {id:newId,autor:newChatName})
        //set(getChatMsgsById(newId), {empty: true})

        setNewChatName('')    
    }
    const hendleDeleteChat = (id)=>{
        dispatch(deleteChat(id))
      dispatch(deleteChatMessages(id))
      }

    return <div>
        <List sx={{ width: 'auto', maxWidth: 360, bgcolor: 'background.paper' }}>
          {chatList.map((item) => (
            <NavLink 
            className='chat-link' 
            style={({isActive})=> ({ backgroundColor: isActive? 'gainsboro': 'white'})} 
            to= {`/chats/${item.id}`}  
            key={item.id}> 
            <ListItem
          disableGutters
          secondaryAction={
            <IconButton onClick={()=>hendleDeleteChat(item.id)}>
              <HighlightOffIcon />
            </IconButton>
          }
        >
          <ListItemText primary={` ${item.autor}`} />
        </ListItem> 
            </NavLink>
          ))}
        </List>
        <form>
     <TextField value = {newChatName} onChange={hendelChatName}/> 
     <Button type='submit' onClick={hendelAddchat}>Add chat</Button>
     </form>
    </div>
}