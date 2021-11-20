import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import './ItemList.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {  NavLink } from 'react-router-dom';;


export default function ItemList({messegList, deleteChat}) {
  const hendleDeleteChat = (id)=>{
    deleteChat(id)
    console.log(id)
  }
  return (
    <List sx={{ width: 'auto', maxWidth: 360, bgcolor: 'background.paper' }}>
      {messegList.map((item) => (
        <NavLink className='chat-link' style={({isActive})=> ({ backgroundColor: isActive? 'gainsboro': 'white'})} to= {`/chats/${item.id}`}  key={item.id}> 
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
  );
}