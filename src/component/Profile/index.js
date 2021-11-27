import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chengeName, signOut, toggleCheckbox } from "../../store/profile/actions";

export const Profile =()=> {
    

    //const state = store.getState();
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const [value, setValue] = useState(state.profile.name) 

    const handleChangeText = (e) => {
        setValue(e.target.value)
    }
    
    const handleChange = () => {
        dispatch(toggleCheckbox)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(chengeName(value))
    }
    const hendleSingOut = ()=>{
        dispatch(signOut())
    }
    return (
    <>
    <h3>PROFILE</h3>
    <input type='checkbox' checked={state.checkbox} onChange={handleChange}/>
    <form onSubmit={handleSubmit}>
    <input type='text' value={value} onChange={handleChangeText}/>
    <input type='submit' />
    </form>
    <button onClick={hendleSingOut}>SINGOUT</button>
    </>)

}