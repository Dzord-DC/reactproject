import { onValue, set } from "@firebase/database"
import { chatsRef, getChatMsgsById, getChatRefById } from "../../services/firebase"

export const ADD_CHAT = 'CHATS::ADD_CHAT'
export const DELETE_CHAT = 'CHATS::DELETE_CHATS'
export const SET_CHATS = 'CHATS::SET_CHAT'

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat
})

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: {chatId: id}
})


export const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats
})

export const addChatWithFb = (newChat) => (dispatch) => {
    set(getChatRefById(newChat.id), newChat)
    set(getChatMsgsById(newChat.id), {empty: true})
}

export const initChatsTraking = () => (dispatch) => {
    onValue(chatsRef, (chatsSnap) =>{
        console.log(chatsSnap)
        const newChats = []

        chatsSnap.forEach((snapshot)=> {
          newChats.push(snapshot.val())
        })

        dispatch(setChats(newChats))
}
)}