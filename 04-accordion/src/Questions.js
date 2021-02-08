import React, { useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function SingleQuestion(question) {
    const [toggle, setToggle] = useState(false)
    return (
        <article className="question">
            <header>
                <h4>{question.title}</h4>
                {toggle === true ?
                    <button onClick={() => setToggle(!toggle)} className="btn"><AiOutlineMinusCircle /></button> :
                    <button onClick={() => setToggle(!toggle)} className="btn"><AiOutlinePlusCircle /></button>
                }
            </header>
            {toggle === true ? <p>{question.info}</p> : null}
        </article>
    )
}

export default SingleQuestion
