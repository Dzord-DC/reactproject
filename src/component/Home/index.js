import React, { useState } from "react";
//import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { logIn } from "../../services/firebase";
import { SignForm } from "../SignForm";


export const Home =()=> {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    //const dispatch= useDispatch();
    //const name = useSelector((state)=> state.profile.name)

    const hendleSignIn = async(email, pass)=>{
        setLoading(true)
        try{
           await logIn(email, pass)
        } catch(err){
            setError(err.message)
            console.warn(err)
        } finally {
            setLoading(false)
        }
    }
    
    return <>
    <h3>HOME</h3>
    {/*<h4> Привет {name}!</h4>*/}
    <SignForm onSubmit={hendleSignIn} error={error} loading={loading} />
    <Link to="/signup"> Sign up </Link>
    </>
}