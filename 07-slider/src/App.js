import React, { useState, useEffect } from 'react'
import data from './Data'
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { ImQuotesRight } from "react-icons/im";


function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)



  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }

          return <article key={id} className={position}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <ImQuotesRight className="icon" />
          </article>
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <BiChevronLeftCircle />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <BiChevronRightCircle />
        </button>
      </div>
    </section>
  );
}

export default App;
