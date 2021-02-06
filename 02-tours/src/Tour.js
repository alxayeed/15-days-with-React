import React, { useState, useContext } from 'react'
import { MyContext } from "./App"



function Tour({ id, name, info, image, price }) {
    const [readMore, setReadMore] = useState(true)

    const removeTour = useContext(MyContext)

    return (
        <article className="single-tour">
            <img src={image} alt={name} />

            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">$ {price}</h4>
                </div>

                <p style={{ textAlign: 'justify' }}>
                    {readMore ? `${info.substring(0, 200)}...` : info}

                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show more' : 'Show less'}
                    </button>
                </p>

                <button onClick={() => removeTour(id)} className="delete-btn" > Not interested </button>
            </footer>
        </article >
    )
}

export default Tour
