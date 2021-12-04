import { render, screen } from "@testing-library/react";
import { Message } from "../Message";

describe('Message test', () => {
    it("render texst", ()=> {
        render(<Message message={'text'} />)

        const msgText = screen.getByText('text')

        expect(msgText).toBeInTheDocument()
    })

    it('matches snapshot', ()=> {
        const message = render(<Message message={'text'} />)
        expect(message).toMatchSnapshot()
    })
})