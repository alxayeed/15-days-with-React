import React, { useState } from 'react'
import data from './Data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])



  const handleSubmit = (e) => {
    e.preventDefault()
    setText(data)
    console.log(text)
  }

  return (
    <section className="section-center">
      <h2>Make some lorem</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name="amount" id="amount"
          value={count} onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">Let's go!</button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key="index">{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;
