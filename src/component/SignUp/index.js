import { useState } from "react"
import { Link } from "react-router-dom"
import { signUp } from "../../services/firebase"
import { SignForm } from "../SignForm"

export const SignUp = () =>{
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const hendleSignUp = async(email, pass)=>{
        setLoading(true)
        try{
           await signUp(email, pass);
        } catch(err){
            console.warn(err);
            setError(err.message);
        } finally {
            setLoading(false)
        }
    }
    return ( <>
        <SignForm onSubmit={hendleSignUp} error={error} loading={loading}/>
        <Link to="/">Sing in</Link>
    </>)
}