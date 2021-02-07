import React, { useState } from 'react'
import people from './Data'
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Review() {
    const [index, setIndex] = useState(0)
    const { name, job, image, text } = people[index]
    return (
        <div>
            <article className="review">
                <div className="img-container">
                    <img src={image} alt={name} className="person-img" />
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className="author">{name}</h4>
                <p className="job">{job}</p>
                <p className="info">{text}</p>

                <div className="btn-container">
                    <button className="prev-btn">
                        <FaChevronLeft />
                    </button>
                    <button className="next-btn">
                        <FaChevronRight />
                    </button>
                </div>
                <button className="random-btn">surprise me</button>
            </article>
        </div>
    )
}

export default Review
