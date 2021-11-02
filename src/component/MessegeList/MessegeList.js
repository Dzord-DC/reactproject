import React from "react";

export const MessegeList = ({ messeges }) => (
    messeges.map(item => (
        
         <p key={item.id}>
          <span>{item.autor}: </span>
          <span>{item.text} </span>
        </p>
        
    )
    )
)