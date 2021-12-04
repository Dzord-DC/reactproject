import { ADD_CHAT, DELETE_CHAT, SET_CHATS } from "../actions"
import { chatsReducer } from "../reducer"


describe('Test Chat reduset',()=> {
    it('set chat',()=> {
        const chat = [{id: 1, chat:'test'}]
        const resalt = chatsReducer([],{type: SET_CHATS, payload:chat})
        expect(resalt).toEqual(chat)
    })

    it('add chat',()=> {
        const chat = {id: 1, chat:'test'}
        const resalt = chatsReducer([],{type: ADD_CHAT, payload:chat})
        expect(resalt).toEqual([chat])
    })

    it('delete chat',()=> {
        const chat = {chatId: 1, chat:'test'}
        const resalt = chatsReducer([chat],{type: DELETE_CHAT, payload: 1})
        expect(resalt).toEqual([])
    })
})