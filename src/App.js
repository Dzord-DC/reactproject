import { useState, useEffect, useCallback } from 'react';
import './App.css';
import { MessegeList } from './component/MessegeList/MessegeList';
import ItemList from './component/ItemList/ItemList';
import { Form } from './component/Form/Form';

// import { Message } from './component/Message/Messege';

function App() {
  const listAutor =useState([{id:10, autor:'Бот1'},{id:11, autor:'Бот2'},{id:12, autor:'Бот3'}])
  const [arrayMes, setArrayMes] = useState([])
  
  const handleSendMessage = useCallback((newMessege) => {
    setArrayMes(prevArrayMes => [...arrayMes, newMessege])
  }, [arrayMes])

  useEffect(()=>{
    if (arrayMes.length > 0 && arrayMes[arrayMes.length-1].autor === "Вы"){
        const newMessege = {id: arrayMes.length, autor:'Бот', text: "Cообщение"}
        setArrayMes((prevArrayMes) => [...prevArrayMes, newMessege])
      }
  },[arrayMes])

  return (
    <div className="App">
      <div className='container'>
      <div className="messegBox">
      <ItemList messegList = {listAutor[0]}/>
      <div className = "messeges">
        
        <MessegeList messeges= {arrayMes}/>
        </div>
      </div> 
      <Form onSendMessage={handleSendMessage}/>
      </div>
    </div>
  );
}

export default App;
