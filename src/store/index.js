import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { chatsReducer } from "./chat/reducer";
import { messagesReducer } from "./messages/reducer";
import storage from "redux-persist/lib/storage";
import { profileReducer } from "./profile/reducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { articlesReducer } from "./api/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
    key: 'gbMsngr',
    storage,
}

const persistedReducer = persistReducer(config,combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
    articles: articlesReducer
}) );

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
 );
 export const persisor = persistStore(store);
