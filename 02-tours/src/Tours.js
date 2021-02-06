import React from 'react'
import Tour from './Tour'

function Tours({ tours }) {
    return (
        <section>
            <div className="title">
                <h2>All Our Tours</h2>
                <div className="underline"></div>
                {tours.map(tour => {

                    return (<Tour key={tour.id} {...tour} />)
                })}

            </div>
        </section>

    )
}

export default Tours
