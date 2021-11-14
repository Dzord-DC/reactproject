import React from "react";
import { useSelector } from "react-redux";
import { store } from "../../store";
import { toggleCheckbox } from "../../store/profile/actions";

export const Profile =()=> {

    //const state = store.getState();
    const state = useSelector(state => state);
    
    console.log(state);

    const hendleChenge = () => {
        store.dispatch(toggleCheckbox)
    }
    return (
    <>
    <h3>PROFILE</h3>
    <input type='checkbox' checked={state.checkbox} onChange={hendleChenge}/>
    <span> {state.name} </span>
    </>)

}