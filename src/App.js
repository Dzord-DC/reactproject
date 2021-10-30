import { useState, useEffect } from 'react';
import './App.css';
// import { Message } from './component/Message/Messege';

function App() {
  let [text, setText] = useState('')
  let autor = "Вы"
  const [arrayMes, setArrayMes] = useState([])
  const hendleChange = (e) => {
    setText(e.target.value)
  }
  const hendleClick = (e) => {
    e.preventDefault()
    autor = "Вы"
    const id =arrayMes.length
    const arrayMesseges = {id, autor, text}
    arrayMes.push(arrayMesseges)
    setArrayMes(arrayMes)
    setText("")
  }

  let outputMes = arrayMes.map(item=>{
    return <p key={item.id}>
      <span>{item.autor}: </span>
      <span>{item.text}</span>
    </p>
  })

  useEffect(()=>{
    if (arrayMes.length > 0) {
      if (arrayMes[arrayMes.length-1].autor === "Вы"){
        const autor = "Бот"
        const text = "Cообщение"
        const id = arrayMes.length
        const arrayMesseges = {id, autor, text}
        arrayMes.push(arrayMesseges)
        setArrayMes(arrayMes)
      }
    }
    setText("")
  },[arrayMes.length])

  return (
    <div className="App">
      <div className = "messeges">
        {outputMes}
      </div>
      <form>
        <input type="text" value={text} onChange={hendleChange} className="inputText"/>
        <button  onClick={hendleClick} type='submit' className="inputBut">Отправить</button>
      </form>
    </div>
  );
}

export default App;
