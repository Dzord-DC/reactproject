
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword, signOut} from "firebase/auth";
import { getDatabase, ref } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAF1W8N2DylKFX0HT0QlxuQCrLjWP1YzD4",
  authDomain: "react-teach-421ae.firebaseapp.com",
  projectId: "react-teach-421ae",
  storageBucket: "react-teach-421ae.appspot.com",
  messagingSenderId: "768819145532",
  appId: "1:768819145532:web:006fb37371a23be0970c39"
};


const app = initializeApp(firebaseConfig);

export const auth =  getAuth(app);


export const signUp= async(email, pass)=> 
await createUserWithEmailAndPassword(auth, email, pass);

export const logIn= async(email, pass)=> 
await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async()=> await signOut(auth);

export const db= getDatabase(app);
export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getChatMsgsListById = (chatId) => ref(db, `messages/${chatId}/messageList`);
export const getChatMsgsById = (chatId) => ref(db, `messages/${chatId}`);
