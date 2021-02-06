import React from 'react'
import logo from './loading.svg'

function Loading() {
    return (
        <div className="loading">
            <img src={logo} alt="Loading" />;
        </div>
    )
}

export default Loading
