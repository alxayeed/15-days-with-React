import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {

  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h2>Birthday Reminder</h2>
        <h3> {people.length} people have Birthday today</h3>
        <List peoples={people} />
        <button onClick={() => setPeople([])}>Clear all</button>


      </section>
    </main>
  );
}

export default App;
