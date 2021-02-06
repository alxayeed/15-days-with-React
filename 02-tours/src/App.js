import React, { useState, useEffect } from 'react'
import Loading from "./Loading";
import Tours from "./Tours";
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTour] = useState([])

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTour(tours)
      setLoading(false)
    } catch (error) {

      console.log(`The error is: ${error}`);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <header className="title">
        <h1>Tour Project</h1>
        <Tours tours={tours} />
      </header>
    </main>
  );
}

export default App;
