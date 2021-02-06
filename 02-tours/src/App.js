import React, { useState, useEffect } from 'react'
import Loading from "./Loading";
import Tours from "./Tours";
const url = 'https://course-api.com/react-tours-project'

export const MyContext = React.createContext()






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

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => (tour.id !== id));
    setTour(newTours);
    console.log(id)
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        <div className="underline"></div>
        <button onClick={() => fetchTours()} className="btn">Refresh</button>
      </div>
    </main>
  }

  return (
    <div>
      <h2 className="main-title">Tour Around the world</h2>
      <main>
        <MyContext.Provider value={removeTour}>
          <Tours tours={tours} />
        </MyContext.Provider>
      </main>
    </div>
  );
}

export default App;
