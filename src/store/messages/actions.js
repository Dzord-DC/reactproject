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

export const deleteChatMessages = (delId) => ({
    type: DELETE_CHAT_MESSAGES,
    payload: delId
})

export const deleteMessages = (chatId, idToDlete) => ({
    type: DELETE_CHAT_MESSAGES,
    payload: {chatId, idToDlete}
})