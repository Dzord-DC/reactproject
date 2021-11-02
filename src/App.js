import { useState, useEffect } from 'react';
import './App.css';
import { MessegeList } from './component/MessegeList/MessegeList';
// import { Message } from './component/Message/Messege';

function App() {
  const [text, setText] = useState('')
  const autor = "Вы"
  const [arrayMes, setArrayMes] = useState([])
  const hendleChange = (e) => {
    setText(e.target.value)
  }
  const hendleClick = (e) => {
    e.preventDefault()
    const id =arrayMes.length
    const newMesseges = {id, autor, text}
    setArrayMes((prevArrayMes) => [...prevArrayMes, newMesseges])
    setText("")
  }

  useEffect(()=>{
    if (arrayMes.length > 0 && arrayMes[arrayMes.length-1].autor === "Вы"){
        const newMesseges = {id: arrayMes.length, autor:'Бот', text: "Cообщение"}
        setArrayMes((prevArrayMes) => [...prevArrayMes, newMesseges])
      }
    setText("")
  },[arrayMes.length])

  return (
    <div className="App">
      <div className = "messeges">
      <MessegeList messeges= {arrayMes}/>
      </div>
      
      <form>
        <input type="text" value={text} onChange={hendleChange} className="inputText"/>
        <button  onClick={hendleClick} type='submit' className="inputBut">Отправить</button>
      </form>
    </div>
  );
}

export default App;
