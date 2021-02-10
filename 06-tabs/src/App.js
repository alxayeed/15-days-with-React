import React, { useState, useEffect } from 'react'
import { GiMoebiusTriangle } from 'react-icons/gi'
import logo from './logo.svg';
const url = 'https://course-api.com/react-tabs-project'



function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = response.json()
    setJobs(newJobs);
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  console.log(jobs, loading)

  if (loading) {
    return (
      <section className="section loading">
        <section className="section loading">
          <img src={logo} className="" alt="logo" />
        </section>
      </section>
    )
  }

  return (
    <div className="">
      <header className="">
        <h1>Jobs</h1>

      </header>
    </div>
  );
}

export default App;
