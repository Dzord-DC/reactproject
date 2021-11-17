import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";

export const Profile =()=> {

    //const state = store.getState();
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    
    const hendleChenge = () => {
        dispatch(toggleCheckbox)
    }
    return (
    <>
    <h3>PROFILE</h3>
    <input type='checkbox' checked={state.checkbox} onChange={hendleChenge}/>
    <span> {state.name} </span>
    </>)

}