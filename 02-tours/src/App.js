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

  return (
    <div>


      <main>
        <header className="title">
          <h1>Tour Project</h1>
          <MyContext.Provider value={removeTour}>
            <Tours tours={tours} />
          </MyContext.Provider>
        </header>
      </main>
    </div>
  );
}

export default App;
