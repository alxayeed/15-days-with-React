import React, { useState } from 'react'
import Catagory from "./Catagory";
import Menu from "./Menu";
import items from './Data'

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [catagories, setCatagories] = useState([])
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Menu items={menuItems} />
        <Catagory />
      </section>
    </main>
  );
}

export default App;
