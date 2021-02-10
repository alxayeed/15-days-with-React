import React from 'react'

const Catagory = ({ filterItems, allCatagories }) => {
    console.log(allCatagories);
    return (
        <div className="btn-container" >
            {allCatagories.map((catagory, index) => {
                return <button className="filter-btn" key={index} onClick={() => filterItems(catagory)}>
                    {catagory}
                </button>
            })}
        </div >
    )
}

export default Catagory
