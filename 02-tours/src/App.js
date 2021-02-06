import Loading from "./Loading";
import Tours from "./Tours";
import React, { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  return (
    <div className="">
      <header className="">
        <h1>Tour Project</h1>
        <Loading />
        <Tours />
      </header>
    </div>
  );
}

export default App;
