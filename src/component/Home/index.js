import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from "../../store/profile/actions";


export const Home =()=> {
    const dispatch= useDispatch();
    const name = useSelector((state)=> state.profile.name)
    const hendleSignIn = ()=> {
        dispatch(signIn())
    }
    
    return <>
    <h3>HOME</h3>
    <h4> Привет {name}!</h4>
    <button onClick={hendleSignIn}> SINGIN </button>
    </>
}