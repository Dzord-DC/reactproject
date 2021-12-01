import { onValue, set } from "@firebase/database";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut, userRef } from "../../services/firebase";
import { chengeName, toggleCheckbox } from "../../store/profile/actions";

export const Profile =()=> {
    

    //const state = store.getState();
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const [value, setValue] = useState(state.profile.name) 

    useEffect(()=>{
        const unsubscribe = onValue(userRef, (snapshot)=>{
            const userData = snapshot.val()
            dispatch(chengeName(userData?.name || ''))
        })
        return unsubscribe
    }, []);

    const handleChangeText = (e) => {
        setValue(e.target.value)
    }
    
    const handleChange = () => {
        dispatch(toggleCheckbox)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
       // dispatch(chengeName(value))
       set(userRef, {name: value} )
    }
    const hendleSignOut = async()=>{
        try{
           await logOut()
        }catch(err){
            console.warn(err)
        }        
    }
    return (
    <>
    <h3>PROFILE</h3>
    <input type='checkbox' checked={state.checkbox} onChange={handleChange}/>
    <form onSubmit={handleSubmit}>
    <input type='text' value={value} onChange={handleChangeText}/>
    <input type='submit' />
    </form>
    <button onClick={hendleSignOut}>SING OUT</button>
    </>)

}