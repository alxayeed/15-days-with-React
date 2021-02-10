import React, { useState } from 'react'
import Catagory from "./Catagory";
import Menu from "./Menu";
import items from './Data'


const allCatagories = ['all', ...new Set(items.map((item) => item.category))]


function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [catagories, setCatagories] = useState([])

  const filterItems = (catagory) => {
    if (catagory === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === catagory);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Catagory filterItems={filterItems} allCatagories={allCatagories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
