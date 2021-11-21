
import { ADD_CHAT_MESSAGES, ADD_MESSAGES, DELETE_CHAT_MESSAGES, DELETE_MESSAGES } from "./actions";


const initialMessages = {};

export const messagesReducer = (state = initialMessages, {type, payload }) => {
    switch (type){
        case ADD_CHAT_MESSAGES:
            return  {...state, [payload]: []}

        case ADD_MESSAGES:
                return  {...state, [payload.chatId]: [...state[payload.chatId], payload.newMessage]}
        case DELETE_CHAT_MESSAGES:
            return (payload)=>{
                    const newMessages = {...state}
                    delete newMessages[payload]
                    return newMessages
            }
            case DELETE_MESSAGES: {
                const newMessages = {...state}
                newMessages[payload.chatId] = newMessages[payload.chatId].filter(
                    ({id})=> id !== payload.idToDelete)
            
                return  newMessages
                }
        default: 
        return state;
    }
}