import React from "react";

export const MessageList = ({ messages }) => (
    messages.map(item => (
         <p key={item.id}>
          <span>{item.autor}: </span>
          <span>{item.text} </span>
        </p>
        
    )
    )
)