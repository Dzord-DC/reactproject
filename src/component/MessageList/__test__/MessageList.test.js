import { render, screen } from "@testing-library/react";
import { MessageList } from "../MessageList";

describe('Test MessagesList',()=>{
    it('render Messages',()=> {
        render(<MessageList messages={[{id: 1,text: "Привет", autor:"Syleiman"}]}/>)
        const msgText = screen.getByText("Привет");
        const autorText = screen.getByText("Syleiman:")
        expect(msgText).toBeInTheDocument()
        expect(autorText).toBeInTheDocument()
    })
})