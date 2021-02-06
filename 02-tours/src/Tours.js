import React from 'react'
import Tour from './Tour'

function Tours({ tours }) {
    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
                {/* {(tours.length === 0) ? <h2>No tours left</h2> : <h2>All Our Tours</h2>} */}



                {tours.map(tour => {

                    return (<Tour key={tour.id} {...tour} />)
                })}

            </div>
        </section>

    )
}

export default Tours
