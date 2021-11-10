import React, { useState } from "react"
import ItemList from "../ItemList/ItemList"

export const ChatList = ()=> {
    const listAutor =useState([
    {id:'chat1', autor:'Бот1'},
    {id:'chat2', autor:'Бот2'},
    {id:'chat3', autor:'Бот3'}])
 
    return <ItemList messegList = {listAutor[0]}/>
}