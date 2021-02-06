import React from 'react'

function Tour({ id, name, info, image, price }) {
    return (
        <article className="single-tour">
            <img src={image} alt={name} />

            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">$ {price}</h4>
                </div>
                <p style={{ textAlign: 'justify' }}> {info} </p>
            </footer>
        </article>
    )
}

export default Tour
