import React from 'react';

function List({ peoples }) {

    return (
        <div>
            {/* <h2>I am the people list</h2> */}

            {peoples.map((p) => {
                const { id, name, age, image } = p
                return <article key={id} className='person'>
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
                </article>
            })}

            {/* {peoples.map(people =>
                // <h4>{people.name}</h4>
                
            )} */}
        </div>
    )
}

export default List
