import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

function SingleQuestion(question) {
    return (
        <article className="question">
            <header>
                <h4>{question.title}</h4>
                <button className="btn"><AiOutlinePlusCircle /></button>
            </header>
            <p>{question.info}</p>
        </article>
    )
}

export default SingleQuestion
