import { useState, useEffect } from 'react';
import './App.css';
import { MessegeList } from './component/MessegeList/MessegeList';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import ItemList from './component/ItemList/ItemList';

// import { Message } from './component/Message/Messege';

function App() {
  const listAutor =useState([{id:10, autor:'Бот1'},{id:11, autor:'Бот2'},{id:12, autor:'Бот3'}])
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

 // Автофокус при любой непонятной ситуации 
  useEffect(()=> {
    document.getElementById('standard-basic').focus()
  })


  return (
    <div className="App">
      <div className='container'>
      <div className="messegBox">
      <ItemList messegList = {listAutor[0]}/>
      <div className = "messeges">
        
        <MessegeList messeges= {arrayMes}/>
        </div>
      </div> 
      <form>
      <TextField id="standard-basic" 
      label="Сообшение"
       variant="standard" 
       value={text} 
       onChange={hendleChange} 
       className="inputText"
      />
        <Button variant='contained' type='submit' onClick={hendleClick}>Отправить</Button>
      </form>
      </div>
    </div>
  );
}

export default App;
