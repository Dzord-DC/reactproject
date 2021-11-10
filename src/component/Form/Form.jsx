import React, { useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export const Form = ({onSendMessage})=>{
    const [text, setText] = useState('')
    const inputRef = useRef()
    const autor = "Вы"
    const hendleChange = (e) => {
        setText(e.target.value)
      }
    const hendleClick = (e) => {
        e.preventDefault()
        const id = Math.random()*1000 / Math.random()*10
        onSendMessage({id, autor, text})
        setText("")
      }

      // Автофокус при любой непонятной ситуации 
  useEffect(()=> {
    inputRef.current.focus()
  })

return <form>
<TextField id="standard-basic" 
label="Сообшение"
 variant="standard" 
 value={text} 
 onChange={hendleChange} 
 className="inputText"
 inputRef={inputRef}
/>
  <Button variant='contained' type='submit' onClick={hendleClick}>Отправить</Button>
</form>

}