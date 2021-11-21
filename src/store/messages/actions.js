export const ADD_CHAT_MESSAGES = 'MESSAGES::ADD_CHAT_MESSAGES'
export const ADD_MESSAGES = 'MESSAGES::ADD_MESSAGES'
export const DELETE_CHAT_MESSAGES = 'MESSAGES::DELETE_CHAT_MESSAGES'
export const DELETE_MESSAGES = 'MESSAGES::DELETE_MESSAGES'

export const addChatMessages = (newId) => ({
    type: ADD_CHAT_MESSAGES,
    payload: newId
})

export const addMessages = (chatId, newMessage) => ({
    type: ADD_MESSAGES,
    payload: {chatId, newMessage}
})

export const deleteChatMessages = (id) => ({
    type: DELETE_CHAT_MESSAGES,
    payload: {chatId:id}
})

export const deleteMessages = (chatId, idToDlete) => ({
    type: DELETE_CHAT_MESSAGES,
    payload: {chatId, idToDlete}
})

let timeout
export const addMessageWithReply = (chatId, newMessage) => (dispatch) => {
    dispatch(addMessages(chatId, newMessage ))

    if (newMessage.autor === "Вы"){
        if (timeout){
            clearTimeout(timeout)
        }
        timeout = setTimeout(()=>{
            const botMessage = {
                id: Math.random()*1000, 
                autor:'Бот', 
                text: "Cообщение"}
            dispatch(addMessages(chatId, botMessage))
        }, 1000)
      }
}