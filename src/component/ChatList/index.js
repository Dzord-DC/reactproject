import { Button, List, ListItem, TextField } from "@mui/material"
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import './ChatList.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/chat/actions";
import { addChatMessages, deleteChatMessages } from "../../store/messages/actions";
import { selectCats } from "../../store/chat/selectors";
//*import ItemList from "../ItemList/ItemList"

export const ChatList = ()=> {
    const chatList = useSelector(selectCats)
    const dispatch = useDispatch()
    //const arrayMes = useSelector(state=> state.messages)
    const [newChatName, setNewChatName] = useState('')
    const hendelChatName = (e)=>{
        setNewChatName (e.target.value)
    }
    const hendelAddchat = (e)=>{
        e.preventDefault();
        const newId ='chat' + Math.random()*100;
        dispatch(addChat({id:newId,autor:newChatName}))   
        dispatch(addChatMessages(newId))
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
     <TextField value = {newChatName} onChange={hendelChatName}/> <Button type='submit' onClick={hendelAddchat}>Add chat</Button></form>
    </div>
}